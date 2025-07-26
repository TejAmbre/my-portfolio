// // src/components/ExperienceSection.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     role: "Full Stack Web Developer (Intern)",
//     company: "Bharat Intern",
//     timeframe: "Jun 2023 – Jul 2023",
//     description:
//       "Built complete frontend projects like Netflix Clone, Spotify Landing Page, and a temperature converter using HTML, CSS, and JavaScript. Focused on responsiveness and UI design.",
//   },
//   {
//     role: "Data Analyst (Job Simulation)",
//     company: "Accenture Australia (Forage)",
//     timeframe: "Jun 2023 – Jul 2023",
//     description:
//       "Completed an industry-level simulation involving data cleaning, modeling, visualization (Power BI), and stakeholder recommendation analysis.",
//   },
//   {
//     role: "AI Engineer (Certified)",
//     company: "OneRoadMap",
//     timeframe: "Jul 2023",
//     description:
//       "Completed live projects, participated in AI model deployment, and learned production-level ML with real-time data.",
//   },
// ];

// export default function ExperienceSection() {
//   return (
//     <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
//       <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>

//       <div className="space-y-10">
//         {experiences.map((exp, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-[rgba(20,20,40,0.8)] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-all"
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.2, type: "spring", duration: 0.6 }}
//           >
//             <h3 className="text-xl text-cyan-400 font-semibold">{exp.role}</h3>
//             <p className="text-gray-300 font-medium">{exp.company}</p>
//             <p className="text-sm text-gray-400 italic">{exp.timeframe}</p>
//             <p className="mt-3 text-gray-200">{exp.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }






// src/components/ExperienceSection.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Revenew Growth Advisory LLP, Mumbai, India",
    timeframe: "June 2025 – September 2025",
    description:
      "Developed KonneKT.io, a WhatsApp CRM platform leveraging the MERN stack. Built a scalable, responsive frontend using React.js and Tailwind CSS. Integrated real-time chat functionality with Socket.io to enable seamless user interactions.",
  },
  {
    role: "Data Analytics Job Simulation",
    company: "Deloitte",
    timeframe: "July 2025",
    description:
      "Conducted forensic analysis of business datasets to detect anomalies. Created dynamic dashboards using Tableau to visualize investigative results. Utilized Excel for advanced data segmentation to extract actionable insights.",
  },
  {
    role: "Data Analytics and Visualization Job Simulation",
    company: "Accenture",
    timeframe: "April 2025",
    description:
      "Aggregated and processed data from multiple sources to uncover content performance trends. Compiled findings into polished presentations and delivered video-based reports for both internal and client audiences effectively.",
  },
  {
    role: "Business Analytics Job Simulation",
    company: "Tata Consultancy Services",
    timeframe: "March 2025",
    description:
      "Developed insightful visual reports in Power BI and Excel to support stakeholder decisions. Prepared strategic discussion points and data-driven questions for executive meetings. Presented data-driven findings aligned with organizational goals.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-[rgba(20,20,40,0.8)] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-all"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, type: "spring", duration: 0.6 }}
          >
            <h3 className="text-xl text-cyan-400 font-semibold">{exp.role}</h3>
            <p className="text-gray-300 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-400 italic">{exp.timeframe}</p>
            <p className="mt-3 text-gray-200">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
