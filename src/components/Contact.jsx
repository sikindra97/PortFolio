import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Contact
        </p>

        <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
          Let's build something
          <br />
          <span className="gradient-text">great together.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-500">
          I'm currently open to software development opportunities,
          internships and challenging projects where I can contribute and
          continue learning.
        </p>

        <a
          href="mailto:sikindrak884@gmail.com"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
        >
          <FiMail />
          Get In Touch
          <FiArrowUpRight />
        </a>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="https://github.com/sikindra97"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 p-3 text-gray-500 transition hover:border-white/30 hover:text-white"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/sikindra05"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 p-3 text-gray-500 transition hover:border-white/30 hover:text-white"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            href="https://leetcode.com/u/sikindra/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 p-3 text-gray-500 transition hover:border-white/30 hover:text-white"
          >
            <FiCode size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;