// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

// // const navLinks = [
// //   { label: "About", to: "#about" },
// //   { label: "Skills", to: "#skills" },
// //   { label: "Projects", to: "#projects" },
// //   { label: "Experience", to: "#experience" },
// // ];

// // export default function Navbar() {
// //   const [navOpen, setNavOpen] = useState(false);
// //   const [theme, setTheme] = useState(() =>
// //     localStorage.getItem("theme") ||
// //     (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
// //   );

// //   useEffect(() => {
// //     if (theme === "dark") {
// //       document.documentElement.classList.add("dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //     }
// //     localStorage.setItem("theme", theme);
// //   }, [theme]);

// //   useEffect(() => {
// //     if (navOpen) {
// //       document.body.style.overflow = "hidden";
// //     } else {
// //       document.body.style.overflow = "";
// //     }
// //     return () => (document.body.style.overflow = "");
// //   }, [navOpen]);

// //   return (
// //     <nav className="w-full sticky top-0 z-50 bg-transparent backdrop-blur-md px-6 py-3 flex items-center justify-between">
// //       <div className="text-2xl font-bold text-white tracking-wide">
// //         Tej Ambre
// //       </div>

// //       <div className="hidden md:flex items-center gap-8">
// //         {navLinks.map((link) => (
// //           <a
// //             key={link.label}
// //             href={link.to}
// //             className="relative py-2 px-3 text-lg text-gray-200 hover:text-cyan-400 transition-colors duration-300"
// //           >
// //             {link.label}
// //           </a>
// //         ))}
// //         <button
// //           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// //           className="ml-6 bg-gray-800 dark:bg-gray-200 rounded-full p-2 transition-colors"
// //           aria-label="Toggle Dark Mode"
// //         >
// //           {theme === "dark" ? (
// //             <FaSun className="text-yellow-300 w-5 h-5" />
// //           ) : (
// //             <FaMoon className="text-gray-600 w-5 h-5" />
// //           )}
// //         </button>
// //       </div>

// //       {/* Mobile Menu Toggle */}
// //       <button
// //         className="md:hidden z-50 p-2 rounded-full bg-gray-900/40 text-gray-200"
// //         onClick={() => setNavOpen((open) => !open)}
// //         aria-label="Toggle Navigation"
// //       >
// //         {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// //       </button>

// //       {/* Mobile Nav Overlay */}
// //       <AnimatePresence>
// //         {navOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -30 }}
// //             transition={{ duration: 0.3 }}
// //             className="fixed inset-0 bg-[rgba(10,20,40,0.96)] backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden"
// //           >
// //             <button
// //               className="absolute top-6 right-6 p-2 rounded-full text-cyan-400"
// //               onClick={() => setNavOpen(false)}
// //               aria-label="Close Menu"
// //             >
// //               <FaTimes size={28} />
// //             </button>
// //             {navLinks.map((link) => (
// //               <motion.a
// //                 key={link.label}
// //                 href={link.to}
// //                 className="text-2xl text-gray-100 font-medium hover:text-cyan-300 transition-colors"
// //                 onClick={() => setNavOpen(false)}
// //                 initial={{ x: 20, opacity: 0 }}
// //                 animate={{ x: 0, opacity: 1 }}
// //                 transition={{ delay: 0.06 * navLinks.indexOf(link) }}
// //               >
// //                 {link.label}
// //               </motion.a>
// //             ))}
// //             <button
// //               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// //               className="mt-5 bg-gray-700 dark:bg-gray-200 rounded-full p-3"
// //               aria-label="Toggle Dark Mode"
// //             >
// //               {theme === "dark" ? (
// //                 <FaSun className="text-yellow-300 w-6 h-6" />
// //               ) : (
// //                 <FaMoon className="text-gray-600 w-6 h-6" />
// //               )}
// //             </button>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // }



// // src/components/Navbar.jsx
// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

// // const navLinks = [
// //   { label: "About", to: "#about" },
// //   { label: "Skills", to: "#skills" },
// //   { label: "Projects", to: "#projects" },
// //   { label: "Experience", to: "#experience" },
// //   { label: "Contact", to: "#contact" },
// // ];

// // export default function Navbar() {
// //   const [navOpen, setNavOpen] = useState(false);
// //   const [theme, setTheme] = useState(() => {
// //     const saved = localStorage.getItem("theme");
// //     if (saved) return saved;
// //     return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
// //   });

