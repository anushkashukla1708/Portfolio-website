"use client";

import { motion } from "framer-motion";


export default function About(){

return (

<section
id="about"
className="
py-20
px-6
"
>


<div className="
max-w-6xl
mx-auto
">


<motion.h2

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}

className="
text-4xl
font-bold
text-center
mb-10
"

>

About Me

</motion.h2>



<div className="
grid
md:grid-cols-2
gap-10
items-center
">



{/* INTRO */}

<motion.div

initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}

>

<p className="
text-lg
text-gray-600
dark:text-gray-300
leading-relaxed
">

I am a Computer Science Engineering student
passionate about building modern web applications.
I love solving problems with Data Structures,
developing full-stack applications and exploring
AI technologies.

</p>


<p className="
mt-5
text-lg
text-gray-600
dark:text-gray-300
">

My goal is to create impactful software solutions
and continuously improve my development skills.

</p>


</motion.div>





{/* STATS */}

<div className="
grid
grid-cols-2
gap-5
">


{
[
["5+","Projects"],
["100+","DSA Problems"],
["7+","Technologies"],
["∞","Learning"]
].map((item,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.05
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

<h3 className="
text-3xl
font-bold
text-blue-600
">

{item[0]}

</h3>


<p>

{item[1]}

</p>


</motion.div>


))

}



</div>



</div>


</div>


</section>

)

}