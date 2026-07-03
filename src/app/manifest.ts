import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Villa Sattvika — Private Sanctuary in Bali",
    short_name: "Villa Sattvika",
    description:
      "A secluded 2-bedroom private villa in Umalas, Bali with a private pool and rice field views.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F4",
    theme_color: "#2D4A35",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
