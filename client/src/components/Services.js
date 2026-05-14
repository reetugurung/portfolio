"use client";
import { motion } from 'framer-motion';
import { BiCodeAlt, BiLayer, BiMobileAlt, BiServer } from 'react-icons/bi';
import { BackgroundGlow } from './BackgroundGlow';

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, high-performance web applications using React.js and Next.js with sleek Tailwind CSS styling.",
    icon: <BiCodeAlt className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Backend Solutions",
    description: "Creating robust APIs and server-side logic using Node.js and Express, ensuring seamless data flow and security.",
    icon: <BiServer className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "MERN Stack Mastery",
    description: "End-to-end full-stack development, integrating MongoDB databases with powerful JavaScript frameworks.",
    icon: <BiLayer className="text-green-600" />,
  },
  {
    title: "Mobile-First Design",
    description: "Ensuring your application looks and functions perfectly on every device, from smartphones to large desktops.",
    icon: <BiMobileAlt className="text-pink-600" />,
  }
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-24 bg-transparent">
      <BackgroundGlow  variant="alt" />
      <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">What I Do</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            I help turn ideas into functional digital products with a focus on performance, 
            scalability, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              // bg-white/40 (More transparent) + backdrop-blur-2xl (Stronger blur)
              className="p-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 dark:border-slate-800 shadow-2xl shadow-purple-100/10 transition-all flex gap-6"
            >
              <div className="shrink-0">
                <div className="p-4 bg-white/80 dark:bg-slate-800 rounded-2xl shadow-inner">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;