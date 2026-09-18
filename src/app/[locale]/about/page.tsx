import { notFound } from "next/navigation";
import { PageHero, StudioImage } from "@/components/page-parts";
import { getContent, isLocale } from "@/lib/content";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = getContent(rawLocale);
  return (
    <main>
      <PageHero locale={rawLocale} eyebrow={content.about.eyebrow} title={content.about.title} />
      <section className="split-section section-light">
        <div className="split-image">
          <StudioImage
            src="/photos/PHOTO-2026-09-18-10-05-59.jpg"
            alt={content.about.imageAlt}
          />
        </div>
        <div className="split-copy">
          {content.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">{content.about.eyebrow}</p>
            <h2>{content.about.principlesTitle}</h2>
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
    </main>
  );
}
