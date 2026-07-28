"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Vatsalya Rudra Gaushala & Child Foundation",
    duration: "June 2026 – July 2026",
    description:
      "Built the NGO Management System including volunteer database, attendance management and website improvements.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <motion.div
            key={exp.role}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-purple-500" />
              <h3 className="text-2xl font-bold">{exp.role}</h3>
            </div>

            <p className="font-semibold">{exp.company}</p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {exp.duration}
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}