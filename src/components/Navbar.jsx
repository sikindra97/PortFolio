import { useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold tracking-tight"
        >
          SK<span className="text-gray-500">.</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/sikindra97"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 p-2 text-gray-400 transition hover:border-white/30 hover:text-white"
          >
            <FiGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/sikindra05"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 p-2 text-gray-400 transition hover:border-white/30 hover:text-white"
          >
            <FiLinkedin size={18} />
          </a>
        </div>

        <button
          className="text-gray-300 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-black px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left text-gray-400 transition hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;