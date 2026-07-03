"use client";

import { useState } from "react";
import Image from "next/image";
import posthog from "posthog-js";

interface RoomImage {
  src: string;
  alt: string;
}

interface Room {
  title: string;
  description: string;
  images: RoomImage[];
}

const rooms: Room[] = [
  {
    title: "Pool & Exterior",
    description:
      "The private deck and plunge pool, where every room opens out to the water.",
    images: [
      { src: "/rooms/exterior-1.jpg", alt: "Twilight view of the plunge pool and teak deck" },
    ],
  },
  {
    title: "Living, Dining & Kitchen",
    description:
      "An open-plan pavilion for shared mornings and easy evenings, fully equipped and sun-filled.",
    images: [
      { src: "/rooms/living-2.jpg", alt: "Kitchen and dining pavilion with teak furnishings" },
      { src: "/rooms/living-1.jpg", alt: "Open-plan living and dining area in daylight" },
      { src: "/rooms/living-3.jpg", alt: "Living room sofa with sliding doors open to the pool" },
    ],
  },
  {
    title: "The Garden Suite",
    description:
      "A spacious bedroom equipped with a smart TV, opening onto its own private garden corner.",
    images: [
      { src: "/rooms/bedroom-garden-1.jpg", alt: "Garden Suite bedroom with slatted timber wall and TV" },
      { src: "/rooms/bedroom-garden-3.jpg", alt: "Garden Suite bedroom with pool view through sliding doors" },
      { src: "/rooms/bedroom-garden-4.jpg", alt: "Garden Suite bedroom at night with garden view" },
    ],
  },
  {
    title: "The Olive Suite",
    description:
      "Deep olive walls and a cane headboard, with an open ensuite vanity just steps away.",
    images: [
      { src: "/rooms/bedroom-olive-1.jpg", alt: "Olive Suite bedroom with ensuite vanity" },
      { src: "/rooms/bedroom-olive-2.jpg", alt: "Olive Suite bedroom opening to the pool deck" },
      { src: "/rooms/bedroom-garden-2.jpg", alt: "Olive Suite bedroom with slatted timber wall and pool view" },
    ],
  },
];

function RoomCarousel({ room }: { room: Room }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = room.images.length > 1;

  function next() {
    const nextIndex = (index + 1) % room.images.length;
    setIndex(nextIndex);
    posthog.capture("room_photo_navigated", { room_title: room.title, photo_index: nextIndex, direction: "next" });
  }

  function prev() {
    const prevIndex = (index - 1 + room.images.length) % room.images.length;
    setIndex(prevIndex);
    posthog.capture("room_photo_navigated", { room_title: room.title, photo_index: prevIndex, direction: "prev" });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="relative aspect-[4/3] overflow-hidden group transition-transform duration-700 ease-luxury hover:scale-[1.06] hover:z-20">
        {room.images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ease-luxury ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label={`Previous photo of ${room.title}`}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center
                         bg-charcoal-dark/40 text-white opacity-0 group-hover:opacity-100
                         transition-opacity duration-300 hover:bg-charcoal-dark/70"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={`Next photo of ${room.title}`}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center
                         bg-charcoal-dark/40 text-white opacity-0 group-hover:opacity-100
                         transition-opacity duration-300 hover:bg-charcoal-dark/70"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {room.images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => { setIndex(i); posthog.capture("room_photo_navigated", { room_title: room.title, photo_index: i, direction: "dot" }); }}
                  aria-label={`Show photo ${i + 1} of ${room.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-5 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div>
        <h3 className="font-display text-2xl font-normal text-white mb-1.5">
          {room.title}
        </h3>
        <p className="font-sans text-sm text-white/60 leading-relaxed">
          {room.description}
        </p>
      </div>
    </div>
  );
}

export default function Rooms() {
  return (
    <section id="rooms" className="bg-charcoal-dark py-24">
      <div className="max-w-6xl mx-auto px-10 lg:px-20">
        <div className="text-center mb-8">
          <p className="font-label text-xs tracking-[0.3em] uppercase text-terracotta font-semibold mb-4">
            Explore Our
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
            Facilities & Rooms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {rooms.map((room) => (
            <RoomCarousel key={room.title} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
