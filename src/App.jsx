import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground'; // استدعينا الخلفية

function App() {
  return (
    // خلينا الـ div ده relative z-0 عشان الخلفية تفضل ورا خالص
    <div className="relative z-0 bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* حطينا الخلفية هنا */}
      <ParticleBackground /> 
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;