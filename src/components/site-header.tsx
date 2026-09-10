"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const content = getContent(locale);
  const alternate = content.alternateLocale;

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href={`/${locale}`} onClick={() => setOpen(false)} aria-label="Coach Dili home">COACH <span>DILI</span></Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation">
          <span>{open ? content.labels.close : content.labels.menu}</span><i aria-hidden="true" />
        </button>
        <nav id="main-navigation" className={`main-navigation${open ? " is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-links">
            {content.navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          </div>
          <div className="nav-actions">
            <Link className="language-switch" href={`/${alternate}`} onClick={() => setOpen(false)}>{alternate.toUpperCase()}</Link>
            <Link className="button button-dark button-small" href={`/${locale}/booking`} onClick={() => setOpen(false)}>{content.labels.book}<span aria-hidden="true">↗</span></Link>
          </div>
        </nav>
      </div>
    </header>
  );
}