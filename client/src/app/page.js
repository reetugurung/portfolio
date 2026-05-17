"use client";
import { useEffect, useState } from 'react';
import API from '../services/api';
import { motion } from 'framer-motion';
import Link from 'next/link';


import Hero from '../components/Hero'; 
import Contact from '../components/Contact';
import Hobbies from '../components/Hobbies';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Education from '../components/Education';
import Skills from '../components/Skills';


export default function Home() {
  const [projects, setProjects] = useState([]);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const handleEditClick = (project) => {
  setEditingProjectId(project._id);
  setFormData({
    title: project.title,
    description: project.description,
    link: project.link || '',
  });
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (editingProjectId) {

      const { data } = await API.put(`/projects/${editingProjectId}`, formData);
      

      setProjects((prev) =>
        prev.map((proj) => (proj._id === editingProjectId ? data : proj))
      );
      
   
      setEditingProjectId(null);
    } else {
   
      const { data } = await API.post('/projects', formData);
      setProjects((prev) => [...prev, data]);
    }

   
    setFormData({ title: '', description: '', link: '' });
  } catch (error) {
    console.error("Error saving project:", error);
  }
};
  

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const [formData, setFormData] = useState({ title: '', description: '', link: '' });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await API.get('/projects');
        setProjects(data.slice(0, 3)); 
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen relative z-0 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      
      <Hero />
      <div className="section-divider" />

      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <Services />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <div className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Featured Work</h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
            </div>
            <Link href="/projects" className="text-purple-600 dark:text-purple-400 font-bold hover:translate-x-2 transition-transform">
              See all projects →
            </Link>
          </div>

         <section id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {projects.length > 0 ? (
    projects.map((project) => (
      <motion.div 
        key={project._id}
        whileHover={{ y: -10 }}
        className="group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-purple-50/50 dark:border-slate-800 shadow-xl shadow-purple-100/20 transition-all duration-500"
      >
      <div className="relative h-60 w-full overflow-hidden">
        <img 
          src={project.imageUrl || 'https://via.placeholder.com/400x250'} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>
        
       
        <div className="flex flex-wrap gap-2 mb-6">
          {(Array.isArray(project.techStack) ? project.techStack : []).map((tech) => (
            <span key={tech} className="bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-1 rounded-full text-xs font-bold border border-purple-100/50">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center border-t pt-6 border-purple-50 dark:border-slate-800">
          <a href={project.liveLink} target="_blank" className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Live Demo</a>
          <a href={project.githubLink} target="_blank" className="text-sm font-bold text-slate-400 hover:text-purple-600 transition-colors">GitHub</a>
        </div>
      </div>
    </motion.div>
  ))):([1, 2, 3].map((n) => (
      <div key={n} className="h-96 bg-white/20 dark:bg-slate-900/20 animate-pulse rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-800" />
    ))
  )}
</section>
        </div>

       <div className="section-divider" />
        <Hobbies />
        <div className="section-divider" />
        <Certificates />
        <div className="section-divider" />
        <section id="contact" className="scroll-mt-24">
          <Contact />
          <div className="section-divider" />
        </section>
      </main>

      <Footer />
    </div>
  );
}