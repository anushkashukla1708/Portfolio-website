"use client";

import {  Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {  FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold">
          © 2026 Your Name
        </h2>

        <div className="flex gap-6 mt-5 md:mt-0">
          <a href="https://github.com/anushkashukla1708">
            <FaGithub className="hover:text-purple-500 transition" />
          </a>

          <a href="https://www.linkedin.com/in/anushka-shukla-92b4ba381?utm_source=share_via&utm_content=profile&utm_medium=member_android">
            <FaLinkedin className="hover:text-purple-500 transition" />
          </a>

          <a href="mailto:anushka.shukla1708@gmail.com">
            <Mail className="hover:text-purple-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}