import Image from "next/image";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.18a.75.75 0 00.916.948l5.543-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 01-4.95-1.348l-.355-.211-3.682.965.982-3.585-.232-.369A9.75 9.75 0 1112 21.75z" />
    </svg>
  );
}

export default function BookingCTA() {
  return (
    <section id="book" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/rooms/booking-bg.jpg"
        alt="Villa Sattvika living area with pool view"
        fill
        unoptimized
        sizes="100vw"
        className="object-cover"
        priority={false}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/60 to-charcoal-dark/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-6 max-w-3xl mx-auto py-24">
        {/* Label */}
        <span className="font-label text-xs tracking-[0.3em] uppercase text-terracotta font-semibold">
          Your Stay Awaits
        </span>

        {/* Headline */}
        <h2 className="font-display italic text-white text-5xl md:text-6xl font-light leading-tight">
          Reserve Villa Sattvika
        </h2>

        {/* Availability note */}
        <p className="font-sans text-white/70 text-base md:text-lg">
          Available year-round &middot; From IDR&nbsp;2,400,000&nbsp;/&nbsp;night
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="https://www.booking.com/hotel/id/villa-sattvika.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Book on Booking.com
          </a>
          <a
            href="mailto:villasattvika@gmail.com"
            className="btn-ghost"
          >
            Enquire Directly
          </a>
        </div>

        {/* WhatsApp link */}
        <a
          href="https://wa.me/628120000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/50 hover:text-white/90 font-sans text-sm transition-colors duration-300 mt-1"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon />
          <span>+62 812 0000 0000</span>
        </a>
      </div>
    </section>
  );
}
