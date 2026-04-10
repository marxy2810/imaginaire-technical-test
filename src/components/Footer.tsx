function Logo() {
  return (
    <svg
      width="36"
      height="22"
      viewBox="0 0 36 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PTLOTO logo"
    >
      <circle cx="13" cy="11" r="10.5" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="23" cy="11" r="10.5" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top strip */}
      <div className="py-12">
        <div className="max-w-[80rem] mx-auto px-6 flex items-center justify-center gap-3">
          <span className="text-md text-white">For the love of the game.</span>
          <Logo />
          <span className="text-md text-white">For the love of the game.</span>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-[80rem] mx-auto px-6 py-10">
        <div className="grid grid-cols-3 gap-8 mobile:grid-cols-1 mobile:gap-6 justify-items-center">
          {/* Column 1: Address */}
          <div>
            <p className="text-md font-semibold mb-4">FTLOTG Snowboards</p>
            <address className="not-italic text-md font-semibold leading-relaxed">
              1 Exeter Place
              <br />
              Nottingham
              <br />
              <a
                href="mailto:cs@ftlotg.co.uk"
                className="supports-hover:hover:text-white transition-colors"
              >
                cs@ftlotg.co.uk
              </a>
            </address>
          </div>

          {/* Column 2: Site links */}
          <div>
            <nav aria-label="Footer navigation">
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {[
                  { label: "Our Products", href: "/products" },
                  { label: "About Us", href: "/about" },
                  { label: "Inspiration Zone", href: "/inspiration" },
                  { label: "Contact Us", href: "/contact" },
                ].map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-md font-semibold supports-hover:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Social links */}
          <div>
            <nav aria-label="Social media links">
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {[
                  { label: "Facebook", href: "https://facebook.com" },
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "TikTok", href: "https://tiktok.com" },
                ].map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md font-semibold supports-hover:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" py-8">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <p className="text-md font-semibold">Website by Imaginaire</p>
        </div>
      </div>
    </footer>
  );
}
