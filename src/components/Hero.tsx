import { motion } from 'motion/react';
import { ArrowRight, Github, Mail, MessageSquare, Terminal, ExternalLink, Linkedin } from 'lucide-react';
import { GitHubUser } from '../types';

interface HeroProps {
  githubUser: GitHubUser | null;
  loading: boolean;
}

export default function Hero({ githubUser, loading }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const codeSnippet = `const developer = {
  name: 'Zayyan Zaidi',
  role: 'Full-Stack Software Engineer',
  skills: ['TypeScript', 'React', 'Node.js', 'Express', 'TailwindCSS'],
  focus: 'Building scalable, high-performance web applications',
  openToWork: true,
  contact: () => {
    whatsapp('+923187974475');
    email('zayyanzaidi57@gmail.com');
  }
};`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#fafaf9] dark:bg-[#09090b] transition-colors duration-300"
    >
      {/* Subtle Dot Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#8080800b_1px,transparent_1px)] dark:bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-400 dark:bg-indigo-500 rounded-full glow-primary" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-violet-400 dark:bg-violet-500 rounded-full glow-primary" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Badge */}
            <motion.div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="tracking-wide uppercase text-[10px] font-bold">Available for Freelance & Full-time Roles</span>
            </motion.div>

            {/* Display Title */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 pb-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-60 blur-xs animate-pulse" />
                  <img
                    id="hero-profile-picture"
                    src={githubUser?.avatar_url || "https://github.com/ZayyanZaidi.png"}
                    alt="Syed Zayyan Hussain Zaidi Professional Portrait"
                    className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white dark:border-neutral-900 object-cover shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-900 flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </div>
                </div>
                <div>
                  <span
                    id="hero-greeting"
                    className="text-indigo-600 dark:text-indigo-400 font-mono text-xs tracking-widest font-bold uppercase block"
                  >
                    Hi, my name is Zayyan Zaidi —
                  </span>
                  <p className="text-[10px] text-neutral-400 dark:text-slate-500 font-mono font-semibold uppercase mt-0.5">
                    Karachi, PK • Software Engineering Undergrad
                  </p>
                </div>
              </motion.div>
              <motion.h1
                id="hero-heading"
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-neutral-900 dark:text-white tracking-tighter leading-[0.95]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                CRAFTING <br />
                <span className="font-editorial italic font-normal text-indigo-600 dark:text-indigo-400">DIGITAL</span> <br />
                SYSTEMS.
              </motion.h1>
              <motion.h2
                id="hero-subheading"
                className="text-xl sm:text-2xl font-display font-medium text-neutral-600 dark:text-slate-400 tracking-tight"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Software Engineer focused on high-performance web architecture & scalable servers.
              </motion.h2>
            </div>

            {/* Bio Summary */}
            <motion.p
              id="hero-description"
              className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-xl font-sans leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {githubUser?.bio ? (
                githubUser.bio
              ) : (
                "A full-stack software engineer dedicated to crafting exceptionally clean web interfaces and highly scalable servers. Specializing in modern React, Tailwind CSS, and Node.js solutions integrated seamlessly with open-source ecosystems."
              )}
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              id="hero-ctas"
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                id="hero-cta-projects"
                onClick={() => handleScrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-lg hover:shadow-indigo-600/20 transition-all cursor-pointer group text-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => handleScrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-slate-800 font-semibold rounded-xl text-sm transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Micro Social Indicators */}
            <motion.div
              id="hero-socials"
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-neutral-500 dark:text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                id="hero-social-linkedin"
                href="https://linkedin.com/in/zayyan-zaidi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-neutral-300 dark:text-slate-800">|</span>
              <a
                id="hero-social-github"
                href="https://github.com/ZayyanZaidi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-neutral-300 dark:text-slate-800">|</span>
              <a
                id="hero-social-whatsapp"
                href="https://wa.me/923187974475"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Code Window / Graphic */}
          <motion.div
            id="hero-graphics-column"
            className="lg:col-span-5 relative w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Ambient Background Circle */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-20 blur-xl animate-pulse" />

            {/* Terminal Window Card */}
            <div className="relative w-full max-w-md bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden font-mono text-xs text-neutral-300">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-neutral-500 font-medium">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>zayyan-dev.ts</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* Code Snippet */}
              <div className="p-5 overflow-x-auto leading-relaxed text-neutral-400 select-none">
                <pre className="text-[11px] sm:text-xs">
                  <code>
                    <span className="text-pink-500">const</span>{' '}
                    <span className="text-blue-400">developer</span> = &#123;
                    {'\n'}  <span className="text-purple-400">name</span>:{' '}
                    <span className="text-amber-300">'Zayyan Zaidi'</span>,
                    {'\n'}  <span className="text-purple-400">role</span>:{' '}
                    <span className="text-amber-300">'Full-Stack Software Engineer'</span>,
                    {'\n'}  <span className="text-purple-400">skills</span>: [
                    <span className="text-amber-300">'TS'</span>,{' '}
                    <span className="text-amber-300">'React'</span>,{' '}
                    <span className="text-amber-300">'Node'</span>,{' '}
                    <span className="text-amber-300">'Tailwind'</span>],
                    {'\n'}  <span className="text-purple-400">openToWork</span>:{' '}
                    <span className="text-emerald-400">true</span>,
                    {'\n'}  <span className="text-purple-400">location</span>:{' '}
                    <span className="text-amber-300">'Pakistan'</span>,
                    {'\n'}  <span className="text-purple-400">interests</span>: [
                    <span className="text-amber-300">'OpenSource'</span>,{' '}
                    <span className="text-amber-300">'AI'</span>]
                    {'\n'}&#125;;
                  </code>
                </pre>
              </div>

              {/* Live GitHub Card Overlay inside Terminal (Elite Craft touch) */}
              <div className="p-4 mx-4 mb-4 bg-neutral-950/60 rounded-xl border border-neutral-800/80 flex items-center gap-3">
                {loading ? (
                  <div className="flex items-center gap-3 w-full animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-neutral-800" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-3 bg-neutral-800 rounded w-1/3" />
                      <div className="h-2 bg-neutral-800 rounded w-1/2" />
                    </div>
                  </div>
                ) : githubUser ? (
                  <>
                    <img
                      id="hero-avatar"
                      src={githubUser.avatar_url}
                      alt="Zayyan Zaidi GitHub Avatar"
                      className="w-10 h-10 rounded-full border border-neutral-800 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-white truncate">
                          {githubUser.name || githubUser.login}
                        </span>
                        <a
                          id="hero-github-link"
                          href={githubUser.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-indigo-400 hover:underline flex items-center gap-0.5 font-bold"
                        >
                          <span>Github</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                      <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                        {githubUser.public_repos} public repos • {githubUser.followers} followers
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-indigo-400 font-bold border border-neutral-700">
                      ZZ
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-white font-editorial italic">Zayyan Zaidi</span>
                        <a
                          id="hero-github-fallback-link"
                          href="https://github.com/ZayyanZaidi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-indigo-400 hover:underline flex items-center gap-0.5"
                        >
                          <span>GitHub</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                      <p className="text-[10px] text-neutral-500 mt-0.5">
                        Active open source developer & engineer
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
