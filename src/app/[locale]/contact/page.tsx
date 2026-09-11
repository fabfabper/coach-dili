import { notFound } from "next/navigation";
import { MapLink } from "@/components/map-link";
import { PageHero } from "@/components/page-parts";
import { getContent, isLocale } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = getContent(rawLocale);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.venue}, ${siteConfig.streetAddress}, ${siteConfig.postalCode} ${siteConfig.city}`,
  )}`;
  return (
    <main>
      <PageHero
        locale={rawLocale}
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        intro={content.contact.intro}
      />
      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-details">
            <p className="eyebrow">Coach Dili</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a
              className="contact-instagram-link"
              href="https://www.instagram.com/coachdili"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @coachdili"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" className="instagram-dot" />
              </svg>
            </a>
            <MapLink
              className="contact-location-link"
              address={`${siteConfig.venue}, ${siteConfig.streetAddress}, ${siteConfig.postalCode} ${siteConfig.city}`}
              fallbackUrl={mapsUrl}
            >
              {siteConfig.venue}
              <br />
              {siteConfig.streetAddress}
              <br />
              {siteConfig.postalCode} {siteConfig.city}
            </MapLink>
          </div>
        </div>
      </section>
    </main>
  );
}
