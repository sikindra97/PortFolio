
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiDownload,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Soft Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

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

      {/* Reduced outer spacing */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-8 pt-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="min-w-0">

            {/* Availability */}
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none"
              />
              <span>
                Open to Software Development Internships & Opportunities
              </span>
            </div>

            {/* Role */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              MERN Stack Developer
            </p>

            {/* Name */}
            <h1
              id="hero-title"
              className="max-w-4xl break-words text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-7xl"
            >
              Hi, I'm{" "}
              <span className="gradient-text">
                Sikindra Kumar.
              </span>
            </h1>

            {/* Main Tagline */}
            <h2 className="mt-5 max-w-3xl text-xl font-medium leading-relaxed text-gray-300 sm:text-2xl lg:text-3xl">
              Building scalable, secure, and user-focused web applications.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              B.Tech Information Technology student and MERN Stack Developer
              skilled in React.js, Node.js, Express.js, and MongoDB.
              Passionate about building full-stack web applications, designing
              REST APIs, implementing secure authentication, and solving
              real-world engineering problems.
            </p>

            {/* Location + Education */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <FiMapPin size={16} aria-hidden="true" />
                India
              </span>

              <span
                aria-hidden="true"
                className="hidden h-4 w-px bg-white/10 sm:block"
              />

              <span>
                B.Tech IT <span aria-hidden="true">•</span> 2023–2027
              </span>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-black transition duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                View Projects

                <FiArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/resume.pdf"
                download="Sikindra-Kumar-Resume.pdf"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-medium text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FiDownload
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <nav
              aria-label="Professional profiles"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <a
                href="https://github.com/sikindra97"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex min-h-8 items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FiGithub size={19} aria-hidden="true" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sikindra05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex min-h-8 items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FiLinkedin size={19} aria-hidden="true" />
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/sikindra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                className="inline-flex min-h-8 items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FiCode size={19} aria-hidden="true" />
                LeetCode
              </a>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center pt-4 sm:pt-2 lg:justify-end lg:pt-0">
            <div className="relative">

              {/* Outer Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 rounded-full bg-white/[0.025] blur-3xl"
              />

              {/* Profile Card */}
              <div className="relative mt-10 h-[340px] w-[280px] sm:h-[420px] sm:w-[350px]">

                {/* Profile Image */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl">
                  <img
                    src="/image.png"
                    alt="Portrait of Sikindra Kumar, MERN Stack Developer"
                    width="350"
                    height="420"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Bottom Gradient */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/50 to-transparent"
                  />

                  {/* Profile Information */}
                  <div className="absolute bottom-7 left-6 right-4">
                    <p className="text-lg font-semibold text-white">
                      Sikindra Kumar
                    </p>
                    <p className="mt-1 text-sm text-gray-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* Competition Achievement */}
                <div className="absolute -top-10 right-0 z-20 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#101010] px-4 py-2.5 shadow-lg">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <FiAward
                      size={19}
                      className="text-gray-300"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      1st Place
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      Eminance 2026
                    </p>
                  </div>
                </div>

                {/* DSA Achievement */}
                <div className="absolute -bottom-5 -right-3 z-20 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-bottom-8 sm:-right-8 sm:px-5 sm:py-4">
                  <p className="text-2xl font-bold text-white">
                    1300+
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    DSA Problems Solved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RECRUITER PROOF */}
        <div className="mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-14 sm:grid-cols-4">

          {/* MERN */}
          <div className="bg-black/80 p-4 sm:p-5">
            <p className="text-xl font-bold sm:text-2xl">
              MERN
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Full Stack Development
            </p>
          </div>

          {/* DSA */}
          <div className="border-l border-white/10 bg-black/80 p-4 sm:p-5">
            <p className="text-xl font-bold sm:text-2xl">
              1300+
            </p>
            <p className="mt-1 text-xs text-gray-500">
              DSA Problems Solved
            </p>
          </div>

          {/* Competition */}
          <div className="border-t border-white/10 bg-black/80 p-4 sm:border-l sm:border-t-0 sm:p-5">
            <p className="text-xl font-bold sm:text-2xl">
              1st
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Eminance 2026
            </p>
          </div>

          {/* Projects */}
          <div className="border-l border-t border-white/10 bg-black/80 p-4 sm:border-t-0 sm:p-5">
            <p className="text-xl font-bold sm:text-2xl">
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
