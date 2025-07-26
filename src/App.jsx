// // // // src/App.jsx
// // // import React from "react";
// // // import Navbar from "./components/Navbar";
// // // import HeroSection from "./components/HeroSection";
// // // import SkillsSection from "./components/SkillsSection";
// // // import ProjectsSection from "./components/ProjectsSection";
// // // import ExperienceSection from "./components/ExperienceSection";
// // // import ContactSection from "./components/ContactSection";
// // // import Footer from "./components/Footer";
// // // import About from "./components/AboutSection"
// // // import AboutSection from "./components/AboutSection";
// // // // Uncomment and configure below if using particles background
// // // // import ParticlesBg from "react-tsparticles";
// // // // import particlesOptions from "./config/particlesOptions";

// // // function App() {
// // //   return (
// // //     <div className="relative min-h-screen bg-gradient-to-br from-[#181038] via-[#232046] to-[#0f0c26] overflow-x-hidden">
// // //       {/* Optional: Animated particle background */}
// // //       {/* <ParticlesBg
// // //         id="particles-bg"
// // //         options={particlesOptions}
// // //         className="absolute inset-0 z-0"
// // //       /> */}
// // //       <div className="relative z-10">
// // //         <Navbar />
// // //         <main className="flex flex-col gap-16">
// // //           <HeroSection />
// // //           <AboutSection/>
// // //           <SkillsSection />
// // //           <ProjectsSection />
// // //           <ExperienceSection />
// // //           <ContactSection />
// // //         </main>
// // //         <Footer />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;



// // // src/App.jsx
// // import React from "react";
// // import Navbar from "./components/Navbar";
// // import AboutSection from "./components/AboutSection";
// // import SkillsSection from "./components/SkillsSection";
// // import ProjectsSection from "./components/ProjectsSection";
// // import ExperienceSection from "./components/ExperienceSection";
// // import ContactSection from "./components/ContactSection";
// // import Footer from "./components/Footer";
// // import HeroSection from "./components/HeroSection";

// // export default function App() {
// //   return (
// //     <div className="scroll-smooth bg-[#181038] text-white min-h-screen">
// //       <Navbar />
// //       <main>
// //         <section id="home">
// //           <HeroSection />
// //         </section>
// //         <section id="about" className="scroll-mt-24">
// //           <AboutSection />
// //         </section>
// //         <section id="skills" className="scroll-mt-24">
// //           <SkillsSection />
// //         </section>
// //         <section id="projects" className="scroll-mt-24">
// //           <ProjectsSection />
// //         </section>
// //         <section id="experience" className="scroll-mt-24">
// //           <ExperienceSection />
// //         </section>
// //         <section id="contact" className="scroll-mt-24">
// //           <ContactSection />
// //         </section>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }






// import React from "react";
// import GalaxyBackground from "./components/GalaxyBackground";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";
// import SkillsSection from "./components/SkillsSection";
// import ProjectsSection from "./components/ProjectsSection";
// import ExperienceSection from "./components/ExperienceSection";
// import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";
// import ExtracurricularSection from "./components/ExtracurricularSection";

// export default function App() {
//   return (
//     <div className="relative min-h-screen text-white">
//       <GalaxyBackground />
//       <Navbar />
//       <main>
//         <section id="home" className="scroll-mt-20">
//           <HeroSection />
//         </section>
//         <section id="about" className="scroll-mt-20">
//           <AboutSection />
//         </section>
//         <section id="skills" className="scroll-mt-20">
//           <SkillsSection />
//         </section>
//         <section id="projects" className="scroll-mt-20">
//           <ProjectsSection />
//         </section>
//         <section id="experience" className="scroll-mt-20">
//           <ExperienceSection />
//         </section>
//         <section id="Extracurricular" className="scroll-mt-20">
//           <ExtracurricularSection />
//         </section>
//         <section id="contact" className="scroll-mt-20">
//           <ContactSection />
//         </section>

//       </main>
//       <Footer />
//     </div>
//   );
// }





import React from "react";
import GalaxyBackground from "./components/GalaxyBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ExtracurricularSection from "./components/ExtracurricularSection";
import CertificationSection from "./components/CertificationSection";

export default function App() {
  return (
    <div className="relative min-h-screen text-white scroll-smooth">
      <GalaxyBackground />
      <Navbar />
      <main>
        <section id="home" className="scroll-mt-20">
          <HeroSection />
        </section>
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>
        <section id="experience" className="scroll-mt-20">
          <ExperienceSection />
        </section>
        <section id="skills" className="scroll-mt-20">
          <SkillsSection />
        </section>
        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>
        <section id="home" className="scroll-mt-20">
          <CertificationSection  />
        </section>
        <section id="extracurricular" className="scroll-mt-20">
          <ExtracurricularSection />
        </section>
        <section id="contact" className="scroll-mt-20 mb-16">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
