import Link from "next/link";
import { BookingWidget } from "@/components/booking-widget";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function BookingFlow({ locale, selectedService }: { locale: Locale; selectedService?: string }) {
  const content = getContent(locale);
  const service = content.servicesList.find((item) => item.id === selectedService);
  const serviceQuery = service ? `?service=${encodeURIComponent(service.id)}` : "";
  const bookingUrl = `${siteConfig.bookingUrl}${serviceQuery}`;
  return (
    <div className="booking-widget">
      <BookingWidget predefinedServiceId={service?.simplyBookId} />
      <div className="booking-placeholder">
        <p>{content.booking.note}</p>
        <Link className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">
          {content.labels.book}
          <span className="button-arrow" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
