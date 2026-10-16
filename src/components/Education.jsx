
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";

function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="border-t border-white/5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Education
          </p>

          <h2
            id="education-title"
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Academic <span className="gradient-text">background.</span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 sm:p-7 lg:p-8">

          {/* Degree and Duration */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                <FiBookOpen
                  size={21}
                  aria-hidden="true"
                  className="text-gray-300"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-7 text-white sm:text-xl">
                  Bachelor of Technology
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-400">
                  Information Technology
                </p>

                <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-gray-500">
                  <FiMapPin
                    size={15}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />
                  Chandigarh Engineering College, CGC Landran
                </p>
              </div>
            </div>

            {/* Duration */}
            <div className="ml-[60px] flex shrink-0 items-center gap-2 text-sm text-gray-400 sm:ml-0 sm:rounded-full sm:border sm:border-white/10 sm:bg-white/[0.02] sm:px-3.5 sm:py-2">
              <FiCalendar size={15} aria-hidden="true" />
              <span>2023 – 2027</span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-white/10" />

          {/* Academic Details */}
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600">
                Degree
              </p>
              <p className="mt-2 text-sm font-medium text-gray-300">
                B.Tech IT
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600">
                Field of Study
              </p>
              <p className="mt-2 text-sm font-medium text-gray-300">
                Information Technology
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600">
                Expected Graduation
              </p>
              <p className="mt-2 text-sm font-medium text-gray-300">
                2027
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
