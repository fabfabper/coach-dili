import type { Metadata } from "next";
import type { Locale } from "./content";

export const siteConfig = {
  name: "Coach Dili",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://coach-dili.vercel.app",
  bookingUrl: process.env.NEXT_PUBLIC_SIMPLYBOOK_URL ?? "https://fabfabper.secure.simplybook.me",
  location: "Zurich, Switzerland",
};

export function getMetadata(locale: Locale): Metadata {
  const isGerman = locale === "de";
  return {
    title: isGerman ? "Coach Dili | Personal Training in Zürich" : "Coach Dili | Personal Training in Zurich",
    description: isGerman
      ? "Persönliches Kraft- und Konditionstraining in Zürich. Klar, nachhaltig und auf dich abgestimmt."
      : "Personal strength and conditioning in Zurich. Thoughtful, sustainable training built around you.",
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: `/${locale}`, languages: { de: "/de", en: "/en" } },
    openGraph: {
      title: "Coach Dili",
      description: isGerman ? "Training, das Platz für dein Leben lässt." : "Training that makes room for your life.",
      url: `/${locale}`,
      siteName: "Coach Dili",
      locale: isGerman ? "de_CH" : "en_GB",
      type: "website",
    },
  };
}
