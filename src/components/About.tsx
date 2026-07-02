"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface StatItemProps {
  label: string;
  value: string;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-label text-[10px] tracking-[0.25em] uppercase text-terracotta font-semibold">
        {label}
      </span>
      <span className="font-display text-xl font-normal text-forest">
        {value}
      </span>
    </div>
  );
}

interface SlidePhoto {
  src: string;
  alt: string;
}

const aboutSlides: SlidePhoto[][] = [
  [
    { src: "/rooms/exterior-1.jpg", alt: "Twilight view of Villa Sattvika &apos; s private pool and teak deck" },
    { src: "/rooms/living-2.jpg", alt: "Kitchen and dining pavilion with teak furnishings" },
  ],
  [
    { src: "/rooms/bedroom-gold-1.jpg", alt: "Bedroom suite opening onto the pool deck at dusk" },
    { src: "/rooms/bedroom-olive-2.jpg", alt: "Bedroom suite with cane headboard and ensuite vanity" },
  ],
  [
    { src: "/rooms/living-1.jpg", alt: "Open-plan living and dining pavilion in daylight" },
    { src: "/rooms/bedroom-gold-4.jpg", alt: "Bedroom suite reflecting the pool at night" },
  ],
];

const SLIDE_INTERVAL_MS = 4500;

function AboutSlide({ images, startDelayMs }: { images: SlidePhoto[]; startDelayMs: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, SLIDE_INTERVAL_MS);
    }, startDelayMs);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [images.length, startDelayMs]);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
          className={`object-cover object-center transition-opacity duration-1000 ease-luxury ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Subtle inner vignette for depth */}
      <div
        className="absolute inset-0 ring-1 ring-inset ring-charcoal/10"
        aria-hidden="true"
      />

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function AboutGallery() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      {/* Decorative offset frame */}
      <div
        className="absolute inset-0 translate-x-5 translate-y-5 border border-terracotta-pale"
        aria-hidden="true"
      />

      {/* Stack of three rectangular slides */}
      <div className="relative flex flex-col gap-4 lg:gap-5 w-full max-w-md lg:max-w-none">
        {aboutSlides.map((images, i) => (
          <AboutSlide key={images[0].src} images={images} startDelayMs={i * 1500} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="villa"
      className="bg-cream-warm py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column — Text */}
          <div className="flex flex-col gap-8 lg:pr-8">
            <div className="flex flex-col gap-4">
              <span className="section-label">The Villa</span>
              <h2 className="section-title whitespace-pre-line">
                {"Why Villa Sattvika?"}
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <p className="section-body">
                Located in the lanes of Bumbak in Umalas, Villa Sattvika is a peaceful
                retreat spot just minutes from Batu Belig Beach, Seminyak&apos;s dining scene,
                and Canggu&apos;s surf breaks. The villa takes you back to the simple things
                in life. A morning dip in the pool, an evening drink, and nature itself as your background
              </p>
              <p className="section-body">
                The name <em className="font-display not-italic text-forest">Sattvika</em> is
                drawn from Sanskrit, describing all that is pure, wholesome, and
                in harmony with the natural world.
              </p>
              <p className="section-body">
                Within the private walls you will find a shimmering
                outdoor plunge pool, open-plan living spaces that spill onto a teak
                deck, and two bedrooms that offer complete quiet and rest.
                This is not simply a place to stay — it is a place to return to
                yourself.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex gap-10 pt-2 border-t border-cream-deep">
              <StatItem label="Established" value="Est. 2019" />
              <div className="w-px bg-cream-deep" aria-hidden="true" />
              <StatItem label="Location" value="Bumbak, Umalas, Bali" />
            </div>

            <div className="pt-2">
              <Link href="#amenities" className="btn-outline">
                Discover More
              </Link>
            </div>
          </div>

          {/* Right Column — Three stacked auto-advancing photo slides */}
          <AboutGallery />
        </div>
      </div>
    </section>
  );
}
