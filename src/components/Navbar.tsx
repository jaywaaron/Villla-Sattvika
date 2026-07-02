"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Villa", href: "#villa" },
  { label: "Amenities", href: "#amenities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white shadow-[0_1px_24px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-label text-sm tracking-[0.3em] uppercase transition-colors duration-300 ${
              scrolled ? "text-forest-dark" : "text-white"
            }`}
          >
            Villa Sattvika
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative font-label text-xs tracking-[0.18em] uppercase transition-colors duration-300 hover:opacity-60 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? "text-charcoal" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/628131111099"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-label text-xs tracking-[0.18em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  scrolled
                    ? "border-forest text-forest hover:bg-forest hover:text-cream"
                    : "border-white/70 text-white hover:bg-white/10 hover:border-white"
                }`}
              >
                Book Now
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] transition-colors duration-300 ${
              scrolled ? "text-forest-dark" : "text-white"
            }`}
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-forest-dark flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : "0ms" }}
                className={`font-label text-sm tracking-[0.25em] uppercase text-white/90 hover:text-white transition-all duration-300 ${
                  menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/628131111099"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? "340ms" : "0ms" }}
              className={`inline-block mt-4 font-label text-sm tracking-[0.25em] uppercase border border-white/50 text-white px-8 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Decorative label at bottom */}
        <p className="absolute bottom-10 font-label text-xs tracking-[0.3em] uppercase text-white/30">
          Umalas · Bali
        </p>
      </div>
    </>
  );
}
