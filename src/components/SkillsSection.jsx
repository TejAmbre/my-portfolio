// // // // // src/components/SkillsSection.jsx
// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
// // // // import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

// // // // const skills = [
// // // //   { icon: <FaReact size={40} color="#61dafb" />, label: "React.js" },
// // // //   { icon: <SiTailwindcss size={40} color="#38b2ac" />, label: "Tailwind CSS" },
// // // //   { icon: <SiJavascript size={40} color="#f7df1e" />, label: "JavaScript" },
// // // //   { icon: <FaNodeJs size={40} color="#68a063" />, label: "Node.js" },
// // // //   { icon: <FaPython size={40} color="#3776ab" />, label: "Python" },
// // // //   { icon: <SiMongodb size={40} color="#4DB33D" />, label: "MongoDB" },
// // // //   { icon: <FaDatabase size={40} color="#f29111" />, label: "SQL" },
// // // // ];

// // // // export default function SkillsSection() {
// // // //   return (
// // // //     <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
// // // //       <h2 className="text-4xl font-bold text-white mb-12 text-center">My Skills</h2>
// // // //       <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
// // // //         {skills.map(({ icon, label }, index) => (
// // // //           <motion.div
// // // //             key={label}
// // // //             className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center shadow-lg cursor-default hover:scale-110 hover:shadow-cyan-500/60 transition-transform"
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
// // // //             title={label}
// // // //           >
// // // //             {icon}
// // // //             <p className="mt-4 text-white text-lg font-semibold">{label}</p>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }










