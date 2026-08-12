const certifications = [
  {
    title: "Database Management System",
    issuer: "NPTEL — IIT Kharagpur",
    year: "2025",
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "HTML",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "CSS",
    issuer: "HackerRank",
    year: "2025",
  },
];

function Certifications() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Certifications
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Continuous learning.
        </h2>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="flex flex-col justify-between gap-2 py-6 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-medium">{certificate.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {certificate.issuer}
                </p>
              </div>

              <span className="text-sm text-gray-600">
                {certificate.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;