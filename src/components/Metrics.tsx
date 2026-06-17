export default function Metrics() {
  const data = [
    { label: "Systems Built", value: "50+" },
    { label: "Automation Rate", value: "98%" },
    { label: "Revenue Impact", value: "$100M+" },
    { label: "Uptime", value: "24/7" },
  ];

  return (
    <section className="py-32">
      <div className="section-container">
        <h2 className="text-5xl font-black">
          System <span className="gradient-text">Metrics</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {data.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="text-3xl font-black text-cyan-400">
                {m.value}
              </div>
              <div className="text-slate-400 mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}