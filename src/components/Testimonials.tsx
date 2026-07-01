"use client";

import { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  duration: string;
  date: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "A very peaceful and secluded space, a bit of challenge to find (especially for grab food deliveries) but manageable. The place is as beautiful as it looks on pictures. Would definitely recommend to others and will book again. The cleaning lady is very nice and polite as well :)",
    name: "Galang",
    duration: "11 years on Airbnb",
    date: "September 2025",
    rating: 4,
  },
  {
    quote:
      "This villa was great. Very private with beautiful surroundings. The bedrooms were really cosy and clean. I recommend this place to anybody, whether it be a romantic getaway or a family trip, it's suitable for any occasion.",
    name: "Kai",
    duration: "12 years on Airbnb",
    date: "September 2025",
    rating: 4,
  },
  {
    quote:
      "Amazing and brand new villa. Bedrooms are separated by the pool. Cold aircons. Just a heads up, the road and villa are so new, they aren't on grab maps yet, but it's on the google maps. I imagine this will get fully booked fast, so book it while you can if you see it available!",
    name: "Jam",
    duration: "12 years on Airbnb",
    date: "September 2025",
    rating: 4,
  },
  {
    quote:
      "We had a wonderful stay. The villa was clean, cozy, and exactly as shown in the pictures. The staff were very friendly and always helpful. The location was great and perfect for relaxing with the family. Thank you for the great hospitality – we would definitely come back.",
    name: "Riki",
    duration: "7 years on Airbnb",
    date: "4 days ago",
    rating: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  const t = testimonials[index];

  return (
    <section id="testimonials" className="bg-cream-warm py-24">
      <div className="max-w-6xl mx-auto px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="section-label">Guest Stories</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        {/* Slideshow */}
        <div className="relative max-w-2xl mx-auto">
          <article className="bg-white border-t-2 border-terracotta-light p-10 flex flex-col gap-6 min-h-[20rem]">
            {/* Stars */}
            <div className="flex items-center gap-0.5 text-terracotta" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < t.rating} />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="flex-1">
              <p className="font-display text-xl leading-relaxed text-charcoal-dark">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>

            {/* Footer */}
            <footer className="flex items-center justify-between pt-4 border-t border-cream-deep">
              <div className="flex flex-col gap-0.5">
                <span className="font-label uppercase text-xs tracking-widest text-forest font-semibold">
                  {t.name}
                </span>
                <span className="text-xs text-charcoal-light font-label">
                  {t.duration}
                </span>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-xs text-charcoal-light font-label">{t.date}</span>
                <span className="text-xs text-charcoal-light font-label">Airbnb</span>
              </div>
            </footer>
          </article>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center border border-charcoal/20 text-charcoal hover:border-forest hover:text-forest transition-colors duration-300"
            >
              ‹
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-terracotta" : "w-1.5 bg-charcoal/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center border border-charcoal/20 text-charcoal hover:border-forest hover:text-forest transition-colors duration-300"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
