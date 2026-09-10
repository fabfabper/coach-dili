import { siteConfig } from "@/lib/site";

export function StructuredData() {
  const data = { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, areaServed: "Zurich", address: { "@type": "PostalAddress", addressLocality: "Zurich", addressCountry: "CH" }, sameAs: ["https://www.instagram.com"] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}