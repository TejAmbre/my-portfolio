// // src/components/CertificationSection.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const certifications = [
//   {
//     title: "Power BI for Beginners",
//     issuer: "Simplilearn by Microsoft",
//     date: "2024",
//     description:
//       ".",
//     credentialUrl: "powerbi-microsoft.pdf", 
//   },
//   {
//     title: "Python for Machine Learning and Data Science",
//     issuer: "Udemy",
//     date: "2024",
//     description:
//       "Completed an in-depth course on Python programming focused on machine learning algorithms and data science techniques.",
//     credentialUrl: "python-ml.pdf", // Add your credential URL if available
//   },
//   {
//     title: "AI and Data Scientist",
//     issuer: "OneRoadMap",
//     date: "2024",
//     description:
//       "Gained practical skills in artificial intelligence and data science methodologies including data processing, modeling, and AI applications.",
//     credentialUrl: "ai-data-scientist.pdf", // Add your credential URL if available
//   },
//   {
//     title: "AI Engineer",
//     issuer: "OneRoadMap",
//     date: "2024",
//     description:
//       "Completed comprehensive AI engineering training covering model development, deployment, and real-time AI systems.",
//     credentialUrl: "ai-engineer.pdf", // Add your credential URL if available
//   },
//   {
//     title: "Advanced Structured Query Language (SQL)",
//     issuer: "Skill Nation",
//     date: "2024",
//     description:
//       "Mastered advanced SQL concepts and queries for efficient data retrieval and manipulation in relational databases.",
//     credentialUrl: "sql.pdf", // Add your credential URL if available
//   },
//   {
//     title: "Microcontroller Architecture and Applications",
//     issuer: "IIT Bombay",
//     date: "2023",
//     description:
//       "Studied microcontroller architectures, programming, and practical applications in embedded systems.",
//     credentialUrl: "mcu-iitb.pdf", // Add your credential URL if available
//   },
//   {
//     title: "Data Structures and Algorithms with C++",
//     issuer: "Letsupgrade",
//     date: "2023",
//     description:
//       "Completed an extensive course on data structures and algorithmic problem-solving techniques using C++.",
//     credentialUrl: "dsa-cpp.pdf", // Add your credential URL if available
//   },
//   {
//     title: "Social Media Marketing",
//     issuer: "Letsupgrade",
//     date: "2023",
//     description:
//       "Learned effective strategies and tools for marketing through social media platforms to engage and grow audiences.",
//     credentialUrl: "smm.pdf", // Add your credential URL if available
//   },
// ];

// export default function CertificationSection() {
//   return (
//     <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
//       <h2 className="text-4xl font-bold text-white mb-12 text-center">
//         Certifications
//       </h2>

//       <div className="space-y-10">
//         {certifications.map((cert, idx) => (
//           <motion.div
//             key={cert.title}
//             className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-all flex flex-col"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.2, type: "spring", duration: 0.6 }}
//           >
//             <div className="flex items-center gap-4">
//               <h3 className="text-2xl text-cyan-400 font-semibold flex-grow">
//                 {cert.title}
//               </h3>
//               {cert.credentialUrl && (
//                 <a
//                   href={cert.credentialUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md text-sm font-semibold transition"
//                   aria-label={`View certificate for ${cert.title}`}
//                 >
//                   View Certificate
//                 </a>
//               )}
//             </div>

//             <p className="text-gray-400 italic mb-2">
//               {cert.issuer} &nbsp;|&nbsp; {cert.date}
//             </p>
//             <p className="text-gray-200 mt-2">{cert.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }




// src/components/CertificationSection.jsx
import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Power BI for Beginners",
    issuer: "Simplilearn by Microsoft",
    date: "2024",
    description: [
      "Completed a comprehensive course on Power BI fundamentals.",
      "Gained hands-on experience with data connection, cleansing, and transformation.",
      "Designed interactive dashboards and business-ready visualizations.",
      "Developed skills to extract actionable insights and improve reporting.",
    ],
    credentialUrl: "powerbi-microsoft.pdf",
  },
  {
    title: "Python for Machine Learning and Data Science",
    issuer: "Udemy",
    date: "2024",
    description: [
      "Studied Python programming tailored for data science and ML workflows.",
      "Learned data preprocessing, visualization, and model development.",
      "Gained hands-on experience with libraries such as NumPy, Pandas, and Scikit-learn.",
      "Built and evaluated predictive machine learning models.",
    ],
    credentialUrl: "python-ml.pdf",
  },
  {
    title: "AI and Data Scientist",
    issuer: "OneRoadMap",
    date: "2024",
    description: [
      "Acquired data preparation and advanced AI modeling skills.",
      "Trained in supervised and unsupervised machine learning techniques.",
      "Applied analytics to real-world datasets and deployment scenarios.",
    ],
    credentialUrl: "ai-data-scientist.pdf",
  },
  {
    title: "AI Engineer",
    issuer: "OneRoadMap",
    date: "2024",
    description: [
      "Completed advanced AI engineering training including deep learning.",
      "Focused on AI model optimization and scalable deployment.",
      "Gained experience with real-time ML system integration.",
    ],
    credentialUrl: "ai-engineer.pdf",
  },
  {
    title: "Advanced Structured Query Language (SQL)",
    issuer: "Skill Nation",
    date: "2024",
    description: [
      "Mastered complex SQL queries, joins, and database management.",
      "Optimized data retrieval and manipulation in relational databases.",
      "Enhanced skills for analytical data processing.",
    ],
    credentialUrl: "sql.pdf",
  },
  {
    title: "Microcontroller Architecture and Applications",
    issuer: "IIT Bombay",
    date: "2023",
    description: [
      "Studied microcontroller architectures and embedded programming.",
      "Explored practical applications in electronics and embedded systems.",
    ],
    credentialUrl: "mcu-iitb.pdf",
  },
  {
    title: "Data Structures and Algorithms with C++",
    issuer: "Letsupgrade",
    date: "2023",
    description: [
      "Developed proficiency in core data structures and algorithms.",
      "Practiced coding efficient algorithms and solving computational problems.",
    ],
    credentialUrl: "dsa-cpp.pdf",
  },
  {
    title: "Social Media Marketing",
    issuer: "Letsupgrade",
    date: "2023",
    description: [
      "Learned strategies for audience engagement on social media platforms.",
      "Covered content creation, campaign management, and performance analytics.",
    ],
    credentialUrl: "smm.pdf",
  },
];

export default function CertificationSection() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Certifications
      </h2>
      <div className="space-y-10">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-all flex flex-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, type: "spring", duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <h3 className="text-2xl text-cyan-400 font-semibold flex-grow">
                {cert.title}
              </h3>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md text-sm font-semibold transition"
                  aria-label={`View certificate for ${cert.title}`}
                >
                  View Certificate
                </a>
              )}
            </div>
            <p className="text-gray-400 italic mb-2">
              {cert.issuer} &nbsp;|&nbsp; {cert.date}
            </p>
            <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
              {cert.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
