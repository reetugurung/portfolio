"use client";
import { motion } from 'framer-motion';
import { BiLinkExternal, BiCodeAlt } from 'react-icons/bi';

const Project = ({ projects= []}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div 
          key={project._id}
          whileHover={{ y: -10 }}
          className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-purple-50/50 dark:border-slate-800 shadow-xl"
        >
          
          <div className="h-48 overflow-hidden">
            <img 
              src={project.imageUrl || 'https://via.placeholder.com/400x250'} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
            
         
            <div className="flex justify-between items-center pt-4 border-t border-purple-50 dark:border-slate-800">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-20 flex items-center gap-1 text-sm font-bold text-purple-600 hover:text-pink-500 transition-colors"
              >
                <BiLinkExternal /> Live
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-20 flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <BiCodeAlt /> Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Project;