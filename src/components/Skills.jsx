import {
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiRedux,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      ["JavaScript (ES6+)", SiJavascript],
      ["C++", SiCplusplus],
      ["SQL", SiMysql],
    ],
  },

  {
    title: "Frontend",
    skills: [
      ["React.js", SiReact],
      ["Redux Toolkit", SiRedux],
      ["HTML5", SiHtml5],
      ["CSS3", null],
      ["Tailwind CSS", SiTailwindcss],
    ],
  },

  {
    title: "Backend",
    skills: [
      ["Node.js", SiNodedotjs],
      ["Express.js", SiExpress],
      ["REST APIs", null],
      ["JWT Authentication", null],
      ["MVC Architecture", null],
      ["RBAC", null],
      ["Redis & Caching", SiRedis],
    ],
  },

  {
    title: "Databases",
    skills: [
      ["MongoDB", SiMongodb],
      ["Mongoose", null],
      ["MySQL", SiMysql],
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      ["Git", SiGit],
      ["GitHub", SiGithub],
      ["Postman", SiPostman],
      ["VS Code", null],
      ["Render", null],
    ],
  },
];

const coreSkills = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I use to
            <br />
            <span className="gradient-text">
              build and solve.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500">
            A combination of full-stack development technologies,
            backend architecture, databases and computer science
            fundamentals that I use to build reliable applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.035]"
            >
              {/* Group Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">
                  {group.title}
                </h3>

                <span className="text-xs text-gray-600">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map(([name, Icon]) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-400 transition duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                  >
                    {Icon && (
                      <Icon
                        size={16}
                        className="shrink-0"
                      />
                    )}

                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Core CS */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.035] md:col-span-2 lg:col-span-1">

            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">
                Core CS
              </h3>

              <span className="text-xs text-gray-600">
                05
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-400 transition duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            {/* Primary Stack */}
            <div>
              <p className="text-sm font-medium text-white">
                Primary Stack
              </p>

              <p className="mt-2 text-sm text-gray-500">
                React.js • Node.js • Express.js • MongoDB
              </p>
            </div>

            <div className="h-px w-full bg-white/10 sm:h-8 sm:w-px" />

            {/* State Management */}
            <div>
              <p className="text-sm font-medium text-white">
                State Management
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Redux Toolkit
              </p>
            </div>

            <div className="h-px w-full bg-white/10 sm:h-8 sm:w-px" />

            {/* Problem Solving */}
            <div>
              <p className="text-sm font-medium text-white">
                Problem Solving
              </p>

              <p className="mt-2 text-sm text-gray-500">
                1300+ DSA Problems Solved
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;