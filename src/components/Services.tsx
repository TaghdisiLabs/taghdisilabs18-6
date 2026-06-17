"use client";

import { useState } from "react";

export default function Services() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const plans = [
    {
      price: "$60",
      title: "AI Audit",
      desc: "Website + brand analysis + 15min call + improvement list"
    },
    {
      price: "$150",
      title: "Growth Plan",
      desc: "Optimization + strategy + conversion fixes"
    },
    {
      price: "$600",
      title: "Automation System",
      desc: "AI workflows + funnel + automation setup"
    },
    {
      price: "$1500",
      title: "Enterprise AI",
      desc: "Full business AI system + custom architecture"
    }
  ];

  function handleChange(e:any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl font-black text-center text-white mb-12">
        Choose Your Growth System
      </h2>

      {/* Pricing */}
      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {plans.map((p, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-cyan-400 text-2xl font-bold">{p.price}</h3>
            <h4 className="text-white text-xl font-bold mt-2">{p.title}</h4>
            <p className="text-white/60 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">

        <h3 className="text-white text-2xl font-bold mb-6">
          Request Your System Setup
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <input name="name" placeholder="Name" onChange={handleChange}
            className="p-3 bg-black/40 text-white rounded-lg border border-white/10" />

          <input name="email" placeholder="Email" onChange={handleChange}
            className="p-3 bg-black/40 text-white rounded-lg border border-white/10" />

          <input name="website" placeholder="Website" onChange={handleChange}
            className="p-3 bg-black/40 text-white rounded-lg border border-white/10" />

        </div>

        <textarea
          name="message"
          placeholder="Tell us about your business"
          onChange={handleChange}
          className="w-full mt-4 p-3 bg-black/40 text-white rounded-lg border border-white/10"
        />

        <button className="mt-6 px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl">
          Submit Request
        </button>

      </div>

    </section>
  );
}