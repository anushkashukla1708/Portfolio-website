"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="home"

      className="
      min-h-screen 
      flex 
      items-center 
      bg-gradient-to-br 
      from-white 
      via-blue-50 
      to-purple-100
      dark:from-slate-950
      dark:via-slate-900
      dark:to-purple-950
      transition-colors
      "
    >

      <div className="
      max-w-7xl 
      mx-auto 
      px-6 
      grid 
      md:grid-cols-2 
      gap-10 
      items-center
      ">


        {/* LEFT CONTENT */}

        <motion.div
          initial={{opacity:0, x:-50}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
        >

          <p className="
          text-blue-600 
          dark:text-blue-400 
          text-lg
          mb-3
          ">
            👋 Hello, I'm
          </p>


          <h1 className="
          text-5xl 
          md:text-7xl 
          font-bold
          text-gray-900
          dark:text-white
          ">
            Anushka Shukla
          </h1>


          <div className="
          text-2xl
          md:text-3xl
          font-semibold
          mt-4
          text-gray-700
          dark:text-gray-300
          ">

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>


          <p className="
          mt-6
          text-gray-600
          dark:text-gray-400
          max-w-xl
          text-lg
          ">
            I build modern web applications and
            AI-powered solutions that solve real-world
            problems using technology.
          </p>



          <div className="flex gap-5 mt-8">


            <button
            className="
            px-6
            py-3
            rounded-xl
            bg-blue-600
            text-white
            hover:scale-105
            transition
            "
            >
              View Projects
            </button>


            <button
            className="
            px-6
            py-3
            rounded-xl
            border
            border-gray-400
            dark:border-gray-600
            dark:text-white
            hover:scale-105
            transition
            "
            >
              Download Resume
            </button>


          </div>


        </motion.div>



        {/* RIGHT AVATAR */}


        <motion.div
          initial={{opacity:0, scale:0.8}}
          animate={{opacity:1, scale:1}}
          transition={{duration:0.8}}
          className="flex justify-center"
        >

          <div
          className="
          relative
          w-72
          h-72
          md:w-96
          md:h-96
          "
          >

            <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            rounded-full
            blur-2xl
            opacity-40
            "
            />


            <Image
            src="/avatar.png"
            alt="Developer Avatar"
            fill
            className="
            object-contain
            relative
            "
            />

          </div>


        </motion.div>


      </div>

    </section>
  );
}