import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-parts";
import { getContent, isLocale } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = getContent(rawLocale);
  return (
    <main>
      <PageHero locale={rawLocale} eyebrow="Legal" title={content.legal.imprintTitle} />
      <section className="section">
        <div className="shell legal-copy">
          <p>{content.legal.placeholder}</p>
          <h2>Coach Dili</h2>
          <p>
            {siteConfig.venue}
            <br />
            {siteConfig.streetAddress}
            <br />
            {siteConfig.postalCode} {siteConfig.city}
            <br />
            {siteConfig.email}
          </p>
          <h2>Responsible for content</h2>
          <p>Coach Dili</p>
        </div>
      </section>
    </main>
  );
}
