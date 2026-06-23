import React from 'react';
import { motion } from 'motion/react';
import { SkillCategory } from '../types';
import { Terminal, Shield, Laptop, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories: (SkillCategory & { icon: React.ReactNode })[] = [
    {
      title: 'Languages',
      icon: <Terminal className="w-4.5 h-4.5 text-indigo-500" />,
      skills: [
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'Python', level: 75 },
      ],
    },
    {
      title: 'Frontend Frameworks',
      icon: <Laptop className="w-4.5 h-4.5 text-indigo-500" />,
      skills: [
        { name: 'React (Hooks, Suspense)', level: 94 },
        { name: 'Tailwind CSS v4 / v3', level: 96 },
        { name: 'Vite & Bundlers', level: 90 },
        { name: 'Framer Motion / Animations', level: 88 },
      ],
    },
    {
      title: 'Backend & Services',
      icon: <Shield className="w-4.5 h-4.5 text-indigo-500" />,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 90 },
        { name: 'REST APIs & WebSockets', level: 92 },
        { name: 'Gemini AI Integration', level: 85 },
      ],
    },
    {
      title: 'Tools & Ecosystems',
      icon: <Cloud className="w-4.5 h-4.5 text-indigo-500" />,
      skills: [
        { name: 'Git & GitHub Workflows', level: 95 },
        { name: 'Docker / Containers', level: 78 },
        { name: 'Vercel / Netlify Deploy', level: 92 },
        { name: 'Postman / API testing', level: 88 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#fafaf9] dark:bg-[#09090b] border-t border-neutral-200 dark:border-slate-900 transition-colors duration-300"
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
            Technical Stack
          </motion.h2>
          <motion.h3
            className="mt-2 text-3xl sm:text-4xl font-editorial italic font-normal text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & Competencies
          </motion.h3>
          <motion.div
            className="mt-4 h-[1px] w-12 bg-indigo-500 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              id={`skills-category-${category.title.toLowerCase().replace(/ /g, '-')}`}
              className="p-6 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200/50 dark:border-slate-800/80 shadow-sm hover:shadow hover:border-indigo-500/20 transition-all"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-neutral-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-slate-800">
                  {category.icon}
                </div>
                <h4 className="text-base font-display font-bold text-neutral-900 dark:text-white tracking-tight">
                  {category.title}
                </h4>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-neutral-400 font-mono text-[10px]">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-neutral-150 dark:bg-[#09090b] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-indigo-600 dark:bg-indigo-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIdx * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
