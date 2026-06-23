import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Server, Database, ChevronRight, Cpu, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Layer {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  glowColor: string;
  icon: ReactNode;
  technologies: string[];
  details: string[];
  yOffset: number;
}

export default function ArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState<string>('presentation');

  const layers: Layer[] = [
    {
      id: 'presentation',
      title: 'Presentation & Client Layer',
      subtitle: 'Modern High-Fidelity User Interfaces',
      color: 'border-indigo-500/30 text-indigo-600 dark:text-indigo-400 bg-white/90 dark:bg-[#13131a]/95',
      glowColor: 'rgba(99, 102, 241, 0.15)',
      icon: <Globe className="w-5 h-5 text-indigo-500" />,
      technologies: ['React 18+', 'Tailwind CSS v4', 'Motion React', 'Vite Bundle'],
      details: [
        'Single Page Applications optimized for rapid rendering speeds.',
        'Declarative state synchronization and responsive micro-interactions.',
        'Adaptive layouts designed for perfect desktop-first & mobile fluid consistency.'
      ],
      yOffset: -60,
    },
    {
      id: 'logic',
      title: 'Application & API Services Layer',
      subtitle: 'Modular REST API Middleware',
      color: 'border-violet-500/30 text-violet-600 dark:text-violet-400 bg-white/90 dark:bg-[#13131a]/95',
      glowColor: 'rgba(139, 92, 246, 0.15)',
      icon: <Server className="w-5 h-5 text-violet-500" />,
      technologies: ['Node.js Run', 'Express App', 'TypeScript ES6', 'JWT Security'],
      details: [
        'Strict type-safety extending through router definitions and query payloads.',
        'Highly optimized server execution routing client requests efficiently.',
        'Middlewares built with custom authentication checkpoints.'
      ],
      yOffset: 0,
    },
    {
      id: 'persistence',
      title: 'Durable Database & Cache Layer',
      subtitle: 'Type-Safe Cloud Storage Schemas',
      color: 'border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-400 bg-white/90 dark:bg-[#13131a]/95',
      glowColor: 'rgba(217, 70, 239, 0.15)',
      icon: <Database className="w-5 h-5 text-fuchsia-500" />,
      technologies: ['Cloud SQL / Pg', 'Drizzle ORM', 'Firestore DB', 'Redis Cache'],
      details: [
        'Relational databases configured for indexing speed and perfect acid-compliance.',
        'Declarative migrations tracking database state updates precisely.',
        'Lazy-loading triggers and persistent key-value records for near-instant responses.'
      ],
      yOffset: 60,
    },
  ];

  const currentLayerObj = layers.find((l) => l.id === activeLayer) || layers[0];

  return (
    <div
      id="architecture-diagram-container"
      className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 shadow-sm relative overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Top Banner Indicator */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100 dark:border-slate-800/60 relative z-10">
        <h4 className="text-sm font-bold font-mono text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-indigo-500 animate-pulse" />
          <span>SYSTEM ARCHITECTURE DIAGRAM</span>
        </h4>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10">
          Interactive Schematic
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Interactive 3D Perspective Graphic Stack (7 columns) */}
        <div className="md:col-span-6 relative h-[320px] flex items-center justify-center">
          {/* Central Connecting Flow Vector (Moving energy dot) */}
          <div className="absolute left-1/2 top-[15%] bottom-[15%] w-[2px] bg-gradient-to-b from-indigo-500/40 via-violet-500/40 to-fuchsia-500/40 -translate-x-1/2 pointer-events-none">
            <motion.div
              className="w-2.5 h-2.5 -ml-1 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
              animate={{
                top: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ position: 'absolute' }}
            />
          </div>

          {/* Perspective Layers Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-full flex flex-col justify-between py-4">
            {layers.map((layer) => {
              const isActive = activeLayer === layer.id;

              return (
                <motion.button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer relative group flex items-center justify-between shadow-sm hover:shadow-md ${layer.color} ${
                    isActive
                      ? 'border-indigo-500/60 dark:border-indigo-500/50 scale-[1.03] ring-1 ring-indigo-500/20'
                      : 'hover:scale-[1.01]'
                  }`}
                  whileHover={{ y: -2 }}
                  layoutId={`architecture-layer-${layer.id}`}
                  style={{
                    boxShadow: isActive ? `0 10px 25px -5px ${layer.glowColor}` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-150 dark:border-slate-800">
                      {layer.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold truncate tracking-tight text-neutral-900 dark:text-neutral-100">
                        {layer.title}
                      </p>
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate mt-0.5 font-mono">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center ml-2 flex-shrink-0">
                    <ChevronRight
                      className={`w-4 h-4 text-neutral-400 transition-transform ${
                        isActive ? 'translate-x-0.5 text-indigo-500' : 'group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      className="absolute -left-[1px] top-1/4 bottom-1/4 w-[3px] bg-indigo-500 rounded-r"
                      layoutId="active-layer-indicator"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right Explanatory Details Card (6 columns) */}
        <div className="md:col-span-6 flex flex-col justify-center min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400 tracking-[0.15em]">
                  Architectural Tier Spotlight
                </span>
                <h5 className="text-lg font-bold text-neutral-900 dark:text-white mt-1 font-sans tracking-tight">
                  {currentLayerObj.title}
                </h5>
                <p className="text-xs text-neutral-400 italic font-medium mt-0.5">
                  {currentLayerObj.subtitle}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="space-y-2.5">
                {currentLayerObj.details.map((detail, index) => (
                  <div key={index} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-neutral-600 dark:text-slate-400 font-sans leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Pill Grid */}
              <div className="pt-4 border-t border-neutral-100 dark:border-slate-800/60">
                <p className="text-[10px] font-bold font-mono uppercase text-neutral-500 mb-2">
                  Primary Tech Instruments
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentLayerObj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-slate-800 text-neutral-600 dark:text-slate-400 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