// //   useEffect(() => {
// //     if (theme === "dark") {
// //       document.documentElement.classList.add("dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //     }
// //     localStorage.setItem("theme", theme);
// //   }, [theme]);

// //   useEffect(() => {
// //     if (navOpen) {
// //       document.body.style.overflow = "hidden";
// //     } else {
// //       document.body.style.overflow = "";
// //     }
// //   }, [navOpen]);

// //   return (
// //     <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-3 flex items-center justify-between">
// //       {/* Brand / Logo */}
// //       <div className="text-2xl font-bold text-white select-none tracking-widest">
// //         Tej Ambre
// //       </div>

// //       {/* Desktop nav links + dark mode toggle */}
// //       <div className="hidden md:flex items-center gap-8">
// //         {navLinks.map(({ label, to }) => (
// //           <a
// //             key={label}
// //             href={to}
// //             className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium"
// //           >
// //             {label}
// //           </a>
// //         ))}

// //         <button
// //           aria-label="Toggle Dark Mode"
// //           className="ml-6 p-2 rounded-full bg-gray-800 dark:bg-gray-200"
// //           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// //         >
// //           {theme === "dark" ? (
// //             <FaSun size={20} className="text-yellow-400" />
// //           ) : (
// //             <FaMoon size={20} className="text-gray-700" />
// //           )}
// //         </button>
// //       </div>

// //       {/* Mobile menu button */}
// //       <button
// //         className="md:hidden text-gray-200 p-2 rounded-full bg-gray-800/60"
// //         onClick={() => setNavOpen(!navOpen)}
// //         aria-label="Toggle navigation menu"
// //       >
// //         {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// //       </button>

// //       {/* Mobile menu overlay */}
// //       <AnimatePresence>
// //         {navOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.25 }}
// //             className="fixed inset-0 bg-[rgba(10,20,40,0.95)] backdrop-blur-lg flex flex-col items-center justify-center space-y-10 md:hidden z-40"
// //           >
// //             {navLinks.map(({ label, to }, i) => (
// //               <motion.a
// //                 key={label}
// //                 href={to}
// //                 onClick={() => setNavOpen(false)}
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.08 }}
// //                 className="text-2xl text-gray-100 hover:text-cyan-400 cursor-pointer font-semibold"
// //               >
// //                 {label}
// //               </motion.a>
// //             ))}

// //             <button
// //               aria-label="Toggle Dark Mode"
// //               className="mt-5 p-3 rounded-full bg-gray-700 dark:bg-gray-200"
// //               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// //             >
// //               {theme === "dark" ? (
// //                 <FaSun size={24} className="text-yellow-400" />
// //               ) : (
// //                 <FaMoon size={24} className="text-gray-700" />
// //               )}
// //             </button>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // }





// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

// const navLinks = [
//   { label: "About", to: "#about" },
//   { label: "Skills", to: "#skills" },
//   { label: "Projects", to: "#projects" },
//   { label: "Experience", to: "#experience" },
//   { label: "Extracurricular", to: "#extracurricular" },
//   { label: "Contact", to: "#contact" },
// ];

