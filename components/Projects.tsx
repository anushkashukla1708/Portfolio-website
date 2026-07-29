"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import projects from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
      py-20
      px-6
      "
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
        text-center
        text-4xl
        md:text-5xl
        font-bold

        mb-14

        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-pink-500

        bg-clip-text
        text-transparent
        "
      >
        My Projects
      </motion.h2>

      <div
        className="
        max-w-6xl
        mx-auto

        grid

        md:grid-cols-2

        gap-10
        "
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.03,
            }}
            className={`
              rounded-3xl
              overflow-hidden
              backdrop-blur-xl
              border
              border-white/20
              bg-white/10
              dark:bg-white/5
              shadow-xl
              ${project.featured ? "md:col-span-2" : ""}
            `}
          >
            {/* Image */}

            <div
              className="
              relative
              h-56
              w-full
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                object-cover
                group-hover:scale-110
                transition
                "
              />
            </div>

            <div
              className="
              p-6
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-gray-900
                dark:text-white
                mb-3
                "
              >
                {project.title}
              </h3>

              <p
                className="
                text-gray-600
                dark:text-gray-300
                mb-5
                "
              >
                {project.description}
              </p>

              {/* Tech Stack */}

              <div
                className="
                flex
                flex-wrap
                gap-2
                mb-6
                "
              >
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-purple-500/20
                    border
                    border-purple-400/30
                    dark:text-white
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div
                className="
                flex
                gap-4
                "
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-2
                  rounded-xl
                  bg-black
                  text-white
                  dark:bg-white
                  dark:text-black
                  hover:scale-105
                  transition
                  "
                >
                  <FaGithub size={18} />

                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  text-white
                  hover:scale-105
                  transition
                  "
                >
                  <ExternalLink size={18} />

                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}