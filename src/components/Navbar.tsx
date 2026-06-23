import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Github, MessageSquare } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scrollspy to track active section
      const sections = ['home', 'about', 'github-stats', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Stats', href: '#github-stats', id: 'github-stats' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 shadow-md glass-nav'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <motion.a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Github className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-editorial italic">
              Zayyan<span className="text-indigo-600 dark:text-indigo-400 font-sans not-italic">.Zaidi</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  id={`nav-item-desktop-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative font-sans text-xs uppercase tracking-widest font-semibold transition-colors py-1 ${
                    activeSection === item.id
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-slate-400 dark:hover:text-neutral-100'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600 dark:bg-indigo-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Icons / Controls */}
            <div className="flex items-center gap-4 pl-4 border-l border-neutral-200 dark:border-slate-800">
              {/* WhatsApp Quick Chat */}
              <a
                id="whatsapp-quick-nav"
                href="https://wa.me/923187974475"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              {/* Theme Toggle */}
              <motion.button
                id="theme-toggle-desktop"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-xl border border-neutral-200 dark:border-slate-800 hover:bg-neutral-100 dark:hover:bg-slate-900 text-neutral-700 dark:text-neutral-300 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle theme"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-indigo-500" />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle Mobile */}
            <motion.button
              id="theme-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl border border-neutral-200 dark:border-slate-800 hover:bg-neutral-100 dark:hover:bg-slate-900 text-neutral-700 dark:text-neutral-300 focus:outline-none"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-indigo-500" />}
            </motion.button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-neutral-200 dark:border-slate-800 hover:bg-neutral-100 dark:hover:bg-slate-900 text-neutral-700 dark:text-neutral-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            className="fixed inset-x-0 top-[73px] bottom-0 z-40 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl md:hidden border-t border-neutral-200 dark:border-slate-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-6 space-y-3 flex flex-col h-full max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  id={`nav-item-mobile-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl font-display text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-500'
                      : 'text-neutral-700 hover:bg-neutral-50 dark:text-slate-300 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-6 border-t border-neutral-200 dark:border-slate-800 flex flex-col gap-4">
                <a
                  id="whatsapp-cta-mobile"
                  href="https://wa.me/923187974475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  id="github-cta-mobile"
                  href="https://github.com/ZayyanZaidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-100 hover:bg-neutral-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-neutral-800 dark:text-slate-200 font-medium rounded-xl transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
