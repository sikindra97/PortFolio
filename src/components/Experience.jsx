
import { FiCalendar, FiBookOpen } from "react-icons/fi";

const experiences = [
  {
    date: "Jun 2025 – Jul 2025",
    role: "MERN Stack Summer Training",
    company: "ASB Academy, CGC Landran",
    type: "Training",
    description:
      "Completed a 4-week MERN Stack training program focused on developing full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-white/5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Experience
          </p>

          <h2
            id="experience-title"
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Training & Experience
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            Practical training and hands-on learning in full-stack
            web development.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-9">
          {experiences.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="relative border-l border-white/10 pb-2 pl-6 sm:pl-8"
            >
              {/* Timeline Dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#050505] bg-gray-300"
              />

              {/* Experience Content */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 sm:p-7">

                {/* Date and Type */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <FiCalendar
                      size={15}
                      aria-hidden="true"
                    />
                    {item.date}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400">
                    <FiBookOpen
                      size={13}
                      aria-hidden="true"
                    />
                    {item.type}
                  </span>
                </div>

                {/* Role */}
                <h3 className="mt-5 text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {item.role}
                </h3>

                {/* Company */}
                <p className="mt-2 text-sm font-medium text-gray-400">
                  {item.company}
                </p>

                {/* Description */}
                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-white/20 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
