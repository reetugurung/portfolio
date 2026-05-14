"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGlow } from './BackgroundGlow';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden scroll-mt-24">
      
    <BackgroundGlow  variant="alt" />
            <div className="text-center mb-16">
      <AnimatePresence>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 right-6 md:right-10 z-[100] bg-white dark:bg-slate-800 border-l-4 border-purple-500 p-5 shadow-2xl rounded-2xl flex items-center gap-4"
          >
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-lg">Message Sent!</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">I'll get back to you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-lg mx-auto">
            Ready to start a project? I'm currently available for freelance work and new opportunities.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-purple-50 dark:border-slate-800 shadow-2xl shadow-purple-100/50 dark:shadow-none"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/20 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Email</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/20 transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Subject</label>
              <input 
                required
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/20 transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Message</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/20 transition-all outline-none resize-none"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 dark:shadow-none hover:shadow-purple-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </span>
              ) : 'Send Message'}
            </motion.button>

            {status === 'error' && (
              <p className="text-red-500 text-sm mt-2 ml-1 font-medium">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;