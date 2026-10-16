
import { useState } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Multi-Tenant School Management System",
    type: "MERN SaaS Application",
    description:
      "A multi-tenant school management platform for managing schools, students, teachers, classes, subjects, attendance, and fees with secure role-based access control and tenant-level data isolation.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Joi",
      "Mongoose",
    ],
    features: [
      "Multi-tenant SaaS architecture",
      "JWT authentication and role-based access control",
      "Tenant-level data isolation",
      "Student, teacher, and class management",
      "Attendance and fee management",
      "Protected REST APIs with Joi validation",
    ],
    github:
      "https://github.com/sikindra97/multi_tenant_school_management",
    live: "https://schoolerp-pkgi.onrender.com/",
  },

  {
    number: "02",
    title: "AI Developer Productivity Platform",
    type: "Full Stack AI Application",
    description:
      "A full-stack developer productivity platform integrating GitHub OAuth 2.0 and GitHub REST APIs to analyze repositories, commits, pull requests, and issues while providing AI-powered developer insights.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GitHub OAuth",
      "LangChain",
      "LangGraph",
      "JWT",
    ],
    features: [
      "GitHub OAuth 2.0 integration",
      "Repository and developer activity analysis",
      "Commits, pull requests, and issues integration",
      "AI-powered developer productivity analysis",
      "JWT authentication and protected routes",
      "GitHub Actions CI/CD",
    ],
    github:
      "https://github.com/sikindra97/AI_Powered_Developer",
    live: "https://aipowereddeveloper.netlify.app/",
  },

  {
    number: "03",
    title: "AI Resume Analyzer Web Application",
    type: "Full Stack AI Application",
    description:
      "An AI-powered resume analysis platform that evaluates resumes against job requirements and provides actionable insights to improve job compatibility.",
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
      "Resume evaluation against job requirements",
      "Resume upload and parsing",
      "Secure authentication and access control",
      "Responsive React frontend",
    ],
    github:
      "https://github.com/sikindra97/AI_Resume_Analyzer",
    live: "https://aresumeanalyzer.netlify.app/",
  },

  {
    number: "04",
    title: "Online Examination System",
    type: "Full Stack Web Application",
    description:
      "An online examination application designed to streamline exam management, question handling, assessment, and results.",
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
      "REST APIs and responsive user interface",
    ],
    github:
      "https://github.com/sikindra97/onlineExam",
  },

  {
    number: "05",
    title: "Smart Expense Tracker",
    type: "Full Stack AI Application",
    description:
      "An AI-powered expense management application featuring OCR bill scanning, voice-based expense entry, manual tracking, and intelligent spending insights.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq AI API",
      "Tailwind CSS",
    ],
    features: [
      "OCR bill scanning and voice expense entry",
      "Income and expense tracking",
      "Expense analytics and category-wise charts",
      "CSV export and AI-based spending suggestions",
      "JWT authentication and secure user management",
    ],
    github:
      "https://github.com/sikindra97/SMART_EXPENSE_TRACKER",
  },

  {
    number: "06",
    title: "DSA Visualizer",
    type: "Data Structures & Algorithms",
    description:
      "An interactive project for visualizing data structures and algorithms to help understand algorithmic operations.",
    tech: ["Data Structures", "Algorithms"],
    features: [
      "Visual representation of algorithmic concepts",
      "Helps understand data structures and algorithm behavior",
    ],
    github:
      "https://github.com/sikindra97/DSA_Visualizer",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 2);

  const remainingCount = projects.length - 2;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-white/5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Selected Work
            </p>

            <h2
              id="projects-title"
              className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Projects built to solve
              <br />
              <span className="gradient-text">
                real-world problems.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              A selection of full-stack applications showcasing my
              experience with backend APIs, databases, authentication,
              AI integration, and application architecture.
            </p>
          </div>

          <a
            href="https://github.com/sikindra97"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit shrink-0 items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            View GitHub
            <FiArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Project Cards */}
        <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
          {visibleProjects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.035] sm:rounded-3xl"
            >
              <div className="grid lg:grid-cols-[72px_minmax(0,1fr)_290px]">

                {/* Project Number */}
                <div className="hidden border-r border-white/10 p-6 lg:block">
                  <span className="text-sm font-medium tabular-nums text-gray-600">
                    {project.number}
                  </span>
                </div>

                {/* Main Content */}
                <div className="min-w-0 p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                      Project {project.number}
                    </span>

                    <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-gray-500">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-white/20 hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
                      >
                        <FiGithub size={17} aria-hidden="true" />
                        Source Code
                        <FiArrowUpRight
                          size={14}
                          aria-hidden="true"
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
                      >
                        <FiExternalLink size={16} aria-hidden="true" />
                        Live Demo
                        <FiArrowUpRight
                          size={14}
                          aria-hidden="true"
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="border-t border-white/10 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                    Key Highlights
                  </p>

                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-6 text-gray-400"
                      >
                        <FiCheckCircle
                          size={15}
                          aria-hidden="true"
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

        {/* Show More / Show Less */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setShowAll((previous) => !previous)}
            aria-expanded={showAll}
            aria-controls="projects-list"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-gray-300 transition duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            {showAll
              ? "Show Featured Projects"
              : `Explore All Projects (${remainingCount} more)`}

            {showAll ? (
              <FiChevronUp size={17} aria-hidden="true" />
            ) : (
              <FiChevronDown size={17} aria-hidden="true" />
            )}
          </button>

          <p className="text-xs text-gray-600">
            Showing {visibleProjects.length} of {projects.length} projects
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
