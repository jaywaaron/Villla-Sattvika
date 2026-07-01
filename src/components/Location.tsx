import Image from "next/image";
import Link from "next/link";

const distances = [
  {
    label: "Batu Belig Beach",
    value: "8 min",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        {/* Wave icon */}
        <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
        <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
      </svg>
    ),
  },
  {
    label: "Seminyak Restaurants",
    value: "10 min",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        {/* Fork and knife icon */}
        <path d="M3 2v7c0 1.1.9 2 2 2 1.1 0 2-.9 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" />
        <path d="M18 22v-3" />
      </svg>
    ),
  },
  {
    label: "Canggu Surf Breaks",
    value: "15 min",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        {/* Wave / surf icon */}
        <path d="M2 8c2-3 5-3 7 0s5 3 7 0" />
        <path d="M2 14c2-3 5-3 7 0s5 3 7 0" />
        <path d="M20 8c0 5-3 10-8 12" />
      </svg>
    ),
  },
  {
    label: "Ngurah Rai Airport",
    value: "35 min",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        {/* Plane icon */}
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2 3.5 6.5l7 3.5-2 2L5 11l-1.5 1.5 4.5 2 2 4.5L11.5 17l-.5-3.5 2-2 3.5 7 1.3-1.3z" />
      </svg>
    ),
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column — Text Content */}
          <div>
            <p className="section-label mb-4">Find Us</p>

            <h2 className="section-title mb-7 whitespace-pre-line">
              {`Tucked Into the\nHeart of Bali`}
            </h2>

            <p className="section-body mb-10 max-w-lg">
              Villa Sattvika sits on a quiet gang in Kerobokan Kelod — moments
              from Batu Belig Beach and the best of Seminyak, yet set back
              enough to feel worlds away from the crowd.
            </p>

            {/* Distance List */}
            <ul className="space-y-4 mb-10">
              {distances.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="text-sage">{item.icon}</span>
                  <span className="font-sans text-sm text-charcoal flex-1">
                    {item.label}
                  </span>
                  <span className="font-label text-xs tracking-[0.15em] uppercase text-terracotta font-semibold">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-cream-deep mb-8" />

            {/* Address Block */}
            <p className="font-label text-xs tracking-[0.12em] text-charcoal-light mb-8 leading-relaxed">
              Jl. Bumbak Gg. Candra 73 No.18
              <br />
              Kerobokan Kelod, Kec. Kuta Utara
              <br />
              Kabupaten Badung, Bali 80361
            </p>

            <Link
              href="https://maps.app.goo.gl/85Q3+CXR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions
            </Link>
          </div>

          {/* Right Column — Map Image */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[5/4]">
              {/* Aerial image */}
              <Image
                src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&h=700&fit=crop&auto=format&q=85"
                alt="Aerial view of Bali landscape near Kerobokan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Green tint overlay */}
              <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
            </div>

            {/* Floating info card */}
            <div className="absolute bottom-6 left-6 bg-white shadow-xl px-5 py-4 flex items-center gap-3 max-w-[220px]">
              {/* Pin dot */}
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sage-pale shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-forest"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.699-5.101 3.699-9.327 0-4.85-3.77-8.75-8.478-8.75C6.77 1.25 3 5.15 3 10c0 4.226 1.755 7.248 3.699 9.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="font-label text-xs tracking-[0.15em] uppercase text-charcoal-dark font-semibold leading-none mb-1 truncate">
                  Villa Sattvika
                </p>
                <p className="font-sans text-xs text-charcoal-light leading-none truncate">
                  Kerobokan, Bali
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
