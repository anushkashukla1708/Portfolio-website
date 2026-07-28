"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";


export default function Navbar() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");


  // Fix theme flashing
  useEffect(() => {
    setMounted(true);
  }, []);


  // Detect active section
  useEffect(() => {

    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "contact"
    ];


    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){
            setActive(entry.target.id);
          }

        });

      },
      {
        threshold:0.5
      }
    );


    sections.forEach(id => {

      const element = document.getElementById(id);

      if(element)
        observer.observe(element);

    });


    return () => observer.disconnect();


  }, []);



  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "contact"
  ];



  return (

    <motion.nav

      initial={{y:-100}}
      animate={{y:0}}

      className="
      fixed
      top-0
      left-0
      w-full
      z-50

      backdrop-blur-xl

      bg-white/70
      dark:bg-black/40

      border-b
      border-gray-200
      dark:border-gray-800

      transition
      "

    >


      <div className="
      max-w-7xl
      mx-auto
      px-6
      py-4

      flex
      justify-between
      items-center
      ">


        {/* LOGO */}

        <a
        href="#home"
        className="
        text-2xl
        font-bold
        text-blue-600
        "
        >
          AS
        </a>



        {/* DESKTOP LINKS */}

        <div className="
        hidden
        md:flex
        gap-8
        ">

          {
            links.map(link=>(

              <a

              key={link}

              href={`#${link}`}

              className={`
              capitalize
              transition

              ${
              active===link
              ?
              "text-blue-600 font-semibold"
              :
              "text-gray-700 dark:text-gray-300"
              }

              hover:text-blue-500
              `}

              >

              {link}

              </a>


            ))
          }


        </div>



        <div className="
        flex
        items-center
        gap-4
        ">



        {/* THEME BUTTON */}

        {
          mounted &&

          <button

          onClick={()=>
          setTheme(
            theme==="dark"
            ?
            "light"
            :
            "dark"
          )
          }

          className="
          p-2
          rounded-full

          bg-gray-200
          dark:bg-gray-800

          transition
          "

          >

          {
          theme==="dark"
          ?
          <Sun size={20}/>
          :
          <Moon size={20}/>
          }

          </button>

        }



        {/* MOBILE MENU BUTTON */}

        <button

        className="
        md:hidden
        "

        onClick={()=>
        setOpen(!open)
        }

        >

        {
          open
          ?
          <X/>
          :
          <Menu/>
        }


        </button>


        </div>


      </div>




      {/* MOBILE MENU */}

      {
        open &&

        <motion.div

        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}

        className="
        md:hidden

        px-6
        pb-5

        flex
        flex-col
        gap-5

        bg-white
        dark:bg-black
        "

        >

        {
          links.map(link=>(

            <a

            key={link}

            href={`#${link}`}

            onClick={()=>
            setOpen(false)
            }

            className="
            capitalize
            text-gray-700
            dark:text-gray-300
            "

            >

            {link}

            </a>

          ))
        }


        </motion.div>

      }


    </motion.nav>

  );
}