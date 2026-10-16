
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

function SkillBadge({ name, Icon }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-black/30 px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
    >
      {Icon && (
        <Icon
          size={15}
          aria-hidden="true"
          className="shrink-0 text-gray-400 transition-colors group-hover:text-white"
        />
      )}
      <span>{name}</span>
    </span>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-white/5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Technical Skills
          </p>

          <h2
            id="skills-title"
            className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Technologies I use to
            <br />
            <span className="gradient-text">
              build and solve.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            My technical toolkit spans full-stack development, API design,
            databases, development tools, and computer science fundamentals.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.035] sm:p-6"
            >
              {/* Group Header */}
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {group.title}
                </h3>

                <span className="text-xs tabular-nums text-gray-600">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map(([name, Icon]) => (
                  <SkillBadge
                    key={name}
                    name={name}
                    Icon={Icon}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Core CS */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.035] sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                Core Computer Science
              </h3>

              <span className="text-xs tabular-nums text-gray-600">
                {String(coreSkills.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {coreSkills.map((skill) => (
                <SkillBadge
                  key={skill}
                  name={skill}
                  Icon={null}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
