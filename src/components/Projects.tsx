import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Search, Star, GitFork, SlidersHorizontal, Layers, FolderGit2 } from 'lucide-react';
import { GitHubRepo, FeaturedProject } from '../types';

interface ProjectsProps {
  repos: GitHubRepo[];
  loading: boolean;
}

export default function Projects({ repos, loading }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<'featured' | 'github'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // 1. Curated Featured Projects
  const featuredProjects: FeaturedProject[] = [
    {
      id: 'p1',
      title: 'LuckyBox — Full-Stack E-commerce Mystery Box',
      description: 'A complete full-stack e-commerce application featuring secure user authentication, catalog explorer, cart management, and order processing workflows.',
      detailedDescription: 'Designed and developed modular RESTful APIs and optimized MongoDB schemas. Implemented end-to-end checkout transactions, user session tokens, and strict server-side schema data validations.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
      githubUrl: 'https://github.com/ZayyanZaidi',
      liveUrl: '#',
      category: 'Full-Stack',
      stats: { stars: 12, forks: 4 },
      featured: true,
    },
    {
      id: 'p2',
      title: 'Insurance Data Management System',
      description: 'A secure desktop-based insurance administration application featuring database integrity, multi-user privilege levels, and role-based access control.',
      detailedDescription: 'Designed structured relational database schemas and implemented comprehensive CRUD interfaces. Optimized SQL query performance and engineered resilient transactional integrity protections.',
      techStack: ['Python', 'Tkinter', 'MS Access', 'Relational SQL'],
      githubUrl: 'https://github.com/ZayyanZaidi',
      liveUrl: '#',
      category: 'Mobile & Tools',
      stats: { stars: 8, forks: 2 },
      featured: true,
    },
    {
      id: 'p3',
      title: 'Intelligent Trash Sorting System',
      description: 'An advanced priority-driven simulated sorting engine using optimized circular double-ended queues (deques).',
      detailedDescription: 'Engineered clean C++ class abstractions to simulate circular double-ended queue mechanisms. Handled underflow and overflow conditions, implemented custom priority sorting, and optimized performance bounds.',
      techStack: ['C++', 'Algorithms', 'Data Structures', 'System Design'],
      githubUrl: 'https://github.com/ZayyanZaidi',
      liveUrl: '#',
      category: 'AI & ML',
      stats: { stars: 10, forks: 3 },
      featured: true,
    }
  ];

  // 2. Compute dynamic language filters for live GitHub repos
  const gitHubLanguages = useMemo(() => {
    if (!repos) return ['All'];
    const langs = new Set<string>();
    repos.forEach((repo) => {
      if (repo.language) langs.add(repo.language);
    });
    return ['All', ...Array.from(langs).sort()];
  }, [repos]);

  // 3. Filter live GitHub repositories based on query & selected language
  const filteredGitHubRepos = useMemo(() => {
    if (!repos) return [];
    return repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (repo.topics && repo.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesLanguage = selectedLanguage === 'All' || repo.language === selectedLanguage;

      return matchesSearch && matchesLanguage;
    });
  }, [repos, searchQuery, selectedLanguage]);

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#09090b] border-t border-neutral-200 dark:border-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            className="text-xs font-semibold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-mono uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.h2>
          <motion.h3
            className="mt-2 text-3xl sm:text-4xl font-editorial italic font-normal text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Showcase Projects
          </motion.h3>
          <motion.div
            className="mt-4 h-[1px] w-12 bg-indigo-500 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-xl bg-neutral-100 dark:bg-[#111115] border border-neutral-200/50 dark:border-slate-800/60 flex gap-2">
            <button
              id="tab-featured-projects"
              onClick={() => setActiveTab('featured')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'featured'
                  ? 'bg-white dark:bg-neutral-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Featured Showcase</span>
            </button>
            <button
              id="tab-github-repos"
              onClick={() => setActiveTab('github')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'github'
                  ? 'bg-white dark:bg-neutral-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Live GitHub Repos</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tab Render */}
        <AnimatePresence mode="wait">
          {activeTab === 'featured' ? (
            /* FEATURED CURATED PROJECTS */
            <motion.div
              key="featured-tab"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  id={`project-featured-${project.id}`}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-[#fafaf9] dark:bg-[#111115] border border-neutral-200/40 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all relative group overflow-hidden"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  {/* Category Stamp */}
                  <div className="absolute top-0 right-0 p-4">
                    <span className="text-[10px] font-bold font-mono uppercase px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10">
                      {project.category}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-display font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors pr-24">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-400 font-sans leading-relaxed">
                      {project.description}
                    </p>

                    {/* Detailed sub-bullet */}
                    <div className="pl-3 border-l-2 border-indigo-500 text-xs text-neutral-500 dark:text-slate-400 font-sans italic leading-relaxed py-0.5">
                      {project.detailedDescription}
                    </div>

                    {/* Tech Stacks */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-slate-800/60 text-neutral-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Metrics row */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-200/50 dark:border-slate-800/50">
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                      {project.stats?.stars && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-500" />
                          <span>{project.stats.stars}</span>
                        </span>
                      )}
                      {project.stats?.forks && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{project.stats.forks}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        id={`project-featured-${project.id}-source`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-slate-800 text-neutral-600 dark:text-neutral-300 transition-all shadow-sm hover:shadow"
                        title="GitHub Codebase"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        id={`project-featured-${project.id}-live`}
                        href={project.liveUrl === '#' ? 'https://wa.me/923187974475' : project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                      >
                        <span>Demo / Inquire</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* GITHUB REAL DYNAMIC REPOS */
            <motion.div
              key="github-tab"
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Search & Language Filters bar */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-neutral-50 dark:bg-[#111115] p-4 rounded-2xl border border-neutral-200/40 dark:border-slate-800/60 w-full">
                {/* Search */}
                <div className="relative w-full md:max-w-xs">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400" />
                  <input
                    id="repo-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search repositories..."
                    className="pl-10 pr-4 py-2.5 w-full rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-slate-800 font-sans text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
                  <SlidersHorizontal className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  <div className="flex gap-1.5">
                    {gitHubLanguages.slice(0, 5).map((lang) => (
                      <button
                        key={lang}
                        id={`filter-lang-${lang}`}
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex-shrink-0 border ${
                          selectedLanguage === lang
                            ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30'
                            : 'bg-white dark:bg-neutral-900 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 border-neutral-200 dark:border-slate-800'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Repos Grid */}
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#111115] border border-neutral-200/40 dark:border-slate-800/60 animate-pulse h-48"
                    />
                  ))}
                </div>
              ) : filteredGitHubRepos.length === 0 ? (
                <div className="text-center py-16 rounded-2xl bg-neutral-50 dark:bg-[#111115] border border-neutral-200/30 dark:border-slate-800/60">
                  <FolderGit2 className="w-10 h-10 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
                  <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    No public repositories found
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Try altering your search text or language filters.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGitHubRepos.map((repo, idx) => (
                    <motion.div
                      key={repo.id}
                      id={`repo-card-${repo.id}`}
                      className="flex flex-col justify-between p-5 rounded-2xl bg-[#fafaf9] dark:bg-[#111115] border border-neutral-200/40 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all group overflow-hidden"
                      whileHover={{ y: -4 }}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.4) }}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="text-sm font-bold font-mono text-neutral-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {repo.name}
                          </h4>
                          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-neutral-200/60 dark:bg-slate-800/60 text-neutral-500">
                            {repo.size} KB
                          </span>
                        </div>

                        <p className="text-xs text-neutral-500 dark:text-slate-400 font-sans line-clamp-3 leading-relaxed min-h-12">
                          {repo.description || 'No description provided for this GitHub repository.'}
                        </p>

                        {/* Topics */}
                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <span
                                key={topic}
                                className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-indigo-500/5 text-indigo-600 dark:text-indigo-400"
                              >
                                #{topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Footer information */}
                      <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-neutral-200/50 dark:border-slate-800/80">
                        <span className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-neutral-500">
                          {repo.language && (
                            <>
                              <span className="w-2 h-2 rounded-full bg-indigo-400" />
                              <span>{repo.language}</span>
                            </>
                          )}
                        </span>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2.5 text-[11px] font-mono text-neutral-400 pr-1.5">
                            <span className="flex items-center gap-0.5">
                              <Star className="w-3 h-3 text-amber-400" />
                              <span>{repo.stargazers_count}</span>
                            </span>
                            <span className="flex items-center gap-0.5">
                              <GitFork className="w-3 h-3 text-indigo-400" />
                              <span>{repo.forks_count}</span>
                            </span>
                          </div>

                          <a
                            id={`repo-source-link-${repo.id}`}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-slate-800 text-neutral-600 dark:text-neutral-400 shadow-sm"
                            title="GitHub Code"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
