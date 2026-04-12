import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const skillCategories = [
  {
    title: "Front-End Development",
    skills: ["React", "Vite", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Back-End & Databases",
    skills: ["SQL", "Database Design (ERD)", "Node.js", "RESTful APIs"]
  },
  {
    title: "UI/UX Design",
    skills: ["Figma", "User Research", "Prototyping", "Responsive Design"]
  },
  {
    title: "Tools & Other",
    skills: ["Git & GitHub", "Cybersecurity Basics", "Networking", "Arduino / Embedded"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* عنوان القسم */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-emerald-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* شبكة المهارات */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <Tilt 
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              className="h-full"
            >
              <motion.div 
                variants={cardVariants}
                // غيرنا الـ bg ليكون شفاف وفيه تأثير الـ Blur
                className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10 h-full"
              >
                <h3 className="text-xl font-semibold text-white mb-6 border-b border-slate-700 pb-3">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

      </div>
    </section>
  );
}