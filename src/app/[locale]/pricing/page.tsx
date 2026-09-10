import { notFound } from "next/navigation";
import { PageHero, ServiceList } from "@/components/page-parts";
import { getContent, isLocale } from "@/lib/content";

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = getContent(rawLocale);
  return <main><PageHero locale={rawLocale} eyebrow={content.pricing.eyebrow} title={content.pricing.title} intro={content.pricing.intro} /><section className="section"><div className="shell"><ServiceList locale={rawLocale} services={content.servicesList} /><p style={{ marginTop: 32, color: "var(--muted)" }}>{content.pricing.note}</p></div></section></main>;
}