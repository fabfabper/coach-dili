import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-parts";
import { getContent, isLocale } from "@/lib/content";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = getContent(rawLocale);
  return <main><PageHero locale={rawLocale} eyebrow={content.contact.eyebrow} title={content.contact.title} intro={content.contact.intro} /><section className="section"><div className="shell contact-grid"><div className="contact-details"><p className="eyebrow">Coach Dili</p><a href="mailto:hello@coachdili.ch">hello@coachdili.ch</a><a href="tel:+41440000000">+41 44 000 00 00</a><p style={{ color: "var(--muted)" }}>Zurich, Switzerland</p></div><form action={process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "#"} method="POST"><h2 className="form-title">{content.contact.formTitle}</h2><div className="form-field"><label htmlFor="name">{content.contact.name}</label><input id="name" name="name" required /></div><div className="form-field"><label htmlFor="email">{content.contact.email}</label><input id="email" name="email" type="email" required /></div><div className="form-field"><label htmlFor="message">{content.contact.message}</label><textarea id="message" name="message" required /></div><button className="button button-dark" type="submit">{content.contact.submit}<span aria-hidden="true">↗</span></button></form></div></section></main>;
}