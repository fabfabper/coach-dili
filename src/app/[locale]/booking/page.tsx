import { notFound } from "next/navigation";
import { BookingFlow } from "@/components/booking-flow";
import { PageHero } from "@/components/page-parts";
import { getContent, isLocale } from "@/lib/content";

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = getContent(rawLocale);
  const { service } = await searchParams;
  return (
    <main>
      <PageHero
        locale={rawLocale}
        eyebrow={content.booking.eyebrow}
        title={content.booking.title}
        intro={content.booking.intro}
      />
      <section className="section">
        <div className="shell booking-layout">
          <BookingFlow locale={rawLocale} selectedService={service} />
        </div>
      </section>
    </main>
  );
}
