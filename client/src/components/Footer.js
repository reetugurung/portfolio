"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'; 
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaGithub size={22} />, 
      href: "https://github.com/reetugurung", 
      label: "GitHub" 
    },
    { 
      icon: <FaLinkedin size={22} />, 
      href: "https://linkedin.com/in/reetugurung", 
      label: "LinkedIn" 
    },
    { 
      icon: <FaEnvelope size={22} />, 
      href: "mailto:reetugurung26@gmail.com", 
      label: "Email" 
    },
  ];

  return (
    <footer className="mt-20 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            Ritu Gurung
          </h2>
          <p className="text-slate-500 text-sm">
            © {currentYear} •All rights reserved. Made with ❤️ by Ritu Gurung.
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ scale: 1.2, color: "#2563eb" }}
              className="text-slate-600 dark:text-slate-400 transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;