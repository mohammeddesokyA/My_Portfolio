import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import myPhoto from '../assets/1.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent min-h-screen flex items-center relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* عنوان القسم */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          
          {/* الصورة التفاعلية (زي ما طلبتها وماتغيرتش) */}
          <motion.div 
            className="w-full lg:w-5/12 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Tilt 
              className="w-72 h-72 md:w-96 md:h-96" 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              perspective={1000}
              scale={1.02} 
              transitionSpeed={2500} 
              glareEnable={true} 
              glareMaxOpacity={0.1}
            >
              <div className="relative w-full h-full bg-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl p-1 border border-slate-700/50">
                <span className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-[spin_3s_linear_infinite] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></span>
                <div className="relative z-20 w-full h-full bg-slate-900 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
                  <img src={myPhoto} alt="Mohammed" className="object-cover w-full h-full object-top opacity-90 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* النص الاحترافي بتاعك (بتصميم كلين ومودرن) */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* أيقونة اقتباس خفيفة بتدي فخامة */}
            <div className="text-emerald-500/20 text-6xl font-serif mb-[-20px] ml-[-10px]">
              "
            </div>
            
            <h3 className="text-2xl md:text-4xl font-semibold text-white mb-8 leading-snug">
              Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Digital Experiences</span> That Matter.
            </h3>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-emerald-500/30 pl-6">
              Passionate UI and web designer focused on creating smooth, interactive, and user-centered digital experiences. Strong attention to detail, excellent organizational skills, and collaborative mindset combine to deliver clean, efficient, and visually appealing designs that meet both user needs and business goals.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 rounded-full bg-slate-800/50 text-emerald-400 border border-emerald-500/20 text-sm font-medium backdrop-blur-sm">
                User-Centered Design
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-800/50 text-gray-300 border border-slate-700 text-sm font-medium backdrop-blur-sm">
                Clean & Efficient
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-800/50 text-gray-300 border border-slate-700 text-sm font-medium backdrop-blur-sm">
                Business Goals
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/20 text-sm font-medium backdrop-blur-sm">
                Collaborative
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}