import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

interface AmenityItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

function PoolIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M4 26c3.5-4 7-4 10.5 0s7 4 10.5 0S28 22 32 26"
        className="stroke-sage"
      />
      <path
        d="M4 20c3.5-4 7-4 10.5 0s7 4 10.5 0S28 16 32 20"
        className="stroke-forest"
      />
      <rect x="10" y="7" width="16" height="9" rx="1" className="stroke-forest" />
      <path d="M14 7V5M22 7V5" className="stroke-sage" />
    </svg>
  );
}


function RiceFieldIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 28c5-6 9-6 14 0s9 6 18 0" className="stroke-sage" />
      <path d="M2 22c4-5 8-5 12 0" className="stroke-forest" />
      <path
        d="M18 10c2-4 5-5 7-4M18 10c-1-4 1-7 4-7M18 10v12"
        className="stroke-forest"
      />
      <path
        d="M10 14c1-3 3-4 5-3M10 14c0-3 2-5 4-4M10 14v10"
        className="stroke-sage"
      />
    </svg>
  );
}

function BedroomIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 26V14a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v12" className="stroke-forest" />
      <path d="M2 26h32" className="stroke-forest" />
      <path d="M4 18h28" className="stroke-sage" />
      <rect x="8" y="18" width="8" height="5" rx="1" className="stroke-sage" />
      <rect x="20" y="18" width="8" height="5" rx="1" className="stroke-sage" />
      <path d="M18 12v6" className="stroke-forest" />
    </svg>
  );
}


function KitchenIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="8" width="28" height="20" rx="2" className="stroke-forest" />
      <path d="M4 16h28" className="stroke-forest" />
      <circle cx="12" cy="12" r="2" className="stroke-sage" />
      <circle cx="18" cy="12" r="2" className="stroke-sage" />
      <circle cx="24" cy="12" r="2" className="stroke-sage" />
      <path d="M10 22h6M10 25h4" className="stroke-sage" />
      <rect x="20" y="20" width="8" height="6" rx="1" className="stroke-sage" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 14a20 20 0 0 1 28 0" className="stroke-sage" />
      <path d="M8.5 18.5a14 14 0 0 1 19 0" className="stroke-sage" />
      <path d="M13 23a8 8 0 0 1 10 0" className="stroke-forest" />
      <circle cx="18" cy="28" r="1.5" className="stroke-forest fill-forest" />
    </svg>
  );
}


const amenities: AmenityItem[] = [
  {
    id: "pool",
    title: "Private Pool",
    description: "Plunge into your own private pool at any hour, located right infront of the bedrooms and living area",
    icon: <PoolIcon />,
  },
  {
    id: "rice-fields",
    title: "Rice Field Views",
    description: "Leave the villa to the sight of emerald rice fields right outside your door",
    icon: <RiceFieldIcon />,
  },
  {
    id: "bedrooms",
    title: "2 Spacious Bedrooms",
    description:
      "Each room comes with aesthetic king-size beds, with ensuite bathroom",
    icon: <BedroomIcon />,
  },
  {
    id: "kitchen",
    title: "Full Kitchen",
    description: "Fully equipped kitchen, who says you can't cook on vacation?",
    icon: <KitchenIcon />,
  },
  {
    id: "wifi",
    title: "High-Speed WiFi",
    description: "Seamless connectivity throughout the villa, perfect for work or leisure",
    icon: <WifiIcon />,
  },
];

interface AmenityCardProps {
  item: AmenityItem;
}

function AmenityCard({ item }: AmenityCardProps) {
  return (
    <div className="group flex flex-col gap-5 p-8 cursor-default bg-white border border-cream-deep transition-transform duration-300 ease-luxury hover:scale-105 hover:z-10">
      <div className="transition-transform duration-300 ease-luxury group-hover:-translate-y-0.5">
        {item.icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-label text-xs tracking-widest uppercase text-forest font-semibold">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-charcoal-light leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white py-24 lg:py-32">
      <FadeIn className="max-w-6xl mx-auto px-10 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16 lg:mb-20 max-w-2xl mx-auto">
          <span className="section-label text-4xl tracking-[0.3em] bg-terracotta text-white px-6 py-3 rounded-sm">What We Offer</span>
        </div>

        {/* Amenity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {amenities.map((item) => (
            <AmenityCard key={item.id} item={item} />
          ))}
        </div>
      </FadeIn>
    </section>  
  );
}
