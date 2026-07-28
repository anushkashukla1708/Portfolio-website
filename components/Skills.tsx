"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
} from "lucide-react";

const skillData = [
  {
    title: "Frontend",
    icon: <Globe size={28} />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
    ],
  },

  {
    title: "Programming",
    icon: <Code2 size={28} />,
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "Data Structures & Algorithms",
    ],
  },

  {
    title: "Database",
    icon: <Database size={28} />,
    skills: [
      "MySQL",
      "SQLite",
      "MongoDB",
    ],
  },

  {
    title: "Tools & AI",
    icon: <Wrench size={28} />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "PyMuPDF",
      "Ollama",
      "VS Code",
    ],
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="
      min-h-screen 
      py-20 
      px-6
      bg-transparent
      "
    >

      {/* Heading */}

      <motion.h2
        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.6
        }}

        className="
        text-4xl
        md:text-5xl
        font-bold
        text-center
        mb-14
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-pink-500
        text-transparent
        bg-clip-text
        "
      >
        My Skills
      </motion.h2>



      {/* Skill Cards */}

      <div
      className="
      max-w-6xl
      mx-auto
      grid
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      "
      >

      {
        skillData.map((item,index)=>(

          <motion.div

          key={item.title}

          initial={{
            opacity:0,
            scale:0.8
          }}

          whileInView={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.5,
            delay:index*0.1
          }}

          whileHover={{
            y:-10,
            scale:1.03
          }}

          className="
          group
          rounded-2xl
          p-6

          bg-white/10
          dark:bg-white/5

          backdrop-blur-xl

          border
          border-white/20

          shadow-xl

          hover:shadow-purple-500/20

          transition-all
          "
          >


          <div
          className="
          flex
          items-center
          gap-3
          mb-5
          text-purple-500
          "
          >

            {item.icon}

            <h3
            className="
            text-xl
            font-semibold
            text-gray-800
            dark:text-white
            "
            >
              {item.title}
            </h3>

          </div>



          <div
          className="
          flex
          flex-wrap
          gap-3
          "
          >

          {
            item.skills.map(skill=>(

              <span

              key={skill}

              className="
              px-3
              py-1
              rounded-full

              text-sm

              bg-gradient-to-r
              from-blue-500/20
              to-purple-500/20

              border
              border-purple-400/30

              text-gray-700
              dark:text-gray-200

              hover:scale-105

              transition
              "

              >

              {skill}

              </span>

            ))
          }


          </div>


          </motion.div>

        ))
      }


      </div>


    </section>
  );
}