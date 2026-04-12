import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // استدعينا مكتبة الـ 3D
import myPhoto from '../assets/2.jpg'; // عدلنا دي عشان تستدعي الصورة الجديدة 2.jpg

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* تفاصيل عنك (الناحية الشمال) */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-emerald-500 font-semibold tracking-wide text-lg md:text-xl uppercase">
            Hello, World! 
          </motion.h2>
          
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-tight">
            I'm a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Full-Stack
            </span> Developer.
          </motion.h1>
          
          <motion.p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            Crafting responsive and dynamic web applications. Building complete solutions ready for the real world.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            
            {/* الزرار الأول: تأثير السائل واللمعان */}
            <a 
              href="#projects" 
              className="relative group overflow-hidden px-8 py-3 rounded-full bg-slate-800 text-white font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
              <span className="absolute -inset-full w-1/2 h-full block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shine z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">View Projects</span>
            </a>

            {/* الزرار التاني */}
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-transparent border border-slate-600 hover:border-emerald-500 text-gray-300 hover:text-white font-medium transition-all hover:bg-emerald-500/10"
            >
              Contact Me
            </a>

          </motion.div>
        </motion.div>

        {/* الصورة التفاعلية (الناحية اليمين) */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* تأثير الـ Tilt و الـ Parallax على الصورة */}
          {/* تأثير الـ Tilt و الـ Parallax على الصورة */}
          <Tilt 
            className="w-72 h-72 md:w-96 md:h-96" 
            tiltMaxAngleX={10} 
            tiltMaxAngleY={10} 
            perspective={1000}
            scale={1.02} 
            transitionSpeed={2500} 
            gyroscope={true}
            glareEnable={true} 
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
          >
            {/* 1. قللنا الـ padding هنا لـ p-1 عشان المساحة تضيق */}
            <div className="relative w-full h-full bg-slate-900/60 backdrop-blur-md rounded-full overflow-hidden shadow-2xl flex items-center justify-center p-1">
              
              {/* 2. الخط الدوار (اللون البنفسجي الفخم من غير تغبيش عشان يبان رفيع وحاد) */}
              <span className="absolute inset-0 z-0 animate-[spin_3s_linear_infinite]">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
              </span>

              {/* 3. كبرنا مساحة الصورة لـ 98% عشان تقفل على الخط وتخليه أرفع */}
              <div className="relative z-20 w-[98%] h-[98%] bg-slate-800 rounded-full overflow-hidden shadow-inner flex items-center justify-center">
                
                <img src={myPhoto} alt="Mohammed" className="object-cover w-full h-full rounded-full" />
                
              </div>
            </div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
}