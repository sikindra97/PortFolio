import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Multi-Tenant School Management System",
    type: "MERN SaaS Application",

    description:
      "A multi-tenant school management platform designed to manage students, teachers, classes, subjects, attendance and fees with secure role-based access control and tenant-level data isolation.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],

    features: [
      "Multi-tenant SaaS architecture",
      "Role-based access control",
      "Student & teacher management",
      "Attendance and fee management",
      "Tenant-level data isolation",
    ],

    github:
      "https://github.com/sikindra97/multi_tenant_school_management",

    live: "",
  },

  {
    number: "02",
    title: "Online Examination System",
    type: "Full Stack Examination Platform",

    description:
      "A full-stack online examination platform for conducting secure and scalable exams with exam scheduling, automatic evaluation, result management and AI-based proctoring capabilities.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    features: [
      "MVC-based backend architecture",
      "Exam scheduling and management",
      "Automatic evaluation and result management",
      "AI-based online exam proctoring",
      "Tab switching and window focus tracking",
      "REST APIs and responsive UI",
    ],

    github: "https://github.com/sikindra97/Online-Examination-System",
    live: "https://testexam-lf2q.onrender.com/",
  },

  {
    number: "03",
    title: "AI Resume Analyzer Web Application",
    type: "Full Stack AI Application",

    description:
      "A full-stack AI-powered resume analysis platform that evaluates resumes against job requirements and provides actionable insights for improving job compatibility.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    features: [
      "AI-powered resume analysis",
      "Job requirement matching",
      "REST API authentication",
      "Resume upload and parsing",
      "ATS-oriented insights",
    ],

    github:
      "https://github.com/sikindra97/AI_Resume_Analyzer",

    live: "https://aresumeanalyzer.netlify.app/",
  },

  {
    number: "04",
    title: "Smart Expense Tracker",
    type: "Full Stack Web Application",

    description:
      "A full-stack expense management application for tracking income and expenses, organizing financial activity and visualizing personal spending patterns.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],

    features: [
      "Income and expense tracking",
      "Category-based transactions",
      "Financial activity dashboard",
      "REST API integration",
      "Responsive user interface",
    ],

    github:
      "https://github.com/sikindra97/SMART_EXPENSE_TRACKER",

    live: "https://smartexpensehub.netlify.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Projects built to solve
              <br />
              <span className="gradient-text">
                real-world problems.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-500">
              A selection of full-stack applications demonstrating my
              experience with frontend development, backend APIs,
              authentication, databases and application architecture.
            </p>
          </div>

          <a
            href="https://github.com/sikindra97"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            View GitHub

            <FiArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Projects */}
        <div className="mt-14 space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-300 hover:border-white/20 hover:bg-white/[0.035]"
            >
              <div className="grid lg:grid-cols-[100px_1fr_320px]">

                {/* Project Number */}
                <div className="hidden border-r border-white/10 p-8 lg:block">
                  <span className="text-sm font-medium text-gray-600">
                    {project.number}
                  </span>
                </div>

                {/* Main Project Content */}
                <div className="p-7 sm:p-10">

                  {/* Project Type */}
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                    {project.type}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl text-base leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-5">

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
                    >
                      <FiGithub size={17} />

                      Source Code

                      <FiArrowUpRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>

                    {/* Live Demo */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
                      >
                        <FiExternalLink size={17} />

                        Live Demo

                        <FiArrowUpRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}

                  </div>
                </div>

                {/* Highlights */}
                <div className="border-t border-white/10 p-7 lg:border-l lg:border-t-0 lg:p-10">

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                    Key Highlights
                  </p>

                  <ul className="mt-6 space-y-4">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                      >
                        <FiCheckCircle
                          size={16}
                          className="mt-1 shrink-0 text-gray-500"
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/sikindra97"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            Explore More Projects

            <FiArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;