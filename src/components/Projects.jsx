// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Currency Converter App",
    description: "A feature-rich app with real-time rates, historical charts using Recharts, and favorites management via Frankfurter API.",
    tech: ["React", "Vite", "Tailwind CSS", "Recharts"],
    github: "https://github.com/mohammeddesokyA/Currency-App"
  },
  {
    title: "Automotive Showroom",
    description: "Modern showroom landing page featuring high-quality vehicle imagery and a seamless user navigation experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/mohammeddesokyA/Automotive-HTML-CSS-"
  },
  {
    title: "Weather App ⛅",
    description: "Real-time weather dashboard fetching live data like temperature, humidity, and wind speed for any city worldwide.",
    tech: ["JavaScript", "Weather API", "CSS3"],
    github: "https://github.com/mohammeddesokyA/simple-web-based-Weather-App"
  },
  {
    title: "CalcIt – Simple Calculator",
    description: "A sleek, responsive calculator focusing on clean UI design and core JavaScript event handling logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mohammeddesokyA/Simple-Calculator"
  }
];

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareEnable={true}
          glareMaxOpacity={0.1}
          className="h-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700 p-8 rounded-3xl h-full flex flex-col hover:border-emerald-500/50 transition-all duration-300 group shadow-xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-4xl text-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity">
                📁
              </div>
              <div className="flex gap-4 text-gray-400">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-500 transition-colors text-3xl"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
}