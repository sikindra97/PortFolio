import {
  FiAward,
  FiCode,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

const achievements = [
  {
    icon: FiCode,
    value: "1300+",
    title: "DSA Problems Solved",
    description:
      "Solved 1300+ data structures and algorithms problems, strengthening problem-solving skills and technical interview preparation.",
  },

  {
    icon: FiAward,
    value: "1st",
    title: "Eminance 2026 Coding Competition",
    description:
      "Secured first position in the Eminance 2026 Coding Competition at CGC Landran.",
  },

  {
    icon: FiTrendingUp,
    value: "2026",
    title: "Competitive Programming",
    description:
      "Consistently practicing DSA and competitive programming to improve algorithmic thinking and coding efficiency.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-white/5 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Achievements
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Proof beyond
            <br />
            <span className="gradient-text">
              projects.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-500">
            A few milestones that demonstrate my consistency in problem
            solving, competitive programming and technical growth.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035]"
              >
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                    <Icon
                      size={21}
                      className="text-gray-400 transition group-hover:text-white"
                    />
                  </div>

                  <FiArrowUpRight
                    size={18}
                    className="text-gray-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gray-400"
                  />
                </div>

                {/* Value */}
                <p className="mt-8 text-4xl font-bold tracking-tight text-white">
                  {item.value}
                </p>

                {/* Title */}
                <h3 className="mt-3 text-lg font-semibold leading-7">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-white">
                Problem Solving
              </p>

              <p className="mt-1 text-sm text-gray-500">
                1300+ DSA problems solved
              </p>
            </div>

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-sm font-medium text-white">
                Competitive Achievement
              </p>

              <p className="mt-1 text-sm text-gray-500">
                1st Position — Eminance 2026
              </p>
            </div>

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-sm font-medium text-white">
                Development Focus
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Full Stack & Software Development
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;