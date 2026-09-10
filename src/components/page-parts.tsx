import Image from "next/image";
import Link from "next/link";
import type { Locale, Service } from "@/lib/content";
import { getContent } from "@/lib/content";

export function PageHero({ eyebrow, title, intro }: { locale: Locale; eyebrow: string; title: string; intro?: string }) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro && <p className="page-intro">{intro}</p>}</div></section>;
}

export function ServiceList({ locale, services, action = true }: { locale: Locale; services: Service[]; action?: boolean }) {
  const content = getContent(locale);
  return <div className="editorial-list">{services.map((service) => <article className="service-detail" key={service.id}><span className="editorial-number">{service.number}</span><div><h2>{service.title}</h2><p className="service-detail-copy">{service.description}<br /><br />{service.detail}</p><div className="service-meta"><span>{service.duration}</span><span>{service.price}</span></div></div>{action && <div className="service-action"><Link className="text-link" href={`/${locale}/booking?service=${service.id}`}>{content.labels.book}</Link></div>}</article>)}</div>;
}

export function StudioImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return <Image className="image-fill" src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 50vw" priority={priority} />;
}