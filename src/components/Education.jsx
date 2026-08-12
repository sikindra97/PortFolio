function Education() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Education
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold">
                Bachelor of Technology — Information Technology
              </h2>

              <p className="mt-2 text-gray-500">
                Chandigarh Engineering College / CGC Landran
              </p>
            </div>

            <div className="text-sm text-gray-500">2023 – 2027</div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Degree
              </p>
              <p className="mt-2 text-gray-300">B.Tech IT</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Focus
              </p>
              <p className="mt-2 text-gray-300">
                Software Development
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Graduation
              </p>
              <p className="mt-2 text-gray-300">2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;