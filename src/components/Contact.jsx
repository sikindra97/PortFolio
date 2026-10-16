
import { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiArrowUpRight,
  FiCopy,
  FiCheck,
} from "react-icons/fi";

const EMAIL = "sikindrak884@gmail.com";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sikindra97",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sikindra05",
    icon: FiLinkedin,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/sikindra/",
    icon: FiCode,
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setCopyError(false);

      // Reset feedback after a short delay.
      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-white/5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">

        {/* Section Heading */}
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          Contact
        </p>

        <h2
          id="contact-title"
          className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Let's build something
          <br />
          <span className="gradient-text">
            great together.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Looking for a full-stack developer or software development
          intern? I'm open to opportunities where I can contribute,
          solve real-world problems, and grow as an engineer.
        </p>

        {/* Email Address */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <FiMail
            size={17}
            aria-hidden="true"
            className="text-gray-500"
          />

          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-gray-300 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white"
          >
            {EMAIL}
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label={copied ? "Email copied" : "Copy email address"}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400 transition hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            {copied ? (
              <FiCheck size={14} aria-hidden="true" />
            ) : (
              <FiCopy size={14} aria-hidden="true" />
            )}

            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>

        {copyError && (
          <p role="status" className="mt-2 text-xs text-gray-400">
            Couldn't copy automatically. Please select the email address above.
          </p>
        )}

        {/* Primary Action */}
        <div className="mt-8">
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(
              "Software Development Opportunity"
            )}`}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-200 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <FiMail size={17} aria-hidden="true" />
            Get In Touch

            <FiArrowUpRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Connect with me
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.label} profile`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-gray-400 transition duration-200 hover:border-white/25 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <Icon size={18} aria-hidden="true" />
                  {link.label}
                  <FiArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="text-gray-600"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-600 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Sikindra Kumar. All rights reserved.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-1.5 transition hover:text-gray-300"
            >
              Back to top
              <FiArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
