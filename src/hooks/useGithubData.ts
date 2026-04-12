import { useState, useEffect } from 'react';

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  updated_at: string;
  language: string | null;
}

export interface GithubData {
  monthsExperience: number;
  publicReposCount: number;
  repos: GithubRepo[];
  isLoading: boolean;
  error: string | null;
}

export function useGithubData(username: string): GithubData {
  const [data, setData] = useState<GithubData>({
    monthsExperience: 5, // Default fallback
    publicReposCount: 3, // Default fallback
    repos: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubData() {
      try {
        // Fetch User Data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('Failed to fetch user data');
        const userData = await userRes.json();

        // Calculate Months of Experience
        const joinDate = new Date(userData.created_at);
        const now = new Date();
        const monthsExperience = (now.getFullYear() - joinDate.getFullYear()) * 12 + (now.getMonth() - joinDate.getMonth());

        // Fetch Repositories
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos data');
        const reposData: GithubRepo[] = await reposRes.json();

        // Optional: Filter out forks if desired, or just use all
        const originalRepos = reposData.filter((repo: any) => !repo.fork);

        if (isMounted) {
          setData({
            monthsExperience: Math.max(1, monthsExperience),
            publicReposCount: userData.public_repos,
            repos: originalRepos,
            isLoading: false,
            error: null,
          });
        }
      } catch (err: any) {
        if (isMounted) {
          setData(prev => ({ ...prev, isLoading: false, error: err.message }));
        }
      }
    }

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return data;
}
