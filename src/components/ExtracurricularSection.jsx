// // src/components/ExtracurricularSection.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const activities = [
//   {
//     title: "Cricket Head",
//     timeframe: "2024 - 2025",
//     description:
//       "Led the college cricket team, managing training sessions, strategizing gameplay, conducting college cricket events smoothly, and inspiring team performance to compete effectively in inter-college championships.",
//   },
// ];

// export default function ExtracurricularSection() {
//   return (
//     <section id="extracurricular" className="max-w-6xl mx-auto px-6 py-16">
//       <h2 className="text-4xl font-bold text-white mb-12 text-center">Extracurricular Activities</h2>

//       <div className="space-y-10">
//         {activities.map((activity, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-all"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.2, type: "spring", duration: 0.6 }}
//           >
//             <h3 className="text-xl text-cyan-400 font-semibold">{activity.title}</h3>
//             <p className="text-gray-400 italic mb-2">{activity.timeframe}</p>
//             <p className="text-gray-200">{activity.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }












// src/components/ExtracurricularSection.jsx
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const activities = [
//   {
//     title: "Cricket Head",
//     timeframe: "2024 - 2025",
//     description:
//       "Led the college cricket team, managing training sessions, strategizing gameplay, conducting college cricket events smoothly, and inspiring team performance to compete effectively in inter-college championships.",
//   },
// ];

// // Replace with your actual image URL or import it from assets
// const photoUrl = "/cricket-head.jpg"; // Ensure the photo is in /public folder or adjust path accordingly

// export default function ExtracurricularSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <section id="extracurricular" className="max-w-6xl mx-auto px-6 py-16">
//       <h2 className="text-4xl font-bold text-white mb-12 text-center">
//         Extracurricular Activities
//       </h2>

//       <div className="space-y-10">
//         {activities.map((activity, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-all flex flex-col md:flex-row items-center gap-6"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.2, type: "spring", duration: 0.6 }}
//           >
//             {/* Photo on left */}
//             <motion.img
//               src={photoUrl}
//               alt="Cricket Head"
//               onClick={openModal}
//               className="w-40 h-40 rounded-full object-cover cursor-pointer shadow-lg border-4 border-cyan-500 hover:border-cyan-400 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               layoutId="profile-photo"
//             />

//             {/* Text content on right */}
//             <div>
//               <h3 className="text-xl text-cyan-400 font-semibold">{activity.title}</h3>
//               <p className="text-gray-400 italic mb-2">{activity.timeframe}</p>
//               <p className="text-gray-200 max-w-xl">{activity.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal for enlarged photo */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-80 z-50"
//               onClick={closeModal}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             {/* Enlarged image */}
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center p-4"
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, scale: 0.7 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.7 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             >
//               <motion.img
//                 src={photoUrl}
//                 alt="Enlarged Cricket Head"
//                 className="max-w-full max-h-full rounded-xl shadow-2xl"
//                 layoutId="profile-photo"
//               />
//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-5 right-5 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition"
//                 aria-label="Close image modal"
//               >
//                 &times;
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }








// src/components/ExtracurricularSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const activities = [
  {
    title: "Cricket Head",
    timeframe: "2024 - 2025",
    description:
      "Led the college cricket team, managing training sessions, strategizing gameplay, conducting college cricket events smoothly, and inspiring team performance to compete effectively in inter-college championships.",
  },
];

// Photo path — make sure /public/cricket-head.jpg exists
const photoUrl = "/my-portfolio/cricket-head.jpg";

export default function ExtracurricularSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="extracurricular" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Extracurricular Activities
      </h2>

      <div className="space-y-10">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            className="bg-[rgba(20,20,40,0.85)] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-all flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, type: "spring", duration: 0.6 }}
          >
            {/* Photo on left */}
            <motion.img
              src={photoUrl}
              alt="Cricket Head"
              onClick={openModal}
              className="w-40 h-40 rounded-full object-cover cursor-pointer shadow-lg border-4 border-cyan-500 hover:border-cyan-400 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layoutId="profile-photo"
            />

            {/* Text content on right */}
            <div>
              <h3 className="text-xl text-cyan-400 font-semibold">{activity.title}</h3>
              <p className="text-gray-400 italic mb-2">{activity.timeframe}</p>
              <p className="text-gray-200 max-w-xl">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for enlarged photo */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-50"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Enlarged Image Container */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.img
                src={photoUrl}
                alt="Enlarged Cricket Head"
                className="max-w-full max-h-full rounded-xl shadow-2xl"
                layoutId="profile-photo"
              />
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition"
                aria-label="Close image modal"
              >
                &times;
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
