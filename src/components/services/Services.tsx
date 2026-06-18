"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Services() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) alert("Request sent");
    else alert("Failed");
  }

  return (
    <section className="section">
      <h2 className="text-4xl font-bold text-center mb-10">
        AI Growth Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-xl">Starter Audit - $60</h3>
          <p className="text-white/60 mt-2">
            Website + brand analysis, 15min call, bug report + solutions list
          </p>
        </Card>

        <Card>
          <h3 className="text-xl">Growth Plan - $150</h3>
        </Card>

        <Card>
          <h3 className="text-xl">Pro System - $600</h3>
        </Card>

        <Card>
          <h3 className="text-xl">Enterprise AI - $1500</h3>
        </Card>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 grid gap-4 max-w-xl mx-auto"
      >
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-3 rounded bg-black/40 border border-white/10"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-3 rounded bg-black/40 border border-white/10"
        />

        <input
          name="website"
          placeholder="Website / Social"
          onChange={handleChange}
          className="p-3 rounded bg-black/40 border border-white/10"
        />

        <textarea
          name="message"
          placeholder="Tell us your goal"
          onChange={handleChange}
          className="p-3 rounded bg-black/40 border border-white/10"
        />

        <Button>Submit</Button>
      </form>
    </section>
  );
}
