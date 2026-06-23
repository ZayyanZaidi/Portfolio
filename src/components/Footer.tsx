import { Github, Mail, MessageSquare, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-[#09090b] border-t border-neutral-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-editorial text-lg italic text-neutral-850 dark:text-white">
              Zayyan<span className="text-indigo-500 font-sans font-bold">.Zaidi</span>
            </div>
            <p className="text-xs text-neutral-400 font-sans">
              © {currentYear} Zayyan Zaidi. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              id="footer-linkedin-link"
              href="https://linkedin.com/in/zayyan-zaidi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#fafaf9] dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 shadow-sm transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              id="footer-github-link"
              href="https://github.com/ZayyanZaidi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#fafaf9] dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 shadow-sm transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              id="footer-whatsapp-link"
              href="https://wa.me/923187974475"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#fafaf9] dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 shadow-sm transition-all"
              title="WhatsApp"
            >
              <MessageSquare className="w-4.5 h-4.5" />
            </a>
            <a
              id="footer-email-link"
              href="mailto:zayyanzaidi57@gmail.com"
              className="p-2.5 rounded-xl bg-[#fafaf9] dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 shadow-sm transition-all"
              title="Email Me"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
