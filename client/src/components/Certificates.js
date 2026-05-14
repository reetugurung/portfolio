"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGlow } from './BackgroundGlow';

const certificates = [
  { id: 1, title: "MERN STACK", issuer: "Broadway Infoys", date: "2026", image: "/cetifi.jpeg" },
  { id: 2, title: "React-Js", issuer: "Sipalaya Info Tech Pvt.Ltd", date: "2026", image: "/image.png" },
  
];

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
  return (
    <section id="certificates" className="py-24 relative">
        <BackgroundGlow  variant="alt" />
        <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white">
        Certifications
      </h2>
      <p className="text-slate-500">Click a certificate to view it in full detail.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            layoutId={`cert-${cert.id}`}
            onClick={() => setSelectedCert(cert)}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer bg-white/60 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl border border-purple-50 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-purple-200/50 transition-all"
          >
            
            <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">{cert.title}</h3>
            <p className="text-blue-600 text-sm">{cert.issuer}</p>
            <p className="text-slate-500 text-xs mt-2">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`cert-${selectedCert.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-4">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-h-[70vh] w-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="p-8 md:w-80 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{selectedCert.title}</h3>
                  <p className="text-purple-600 font-bold mb-4">{selectedCert.issuer}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Verified certification for completing advanced coursework in {selectedCert.title}.
                  </p>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                  >
                    Close
                  </button>
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;