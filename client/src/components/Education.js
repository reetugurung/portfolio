"use client";
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { BackgroundGlow } from './BackgroundGlow';

const educationData = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Pokahara University",
    period: "2019 — 2025",
    location: "Sanepa, Nepal",
    description: "Pursued a degree in Information Technology with a focus on software development and database management."
  },
  {
    degree: "Higher Secondary (+2 Science)",
    institution: "Parashar College",
    period: "2017— 2019",
    location: "Damauli, Nepal",
    description: "Major in Physics, Biology, Chemistry and Mathematics."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
        <BackgroundGlow  variant="alt" />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-purple-100 dark:border-slate-800"
            >
             
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-slate-950 shadow-sm"></div>

              <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-purple-50 dark:border-slate-800 shadow-xl shadow-purple-100/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-purple-600 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-sm text-slate-500">
                    <span className="flex items-center gap-2"><GraduationCap size={14}/> {edu.period}</span>
                    <span className="flex items-center gap-2"><MapPin size={14}/> {edu.location}</span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;