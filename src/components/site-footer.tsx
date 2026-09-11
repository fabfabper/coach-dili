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
        <Link className="button button-light" href={`/${locale}/services`}>
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
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a
            className="instagram-link"
            href="https://www.instagram.com/coachdili"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @coachdili"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" className="instagram-dot" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
