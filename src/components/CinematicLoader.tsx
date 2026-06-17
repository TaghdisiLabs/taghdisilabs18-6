"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function CinematicLoader(){

const [show,setShow]=useState(true);


useEffect(()=>{

const timer=setTimeout(()=>{
setShow(false)
},2600);


return()=>clearTimeout(timer);

},[]);


if(!show)return null;


return(

<motion.div

initial={{opacity:1}}
animate={{opacity:0}}
transition={{
delay:2,
duration:.6
}}

className="
fixed
inset-0
z-[999]
bg-[#020817]
flex
items-center
justify-center
"

>


<div className="text-center">


<motion.div

animate={{
scale:[1,1.2,1]
}}

transition={{
repeat:Infinity,
duration:1.5
}}

className="
w-24
h-24
rounded-full
bg-gradient-to-r
from-blue-600
via-cyan-400
to-lime-400
blur-xl
mx-auto
"

/>


<h1 className="
mt-10
text-xl
tracking-[0.4em]
text-cyan-400
">

TAGHDISILABS CORE

</h1>


<p className="
mt-4
text-slate-400
">

INITIALIZING AI SYSTEM...

</p>


</div>


</motion.div>

)

}