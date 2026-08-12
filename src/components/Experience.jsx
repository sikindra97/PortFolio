const experiences = [
  {
    date: "Jun 2025 – Jul 2025",
    role: "MERN Stack Summer Training",
    company: "ASB Academy, CGC Landran",
    type: "Training",
    description:
      "Completed a 4-week MERN Stack training program focused on building full-stack web applications using React.js, Node.js, Express.js and MongoDB.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Header */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Training & Experience
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-500">
            My hands-on development training and learning experience in
            full-stack web development.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          {experiences.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="relative grid gap-5 border-l border-white/10 pb-4 pl-8 md:grid-cols-[180px_1fr] md:gap-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-white" />

              {/* Date */}
              <div>
                <p className="text-sm text-gray-500">
                  {item.date}
                </p>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {item.role}
                  </h3>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-500">
                    {item.type}
                  </span>
                </div>

                <p className="mt-2 text-sm font-medium text-gray-500">
                  {item.company}
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;