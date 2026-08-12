function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-sm text-gray-600 sm:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Sikindra Kumar.All rights reserved.</p>

        <p>Designed & built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;