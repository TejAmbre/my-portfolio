// // // // // import React from "react";
// // // // // import Particles from "react-particles";
// // // // // import { loadFull } from "tsparticles";
// // // // // import { motion } from "framer-motion";

// // // // // export default function HeroSection() {
// // // // //   const particlesInit = async (main) => {
// // // // //     await loadFull(main); // This loads the particles preset
// // // // //   };

// // // // //   const particlesOptions = {
// // // // //     background: { color: { value: "#181038" } },
// // // // //     fpsLimit: 60,
// // // // //     interactivity: {
// // // // //       events: {
// // // // //         onClick: { enable: true, mode: "push" },
// // // // //         onHover: { enable: true, mode: "repulse" },
// // // // //         resize: true,
// // // // //       },
// // // // //       modes: {
// // // // //         push: { quantity: 4 },
// // // // //         repulse: { distance: 100, duration: 0.4 },
// // // // //       },
// // // // //     },
// // // // //     particles: {
// // // // //       color: { value: "#ffffff" },
// // // // //       links: {
// // // // //         color: "#6c63ff",
// // // // //         distance: 150,
// // // // //         enable: true,
// // // // //         opacity: 0.5,
// // // // //         width: 1,
// // // // //       },
// // // // //       collisions: { enable: true },
// // // // //       move: { direction: "none", enable: true, speed: 2, outModes: { default: "bounce" } },
// // // // //       number: { value: 60, density: { enable: true, area: 800 } },
// // // // //       opacity: { value: 0.5 },
// // // // //       shape: { type: "circle" },
// // // // //       size: { value: { min: 1, max: 5 } },
// // // // //     },
// // // // //     detectRetina: true,
// // // // //   };

// // // // //   return (
// // // // //     <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#181038] via-[#232046] to-[#0f0c26] text-white overflow-hidden">
// // // // //       {/* Particles Background */}
// // // // //       <Particles
// // // // //         id="tsparticles"
// // // // //         init={particlesInit}
// // // // //         options={particlesOptions}
// // // // //         className="absolute inset-0 -z-10"
// // // // //       />

// // // // //       {/* Hero Content */}
// // // // //       <motion.div
// // // // //         className="text-center px-6 max-w-4xl"
// // // // //         initial={{ opacity: 0, y: 20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 1 }}
// // // // //       >
// // // // //         <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 drop-shadow-lg">
// // // // //           Hi, I&apos;m <span className="text-cyan-400">Tej Ambre</span>
// // // // //         </h1>
// // // // //         <p className="text-xl sm:text-2xl mb-8 max-w-xl mx-auto drop-shadow-md">
// // // // //           Electronics & Computer Science undergrad passionate about AI, ML, and building scalable web solutions.
// // // // //         </p>
// // // // //         <a
// // // // //           href="/resume.pdf"
// // // // //           download
// // // // //           className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
// // // // //         >
// // // // //           Download Resume
// // // // //         </a>
// // // // //       </motion.div>
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // import React, { useCallback } from "react";
// // // // import Particles from "react-tsparticles";
// // // // import { loadStarsPreset } from "tsparticles-preset-stars";
// // // // import { motion } from "framer-motion";

// // // // export default function HeroSection() {
// // // //   // Initialize the particles engine with the Stars preset
// // // //   const particlesInit = useCallback(async (main) => {
// // // //     await loadStarsPreset(main);
// // // //   }, []);

// // // //   return (
// // // //     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a112b] via-[#232046] to-[#0e1130] overflow-hidden">
// // // //       <Particles
// // // //         id="tsparticles"
// // // //         init={particlesInit}
// // // //         options={{
// // // //           preset: "stars",
// // // //           fullScreen: { enable: false },
// // // //           particles: {
// // // //             number: { value: 160 },
// // // //             color: { value: "#fff" },
// // // //             opacity: { value: 0.8, random: true },
// // // //             size: { value: { min: 1, max: 3 }, random: true },
// // // //             move: { enable: true, speed: 0.2, direction: "none", parallax: { enable: true, force: 30, smooth: 10 } },
// // // //             twinkle: { particles: { enable: true, color: "#c0a0f7", frequency: 0.01 } }
// // // //           },
// // // //           background: { color: "#181038" },
// // // //           interactivity: {
// // // //             events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: false } },
// // // //             modes: { repulse: { distance: 90 } }
// // // //           },
// // // //         }}
// // // //         className="absolute inset-0 -z-10"
// // // //       />

// // // //       {/* Hero content */}
// // // //       <motion.div
// // // //         className="text-center px-6 max-w-4xl"
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 1 }}
// // // //       >
// // // //         <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 drop-shadow-lg">
// // // //           Welcome to My <span className="text-cyan-400">Portfolio</span>
// // // //         </h1>
// // // //         <p className="text-xl sm:text-2xl mb-8 max-w-xl mx-auto">
// // // //           Explore my work in a universe of code, creativity, and data.
// // // //         </p>
// // // //         <a
// // // //           href="/resume.pdf"
// // // //           download
// // // //           className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
// // // //         >
// // // //           Download Resume
// // // //         </a>
// // // //       </motion.div>
// // // //     </section>
// // // //   );
// // // // }





// // // import React, { useCallback } from "react";
// // // import Particles from "react-tsparticles";
// // // import { loadStarsPreset } from "tsparticles-preset-stars";

// // // export default function HeroSection() {
// // //   const particlesInit = useCallback(async (engine) => {
// // //     await loadStarsPreset(engine);
// // //   }, []);

