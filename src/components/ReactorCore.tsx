"use client";

import {motion} from "framer-motion";


export default function ReactorCore(){

return(

<div className="
absolute
inset-0
flex
items-center
justify-center
pointer-events-none
">


<motion.div

animate={{
rotate:360
}}

transition={{
duration:40,
repeat:Infinity,
ease:"linear"
}}

className="
w-[600px]
h-[600px]
rounded-full
border
border-cyan-400/20
"

>


<div className="
absolute
inset-20
rounded-full
border
border-blue-500/20
"/>


</motion.div>



<motion.div

animate={{
scale:[1,1.15,1]
}}

transition={{
repeat:Infinity,
duration:3
}}

className="
w-48
h-48
rounded-full
bg-gradient-to-r
from-blue-600
via-cyan-400
to-lime-400
blur-3xl
"

/>


</div>


)

}