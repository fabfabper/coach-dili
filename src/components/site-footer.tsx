import Link from "next/link";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Link className="wordmark footer-wordmark" href={`/${locale}`}>
            COACH <span>DILI</span>
          </Link>
          <p className="footer-tagline">{content.home.intro}</p>
        </div>
        <Link className="button button-light" href={`/${locale}/booking`}>
          {content.labels.book}
          <span className="button-arrow" aria-hidden="true" />
        </Link>
      </div>
      <div className="shell footer-bottom">
        <div>
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>{siteConfig.location}</span>
        </div>
        <div className="footer-links">
          <Link href={`/${locale}/privacy`}>{content.legal.privacyTitle}</Link>
          <Link href={`/${locale}/impressum`}>{content.legal.imprintTitle}</Link>
          <a href="mailto:hello@coachdili.ch">hello@coachdili.ch</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram →
          </a>
        </div>
      </div>
    </footer>
  );
}
