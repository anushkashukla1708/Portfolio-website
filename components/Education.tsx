"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import education from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto rounded-2xl p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-purple-500" />
          <h3 className="text-2xl font-bold">
            {education[0].degree}
          </h3>
        </div>

        <p>{education[0].college}</p>

        <p className="text-gray-500 mt-2">
          {education[0].year}
        </p>

        <p className="mt-3 font-semibold">
          {education[0].cgpa}
        </p>
      </div>
    </section>
  );
}