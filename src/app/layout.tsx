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

export const metadata: Metadata = {
  title: "Villa Sattvika — Private Sanctuary in Bali",
  description:
    "A secluded 2-bedroom private villa in Kerobokan, Bali. Includes a private pool and a view of the rice fields. The pure life awaits.",
  keywords: [
    "Villa Sattvika",
    "Bali villa",
    "Kerobokan villa",
    "private pool villa Bali",
    "Umalas villa",
    "luxury villa Bali",
  ],
  openGraph: {
    title: "Villa Sattvika — Private Sanctuary in Bali",
    description:
      "Secluded 2-bedroom private villa with a private pool and rice field views in Kerobokan, Bali.",
    type: "website",
    locale: "en_US",
  },
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
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