// // // // src/components/SkillsSection.jsx

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import {
// // //   FaPython,
// // //   FaJava,
// // //   FaJsSquare,
// // //   FaHtml5,
// // //   FaCss3Alt,
// // //   FaReact,
// // //   FaNodeJs,
// // //   FaDatabase,
// // //   FaGithub,
// // //   FaChartBar,
// // //   FaPaperPlane,
// // //   FaShareAlt,
// // //   FaCode,
// // //   FaFigma,
// // // } from "react-icons/fa";

// // // const skills = [
// // //   // Languages
// // //   { icon: <FaPython size={40} color="#3776ab" />, label: "Python" },
// // //   { icon: <FaJava size={40} color="#f89820" />, label: "Java" },
// // //   { icon: <FaJsSquare size={40} color="#f7df1e" />, label: "JavaScript" },
// // //   { icon: <FaHtml5 size={40} color="#e34c26" />, label: "HTML" },
// // //   { icon: <FaCss3Alt size={40} color="#1572B6" />, label: "CSS" },
// // //   { icon: null, label: "C" },
// // //   { icon: null, label: "C++" },

// // //   // Frameworks/Libraries
// // //   { icon: <FaReact size={40} color="#61dafb" />, label: "React.js" },
// // //   { icon: null, label: "Tailwind CSS" },
// // //   { icon: <FaNodeJs size={40} color="#68a063" />, label: "Node.js" },
// // //   { icon: null, label: "MongoDB" },
// // //   { icon: <FaDatabase size={40} color="#f29111" />, label: "SQL" },
// // //   { icon: null, label: "MERN Stack" },
// // //   { icon: null, label: "Pandas" },
// // //   { icon: null, label: "NumPy" },
// // //   { icon: null, label: "Scikit-learn" },
// // //   { icon: null, label: "TensorFlow" },
// // //   { icon: null, label: "Matplotlib" },
// // //   { icon: null, label: "Fuzzy Logic" },
// // //   { icon: null, label: "Generative AI" },

// // //   // Tools
// // //   { icon: <FaChartBar size={40} color="#F2C811" />, label: "Power BI" },
// // //   { icon: null, label: "Tableau" },
// // //   { icon: null, label: "Google Colab" },
// // //   { icon: null, label: "Jupyter Notebook" },
// // //   { icon: <FaCode size={40} color="#007ACC" />, label: "VS Code" },
// // //   { icon: <FaGithub size={40} color="#171515" />, label: "GitHub" },
// // //   { icon: <FaPaperPlane size={40} color="#FF6C37" />, label: "Postman" },
// // //   { icon: <FaFigma size={40} color="#a259ff" />, label: "Figma" },

// // //   // Databases (redundant entry for visibility)
// // //   { icon: null, label: "MySQL" },

// // //   // Soft Skills
// // //   { icon: null, label: "Analytical Thinking" },
// // //   { icon: null, label: "Problem Solving" },
// // //   { icon: null, label: "Communication" },
// // //   { icon: null, label: "Team Collaboration" },

// // //   // Other
// // //   { icon: <FaShareAlt size={40} color="#1DA1F2" />, label: "Social Media Marketing" },
// // // ];

// // // export default function SkillsSection() {
// // //   return (
// // //     <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
// // //       <h2 className="text-4xl font-bold text-white mb-12 text-center">My Skills</h2>
// // //       <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
// // //         {skills.map(({ icon, label }, index) => (
// // //           <motion.div
// // //             key={label}
// // //             className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center shadow-lg cursor-default hover:scale-110 hover:shadow-cyan-500/60 transition-transform"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ delay: index * 0.07, type: "spring", stiffness: 100 }}
// // //             title={label}
// // //           >
// // //             {icon ? (
// // //               icon
// // //             ) : (
// // //               <span className="text-lg font-semibold text-cyan-400 py-2">{label}</span>
// // //             )}
// // //             <p className="mt-4 text-white text-lg font-semibold text-center">{label}</p>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // import React from "react";
// // import { motion } from "framer-motion";
// // import {
// //   FaPython,
// //   FaJava,
// //   FaJsSquare,
// //   FaHtml5,
// //   FaCss3Alt,
// //   FaReact,
// //   FaNodeJs,
// //   FaDatabase,
// //   FaGithub,
// //   FaChartBar,
// //   FaPaperPlane,
// //   FaShareAlt,
// //   FaCode,
// //   FaFigma,
// //   FaDatabase as FaSql,
// // } from "react-icons/fa";

// // export default function SkillsSection() {
// //   // Skills grouped by category
// //   const skillCategories = [
// //     {
// //       category: "Programming Languages",
// //       skills: [
// //         { icon: <FaPython size={40} color="#3776ab" />, label: "Python" },
// //         { icon: <FaJava size={40} color="#f89820" />, label: "Java" },
// //         { icon: <FaJsSquare size={40} color="#f7df1e" />, label: "JavaScript" },
// //         { icon: <FaHtml5 size={40} color="#e34c26" />, label: "HTML" },
// //         { icon: <FaCss3Alt size={40} color="#1572B6" />, label: "CSS" },
// //         { icon: null, label: "C" },
// //         { icon: null, label: "C++" },
// //       ],
// //     },
// //     {
// //       category: "Frameworks & Libraries",
// //       skills: [
// //         { icon: <FaReact size={40} color="#61dafb" />, label: "React.js" },
// //         { icon: <FaNodeJs size={40} color="#68a063" />, label: "Node.js" },
// //         { icon: null, label: "MERN Stack" },
// //         { icon: null, label: "MongoDB" },
// //         { icon: null, label: "Pandas" },
// //         { icon: null, label: "NumPy" },
// //         { icon: null, label: "Scikit-learn" },
// //         { icon: null, label: "TensorFlow" },
// //         { icon: null, label: "Matplotlib" },
// //         { icon: null, label: "Fuzzy Logic" },
// //         { icon: null, label: "Generative AI" },
// //       ],
// //     },
// //     {
// //       category: "Tools & Platforms",
// //       skills: [
// //         { icon: <FaChartBar size={40} color="#F2C811" />, label: "Power BI" },
// //         { icon: null, label: "Tableau" },
// //         { icon: null, label: "Google Colab" },
// //         { icon: null, label: "Jupyter Notebook" },
// //         { icon: <FaCode size={40} color="#007ACC" />, label: "VS Code" },
// //         { icon: <FaGithub size={40} color="#171515" />, label: "GitHub" },
// //         { icon: <FaPaperPlane size={40} color="#FF6C37" />, label: "Postman" },
// //         { icon: <FaFigma size={40} color="#a259ff" />, label: "Figma" },
// //       ],
// //     },
// //     {
// //       category: "Databases",
// //       skills: [
// //         { icon: <FaSql size={40} color="#f29111" />, label: "SQL" },
// //         { icon: null, label: "MySQL" },
// //       ],
// //     },
// //     {
// //       category: "Soft Skills",
// //       skills: [
// //         { icon: null, label: "Analytical Thinking" },
// //         { icon: null, label: "Problem Solving" },
// //         { icon: null, label: "Communication" },
// //         { icon: null, label: "Team Collaboration" },
// //         { icon: <FaShareAlt size={40} color="#1DA1F2" />, label: "Social Media Marketing" },
// //       ],
// //     },
// //   ];

// //   return (
// //     <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
// //       <h2 className="text-4xl font-bold text-white mb-12 text-center">My Skills</h2>

// //       {skillCategories.map(({ category, skills }, catIndex) => (
// //         <div key={category} className="mb-14">
// //           <h3 className="text-3xl text-cyan-400 font-semibold mb-8 border-b border-cyan-600 pb-2">
// //             {category}
// //           </h3>
// //           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
// //             {skills.map(({ icon, label }, index) => (
// //               <motion.div
// //                 key={label}
// //                 className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center shadow-lg cursor-default hover:scale-110 hover:shadow-cyan-500/60 transition-transform"
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.07, type: "spring", stiffness: 100 }}
// //                 title={label}
// //               >
// //                 {icon ? (
// //                   icon
// //                 ) : (
// //                   <span className="text-lg font-semibold text-cyan-400 py-2">{label}</span>
// //                 )}
// //                 <p className="mt-4 text-white text-lg font-semibold text-center">{label}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </section>
// //   );
// // }



// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaPython, FaJava, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
//   FaDatabase, FaGithub, FaChartBar, FaPaperPlane, FaShareAlt, FaCode,
//   FaFigma, FaBrain, FaProjectDiagram, FaChalkboardTeacher, FaUsers, FaRobot,
//   FaCogs, FaLightbulb, FaThList
// } from "react-icons/fa";
// import { GiArtificialIntelligence } from "react-icons/gi";
// import { TbMathFunction } from "react-icons/tb";

// const skillCategories = [
//   {
//     category: "Programming Languages",
//     skills: [
//       { icon: <FaPython size={40} color="#3776ab" />, label: "Python" },
//       { icon: <FaJava size={40} color="#f89820" />, label: "Java" },
//       { icon: <FaJsSquare size={40} color="#f7df1e" />, label: "JavaScript" },
//       { icon: <FaHtml5 size={40} color="#e34c26" />, label: "HTML" },
//       { icon: <FaCss3Alt size={40} color="#1572B6" />, label: "CSS" },
//       { icon: <FaCode size={40} color="#444" />, label: "C" },
//       { icon: <FaCode size={40} color="#2952A3" />, label: "C++" },
//     ],
//   },
//   {
//     category: "Frameworks & Libraries",
//     skills: [
//       { icon: <FaReact size={40} color="#61dafb" />, label: "React.js" },
//       { icon: <FaNodeJs size={40} color="#68a063" />, label: "Node.js" },
//       { icon: <FaProjectDiagram size={40} color="#507d2a" />, label: "MERN Stack" },
//       { icon: <FaDatabase size={40} color="#13aa52" />, label: "MongoDB" },
//       { icon: <FaCogs size={40} color="#e0e0e0" />, label: "Pandas" },
//       { icon: <FaCogs size={40} color="#00599C" />, label: "NumPy" },
//       { icon: <FaBrain size={40} color="#f7931e" />, label: "Scikit-learn" },
//       { icon: <FaRobot size={40} color="#ea4335" />, label: "TensorFlow" },
//       { icon: <FaChartBar size={40} color="#11557c" />, label: "Matplotlib" },
//       { icon: <TbMathFunction size={40} color="#fcb900" />, label: "Fuzzy Logic" },
//       { icon: <GiArtificialIntelligence size={40} color="#0ff" />, label: "Generative AI" },
//     ],
//   },
//   {
//     category: "Tools & Platforms",
//     skills: [
//       { icon: <FaChartBar size={40} color="#F2C811" />, label: "Power BI" },
//       { icon: <FaChartBar size={40} color="#E97627" />, label: "Tableau" },
//       { icon: <FaRobot size={40} color="#F9AB00" />, label: "Google Colab" },
//       { icon: <FaRobot size={40} color="#F37626" />, label: "Jupyter Notebook" },
//       { icon: <FaCode size={40} color="#007ACC" />, label: "VS Code" },
//       { icon: <FaGithub size={40} color="#171515" />, label: "GitHub" },
//       { icon: <FaPaperPlane size={40} color="#FF6C37" />, label: "Postman" },
//       { icon: <FaFigma size={40} color="#a259ff" />, label: "Figma" },
//     ],
//   },
//   {
//     category: "Databases",
//     skills: [
//       { icon: <FaDatabase size={40} color="#f29111" />, label: "SQL" },
//       { icon: <FaDatabase size={40} color="#3E9CFA" />, label: "MySQL" },
//     ],
//   },
//   {
//     category: "Soft Skills",
//     skills: [
//       { icon: <FaLightbulb size={40} color="#f6e05e" />, label: "Analytical Thinking" },
//       { icon: <FaBrain size={40} color="#7f9cf5" />, label: "Problem Solving" },
//       { icon: <FaChalkboardTeacher size={40} color="#a3a3a3" />, label: "Communication" },
//       { icon: <FaUsers size={40} color="#5eead4" />, label: "Team Collaboration" },
//       { icon: <FaShareAlt size={40} color="#1DA1F2" />, label: "Social Media Marketing" },
//     ],
//   },
// ];

