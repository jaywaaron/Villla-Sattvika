"use client";

import Image from "next/image";

const HERO_IMAGE = "/rooms/exterior-hero.jpg";

const stats = [
  { label: "2 Bedrooms" },
  { label: "Private Pool" },
  { label: "Rice Field Views" },
];

export default function Hero() {
  const handleExploreClick = () => {
    const el = document.querySelector("#villa");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Villa Sattvika — aerial view of the private pool villa surrounded by tropical gardens in Umalas, Bali"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay: dark at bottom, fades to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/30 to-transparent" />
        {/* Subtle vignette at top for nav legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/40 via-transparent to-transparent" />
      </div>

      {/* Main content — vertically and horizontally centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Location label */}
        <div className="inline-flex items-center gap-2 bg-charcoal-dark/50 backdrop-blur-sm border border-white/20 rounded-full pl-3 pr-4 py-1.5 mb-6 shadow-lg shadow-charcoal-dark/20 animate-fade-in">
          <svg
            className="w-3.5 h-3.5 text-terracotta-light flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className="font-label text-xs tracking-[0.3em] uppercase text-white font-semibold">
            Umalas · Bali
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 animate-fade-up">
          <span className="font-normal">Your Best Stay</span>
          <br />
          <span className="font-light">in Bali</span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-base md:text-lg text-white/80 max-w-md leading-relaxed mb-10 animate-fade-up [animation-delay:150ms]">
          A 2-bedroom villa with a private pool &amp; rice field views in between 
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up [animation-delay:300ms]">
          <button onClick={handleExploreClick} className="btn-ghost">
            Explore the Villa
          </button>
          <a
            href="https://wa.me/628131111099"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Book Your Stay
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Villa+Sattvika+Bali"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Location
          </a>
        </div>
      </div>

      {/* Stats row — pinned toward bottom */}
      <div className="relative z-10 w-full pb-14 pt-4 flex justify-center animate-fade-in [animation-delay:600ms]">
        <div className="flex items-center gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <span className="font-label text-xs tracking-widest uppercase text-white/70 px-6 md:px-10">
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <span className="block w-px h-4 bg-white/30 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors duration-300 group"
        >
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
