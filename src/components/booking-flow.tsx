import Link from "next/link";
import { BookingWidget } from "@/components/booking-widget";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function BookingFlow({ locale, selectedService }: { locale: Locale; selectedService?: string }) {
  const content = getContent(locale);
  const serviceQuery = selectedService ? `?service=${encodeURIComponent(selectedService)}` : "";
  const bookingUrl = `${siteConfig.bookingUrl}${serviceQuery}`;
  return (
    <div className="booking-widget">
      <BookingWidget />
      <div className="booking-placeholder">
        <p>{content.booking.note}</p>
        <Link className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">
          {content.labels.book}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
