import { notFound } from "next/navigation";
import { PageHero, ServiceList, StudioImage } from "@/components/page-parts";
import { getContent, isLocale } from "@/lib/content";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = getContent(rawLocale);
  return (
    <main>
      <PageHero
        locale={rawLocale}
        eyebrow={content.services.eyebrow}
        title={content.services.title}
        intro={content.services.intro}
      />
      <section className="section">
        <div className="shell">
          <ServiceList locale={rawLocale} services={content.servicesList} />
        </div>
      </section>
      <section className="split-image services-bottom-image">
        <StudioImage src="/photos/PHOTO-2026-09-18-10-05-50.jpg" alt={content.home.imageAlt} />
      </section>
    </main>
  );
}
