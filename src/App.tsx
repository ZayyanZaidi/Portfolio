import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GitHubUser, GitHubRepo } from './types';

export default function App() {
  // Theme State (Default to Dark Mode since it's a professional developer portfolio!)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // default dark
  });

  // GitHub integration state
  const [githubUser, setGithubUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Sync Dark Mode state to root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Fetch GitHub profile data dynamically
  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      try {
        // Fetch public user stats
        const userRes = await fetch('https://api.github.com/users/ZayyanZaidi');
        if (userRes.ok) {
          const userData = await userRes.json();
          setGithubUser(userData);
        }

        // Fetch repositories (sorted by updated, max 100)
        const reposRes = await fetch('https://api.github.com/users/ZayyanZaidi/repos?sort=updated&per_page=100');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          // Filter out forks so we highlight original creations
          const originalRepos = reposData.filter((repo: any) => !repo.fork);
          setRepos(originalRepos);
        }
      } catch (err) {
        console.error('Error fetching GitHub portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div
      id="app-container"
      className="min-h-screen bg-[#fafaf9] dark:bg-[#09090b] text-zinc-900 dark:text-slate-200 font-sans transition-colors duration-300 antialiased selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:bg-indigo-600/30 dark:selection:text-slate-200"
    >
      {/* Decorative Top-right Ambient Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Main Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Structured Sections */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero githubUser={githubUser} loading={loading} />

        {/* Story Section */}
        <About githubUser={githubUser} />

        {/* GitHub stats and dynamic analysis */}
        <Stats githubUser={githubUser} repos={repos} loading={loading} />

        {/* Tab-driven Curated Featured & Dynamic Repositories registries */}
        <Projects repos={repos} loading={loading} />

        {/* Technical proficiency cards */}
        <Skills />

        {/* Direct Contact links (Whatsapp / Email) */}
        <Contact />
      </main>

      {/* Copyright footer */}
      <Footer />
    </div>
  );
}
