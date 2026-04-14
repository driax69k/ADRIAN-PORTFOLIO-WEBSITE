import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, Loader2 } from 'lucide-react';
import ecoracer from '../assets/ecoracer.png';
import inventory from '../assets/inventory.png';
import calculator from '../assets/calculator.png';
import { useGithubData } from '../hooks/useGithubData';
import portfolio from '../assets/portfolio.png';

// You can add overriding details here for any GitHub repository!
// Just add its exact name from GitHub as the key.
const projectOverrides: Record<string, { image: string, category: string }> = {
  "Go-Green-Mobility": { image: ecoracer, category: "Web Application" },
  "CCS-1500-PROJECT": { image: inventory, category: "Application" },
  "Adrian-s-Project-Calculator": { image: calculator, category: "Web Application" },
  "AC-Login-System": { image: "https://placehold.co/600x400/111827/06b6d4?text=AC+Login+System", category: "Web Application" },
  "ADRIAN-PORTFOLIO-WEBSITE": { image: portfolio, category: "Web Application" },
};

const DEFAULT_IMAGE = "https://placehold.co/600x400/111827/444?text=No+Image+Yet";

type ProjectItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  github: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const { repos, isLoading } = useGithubData('driax69k');

  const dynamicProjects: ProjectItem[] = useMemo(() => {
    return repos.map(repo => {
      const override = projectOverrides[repo.name];
      return {
        id: repo.id,
        title: repo.name.replace(/-/g, ' '),
        category: override?.category || 'Project',
        image: override?.image || DEFAULT_IMAGE,
        description: repo.description || 'No description provided.',
        tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || 'Code'],
        github: repo.html_url
      };
    });
  }, [repos]);

  const filteredProjects = dynamicProjects.filter(p =>
    activeFilter === 'All' ? true : p.category.includes(activeFilter) || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4"
            >
              My Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Selected <span className="text-gradient">Projects</span>
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {['All', 'Web Application', 'Application', 'Project'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full glass text-sm font-medium transition-all ${activeFilter === filter ? 'bg-primary/20 text-primary' : 'hover:bg-primary/10 hover:text-white'
                  }`}
              >
                {filter === 'Web Application' ? 'Web' : filter}
              </button>
            ))}
          </motion.div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass p-2">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-primary font-mono text-xs uppercase tracking-widest mb-2">{project.category}</p>
                        <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-bg-dark/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass p-8 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">{selectedProject.category}</p>
                  <h4 className="text-4xl font-display font-bold">{selectedProject.title}</h4>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <h5 className="text-xl font-bold mb-4">Project Overview</h5>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-bold mb-4">Technologies</h5>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 glass rounded-xl text-xs font-medium">{tag}</span>
                    ))}
                  </div>

                  <h5 className="text-lg font-bold mb-4">Links</h5>
                  <div className="flex flex-col gap-3">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6 py-3 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                      Source Code <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
