"use client";
import { motion } from 'framer-motion';
import { BiCodeCurly, BiTerminal, BiServer, BiPaint} from 'react-icons/bi';
import { BackgroundGlow } from './BackgroundGlow';


const skillCategories = [
  {
    title: "Frontend Development",
    icon: <BiCodeCurly className="text-purple-500" />,
    skills: ["React.js", "Next.js 15", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "Redux Toolkit"]
  },
  {
    title: "Backend & Database",
    icon: <BiServer className="text-pink-500" />,
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Mongoose", "PostgreSQL"]
  },
  {
    title: "DevOps & Tools",
    icon: <BiTerminal className="text-purple-600" />,
    skills: ["Git & GitHub", "Docker", "Vercel", "NPM / Yarn", "Postman", "CI/CD Basics"]
  },
  {
    title: "Design & Mobile",
    icon: <BiPaint className="text-pink-600" />,
    skills: ["Figma", "React Native", "Expo", "Responsive Design", "Lucide Icons", "Framer Motion"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
        <BackgroundGlow  variant="alt" />
               
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-[2rem] border border-purple-50 dark:border-slate-800 shadow-xl shadow-purple-100/10 hover:border-purple-200 dark:hover:border-purple-900/50 transition-all group"
            >
              <div className="text-3xl mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl shadow-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;