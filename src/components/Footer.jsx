// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1e2033] via-[#181b2a] to-[#0b0c15] text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Tej Ambre. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            <a href="mailto:tejambre0210@gmail.com" className="hover:text-cyan-400 transition-colors">
              tejambre0210@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/TejAmbre"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tejambre0210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/AmbreTej55463"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaTwitter />
          </a>
          
        </div>
      </div>
    </footer>
  );
}
