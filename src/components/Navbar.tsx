"use client";

const links = [
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "cta" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur">
      <div className="section-container h-20 flex justify-between items-center">
        <div className="font-bold">TaghdisiLabs</div>

        <div className="hidden md:flex gap-6 text-sm text-white/70">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() =>
                document
                  .getElementById(l.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}