import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Soft Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pt-28 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

              Open to Software Development Opportunities
            </div>

            {/* Role */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              Full Stack Developer
            </p>

            {/* Name */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Hi, I'm{" "}
              <span className="gradient-text">
                Sikindra Kumar.
              </span>
            </h1>

            {/* Main Tagline */}
            <h2 className="mt-6 max-w-3xl text-2xl font-medium leading-relaxed text-gray-300 sm:text-3xl">
              I build scalable and reliable web applications.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              B.Tech Information Technology student and MERN Stack Developer
              focused on building modern full-stack applications using React,
              Node.js, Express.js and MongoDB.
            </p>

            {/* Location + Education */}
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <FiMapPin size={16} />
                India
              </span>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span>
                B.Tech IT • 2023–2027
              </span>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">

              {/* View Projects */}
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-black transition duration-300 hover:bg-gray-200"
              >
                View Projects

                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-medium text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <FiDownload
                  size={17}
                  className="transition-transform group-hover:translate-y-0.5"
                />

                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center gap-6">

              {/* GitHub */}
              <a
                href="https://github.com/sikindra97"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
              >
                <FiGithub size={19} />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sikindra05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
              >
                <FiLinkedin size={19} />
                LinkedIn
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/sikindra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
              >
                <FiCode size={19} />
                LeetCode
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute -inset-10 rounded-full bg-white/[0.025] blur-3xl" />

              {/* Profile Card Wrapper */}
              <div className="relative h-[380px] w-[320px] overflow-visible sm:h-[420px] sm:w-[350px]">

                {/* Profile Card */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl">

                  {/* Profile Image */}
                  <img
                    src="/image.png"
                    alt="Sikindra Kumar"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Profile Information */}
                  <div className="absolute bottom-7 left-6">
                    <p className="text-lg font-semibold text-white">
                      Sikindra Kumar
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* 1st Achievement */}
                <div className="absolute -right-6 -top-6 z-20 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-4 shadow-xl backdrop-blur-xl">
                  <p className="text-2xl font-bold text-white">
                    1st
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Eminance 2026
                  </p>
                </div>

                {/* DSA Achievement */}
                <div className="absolute -bottom-8 -right-8 z-20 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 px-5 py-4 shadow-xl backdrop-blur-xl">
                  <p className="text-2xl font-bold text-white">
                    1300+
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    DSA Problems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RECRUITER PROOF ================= */}
        <div className="mt-24 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">

          {/* MERN */}
          <div className="bg-black/80 p-5">
            <p className="text-2xl font-bold">
              MERN
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Full Stack Development
            </p>
          </div>

          {/* DSA */}
          <div className="border-l border-white/10 bg-black/80 p-5">
            <p className="text-2xl font-bold">
              1300+
            </p>

            <p className="mt-1 text-xs text-gray-500">
              DSA Problems
            </p>
          </div>

          {/* Competition */}
          <div className="border-t border-white/10 bg-black/80 p-5 sm:border-l sm:border-t-0">
            <p className="text-2xl font-bold">
              1st
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Coding Competition
            </p>
          </div>

          {/* Projects */}
          <div className="border-l border-t border-white/10 bg-black/80 p-5 sm:border-t-0">
            <p className="text-2xl font-bold">
              4+
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Full Stack Projects
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;