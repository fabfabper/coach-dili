"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const content = getContent(locale);
  const alternate = content.alternateLocale;
  const isHome = pathname === `/${locale}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header${isHome ? " site-header-light" : ""}${isScrolled ? " site-header-scrolled" : ""}`}>
      <div className="shell header-inner">
        <Link className="wordmark" href={`/${locale}`} onClick={() => setOpen(false)} aria-label="Coach Dili home">
          COACH <span>DILI</span>
        </Link>
        <div className="header-controls">
          <Link
            className="language-switch mobile-language-switch"
            href={`/${alternate}`}
            onClick={() => setOpen(false)}
          >
            {alternate.toUpperCase()}
          </Link>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? content.labels.close : content.labels.menu}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            <span className="menu-toggle-label">{open ? content.labels.close : content.labels.menu}</span>
            <i aria-hidden="true" />
          </button>
        </div>
        <nav id="main-navigation" className={`main-navigation${open ? " is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-links">
            {content.navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link className="language-switch" href={`/${alternate}`} onClick={() => setOpen(false)}>
              {alternate.toUpperCase()}
            </Link>
            <Link
              className="button button-dark button-small"
              href={`/${locale}/services`}
              onClick={() => setOpen(false)}
            >
              {content.labels.book}
              <span className="button-arrow" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
