function About() {
  const highlights = [
    "MERN Stack Development",
    "REST API Design",
    "Role-Based Access Control",
    "Database Design",
    "Problem Solving",
  ];

  return (
    <section id="about" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Building with
              <br />
              <span className="gradient-text">
                purpose and logic.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">
              Full Stack Developer focused on building practical,
              scalable and user-oriented web applications.
            </p>
          </div>

          {/* Right */}
          <div>
            <p className="text-lg leading-8 text-gray-300">
              I'm a B.Tech Information Technology student and Full Stack
              Developer specializing in the MERN stack. I enjoy transforming
              real-world requirements into reliable web applications with
              clean frontend experiences and well-structured backend systems.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My development experience includes building applications with
              React, Node.js, Express.js and MongoDB, along with implementing
              REST APIs, JWT authentication, role-based access control,
              database design and multi-tenant architectures.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Beyond development, I have solved{" "}
              <span className="font-semibold text-white">1300+ DSA problems</span>{" "}
              and secured{" "}
              <span className="font-semibold text-white">
                1st position in the Eminance 2026 Coding Competition
              </span>
              . I continuously strengthen my knowledge of DSA, OOP, DBMS,
              Operating Systems and Computer Networks.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-gray-400 transition hover:border-white/20 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-2xl font-bold text-white">1300+</p>
                <p className="mt-1 text-xs text-gray-500">
                  DSA Problems
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="mt-1 text-xs text-gray-500">
                  Full Stack Projects
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-2xl font-bold text-white">1st</p>
                <p className="mt-1 text-xs text-gray-500">
                  Coding Competition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;