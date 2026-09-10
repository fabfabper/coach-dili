import Link from "next/link";
import { notFound } from "next/navigation";
import { StudioImage } from "@/components/page-parts";
import { getContent, isLocale, locales } from "@/lib/content";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const content = getContent(locale);
  return <main>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">{content.home.eyebrow}</p><h1 className="display-title">{content.home.title}</h1><p className="hero-intro">{content.home.intro}</p><div className="hero-actions"><Link className="button button-dark" href={`/${locale}/booking`}>{content.home.primaryCta}<span aria-hidden="true">↗</span></Link><Link className="text-link" href={`/${locale}#approach`}>{content.home.secondaryCta}</Link></div></div><div className="hero-image"><StudioImage src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=85" alt={content.home.imageAlt} priority /></div></section>
    <section className="section section-light"><div className="shell"><div className="section-heading"><p className="eyebrow">{content.home.servicesEyebrow}</p><h2>{content.home.servicesTitle}</h2></div><div className="editorial-list">{content.servicesList.map((service) => <article className="editorial-item" key={service.id}><span className="editorial-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div><div style={{ marginTop: 38 }}><Link className="text-link" href={`/${locale}/services`}>{content.labels.viewAll}</Link></div></div></section>
    <section className="split-section section-warm"><div className="split-image"><StudioImage src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85" alt={content.about.imageAlt} /></div><div className="split-copy"><p className="eyebrow">{content.home.trainerEyebrow}</p><h2>{content.home.trainerTitle}</h2><p>{content.home.trainerBody}</p><div style={{ marginTop: 30 }}><Link className="text-link" href={`/${locale}/about`}>{content.labels.explore}</Link></div></div></section>
    <section className="section section-dark" id="approach"><div className="shell"><div className="section-heading"><p className="eyebrow">{content.home.approachEyebrow}</p><h2>{content.home.approachTitle}</h2></div><div className="principles">{content.principles.map((principle) => <article className="principle" key={principle.number}><span className="principle-number">{principle.number}</span><h3>{principle.title}</h3><p>{principle.body}</p></article>)}</div></div></section>
    <section className="quote-section section-light"><div className="shell"><p className="quote">“{content.home.testimonial}”</p><p className="quote-byline">{content.home.testimonialAuthor}</p></div></section>
    <section className="cta-section section-warm"><div className="shell"><h2>{content.home.ctaTitle}</h2><p>{content.home.ctaBody}</p><Link className="button button-dark" href={`/${locale}/booking`}>{content.home.primaryCta}<span aria-hidden="true">↗</span></Link></div></section>
  </main>;
}