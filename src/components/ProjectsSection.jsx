// // // // src/components/ProjectsSection.jsx
// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// // // const projects = [
// // //   {
// // //     name: "KonneKT.io",
// // //     description: "WhatsApp CRM platform enabling live chat and real-time analytics with a scalable MERN stack. Includes Socket.io integration and responsive dashboard.",
// // //     tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
// // //     github: "https://github.com/yourusername/konnektio",
// // //     demo: "https://konnektio-demo-link.com",
// // //   },
// // //   {
// // //     name: "Netflix Landing Clone",
// // //     description: "Polished, animated recreation of Netflix's homepage. Features modern UI, mobile responsiveness, and engaging scroll effects.",
// // //     tech: ["HTML", "CSS", "JavaScript"],
// // //     github: "https://github.com/yourusername/netflix-clone",
// // //     demo: "https://netflix-clone-demo-link.com",
// // //   },
// // //   {
// // //     name: "Smart Traffic System",
// // //     description: "AI-driven system optimizing urban traffic using genetic algorithms and fuzzy logic. Visualizes congestion in real time and simulates intervention impacts.",
// // //     tech: ["Python", "Machine Learning", "GA", "Fuzzy Logic"],
// // //     github: "https://github.com/yourusername/smart-traffic",
// // //     demo: "",
// // //   },
// // //   // Add more projects as desired
// // // ];

// // // export default function ProjectsSection() {
// // //   return (
// // //     <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
// // //       <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
// // //         {projects.map((project, i) => (
// // //           <motion.div
// // //             key={project.name}
// // //             className="bg-[rgba(20,20,40,0.80)] backdrop-blur-md rounded-xl shadow-lg p-7 flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-cyan-500/50 group"
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ delay: i * 0.14, type: "spring", stiffness: 120 }}
// // //           >
// // //             <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">{project.name}</h3>
// // //             <p className="text-gray-200 text-base">{project.description}</p>
// // //             <div className="flex flex-wrap gap-2 mt-2">
// // //               {project.tech.map(tech => (
// // //                 <span
// // //                   key={tech}
// // //                   className="px-3 py-1 text-xs bg-cyan-700/40 text-cyan-200 rounded-full font-medium"
// // //                 >
// // //                   {tech}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <div className="flex gap-4 mt-3">
// // //               {project.github && (
// // //                 <a
// // //                   href={project.github}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
// // //                   aria-label="GitHub"
// // //                 >
// // //                   <FaGithub /> Code
// // //                 </a>
// // //               )}
// // //               {project.demo && (
// // //                 <a
// // //                   href={project.demo}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition-colors"
// // //                   aria-label="Live Demo"
// // //                 >
// // //                   <FaExternalLinkAlt /> Demo
// // //                 </a>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // // src/components/ProjectsSection.jsx
// // import React from "react";
// // import { motion } from "framer-motion";
// // import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// // const projects = [
// //   {
// //     name: "Netflix Clone",
// //     description:
// //       "Designed and developed a fully responsive Netflix landing page clone using HTML and CSS with animations and UI enhancements for improved visual aesthetics and UX.",
// //     tech: ["HTML", "CSS", "JavaScript"],
// //     github: "", // Add your GitHub repo link if any
// //     demo: "",  // Add your live demo link if any
// //   },
// //   {
// //     name: "Smart Traffic Management System",
// //     description:
// //       "Proposed a hybrid AI model using Genetic Algorithms and Fuzzy Logic to dynamically optimize traffic flow and reduce congestion in urban settings.",
// //     tech: ["Python", "Genetic Algorithms", "Fuzzy Logic", "AI"],
// //     github: "", // Add your GitHub repo link if any
// //     demo: "",  // Add your live demo link if any
// //   },
// // ];

// // export default function ProjectsSection() {
// //   return (
// //     <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
// //       <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
// //         {projects.map((project, i) => (
// //           <motion.div
// //             key={project.name}
// //             className="bg-[rgba(20,20,40,0.80)] backdrop-blur-md rounded-xl shadow-lg p-7 flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-cyan-500/50 group"
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: i * 0.14, type: "spring", stiffness: 120 }}
// //           >
// //             <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
// //               {project.name}
// //             </h3>
// //             <p className="text-gray-200 text-base">{project.description}</p>
// //             <div className="flex flex-wrap gap-2 mt-2">
// //               {project.tech.map((tech) => (
// //                 <span
// //                   key={tech}
// //                   className="px-3 py-1 text-xs bg-cyan-700/40 text-cyan-200 rounded-full font-medium"
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>
// //             <div className="flex gap-4 mt-3">
// //               {project.github && (
// //                 <a
// //                   href={project.github}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
// //                   aria-label="GitHub"
// //                 >
// //                   <FaGithub /> Code
// //                 </a>
// //               )}
// //               {project.demo && (
// //                 <a
// //                   href={project.demo}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition-colors"
// //                   aria-label="Live Demo"
// //                 >
// //                   <FaExternalLinkAlt /> Demo
// //                 </a>
// //               )}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }








