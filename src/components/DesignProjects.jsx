import { motion } from 'framer-motion';
import { FiFigma } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';

import driveIT from '../assets/driveIT.png';
import woody from '../assets/woody.png';
import errorPage from '../assets/404.png';
import appDesign from '../assets/app.png';

const designPortfolio = [
  {
    id: 1,
    title: "Driveit – Car Rental App",
    description: "Driveit is a mobile app UI for renting cars easily and quickly. It includes screens for user authentication, browsing cars, booking, payments, and profile management.",
    image: driveIT,
    tags: ["Figma", "Mobile UI", "UX Design"],
    figmaLink: "https://www.figma.com/design/oCYCdKIh4fwMCGcQ0SztxD/mohamed-desoky?t=XUUWZHrtPiO9F4Ht-1",
  },
  {
    id: 2,
    title: "Woddy – Furniture E-commerce UI",
    description: "This project showcases a user interface design for Woddy, an e-commerce platform specializing in modern and minimalist furniture. The design prioritizes a clean and user-friendly experience.",
    image: woody,
    tags: ["Figma", "E-commerce", "Web UI"],
    figmaLink: "https://www.figma.com/design/b0alTzkyc66EJX5pIFb2BI/My-first-page?node-id=0-1&t=XUUWZHrtPiO9F4Ht-1",
  },
  {
    id: 3,
    title: "Creative 404 Error Page – Woddy",
    description: "This project features a custom 404 error page designed for the Woddy website. Instead of a standard error message, this page provides a more engaging and helpful user experience.",
    image: errorPage,
    tags: ["Figma", "UI Design", "Web"],
    figmaLink: "https://www.figma.com/design/6ekS721kGdmyfR4cZs3iES/Mohammed-desoky-ahmed-day-3?t=XUUWZHrtPiO9F4Ht-1",
  },
  {
    id: 4,
    title: "Food Delivery App UI",
    description: "A modern and vibrant mobile app UI for food delivery, featuring an intuitive browsing experience, categorized menus, and a seamless ordering flow designed for maximum user engagement.",
    image: appDesign,
    tags: ["Figma", "Mobile UI", "Food App"],
    figmaLink: "https://www.figma.com/design/rnofsNBGqtAIy38Ntbf1P9/project-4?t=XUUWZHrtPiO9F4Ht-1",
  }
];

export default function DesignProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {designPortfolio.map((project, index) => (
        <Tilt
          key={project.id}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.15}
          glareColor="#10b981"
          glarePosition="all"
          scale={1.02}
          className="h-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group shadow-xl flex flex-col h-full"
          >
            {/* ===== الصورة ===== */}
            <div className="relative overflow-hidden flex-shrink-0 bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
className="w-full object-cover object-center h-64 transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* اوفرلاي gradient من تحت */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>

            {/* ===== المحتوى ===== */}
            <div className="p-6 flex flex-col flex-grow">

              {/* أيقونة فوق */}
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl opacity-80 group-hover:opacity-100 transition-opacity">
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <FiFigma className="text-emerald-400 text-sm" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm">
                {project.description}
              </p>

              {/* التاجز */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* الزرار */}
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-700 hover:bg-emerald-600 text-white font-medium rounded-xl transition-all duration-300 w-fit hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <FiFigma className="text-lg" /> View Prototype
              </a>

            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
}