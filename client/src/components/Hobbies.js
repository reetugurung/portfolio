"use client";
import { motion } from 'framer-motion';
import { Palette, GraduationCap, Compass, Hammer } from 'lucide-react';
import { BackgroundGlow } from './BackgroundGlow';

const hobbies = [
  { 
    name: "Art & Design", 
    icon: <Palette className="w-8 h-8 text-pink-500" />, 
    desc: "Expressing creativity through sketching and digital illustrations.",
    bgColor: "bg-pink-50 dark:bg-pink-900/10"
  },
  { 
    name: "Learning", 
    icon: <GraduationCap className="w-8 h-8 text-blue-500" />, 
    desc: "Constantly diving into new frameworks and tech documentations.",
    bgColor: "bg-blue-50 dark:bg-blue-900/10"
  },
  { 
    name: "Travelling", 
    icon: <Compass className="w-8 h-8 text-green-500" />, 
    desc: "Exploring new cultures and finding inspiration in different landscapes.",
    bgColor: "bg-green-50 dark:bg-green-900/10"
  },
  { 
    name: "Crafting", 
    icon: <Hammer className="w-8 h-8 text-orange-500" />, 
    desc: "Building physical things and DIY projects beyond the screen.",
    bgColor: "bg-orange-50 dark:bg-orange-900/10"
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20">
        <BackgroundGlow  variant="alt" />
                
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Beyond the Code</h2>
        <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-b from-purple-50/50 to-white dark:from-slate-800/50 dark:to-slate-900 rounded-3xl border-t-4 border-purple-400 shadow-lg shadow-purple-100/50 dark:shadow-none"
        >
            <div className={`p-4 rounded-2xl mb-4 transition-colors ${hobby.bgColor}`}>
              {hobby.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
              {hobby.name}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {hobby.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;