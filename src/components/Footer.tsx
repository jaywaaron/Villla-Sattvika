function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

const exploreLinks = [
  { label: "The Villa", href: "#villa" },
  { label: "Amenities", href: "#amenities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Location", href: "#location" },
  { label: "Book Now", href: "#book" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="max-w-6xl mx-auto px-10 lg:px-20 py-16">
        {/* Top: logo + tagline */}
        <div className="flex flex-col items-start gap-2 mb-14">
          <span className="font-label tracking-[0.3em] text-white text-sm uppercase">
            Villa Sattvika
          </span>
          <span className="text-terracotta text-xs font-label tracking-widest">
            Sattvika · Pure · Bali
          </span>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {/* Col 1: The Villa */}
          <div className="flex flex-col gap-6">
            <h3 className="font-label text-xs tracking-[0.25em] uppercase text-white/50">
              The Villa
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              A secluded two-bedroom sanctuary in the heart of Umalas, Kerobokan.
              Private pool, hot tub, and lush rice field views — Bali as it was
              always meant to feel.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.instagram.com/villasattvika"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Villa Sattvika on Instagram"
                className="text-white hover:text-terracotta transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/villasattvika"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Villa Sattvika on Facebook"
                className="text-white hover:text-terracotta transition-colors duration-300"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="flex flex-col gap-6">
            <h3 className="font-label text-xs tracking-[0.25em] uppercase text-white/50">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-label text-xs tracking-[0.25em] uppercase text-white/50">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Umalas, Kerobokan,<br />
                Bali 80361, Indonesia
              </p>
              <a
                href="mailto:villasattvika@gmail.com"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                villasattvika@gmail.com
              </a>
              <a
                href="https://wa.me/628120000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                WhatsApp: +62 812 0000 0000
              </a>
              <a
                href="https://www.booking.com/hotel/id/villa-sattvika.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-terracotta hover:text-terracotta-light transition-colors duration-300"
              >
                Book on Booking.com →
              </a>
            </address>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30 text-center sm:text-left">
            &copy; 2025 Villa Sattvika. All rights reserved. &middot; Built with care in Bali.
          </p>
        </div>
      </div>
    </footer>
  );
}
