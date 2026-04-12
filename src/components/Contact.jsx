import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  // بياناتك المستخرجة من الصورة
  const contactData = {
    phone: "+201038375048",
    whatsapp: "201038375048",
    email: "saiddamaty7@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammed-eldamaty",
    github: "https://github.com/mohammeddesokyA",
    location: "Beheira, Egypt"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* WhatsApp */}
          <motion.a 
            href={`https://wa.me/${contactData.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            className="group p-6 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-emerald-500/50 transition-all duration-300 shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl text-emerald-500 group-hover:scale-110 transition-transform">
              <FaWhatsapp />
            </div>
            <div>
              <h3 className="text-white font-bold">WhatsApp</h3>
              <p className="text-gray-400 text-sm mt-1">{contactData.phone}</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            className="group p-6 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-3xl text-blue-500 group-hover:scale-110 transition-transform">
              <FiLinkedin />
            </div>
            <div>
              <h3 className="text-white font-bold">LinkedIn</h3>
              <p className="text-gray-400 text-sm mt-1">mohammed-eldamaty</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a 
            href={`mailto:${contactData.email}`}
            variants={itemVariants}
            className="group p-6 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-purple-500/50 transition-all duration-300 shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl text-purple-500 group-hover:scale-110 transition-transform">
              <FiMail />
            </div>
            <div>
              <h3 className="text-white font-bold">Email</h3>
              <p className="text-gray-400 text-sm mt-1">saiddamaty7@gmail.com</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div 
            variants={itemVariants}
            className="group p-6 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl flex flex-col items-center text-center gap-4 md:col-span-1 lg:col-span-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-3xl text-orange-500">
              <FiMapPin />
            </div>
            <div>
              <h3 className="text-white font-bold">Location</h3>
              <p className="text-gray-400 text-sm mt-1">{contactData.location}</p>
            </div>
          </motion.div>

          {/* GitHub (إضافي للربط الكامل) */}
          <motion.a 
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            className="group p-6 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl flex flex-col items-center text-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-500/10 flex items-center justify-center text-3xl text-gray-300">
              <FiGithub />
            </div>
            <div>
              <h3 className="text-white font-bold">GitHub</h3>
              <p className="text-gray-400 text-sm mt-1">mohammeddesokyA</p>
            </div>
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}