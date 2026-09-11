import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-parts";
import { getContent, isLocale } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = getContent(rawLocale);
  return (
    <main>
      <PageHero locale={rawLocale} eyebrow="Legal" title={content.legal.privacyTitle} />
      <section className="section">
        <div className="shell legal-copy">
          <p>{content.legal.placeholder}</p>
          <h2>Website usage</h2>
          <p>
            This website presents Coach Dili’s services. Appointment data is handled by SimplyBook.me when you continue
            to booking.
          </p>
          <h2>Contact</h2>
          <p>For privacy questions, contact {siteConfig.email}.</p>
        </div>
      </section>
    </main>
  );
}
