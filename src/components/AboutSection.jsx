// src/components/AboutSection.jsx
// import React from "react";
// import profilePic from "../assets/profile.jpg";

// export default function AboutSection() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <section
//             id="about"
//             className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center"
//         >
//             <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-cyan-400 shadow-lg">
//                 {/* Replace below src with your own profile photo */}
//                 <img
//                     src={profilePic}
//                     alt="Tej Ambre"
//                     className="object-cover w-full h-full"
//                 />
//             </div>
//             <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//             <p className="text-xl text-gray-300 leading-relaxed mb-6">
//                 Hi! I’m <span className="text-cyan-400 font-semibold">Tej Ambre</span>, an enthusiastic Electronics & Computer Science undergrad passionate about building beautiful, scalable web solutions and exploring the endless possibilities of AI & ML. My journey so far blends strong software development skills (React, Node.js, MERN stack), data analytics (Power BI, Tableau, SQL), and practical experience through internships and real-world projects.
//             </p>
//             <div className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
//                 <div className="flex-1 text-gray-200">
//                     <h3 className="text-lg font-semibold text-cyan-300 mb-1">Education</h3>
//                     <p>
//                         <span className="font-medium">B.Tech, Electronics & Computer Science</span><br />
//                         Vidyalankar Institute of Technology<br />
//                         <span className="text-gray-400 text-sm">Specialization: AI & ML Honors</span>
//                     </p>
//                 </div>
//                 <div className="flex-1 text-gray-200">
//                     <h3 className="text-lg font-semibold text-cyan-300 mb-1">What drives me?</h3>
//                     <ul className="list-disc list-inside text-left text-gray-200 text-base">
//                         <li>Solving complex problems with code & data</li>
//                         <li>Designing seamless, interactive user experiences</li>
//                         <li>Continuous learning in AI, web tech, and analytics</li>
//                         <li>Teamwork, creativity, and impactful results</li>
//                     </ul>
//                 </div>
//             </div>
//             {/* Modal Overlay for Enlarged Image */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
//                     onClick={() => setIsOpen(false)}
//                 >
//                     <img
//                         src="/profile.jpg"
//                         alt="Tej Ambre enlarged"
//                         className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl border-4 border-cyan-400 transition-all"
//                         onClick={e => e.stopPropagation()} // prevent closing modal when clicking image itself
//                     />
//                     <button
//                         onClick={() => setIsOpen(false)}
//                         className="absolute top-8 right-8 text-white text-3xl font-bold focus:outline-none"
//                         aria-label="Close enlarged image"
//                     >
//                         &times;
//                     </button>
//                 </div>
//             )}
            
//         </section>
//     );
// }






// import React, { useState } from "react";
// import profilePic from "../assets/profile.jpg";

// export default function AboutSection() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section
//       id="about"
//       className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center"
//     >
//       {/* Profile Image */}
//       <div
//         className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-cyan-400 shadow-lg cursor-pointer transition-transform hover:scale-110"
//         onClick={() => setIsOpen(true)}
//         tabIndex={0}
//         aria-label="Enlarge profile photo"
//       >
//         <img
//           src={profilePic}
//           alt="Tej Ambre"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* About Text */}
//       <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//       <p className="text-xl text-gray-300 leading-relaxed mb-6">
//         Hi! I’m <span className="text-cyan-400 font-semibold">Tej Ambre</span>, 
//         an enthusiastic Electronics & Computer Science undergrad passionate about 
//         building beautiful, scalable web solutions and exploring the endless 
//         possibilities of AI & ML. My journey so far blends strong software development 
//         skills (React, Node.js, MERN stack), data analytics (Power BI, Tableau, SQL), 
//         and practical experience through internships and real-world projects.
//       </p>

//       {/* Info Cards */}
//       <div className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
//         {/* Education */}
//         <div className="flex-1 text-gray-200">
//           <h3 className="text-lg font-semibold text-cyan-300 mb-1">Education</h3>
//           <p>
//             <span className="font-medium">B.Tech, Electronics & Computer Science</span><br />
//             Vidyalankar Institute of Technology<br />
//             <span className="text-gray-400 text-sm">Specialization: AI & ML Honors</span>
//           </p>
//         </div>

//         {/* Motivation */}
//         <div className="flex-1 text-gray-200">
//           <h3 className="text-lg font-semibold text-cyan-300 mb-1">What drives me?</h3>
//           <ul className="list-disc list-inside text-left text-gray-200 text-base">
//             <li>Solving complex problems with code & data</li>
//             <li>Designing seamless, interactive user experiences</li>
//             <li>Continuous learning in AI, web tech, and analytics</li>
//             <li>Teamwork, creativity, and impactful results</li>
//           </ul>
//         </div>
//       </div>

//       {/* Modal for enlarged image */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
//           onClick={() => setIsOpen(false)}
//         >
//           <img
//             src={profilePic}
//             alt="Tej Ambre enlarged"
//             className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl border-4 border-cyan-400 transition-all"
//             onClick={(e) => e.stopPropagation()}
//           />
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-8 right-8 text-white text-3xl font-bold focus:outline-none"
//             aria-label="Close enlarged image"
//           >
//             &times;
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assets/profile.jpg";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center"
    >
      {/* Profile Image */}
      <div
        className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-cyan-400 shadow-lg cursor-pointer transition-transform hover:scale-110"
        onClick={() => setIsOpen(true)}
        tabIndex={0}
        aria-label="Enlarge profile photo"
      >
        <img
          src={profilePic}
          alt="Tej Ambre"
          className="object-cover w-full h-full"
        />
      </div>

      {/* About Text */}
      <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
      <p className="text-xl text-gray-300 leading-relaxed mb-6">
        I am <span className="text-cyan-400 font-semibold">Tej Ambre</span>, a driven and detail-oriented Electronics & Computer Science undergraduate with a specialization in AI & ML Honors. I thrive on building innovative web solutions and intelligent systems that blend user-centric design with robust backend logic.
        <br /><br />
        My expertise spans full stack development (MERN stack), data analytics (Power BI, Tableau, SQL), and practical experience gained through internships and simulated business projects. I am passionate about solving real-world problems with a combination of technology and creativity, and value collaboration, adaptability, and continuous learning.
        <br /><br />
        I am actively seeking roles where I can contribute to impactful projects, leverage my strong technical foundation, and grow alongside a motivated team.
      </p>

      {/* Info Cards */}
      <div className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
        {/* Education */}
        <div className="flex-1 text-gray-200">
          <h3 className="text-lg font-semibold text-cyan-300 mb-1">Education</h3>
          <p>
            <span className="font-medium">B.Tech, Electronics & Computer Science</span><br />
            Vidyalankar Institute of Technology<br />
            <span className="text-gray-400 text-sm">Specialization: AI & ML Honors</span>
          </p>
        </div>

        {/* Motivation */}
        <div className="flex-1 text-gray-200">
          <h3 className="text-lg font-semibold text-cyan-300 mb-1">What drives me?</h3>
          <ul className="list-disc list-inside text-left text-gray-200 text-base">
            <li>Delivering reliable and user-friendly web applications</li>
            <li>Uncovering insights through data analytics and visualization</li>
            <li>Continuous skill development in AI, modern web tech, and problem-solving</li>
            <li>Contributing positively to collaborative, high-performing teams</li>
          </ul>
        </div>
      </div>

      {/* Modal for enlarged image with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              key="profilePic"
              src={profilePic}
              alt="Tej Ambre enlarged"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl border-4 border-cyan-400"
              layoutId="profile-pic"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white text-3xl font-bold focus:outline-none"
              aria-label="Close enlarged image"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
