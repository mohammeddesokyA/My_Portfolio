import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ProjectsGrid from "./Projects";
import DesignProjectsGrid from "./DesignProjects";

export default function ProSection() {
  const [showDesign, setShowDesign] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const handleFlip = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setShowDesign((prev) => !prev);
      setFlipping(false);
    }, 400);
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* ===== العنوان ===== */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {!showDesign ? (
              <motion.div
                key="projects-title"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured <span className="text-emerald-500">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
              </motion.div>
            ) : (
              <motion.div
                key="design-title"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  UI/UX <span className="text-emerald-500">Design</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  A showcase of my creative process, wireframes, and
                  high-fidelity prototypes crafted for optimal user experiences.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ===== زرار Toggle ===== */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handleFlip}
            disabled={flipping}
            className="group relative flex items-center gap-4 rounded-full border border-slate-700 bg-slate-900/80 backdrop-blur-sm px-6 py-3 shadow-lg hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 disabled:opacity-50"
          >
            {/* جانب React */}
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${
                !showDesign ? "text-emerald-400" : "text-gray-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.232 23 20.463"
                className="w-5 h-5 fill-current"
              >
                <circle r="2.05" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              <span
                className={`text-sm font-semibold transition-all duration-300 ${
                  !showDesign ? "opacity-100" : "opacity-40"
                }`}
              >
                Projects
              </span>
            </div>

            {/* التراك */}
            <div className="relative w-14 h-7 rounded-full bg-slate-700 border border-slate-600">
              <div className="absolute inset-0 rounded-full bg-emerald-500/20"></div>
              <motion.div
                animate={{ x: showDesign ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50 flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
              </motion.div>
            </div>

            {/* جانب Figma */}
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${
                showDesign ? "text-emerald-400" : "text-gray-500"
              }`}
            >
              <span
                className={`text-sm font-semibold transition-all duration-300 ${
                  showDesign ? "opacity-100" : "opacity-40"
                }`}
              >
                UI/UX
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 38 57"
                className="w-4 h-5 fill-current"
              >
                <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
                <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" />
                <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" />
                <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
                <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
              </svg>
            </div>
          </button>
        </div>

        {/* ===== المحتوى مع الفليب ===== */}
        <AnimatePresence mode="wait">
          {!showDesign ? (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ transformPerspective: 1200 }}
            >
              <ProjectsGrid />
            </motion.div>
          ) : (
            <motion.div
              key="design-grid"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ transformPerspective: 1200 }}
            >
              <DesignProjectsGrid />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
