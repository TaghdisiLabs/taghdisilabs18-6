"use client";

import { motion } from "framer-motion";

const agents = [
  {
    name: "Captain",
    role: "AI Strategy Commander",
    icon: "⚡",
  },
  {
    name: "Scout",
    role: "Market Intelligence Agent",
    icon: "🔎",
  },
  {
    name: "Builder",
    role: "Automation Engineer",
    icon: "⚙️",
  },
  {
    name: "Ninja",
    role: "Optimization Specialist",
    icon: "🥷",
  },
];


export default function AIAgents(){

return (

<section
id="ai-workforce"
className="
py-32
section-container
"
>


<motion.h2

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
text-5xl
font-black
text-center
mb-16
"

>

Your AI
<span className="gradient-text">
{" "}Digital Workforce
</span>

</motion.h2>



<div
className="
grid
md:grid-cols-4
gap-8
"
>


{agents.map((agent,index)=>(


<motion.div

key={agent.name}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index * 0.15
}}

whileHover={{
scale:1.08,
y:-15
}}

className="
glass
rounded-3xl
p-8
border
border-white/10
text-center
"

>


<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
duration:4,
repeat:Infinity,
delay:index
}}

className="
mx-auto
w-24
h-24
rounded-full
bg-gradient-to-br
from-cyan-400
to-blue-600
flex
items-center
justify-center
text-4xl
shadow-xl
"

>

{agent.icon}

</motion.div>



<h3
className="
text-2xl
font-black
mt-6
"
>

{agent.name}

</h3>


<p
className="
text-white/60
mt-3
"
>

{agent.role}

</p>


<div
className="
mt-5
text-cyan-400
text-sm
flex
justify-center
items-center
gap-2
"
>

<span
className="
w-2
h-2
rounded-full
bg-cyan-400
animate-pulse
"
/>

ONLINE

</div>


</motion.div>


))}


</div>


</section>

);

}