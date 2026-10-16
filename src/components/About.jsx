
import {
  FiCode,
  FiLayers,
  FiDatabase,
} from "react-icons/fi";

function About() {
  const highlights = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
    "Role-Based Access Control",
    "Database Design",
    "Problem Solving",
  ];

  const strengths = [
    {
      icon: FiCode,
      title: "Clean Frontend",
      description:
        "Responsive interfaces and reusable React components.",
    },
    {
      icon: FiLayers,
      title: "Reliable Backend",
      description:
        "Structured APIs, authentication, and access control.",
    },
    {
      icon: FiDatabase,
      title: "Scalable Architecture",
      description:
        "Database design and organized application architecture.",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-white/5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            About Me
          </p>
          <h2
            id="about-title"
            className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            A developer who builds with{" "}
            <span className="gradient-text">purpose and logic.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Left Column */}
          <div>
            <p className="max-w-lg text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I'm a B.Tech Information Technology student at Chandigarh
              Engineering College, CGC Landran, focused on full-stack
              development. I enjoy turning practical ideas into useful
              web applications that solve real problems.
            </p>

            {/* Development Strengths */}
            <div className="mt-8 space-y-5">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300">
                      <Icon size={19} aria-hidden="true" />
                    </div>

                    <div className="pt-0.5">
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="min-w-0">
            <p className="text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              My primary stack includes React.js, Node.js, Express.js,
              and MongoDB. I build full-stack applications with responsive
              interfaces, REST APIs, JWT authentication, and role-based
              access control.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I have also worked with database design and multi-tenant
              application architecture. Alongside development, I have
              solved 1300+ DSA problems and secured 1st position in the
              Eminance 2026 Coding Competition, strengthening my problem-solving
              skills and understanding of computer science fundamentals.
            </p>

            {/* Technical Skills */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Technologies & Skills
              </p>

              <div className="flex flex-wrap gap-2.5">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-sm text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Focus */}
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <span
                aria-hidden="true"
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  Current Focus
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Building reliable full-stack applications and growing
                  as a software developer through practical projects
                  and continuous learning.
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
