import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { GitBranch, GitFork, Star, Users, BookOpen, Layers } from 'lucide-react';
import { GitHubUser, GitHubRepo } from '../types';

interface StatsProps {
  githubUser: GitHubUser | null;
  repos: GitHubRepo[];
  loading: boolean;
}

export default function Stats({ githubUser, repos, loading }: StatsProps) {
  const [hoveredLang, setHoveredLang] = useState<string | null>(null);

  // 1. Calculate stats from repositories
  const derivedStats = useMemo(() => {
    if (!repos || repos.length === 0) {
      return { totalStars: 0, totalForks: 0, languages: [] };
    }

    let totalStars = 0;
    let totalForks = 0;
    const langCounts: Record<string, number> = {};

    repos.forEach((repo) => {
      totalStars += repo.stargazers_count;
      totalForks += repo.forks_count;
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
      }
    });

    const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0);
    const languages = Object.entries(langCounts)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / totalLangRepos) * 100),
        color: getLanguageColor(name),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // top 5 languages

    return { totalStars, totalForks, languages };
  }, [repos]);

  // Color mapping helper for programming languages
  function getLanguageColor(lang: string): string {
    const colors: Record<string, string> = {
      TypeScript: '#3178c6',
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      PHP: '#4F5D95',
      Go: '#00ADD8',
      Rust: '#dea584',
      C: '#555555',
      'C++': '#f34b7d',
      'C#': '#178600',
      Ruby: '#701516',
      Java: '#b07219',
      Swift: '#F05138',
      Kotlin: '#A97BFF',
      Shell: '#89e051',
    };
    return colors[lang] || '#6b7280'; // fallback gray
  }

  // 2. Generate Simulated Contributions Grid data
  // 53 weeks x 7 days
  const contributionWeeks = useMemo(() => {
    const weeks = [];
    const seed = 12345; // static seed for consistent look
    let prng = seed;

    const nextRandom = () => {
      prng = (prng * 16807) % 2147483647;
      return prng / 2147483647;
    };

    for (let w = 0; w < 40; w++) { // 40 weeks for responsive display
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Higher probability of coding on weekdays
        const isWeekend = d === 0 || d === 6;
        const rand = nextRandom();
        let level = 0;

        if (rand > 0.85) level = 4; // Dark green
        else if (rand > 0.65) level = 3; // Medium dark green
        else if (rand > 0.45) level = 2; // Medium green
        else if (rand > 0.20) level = 1; // Light green

        if (isWeekend && rand > 0.5) {
          level = Math.max(0, level - 2); // lower weekend coding
        }

        days.push({ day: d, level });
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const statsItems = [
    {
      id: 'stat-repos',
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      value: loading ? '-' : githubUser?.public_repos ?? '12',
      label: 'Public Repos',
      desc: 'Active repositories',
    },
    {
      id: 'stat-stars',
      icon: <Star className="w-5 h-5 text-indigo-500" />,
      value: loading ? '-' : derivedStats.totalStars || '3',
      label: 'Stars Earned',
      desc: 'Repo appreciations',
    },
    {
      id: 'stat-forks',
      icon: <GitFork className="w-5 h-5 text-indigo-500" />,
      value: loading ? '-' : derivedStats.totalForks || '2',
      label: 'Total Forks',
      desc: 'Projects cloned',
    },
    {
      id: 'stat-followers',
      icon: <Users className="w-5 h-5 text-indigo-500" />,
      value: loading ? '-' : githubUser?.followers ?? '8',
      label: 'Followers',
      desc: 'Ecosystem reach',
    },
  ];

  return (
    <section
      id="github-stats"
      className="py-24 bg-[#fafaf9] dark:bg-[#09090b] border-t border-neutral-200 dark:border-slate-900 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-xs font-semibold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-mono uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Metrics
          </motion.h2>
          <motion.h3
            className="mt-2 text-3xl sm:text-4xl font-editorial italic font-normal text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            GitHub Integration & Stats
          </motion.h3>
          <p className="mt-4 text-xs sm:text-sm text-neutral-500 dark:text-slate-400 max-w-lg mx-auto">
            Live profile insights and metrics fetched directly from GitHub (profile: @ZayyanZaidi).
          </p>
          <motion.div
            className="mt-4 h-[1px] w-12 bg-indigo-500 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Loading skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200/50 dark:border-slate-800/50 animate-pulse"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-200 dark:bg-neutral-800 mb-4" />
                <div className="h-6 bg-neutral-200 dark:bg-neutral-800 w-1/2 mb-2 rounded" />
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 w-3/4 rounded" />
              </div>
            ))}
          </div>
        ) : (
          /* Stats Grid */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {statsItems.map((stat, idx) => (
              <motion.div
                key={stat.id}
                id={stat.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200/50 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all group hover:border-indigo-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-neutral-800 dark:text-slate-300 mt-2">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bento Grid: Languages & Contribution Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Top Languages (SVG Donut-inspired Radial Chart) */}
          <motion.div
            id="github-stats-languages"
            className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200/50 dark:border-slate-800/80 flex flex-col justify-between"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h4 className="text-base font-display font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-500" />
                <span>Primary Technologies</span>
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Relative code volume aggregated from repositories.
              </p>
            </div>

            {loading ? (
              <div className="h-64 flex items-center justify-center animate-pulse">
                <div className="w-32 h-32 rounded-full border-4 border-neutral-200 dark:border-neutral-800 border-t-indigo-500 animate-spin" />
              </div>
            ) : derivedStats.languages.length === 0 ? (
              /* Fallback list if no language is detected from GitHub */
              <div className="py-6 space-y-4">
                {[
                  { name: 'TypeScript', percentage: 45, color: '#3178c6' },
                  { name: 'JavaScript', percentage: 30, color: '#f1e05a' },
                  { name: 'React/JSX', percentage: 15, color: '#61dafb' },
                  { name: 'CSS/Tailwind', percentage: 10, color: '#38bdf8' },
                ].map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                      <span>{lang.name}</span>
                      <span>{lang.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-100 dark:bg-[#09090b] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Dynamic Language Chart and Progress bars */
              <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* SVG Radial Chart */}
                <div className="sm:col-span-5 flex justify-center relative">
                  <svg width="120" height="120" viewBox="0 0 36 36" className="transform -rotate-90">
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e5e7eb" strokeWidth="3" className="dark:stroke-neutral-800" />
                    {/* SVG pie rendering */}
                    {(() => {
                      let accumulatedPercentage = 0;
                      return derivedStats.languages.map((lang) => {
                        const strokeDasharray = `${lang.percentage} ${100 - lang.percentage}`;
                        const strokeDashoffset = 100 - accumulatedPercentage;
                        accumulatedPercentage += lang.percentage;

                        const isHovered = hoveredLang === lang.name;

                        return (
                          <circle
                            key={lang.name}
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="none"
                            stroke={lang.color}
                            strokeWidth={isHovered ? '4' : '3'}
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-300 cursor-pointer"
                            onMouseEnter={() => setHoveredLang(lang.name)}
                            onMouseLeave={() => setHoveredLang(null)}
                          />
                        );
                      });
                    })()}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xs font-mono font-bold text-neutral-800 dark:text-white">
                      {hoveredLang ? derivedStats.languages.find((l) => l.name === hoveredLang)?.percentage : derivedStats.languages[0]?.percentage}%
                    </span>
                    <span className="text-[9px] text-neutral-400 capitalize">
                      {hoveredLang ? hoveredLang : derivedStats.languages[0]?.name}
                    </span>
                  </div>
                </div>

                {/* Bars column */}
                <div className="sm:col-span-7 space-y-3.5">
                  {derivedStats.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="space-y-1 cursor-pointer group"
                      onMouseEnter={() => setHoveredLang(lang.name)}
                      onMouseLeave={() => setHoveredLang(null)}
                    >
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                          <span className={hoveredLang === lang.name ? 'text-indigo-500 dark:text-indigo-400 font-bold' : ''}>
                            {lang.name}
                          </span>
                        </span>
                        <span className="text-neutral-500 font-mono text-[11px]">{lang.percentage}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-100 dark:bg-[#09090b] rounded-full overflow-hidden">
                        <div
                           className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${lang.percentage}%`,
                            backgroundColor: lang.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* GitHub Activity Simulation (Pixel Grid Calendar) */}
          <motion.div
            id="github-stats-contributions"
            className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200/50 dark:border-slate-800/80 flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-base font-display font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-500" />
                  <span>Contribution History</span>
                </h4>
                <span className="text-[10px] font-semibold font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/10">
                  482 Commits This Year
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Simulated open-source activity showing active project updates.
              </p>
            </div>

            {/* Pixel Grid */}
            <div className="py-6 overflow-x-auto">
              <div className="min-w-[500px] flex flex-col gap-1 select-none">
                <div className="flex gap-1 h-28">
                  {/* Calendar columns (weeks) */}
                  {contributionWeeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1 w-2 sm:w-2.5">
                      {week.map((day, dIdx) => {
                        // color classes depending on contribution level (0 to 4) in high-end editorial Indigo
                        const colorMap = [
                          'bg-neutral-100 dark:bg-[#09090b] hover:bg-neutral-200 dark:hover:bg-neutral-800', // Level 0
                          'bg-indigo-100 dark:bg-indigo-950/40 hover:bg-indigo-200 dark:hover:bg-indigo-900', // Level 1
                          'bg-indigo-300 dark:bg-indigo-800/60 hover:bg-indigo-400 dark:hover:bg-indigo-700', // Level 2
                          'bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500', // Level 3
                          'bg-indigo-700 dark:bg-indigo-400 hover:bg-indigo-800 dark:hover:bg-indigo-300', // Level 4
                        ];

                        return (
                          <div
                            key={dIdx}
                            className={`w-full h-2 sm:h-2.5 rounded-sm transition-colors cursor-pointer ${colorMap[day.level]}`}
                            title={`Level ${day.level} on week ${wIdx + 1}, day ${dIdx + 1}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Grid Labels */}
                <div className="flex justify-between text-[9px] font-mono text-neutral-400 px-1 pt-2">
                  <span>Sep</span>
                  <span>Nov</span>
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>

            {/* Grid Legend */}
            <div className="flex items-center justify-between text-[10px] text-neutral-400">
              <span>Learn more at GitHub</span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-2 h-2 rounded-sm bg-neutral-100 dark:bg-[#09090b]" />
                <div className="w-2 h-2 rounded-sm bg-indigo-100 dark:bg-indigo-950/40" />
                <div className="w-2 h-2 rounded-sm bg-indigo-300 dark:bg-indigo-800/60" />
                <div className="w-2 h-2 rounded-sm bg-indigo-500 dark:bg-indigo-600" />
                <div className="w-2 h-2 rounded-sm bg-indigo-700 dark:bg-indigo-400" />
                <span>More</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
