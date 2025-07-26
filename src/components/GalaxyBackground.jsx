import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function GalaxyBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 160 },
          color: { value: "#fff" },
          opacity: { value: 0.8, random: true },
          size: { value: { min: 1, max: 3 }, random: true },
          move: { 
            enable: true,
            speed: 0.2,
            direction: "none",
            parallax: { enable: true, force: 30, smooth: 10 }
          },
          twinkle: {
            particles: { enable: true, color: "#c0a0f7", frequency: 0.01 }
          }
        },
        background: { color: "#0a04248a" },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false }
          },
          modes: {
            repulse: { distance: 90 }
          }
        }
      }}
      className="fixed inset-0 z-[-1]"
    />
  );
}