// export default function Navbar() {
//   const [navOpen, setNavOpen] = useState(false);
//   const [theme, setTheme] = useState(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved) return saved;
//     return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//   });

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   useEffect(() => {
//     if (navOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [navOpen]);

//   const handleLinkClick = (e, targetId) => {
//     e.preventDefault();
//     const element = document.querySelector(targetId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setNavOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-3 flex items-center justify-between">
//       {/* Brand / Logo */}
//       <div className="text-2xl font-bold text-white select-none tracking-widest">
//         Tej Ambre
//       </div>

//       {/* Desktop nav links + dark mode toggle */}
//       <div className="hidden md:flex items-center gap-8">
//         {navLinks.map(({ label, to }) => (
//           <a
//             key={label}
//             href={to}
//             onClick={(e) => handleLinkClick(e, to)}
//             className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium"
//           >
//             {label}
//           </a>
//         ))}

//         <button
//           aria-label="Toggle Dark Mode"
//           className="ml-6 p-2 rounded-full bg-gray-800 dark:bg-gray-200"
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         >
//           {theme === "dark" ? (
//             <FaSun size={20} className="text-yellow-400" />
//           ) : (
//             <FaMoon size={20} className="text-gray-700" />
//           )}
//         </button>
//       </div>

//       {/* Mobile menu button */}
//       <button
//         className="md:hidden text-gray-200 p-2 rounded-full bg-gray-800/60"
//         onClick={() => setNavOpen(!navOpen)}
//         aria-label="Toggle navigation menu"
//       >
//         {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </button>

//       {/* Mobile menu overlay */}
//       <AnimatePresence>
//         {navOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 bg-[rgba(10,20,40,0.95)] backdrop-blur-lg flex flex-col items-center justify-center space-y-10 md:hidden z-40"
//           >
//             {navLinks.map(({ label, to }, i) => (
//               <motion.a
//                 key={label}
//                 href={to}
//                 onClick={(e) => handleLinkClick(e, to)}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08 }}
//                 className="text-2xl text-gray-100 hover:text-cyan-400 cursor-pointer font-semibold"
//               >
//                 {label}
//               </motion.a>
//             ))}

//             <button
//               aria-label="Toggle Dark Mode"
//               className="mt-5 p-3 rounded-full bg-gray-700 dark:bg-gray-200"
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             >
//               {theme === "dark" ? (
//                 <FaSun size={24} className="text-yellow-400" />
//               ) : (
//                 <FaMoon size={24} className="text-gray-700" />
//               )}
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";

// const navLinks = [
//   { label: "About", to: "#about" },
//   { label: "Skills", to: "#skills" },
//   { label: "Projects", to: "#projects" },
//   { label: "Experience", to: "#experience" },
//   { label: "Extracurricular", to: "#extracurricular" },
//   { label: "Contact", to: "#contact" },
// ];

// export default function Navbar() {
//   const [navOpen, setNavOpen] = useState(false);

//   useEffect(() => {
//     if (navOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [navOpen]);

//   const handleLinkClick = (e, targetId) => {
//     e.preventDefault();
//     const element = document.querySelector(targetId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setNavOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-3 flex items-center justify-between">
//       {/* Brand / Logo */}
//       <div className="text-2xl font-bold text-white select-none tracking-widest">
//         Tej Ambre
//       </div>

//       {/* Desktop nav links */}
//       <div className="hidden md:flex items-center gap-8">
//         {navLinks.map(({ label, to }) => (
//           <a
//             key={label}
//             href={to}
//             onClick={(e) => handleLinkClick(e, to)}
//             className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium"
//           >
//             {label}
//           </a>
//         ))}
//       </div>

//       {/* Mobile menu button */}
//       <button
//         className="md:hidden text-gray-200 p-2 rounded-full bg-gray-800/60"
//         onClick={() => setNavOpen(!navOpen)}
//         aria-label="Toggle navigation menu"
//       >
//         {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </button>

//       {/* Mobile menu overlay */}
//       <AnimatePresence>
//         {navOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 bg-[rgba(10,20,40,0.95)] backdrop-blur-lg flex flex-col items-center justify-center space-y-10 md:hidden z-40"
//           >
//             {navLinks.map(({ label, to }, i) => (
//               <motion.a
//                 key={label}
//                 href={to}
//                 onClick={(e) => handleLinkClick(e, to)}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08 }}
//                 className="text-2xl text-gray-100 hover:text-cyan-400 cursor-pointer font-semibold"
//               >
//                 {label}
//               </motion.a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }








import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About", to: "#about" },
  { label: "Experience", to: "#experience" },
  { label: "Skills", to: "#skills" },
  { label: "Projects", to: "#projects" },
  { label: "Certifications", to: "#certifications" }, 
  { label: "Extracurricular", to: "#extracurricular" },
  { label: "Contact", to: "#contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNavOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-3 flex items-center justify-between">
      {/* Brand / Logo */}
      <div className="text-2xl font-bold text-white select-none tracking-widest">
        Tej Ambre
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ label, to }) => (
          <a
            key={label}
            href={to}
            onClick={(e) => handleLinkClick(e, to)}
            className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-200 p-2 rounded-full bg-gray-800/60"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation menu"
      >
        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[rgba(10,20,40,0.95)] backdrop-blur-lg flex flex-col items-center justify-center space-y-10 md:hidden z-40"
          >
            {navLinks.map(({ label, to }, i) => (
              <motion.a
                key={label}
                href={to}
                onClick={(e) => handleLinkClick(e, to)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl text-gray-100 hover:text-cyan-400 cursor-pointer font-semibold"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