// export default function SkillsSection() {
//   return (
//     <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
//       <h2 className="text-4xl font-bold text-white mb-12 text-center">My Skills</h2>
//       {skillCategories.map(({ category, skills }, catIndex) => (
//         <div key={category} className="mb-14">
//           <h3 className="text-3xl text-cyan-400 font-semibold mb-8 border-b border-cyan-600 pb-2">
//             {category}
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//             {skills.map(({ icon, label }, index) => (
//               <motion.div
//                 key={label}
//                 className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center shadow-lg cursor-default hover:scale-110 hover:shadow-cyan-500/60 transition-transform"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.07, type: 'spring', stiffness: 100 }}
//                 title={label}
//               >
//                 {icon}
//                 <p className="mt-4 text-white text-lg font-semibold text-center">{label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }








// src/components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaChartBar,
  FaPaperPlane,
  FaShareAlt,
  FaCode,
  FaFigma,
  FaDatabase as FaSqlDb,
  FaCogs,
  FaRobot,
  FaLightbulb,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { icon: <FaPython size={40} color="#3776ab" />, label: "Python" },
        { icon: <FaJava size={40} color="#f89820" />, label: "Java" },
        { icon: <FaJsSquare size={40} color="#f7df1e" />, label: "JavaScript" },
        { icon: <FaHtml5 size={40} color="#e34c26" />, label: "HTML" },
        { icon: <FaCss3Alt size={40} color="#1572B6" />, label: "CSS" },
        { icon: <FaCode size={40} color="#555555" />, label: "C" },
        { icon: <FaCode size={40} color="#2952A3" />, label: "C++" },
        { icon: <FaCogs size={40} color="#38b2ac" />, label: "Tailwind CSS" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { icon: <FaReact size={40} color="#61dafb" />, label: "React.js" },
        { icon: <FaNodeJs size={40} color="#68a063" />, label: "Node.js" },
        { icon: <FaDatabase size={40} color="#4DB33D" />, label: "MERN Stack" },
        { icon: <FaDatabase size={40} color="#13aa52" />, label: "MongoDB" },
        { icon: <FaCogs size={40} color="#e0e0e0" />, label: "Pandas" },
        { icon: <FaCogs size={40} color="#00599C" />, label: "NumPy" },
        { icon: <FaLightbulb size={40} color="#f7931e" />, label: "Scikit-learn" },
        { icon: <FaRobot size={40} color="#ea4335" />, label: "TensorFlow" },
        { icon: <FaChartBar size={40} color="#11557c" />, label: "Matplotlib" },
        { icon: <FaLightbulb size={40} color="#fcb900" />, label: "Fuzzy Logic" },
        { icon: <FaRobot size={40} color="#0ff" />, label: "Generative AI" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { icon: <FaChartBar size={40} color="#F2C811" />, label: "Power BI" },
        { icon: <FaChartLine size={40} color="#E97627" />, label: "Tableau" },
        { icon: <FaRobot size={40} color="#F9AB00" />, label: "Google Colab" },
        { icon: <FaRobot size={40} color="#F37626" />, label: "Jupyter Notebook" },
        { icon: <FaCode size={40} color="#007ACC" />, label: "VS Code" },
        { icon: <FaGithub size={40} color="#171515" />, label: "GitHub" },
        { icon: <FaPaperPlane size={40} color="#FF6C37" />, label: "Postman" },
        { icon: <FaFigma size={40} color="#a259ff" />, label: "Figma" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { icon: <FaSqlDb size={40} color="#f29111" />, label: "SQL" },
        { icon: <FaSqlDb size={40} color="#3E9CFA" />, label: "MySQL" },
      ],
    },
    {
      category: "Soft Skills & Other Skills",
      skills: [
        { icon: <FaLightbulb size={40} color="#f6e05e" />, label: "Analytical Thinking" },
        { icon: <FaLightbulb size={40} color="#7f9cf5" />, label: "Problem Solving" },
        { icon: <FaUsers size={40} color="#a3a3a3" />, label: "Communication" },
        { icon: <FaUsers size={40} color="#5eead4" />, label: "Team Collaboration" },
        { icon: <FaShareAlt size={40} color="#1DA1F2" />, label: "Social Media Marketing" },
      ],
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">My Skills</h2>

      {skillCategories.map(({ category, skills }) => (
        <div key={category} className="mb-16">
          <h3 className="text-3xl text-cyan-400 font-semibold mb-8 border-b border-cyan-600 pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map(({ icon, label }, index) => (
              <motion.div
                key={label}
                className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center shadow-lg cursor-default hover:scale-110 hover:shadow-cyan-500/60 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, type: "spring", stiffness: 100 }}
                title={label}
              >
                {icon}
                <p className="mt-4 text-white text-lg font-semibold text-center">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
