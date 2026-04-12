# GitHub Integration Guide for Your Portfolio

This document explains how your portfolio website automatically synchronizes with your GitHub account, and exactly what you need to do when you create new projects.

## 🤖 1. What Happens Automatically

Because your portfolio is directly integrated with the live GitHub API for your user account (`driax69k`), your website will run on "autopilot":

- **Months Experience (Hero Section):** The website automatically calculates how many months have passed since you joined GitHub (July 2025). This number will increase on its own as time passes.
- **Projects Count (Hero Section):** Every time you make a repository "Public" on your GitHub profile, the counter will automatically increase.
- **My Work (Projects Section):** Any public repository you have will automatically appear as a Project Card on your website. 
  - The **Title**, **Description**, **Source Code Link**, and **Tags** automatically sync from GitHub.
  - If you change a description on GitHub, it instantly updates on your portfolio upon refresh!

---

## 🖼️ 2. Adding Custom Images (The Only Manual Step!)

By default, any new project you create on GitHub will display a generic "No Image Yet" placeholder on your portfolio. If you want to add your custom UI screens or images, follow these steps:

### Step 1: Upload Your Image
Place your custom image (e.g., `.png`, `.jpg`) into your `src/assets/` folder.

### Step 2: Open `Projects.tsx`
Open the file located at `src/sections/Projects.tsx` in your code editor.

### Step 3: Import the Image
At the very top of the file, add an import line for your new image:
```tsx
import myNewProjectImg from '../assets/myNewImage.png';
```

### Step 4: Map the Image to Your GitHub Repo
Scroll down slightly to find the `projectOverrides` object. Add a new line matching your precise repository name from GitHub, and map it to the image you just imported. You can also define an optional category tag (e.g., 'Web Application'):

```tsx
const projectOverrides: Record<string, { image: string, category: string }> = {
  // Your existing projects...
  "Go-Green-Mobility": { image: ecoracer, category: "Web Application" },
  "CCS-1500-PROJECT": { image: inventory, category: "Application" },
  
  // ADD YOUR NEW PROJECT HERE:
  "My-Awesome-GitHub-Repo-Name": { image: myNewProjectImg, category: "Web Application" }
};
```

Save the file. Your portfolio will now render your beautiful custom image over the data fetched from GitHub!

---

## 🛠️ Frequently Asked Questions

**Q: I created a project on GitHub but it's not showing up on my portfolio.**
A: Ensure the repository is set to **Public** on GitHub. If it is private, the GitHub API will not be able to fetch it without an authentication token.

**Q: How do I change the tools/tags showing on my project card?**
A: Go to your project repository on GitHub. Click the gear icon (⚙️) next to "About", and add your tags to the **Topics** section. Your website will automatically pull them. If there are no topics, it will default to the primary programming language!
