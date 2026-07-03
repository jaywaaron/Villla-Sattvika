import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = "https://www.villasattvika.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Villa Sattvika — Private Sanctuary in Bali",
  description:
    "A secluded 2-bedroom private villa in Umalas, Bali. Includes a private pool and a view of the rice fields. The pure life awaits.",
  keywords: [
    "Villa Sattvika",
    "Bali villa",
    "Umalas villa",
    "private pool villa Bali",
    "Umalas villa Bali",
    "luxury villa Bali",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Villa Sattvika — Private Sanctuary in Bali",
    description:
      "Secluded 2-bedroom private villa with a private pool and rice field views in Umalas, Bali.",
    url: SITE_URL,
    siteName: "Villa Sattvika",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa Sattvika — private pool villa in Umalas, Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Sattvika — Private Sanctuary in Bali",
    description:
      "Secluded 2-bedroom private villa with a private pool and rice field views in Umalas, Bali.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Villa Sattvika",
  description:
    "A secluded 2-bedroom private villa in Umalas, Bali with a private pool and rice field views.",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: "IDR 1,500,000 per night",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Bumbak Gg. Candra 73 No.18",
    addressLocality: "Umalas",
    addressRegion: "Bali",
    postalCode: "80361",
    addressCountry: "ID",
  },
  telephone: "+62 813-1111-099",
  email: "villasattvikaumalas@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
