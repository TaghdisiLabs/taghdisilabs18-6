import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <Logo />

        <nav className="text-white/60 text-sm flex gap-6">
          <a href="#services">Services</a>
          <a href="#portfolio">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
