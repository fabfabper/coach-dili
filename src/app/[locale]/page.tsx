import Link from "next/link";
import { notFound } from "next/navigation";
import { StudioImage } from "@/components/page-parts";
import { getContent, isLocale, locales } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const content = getContent(locale);
  return (
    <main>
      <section className="hero">
        <div className="hero-image">
          <StudioImage
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=85"
            alt={content.home.imageAlt}
            priority
          />
          <div className="hero-copy">
            <p className="eyebrow">{content.home.eyebrow}</p>
            <h1 className="display-title">{content.home.title}</h1>
            <p className="hero-intro">{content.home.intro}</p>
          </div>
          <div className="hero-overlay-actions">
            <Link className="button button-light" href={`/${locale}/services`}>
              {content.home.primaryCta}
              <span className="button-arrow" aria-hidden="true" />
            </Link>
            <a
              className="button button-ghost hero-instagram-link"
              href="https://www.instagram.com/coachdili"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" className="instagram-dot" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">{content.home.servicesEyebrow}</p>
            <h2>{content.home.servicesTitle}</h2>
          </div>
          <div className="editorial-list">
            {content.servicesList.map((service) => (
              <article className="editorial-item" key={service.id}>
                <span className="editorial-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 38 }}>
            <Link className="text-link" href={`/${locale}/services`}>
              {content.labels.viewAll}
            </Link>
          </div>
        </div>
      </section>
      <section className="split-section section-warm">
        <div className="split-image">
          <StudioImage
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=85"
            alt={content.about.imageAlt}
          />
        </div>
        <div className="split-copy">
          <p className="eyebrow">{content.home.trainerEyebrow}</p>
          <h2>{content.home.trainerTitle}</h2>
          <p>{content.home.trainerBody}</p>
          <div style={{ marginTop: 30 }}>
            <Link className="text-link" href={`/${locale}/about`}>
              {content.labels.explore}
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-dark" id="approach">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">{content.home.approachEyebrow}</p>
            <h2>{content.home.approachTitle}</h2>
          </div>
          <div className="principles">
            {content.principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="quote-section section-light">
        <div className="shell">
          <p className="quote">“{content.home.testimonial}”</p>
          <p className="quote-byline">{content.home.testimonialAuthor}</p>
        </div>
      </section>
    </main>
  );
}
