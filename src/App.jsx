import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProSection from './components/Pro-Section';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground'; 


function App() {
  return (
    <div className="relative z-0 bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      <ParticleBackground /> 
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProSection /> 
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;