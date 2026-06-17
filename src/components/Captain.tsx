"use client";

import { motion } from "framer-motion";

export default function Captain(){

return (

<motion.div

className="
fixed
bottom-8
left-8
z-50
glass
px-6
py-4
rounded-2xl
border
border-cyan-400/20
"

animate={{
y:[0,-12,0]
}}

transition={{
duration:5,
repeat:Infinity
}}

>


<div className="
flex
items-center
gap-4
">


<div className="
w-14
h-14
rounded-full
bg-gradient-to-br
from-cyan-400
to-blue-600
flex
items-center
justify-center
text-2xl
">

⚡

</div>


<div>

<p className="
font-bold
">

Captain AI

</p>


<p className="
text-xs
text-white/50
">

Strategy system active

</p>


</div>


</div>


</motion.div>


);

}