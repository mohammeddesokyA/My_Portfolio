import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        // هنا السر: خلينا الفول سكرين تشتغل وتاخد الـ z-index تحت خالص
        fullScreen: { enable: true, zIndex: -1 }, 
        // حطينا لون الموقع الأساسي هنا
        background: { color: { value: "#020617" } }, 
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: { value: "#3b82f6" },
          links: { color: "#3b82f6", distance: 150, enable: true, opacity: 0.2, width: 1 },
          move: { enable: true, speed: 1, direction: "none", random: true, straight: false, outModes: { default: "bounce" } },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}