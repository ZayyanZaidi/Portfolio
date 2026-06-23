import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle2, Copy, Check, Smartphone, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Submit standard form (visual mock)
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1200);
  };

  // Submit via WhatsApp (dynamic redirect with prefilled text)
  const handleSendWhatsApp = () => {
    if (!formData.message) return;
    const introText = `Hi Zayyan, my name is ${formData.name || 'Visitor'}.${formData.email ? ` (${formData.email})` : ''}\n\n`;
    const subjectLine = formData.subject ? `Regarding: ${formData.subject}\n` : '';
    const encodedText = encodeURIComponent(`${introText}${subjectLine}Message: ${formData.message}`);
    const waUrl = `https://wa.me/923187974475?text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#09090b] border-t border-neutral-200 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            Connection
          </motion.h2>
          <motion.h3
            className="mt-2 text-3xl sm:text-4xl font-editorial italic font-normal text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In Touch
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
          {/* Left: Contact details cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-editorial italic text-neutral-850 dark:text-neutral-100 leading-relaxed">
              Let's build something exceptional together.
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-slate-400 font-sans leading-relaxed">
              If you have an open position, an exciting freelance project, or just want to say hi, feel free to use the links below or send a message. I usually respond within a couple of hours.
            </p>

            {/* Link Cards */}
            <div className="space-y-4 pt-2">
              {/* WhatsApp direct card */}
              <div className="group p-4 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-neutral-400 uppercase font-mono">
                      WhatsApp Quick Chat
                    </h5>
                    <a
                      id="whatsapp-direct-link"
                      href="https://wa.me/923187974475"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-neutral-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      +92 318 7974475
                    </a>
                  </div>
                </div>

                <button
                  id="copy-whatsapp-button"
                  onClick={() => handleCopy('+923187974475', 'whatsapp')}
                  className="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-slate-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer"
                  title="Copy number"
                >
                  {copiedText === 'whatsapp' ? <Check className="w-4 h-4 text-indigo-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email direct card */}
              <div className="group p-4 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-neutral-400 uppercase font-mono">
                      Email Address
                    </h5>
                    <a
                      id="email-direct-link"
                      href="mailto:zayyanzaidi57@gmail.com"
                      className="text-sm font-bold text-neutral-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      zayyanzaidi57@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  id="copy-email-button"
                  onClick={() => handleCopy('zayyanzaidi57@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-slate-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedText === 'email' ? <Check className="w-4 h-4 text-indigo-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn direct card */}
              <div className="group p-4 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-neutral-400 uppercase font-mono">
                      Professional Network
                    </h5>
                    <a
                      id="linkedin-direct-link"
                      href="https://linkedin.com/in/zayyan-zaidi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-neutral-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      linkedin.com/in/zayyan-zaidi
                    </a>
                  </div>
                </div>

                <button
                  id="copy-linkedin-button"
                  onClick={() => handleCopy('https://linkedin.com/in/zayyan-zaidi', 'linkedin')}
                  className="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-slate-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer"
                  title="Copy LinkedIn URL"
                >
                  {copiedText === 'linkedin' ? <Check className="w-4 h-4 text-indigo-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Message composer panel */}
          <motion.div
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200 dark:border-slate-800/80 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                /* Success message panel */
                <motion.div
                  key="form-success"
                  className="flex flex-col items-center justify-center py-10 space-y-4 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <CheckCircle2 className="w-14 h-14 text-indigo-500 animate-bounce" />
                  <h4 className="text-lg font-display font-bold text-neutral-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-neutral-500 max-w-sm">
                    Thank you for reaching out, Zayyan has received your transmission and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                /* Interactive Form composer */
                <form key="contact-form" onSubmit={handleSubmitForm} className="space-y-4">
                  <h4 className="text-base font-display font-bold text-neutral-900 dark:text-white tracking-tight">
                    Compose a Message
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono text-neutral-400 uppercase">
                        Full Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-neutral-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono text-neutral-400 uppercase">
                        Email Address *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-neutral-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold font-mono text-neutral-400 uppercase">
                      Subject
                    </label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-neutral-900 dark:text-white"
                      placeholder="Project Cooperation"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold font-mono text-neutral-400 uppercase">
                      Message Body *
                    </label>
                    <textarea
                      id="contact-message-input"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-neutral-900 dark:text-white resize-none"
                      placeholder="Hi Zayyan, I would love to build a..."
                    />
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {/* Send email standard */}
                    <button
                      id="contact-submit-button"
                      type="submit"
                      disabled={isSubmitting || !formData.message}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-medium rounded-xl shadow-sm transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>

                    {/* Quick WhatsApp prefilled launch */}
                    <button
                      id="contact-whatsapp-send-button"
                      type="button"
                      disabled={!formData.message}
                      onClick={handleSendWhatsApp}
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-slate-800/80 font-medium rounded-xl disabled:opacity-50 transition-all cursor-pointer"
                      title="Send prefills directly over WhatsApp"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Prefill on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
