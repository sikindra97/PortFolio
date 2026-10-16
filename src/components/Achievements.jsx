
import {
  FiAward,
  FiCode,
  FiExternalLink,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";

const achievements = [
  {
    icon: FiCode,
    value: "1300+",
    title: "DSA Problems Solved",
    description:
      "Solved 1300+ data structures and algorithms problems, developing stronger problem-solving skills and interview readiness.",
  },
  {
    icon: FiAward,
    value: "1st",
    title: "Eminance 2026 Coding Competition",
    description:
      "Secured first position in the Eminance 2026 Coding Competition at CGC Landran.",
  },
];

const certifications = [
  {
    title: "Database Management Systems",
    issuer: "NPTEL · IIT Kharagpur",
    category: "Database Systems",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    category: "Intermediate",
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    category: "Programming",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    category: "Frontend Development",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="border-t border-white/5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Achievements & Certifications
          </p>

          <h2
            id="achievements-title"
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Milestones that
            <br />
            <span className="gradient-text">
              back my skills.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Competitive programming achievements and technical
            certifications that reflect my problem-solving ability
            and continued learning.
          </p>
        </div>

        {/* Achievements */}
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.035] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                    <Icon
                      size={21}
                      aria-hidden="true"
                      className="text-gray-400 transition-colors group-hover:text-white"
                    />
                  </div>

                  <FiExternalLink
                    size={17}
                    aria-hidden="true"
                    className="text-gray-600 transition-colors group-hover:text-gray-300"
                  />
                </div>

                <p className="mt-6 text-4xl font-bold tracking-tight text-white">
                  {item.value}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Certifications Header */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Certifications
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Learning backed by credentials.
            </h3>
          </div>

          <p className="text-sm text-gray-500">
            Technical learning & skill validation
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <article
              key={`${cert.issuer}-${cert.title}`}
              className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.035]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/30">
                  <FiBookOpen
                    size={17}
                    aria-hidden="true"
                    className="text-gray-400 transition-colors group-hover:text-white"
                  />
                </div>

                <FiCheckCircle
                  size={16}
                  aria-hidden="true"
                  className="mt-1 text-gray-600"
                />
              </div>

              <h4 className="mt-5 text-sm font-semibold leading-6 text-white">
                {cert.title}
              </h4>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                {cert.issuer}
              </p>

              <div className="mt-4">
                <span className="inline-flex rounded-full border border-white/10 px-2.5 py-1 text-xs text-gray-400">
                  {cert.category}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;
