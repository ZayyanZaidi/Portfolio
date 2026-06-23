import { motion } from 'motion/react';
import { Award, Code2, Cpu, MapPin, Milestone, Smartphone, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { GitHubUser } from '../types';
import ArchitectureDiagram from './ArchitectureDiagram';

interface AboutProps {
  githubUser: GitHubUser | null;
}

export default function About({ githubUser }: AboutProps) {
  const coreValues = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-500" />,
      title: 'Clean Architecture',
      description: 'Writing robust, testable, modular, and maintainable code optimized for scalability.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: 'Modern Stack Mastery',
      description: 'Utilizing modern React patterns, advanced state managers, and robust Express systems.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-500" />,
      title: 'Responsive Perfection',
      description: 'Ensuring fluid layouts, mobile-first responsiveness, and smooth high-performance animations.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#fafaf9] dark:bg-[#09090b] border-t border-neutral-200 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-xs font-semibold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-mono uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Biographical Narrative
          </motion.h2>
          <motion.h3
            className="mt-2 text-3xl sm:text-4xl font-editorial italic font-normal text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Me
          </motion.h3>
          <motion.div
            className="mt-4 h-[1px] w-12 bg-indigo-500 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Professional Portrait & Info Header (Resume-aligned) */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-neutral-100 dark:border-slate-900/60">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-40 blur-sm" />
                <img
                  id="about-profile-portrait"
                  src={githubUser?.avatar_url || "https://github.com/ZayyanZaidi.png"}
                  alt="Syed Zayyan Hussain Zaidi Portrait"
                  className="relative w-24 h-24 rounded-full border-4 border-white dark:border-neutral-900 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  Syed Zayyan Hussain Zaidi
                </h3>
                <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
                  Software Engineering Undergraduate
                </p>
                <p className="text-xs text-neutral-500 dark:text-slate-400">
                  Karachi, Pakistan • zayyanzaidi57@gmail.com
                </p>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-editorial italic text-neutral-800 dark:text-neutral-100 leading-relaxed">
              Passionate engineering undergraduate crafting practical software systems.
            </h4>
            <p className="text-neutral-600 dark:text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
              I am a 21-year-old Pakistani Software Engineering undergraduate based in Karachi, passionate about building robust systems and high-fidelity user experiences. Pursuing my studies with dedication, my engineering focus is on solving real-world challenges with modular, reusable, and secure code.
            </p>
            <p className="text-neutral-600 dark:text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
              Whether optimizing database architectures, constructing modular backend REST APIs, or tuning elegant client-side components, I believe that high-quality software should be visually clean, performance-optimized, and crafted with deep semantic discipline.
            </p>

            {/* Quick stats list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-4 rounded-xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2 text-neutral-500 dark:text-slate-400 mb-1 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span>Location</span>
                </div>
                <span className="text-sm font-bold text-neutral-800 dark:text-white">
                  {githubUser?.location || 'Pakistan'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2 text-neutral-500 dark:text-slate-400 mb-1 text-xs font-semibold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-indigo-500" />
                  <span>Projects</span>
                </div>
                <span className="text-sm font-bold text-neutral-800 dark:text-white">
                  {githubUser ? `${githubUser.public_repos}+ Active` : '15+ Active'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-neutral-500 dark:text-slate-400 mb-1 text-xs font-semibold uppercase tracking-wider">
                  <Milestone className="w-4 h-4 text-indigo-500" />
                  <span>Availability</span>
                </div>
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  Open to Work
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values Grid */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg font-display font-bold text-neutral-800 dark:text-neutral-100 mb-4 tracking-tight">
              Core Principles I Stand By
            </h4>
            <div className="space-y-4">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all group"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors h-11 w-11 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {value.title}
                    </h5>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Academic Journey Timeline */}
        <div className="mt-20 pt-16 border-t border-neutral-150 dark:border-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase">
              Milestones & Credentials
            </span>
            <h4 className="text-2xl font-editorial italic text-neutral-900 dark:text-white mt-1 leading-normal">
              Academic Journey & Foundation
            </h4>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline center line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-slate-800 -translate-x-1/2 hidden sm:block" />
            
            <div className="space-y-12 relative z-10">
              {/* Milestone 1: NED */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:justify-between relative gap-6 sm:gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Left card */}
                <div className="w-full sm:w-[45%] p-6 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/20 transition-all text-left sm:text-right">
                  <div className="flex sm:flex-row-reverse items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-neutral-900 dark:text-white tracking-tight">
                        Bachelor of Engineering
                      </h5>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                        Software Engineering
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                    NED University of Engineering & Technology, Karachi
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1">
                    Pursuing deep knowledge in core computer systems, algorithms, advanced databases, and modern programming paradigms.
                  </p>
                </div>

                {/* Timeline badge / circle */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#09090b] border border-indigo-500 flex items-center justify-center shadow-sm z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                </div>

                {/* Right date display */}
                <div className="w-full sm:w-[45%] sm:pl-12 flex sm:justify-start items-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-slate-800 text-xs font-mono font-bold text-neutral-600 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>2023 — Present</span>
                  </div>
                </div>
              </motion.div>

              {/* Milestone 2: Usman College */}
              <motion.div
                className="flex flex-col sm:flex-row-reverse items-start sm:justify-between relative gap-6 sm:gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Right card */}
                <div className="w-full sm:w-[45%] p-6 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/20 transition-all text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-neutral-900 dark:text-white tracking-tight">
                        Higher Secondary School Certificate
                      </h5>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                        Pre-Engineering
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                    Usman College, Karachi
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1">
                    Focused on advanced mathematics, foundational physics, and analytical problem-solving with exceptional outcomes.
                  </p>
                </div>

                {/* Timeline badge / circle */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-slate-800 flex items-center justify-center shadow-sm z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-slate-700" />
                </div>

                {/* Left date display */}
                <div className="w-full sm:w-[45%] sm:pr-12 flex sm:justify-end items-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-slate-800 text-xs font-mono font-bold text-neutral-600 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>2021 — 2023</span>
                  </div>
                </div>
              </motion.div>

              {/* Milestone 3: O levels */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:justify-between relative gap-6 sm:gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Left card */}
                <div className="w-full sm:w-[45%] p-6 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/20 transition-all text-left sm:text-right">
                  <div className="flex sm:flex-row-reverse items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-neutral-900 dark:text-white tracking-tight">
                        GCE O-Levels
                      </h5>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                        Science Stream
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                    Beaconhouse School System, Karachi
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1">
                    Gained standard international secondary education credentials with a strong emphasis on critical reasoning.
                  </p>
                </div>

                {/* Timeline badge / circle */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-slate-800 flex items-center justify-center shadow-sm z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-slate-700" />
                </div>

                {/* Right date display */}
                <div className="w-full sm:w-[45%] sm:pl-12 flex sm:justify-start items-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-slate-800 text-xs font-mono font-bold text-neutral-600 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>2019 — 2021</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Transitional Schematic Divider */}
        <div className="mt-20 pt-16 border-t border-neutral-150 dark:border-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-indigo-600 dark:text-indigo-400 uppercase">
              System Orchestration Blueprint
            </span>
            <h4 className="text-2xl font-editorial italic text-neutral-900 dark:text-white mt-1 leading-normal">
              How I Engineer Scalable Web Architectures
            </h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ArchitectureDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
