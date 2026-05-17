"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Typewriter from './Typewriter';


const Hero = () => {
  const description ="MERN stack developer focused on building clean, functional, and user-centric web applications. Specializing in React, Node.js, and modern frontend styling, I enjoy turning design concepts into responsive, production-ready code."
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6">
     
      <div className="absolute top-20 -left-10 w-72 h-72 bg-purple-200/50 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 -right-10 w-72 h-72 bg-pink-200/50 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
     
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
  Hi, I'm a{" "}
  <motion.span
    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
    animate={{ 
      y: [0, -15, 0],
      textShadow: [
      "0px 0px 0px rgba(168, 85, 247, 0)", 
      "0px 10px 20px rgba(168, 85, 247, 0.4)", 
      "0px 0px 0px rgba(168, 85, 247, 0)"
    ]
    }}
    transition={{
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    Ritu Gurung
  </motion.span>
</h1>
<p className="text-lg text-gray-600 min-h-[80px] leading-relaxed">
        <Typewriter text={description} speed={25} />
      </p>
            <div className="flex gap-4 flex-col md:flex-row justify-center md:justify-start items-center">
              <Link href="/projects">
               <motion.button 
                whileHover={{ scale: 1.1, y: -5 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-lg"
                >
                    View My Work
           </motion.button>
              </Link>
              <a href="#contact">
                <motion.button 
                whileHover={{ scale: 1.1, y: -5 }} 
                 whileTap={{ scale: 0.95 }} 
              className="bg-amber-50 text-black px-8 py-4 rounded-full font-bold shadow-lg"
          >
          Contact Me
          </motion.button>
              </a>
            </div>
          </motion.div>

  
         <motion.div 
  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl"
  animate={{ 
    y: [0, 10, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <img 
    src="/Reetu.jpeg" 
    alt="Ritu Gurung"
    className="w-full h-full object-cover"
  />
</motion.div>
        </div>
      </div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-lilac-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div className="absolute top-0 -right-4 w-72 h-72 bg-softPink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

  <div className="relative z-10 text-center">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-lilac-600 to-softPink-500">
        Creative Developer
      </span>
    </h1>
    <p className="mt-4 text-slate-600 text-lg">Building digital magic with code and soul.</p>
  </div>
    </section>
    
  );
};

export default Hero;