// // //   return (
// // //     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a112b] via-[#232046] to-[#0e1130] overflow-hidden">
// // //       {/* Live Galaxy/Starfield */}
// // //       <Particles
// // //         id="tsparticles"
// // //         init={particlesInit}
// // //         options={{
// // //           preset: "stars",
// // //           fullScreen: { enable: false },
// // //         }}
// // //         className="absolute inset-0 -z-10"
// // //       />

// // //       <div className="text-center px-6 max-w-4xl z-10">
// // //         <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
// // //           Welcome to My{" "}
// // //           <span className="text-cyan-400 block">Portfolio</span>
// // //         </h1>
// // //         <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto text-white drop-shadow md:drop-shadow-lg">
// // //           Explore my work in a universe of code, creativity, and data.
// // //         </p>
// // //         <a
// // //           href="/resume.pdf"
// // //           download
// // //           className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
// // //         >
// // //           Download Resume
// // //         </a>
// // //       </div>
// // //     </section>
// // //   );
// // // }




// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadStarsPreset } from "tsparticles-preset-stars";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadStarsPreset(engine);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a112b] via-[#232046] to-[#0e1130] overflow-hidden">
//       {/* Live Galaxy/Starfield */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           preset: "stars",
//           fullScreen: { enable: false },
//         }}
//         className="absolute inset-0 -z-10"
//       />

//       <motion.div
//         className="text-center px-6 max-w-4xl z-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
//           Welcome to My <span className="text-cyan-400 block">Portfolio</span>
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto text-white drop-shadow md:drop-shadow-lg">
//           Explore my work in a universe of code, creativity, and data.
//         </p>
//         <a
//           href="/resume.pdf"
//           download
//           className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
//         >
//           Download Resume
//         </a>
//       </motion.div>
//     </section>
//   );
// }




import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { motion } from "framer-motion";
import Resume from "../assets/Resume_Tej.pdf";

export default function HeroSection() {
  // Initialize the particles engine with the stars preset
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a112b] via-[#232046] to-[#0e1130] overflow-hidden">
      {/* Live Galaxy/Starfield Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "stars",
          fullScreen: { enable: false }, // confined to this section only
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Animated Hero Content */}
      <motion.div
        className="text-center px-6 max-w-4xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
          Welcome to My <span className="text-cyan-400 block">Portfolio</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto text-white drop-shadow md:drop-shadow-lg">
          Explore my work in a universe of code, creativity, and data.
        </p>

        {/* Buttons Container */}
        <div className="flex justify-center gap-6">
          {/* Download Resume button */}
          <a
            href={Resume}
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
          >
            Download Resume
          </a>

          {/* Contact Me button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-transparent border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 font-semibold py-3 px-8 rounded shadow-lg transition cursor-pointer "
          >
            Contact Me
          </a>


        </div>
      </motion.div>
    </section>
  );
}







// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadStarsPreset } from "tsparticles-preset-stars";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   // Initialize the particles engine with the stars preset
//   const particlesInit = useCallback(async (engine) => {
//     await loadStarsPreset(engine);
//   }, []);

//   // Reusable smooth scroll function
//   const smoothScrollTo = (id, e) => {
//     e.preventDefault();
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a112b] via-[#232046] to-[#0e1130] overflow-hidden px-6">
//       {/* Live Galaxy/Starfield Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           preset: "stars",
//           fullScreen: { enable: false }, // confined to this section only
//         }}
//         className="absolute inset-0 -z-10"
//       />

//       {/* Animated Hero Content */}
//       <motion.div
//         className="text-center max-w-4xl z-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
//           Welcome to My <span className="text-cyan-400 block">Portfolio</span>
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto text-white drop-shadow md:drop-shadow-lg">
//           Explore my work in a universe of code, creativity, and data.
//         </p>

//         {/* Primary Buttons Container */}
//         <div className="flex justify-center gap-6 mb-10">
//           {/* Download Resume button */}
//           <a
//             href="/resume.pdf"
//             download
//             className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
//           >
//             Download Resume
//           </a>

//           {/* Contact Me button */}
//           <a
//             href="#contact"
//             onClick={(e) => smoothScrollTo("contact", e)}
//             className="inline-block bg-transparent border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 font-semibold py-3 px-8 rounded shadow-lg transition cursor-pointer"
//           >
//             Contact Me
//           </a>
//         </div>

//         {/* Additional Section Navigation Buttons */}
//         <div className="flex justify-center gap-6 max-w-3xl mx-auto mt-10 overflow-x-auto">
//           {[
//             { label: "About", id: "about" },
//             { label: "Skills", id: "skills" },
//             { label: "Projects", id: "projects" },
//             { label: "Experience", id: "experience" },
//             { label: "Extracurricular", id: "extracurricular" },
//           ].map(({ label, id }) => (
//             <button
//               key={id}
//               onClick={(e) => {
//                 e.preventDefault();
//                 const el = document.getElementById(id);
//                 if (el) el.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="px-6 py-2 rounded-full border-2 border-cyan-400 bg-gradient-to-r from-cyan-900 to-cyan-700 text-cyan-200 hover:bg-cyan-400 hover:text-white hover:border-white shadow-md transition font-semibold text-base tracking-wide focus:outline-none focus:ring-2 focus:ring-cyan-400"
//               style={{ marginBottom: '0' }}
//             >
//               {label}
//             </button>
//           ))}
//         </div>

//       </motion.div>
//     </section>
//   );
// }
