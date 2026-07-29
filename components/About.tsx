"use client";

import { motion } from "framer-motion";
import about from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="
      py-20
      px-6
    "
    >
      <div
        className="
        max-w-6xl
        mx-auto
      "
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
          text-4xl
          font-bold
          text-center
          mb-10
        "
        >
          {about.title}
        </motion.h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
        >
          {/* INTRO */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p
              className="
              text-lg
              text-gray-600
              dark:text-gray-300
              leading-relaxed
            "
            >
              {about.intro}
            </p>

            <p
              className="
              mt-5
              text-lg
              text-gray-600
              dark:text-gray-300
            "
            >
              {about.goal}
            </p>
          </motion.div>

          {/* STATS */}

          <div
            className="
            grid
            grid-cols-2
            gap-5
          "
          >
            {about.stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                p-6
                rounded-xl

                bg-white
                dark:bg-gray-900

                shadow-lg

                text-center
              "
              >
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-blue-600
                "
                >
                  {item.value}
                </h3>

                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}