// // src/components/ProjectsSection.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     name: "Netflix Clone",
//     type: "Personal Project",
//     description:
//       "Designed and developed a fully responsive Netflix landing page clone using HTML and CSS with animations and UI enhancements for improved visual aesthetics and UX.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     github: "", // Add your GitHub repo link if any
//     demo: "",   // Add your live demo link if any
//   },
//   {
//     name: "Smart Traffic Management System",
//     type: "College Project",
//     description:
//       "Proposed a hybrid AI model using Genetic Algorithms and Fuzzy Logic to dynamically optimize traffic flow and reduce congestion in urban settings.",
//     tech: ["Python", "Genetic Algorithms", "Fuzzy Logic", "AI"],
//     github: "", // Add your GitHub repo link if any
//     demo: "",   // Add your live demo link if any
//   },
// ];

// export default function ProjectsSection() {
//   return (
//     <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
//       <h2 className="text-4xl font-bold text-white mb-12 text-center">
//         Projects
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//         {projects.map((project, i) => (
//           <motion.div
//             key={project.name}
//             className="bg-[rgba(20,20,40,0.80)] backdrop-blur-md rounded-xl shadow-lg p-7 flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-cyan-500/50 group"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.14, type: "spring", stiffness: 120 }}
//           >
//             <div className="flex items-center gap-2">
//               <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
//                 {project.name}
//               </h3>
//               <span
//                 className={`ml-2 text-xs px-2 py-1 rounded-full font-semibold
//                   ${
//                     project.type === "Personal Project"
//                       ? "bg-cyan-600 text-white"
//                       : "bg-emerald-600 text-white"
//                   }
//                 `}
//               >
//                 {project.type}
//               </span>
//             </div>
//             <p className="text-gray-200 text-base">{project.description}</p>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {project.tech.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 text-xs bg-cyan-700/40 text-cyan-200 rounded-full font-medium"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="flex gap-4 mt-3">
//               {project.github && (
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
//                   aria-label="GitHub"
//                 >
//                   <FaGithub /> Code
//                 </a>
//               )}
//               {project.demo && (
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition-colors"
//                   aria-label="Live Demo"
//                 >
//                   <FaExternalLinkAlt /> Demo
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }





















// src/components/ProjectsSection.jsx
// src/components/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Netflix Clone",
    type: "Personal",
    description:
      "Developed a feature-rich, fully responsive Netflix landing page clone using HTML, CSS, and JavaScript, incorporating smooth animations and an intuitive UI to closely mimic the look and feel of the original streaming platform.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/TejAmbre/Netflix-Clone",
    demo: "", // Add live demo link if available
  },
  {
    name: "Smart Traffic Management System",
    type: "College",
    description:
      "Designed an intelligent traffic management system leveraging hybrid AI techniques such as Genetic Algorithms and Fuzzy Logic to dynamically optimize signal timings, improve traffic flow, and reduce urban congestion.",
    tech: ["Python", "Genetic Algorithms", "Fuzzy Logic", "AI"],
    github: "https://github.com/TejAmbre/AI-Based-Traffic-Congestion-System",
    demo: "", // Add live demo link if available
  },
  {
    name: "Portfolio Website",
    type: "Personal",
    description:
      "Built a modern, animated personal portfolio website using React, Framer Motion, and Tailwind CSS. Features a live galaxy-themed hero background, interactive navigation, smooth transitions, and clean responsive layouts to beautifully showcase my projects, skills, and experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    github: "", // Add your GitHub repo link if any
    demo: "",  // Add your live portfolio link if any
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="bg-[rgba(20,20,40,0.80)] backdrop-blur-md rounded-xl shadow-lg p-7 flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-cyan-500/50 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.14, type: "spring", stiffness: 120 }}
          >
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {project.name}
              </h3>
              <span
                className={`ml-2 text-xs px-2 py-1 rounded-full font-semibold
                  ${
                    project.type === "Personal Project"
                      ? "bg-cyan-600 text-white"
                      : "bg-emerald-600 text-white"
                  }
                `}
              >
                {project.type}
              </span>
            </div>
            <p className="text-gray-200 text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-cyan-700/40 text-cyan-200 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition-colors"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
