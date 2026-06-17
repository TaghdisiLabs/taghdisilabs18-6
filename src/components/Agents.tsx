"use client";

import { motion } from "framer-motion";

const agents = [
  {
    name: "Captain",
    role: "AI Strategy Commander",
    color: "from-cyan-400 to-blue-600",
    icon: "⚡",
  },
  {
    name: "Scout",
    role: "Market Research Agent",
    color: "from-purple-400 to-blue-600",
    icon: "🔎",
  },
  {
    name: "Builder",
    role: "Automation Engineer",
    color: "from-green-400 to-cyan-600",
    icon: "⚙️",
  },
  {
    name: "Ninja",
    role: "Optimization Agent",
    color: "from-orange-400 to-red-600",
    icon: "🥷",
  },
];

export default function AIAgents() {
  return (
    <section className="py-32 section-container">

      <motion.h2
        initial={{
          opacity:0,
          y:40
        }}
        whileInView={{
          opacity:1,
          y:0
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


      <div className="
      grid
      md:grid-cols-4
      gap-8
      ">


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
          y:-15,
          scale:1.05
        }}

        className="
        glass
        p-8
        text-center
        rounded-3xl
        border
        border-white/10
        "

        >

          <motion.div

          animate={{
            y:[0,-10,0]
          }}

          transition={{
            duration:4,
            repeat:Infinity,
            delay:index
          }}

          className={`
          mx-auto
          w-24
          h-24
          rounded-full
          bg-gradient-to-br
          ${agent.color}
          flex
          items-center
          justify-center
          text-4xl
          shadow-2xl
          `}
          >

            {agent.icon}

          </motion.div>


          <h3 className="
          text-2xl
          font-black
          mt-6
          ">
            {agent.name}
          </h3>


          <p className="
          text-white/60
          mt-2
          ">
            {agent.role}
          </p>


          <div className="
          mt-6
          flex
          justify-center
          items-center
          gap-2
          text-sm
          text-cyan-400
          ">

            <span className="
            w-2
            h-2
            rounded-full
            bg-cyan-400
            animate-pulse
            "/>

            ONLINE

          </div>


        </motion.div>

      ))}


      </div>

    </section>
  );
}