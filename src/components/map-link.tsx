"use client";

type MapLinkProps = {
  address: string;
  fallbackUrl: string;
  className?: string;
  children: React.ReactNode;
};

export function MapLink({ address, fallbackUrl, className, children }: MapLinkProps) {
  const openMap = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(userAgent);

    if (!isMobile) return;

    event.preventDefault();
    const encodedAddress = encodeURIComponent(address);
    const nativeMapUrl = /iPhone|iPad|iPod/i.test(userAgent)
      ? `maps://?q=${encodedAddress}`
      : `geo:0,0?q=${encodedAddress}`;

    window.location.href = nativeMapUrl;
  };

  return (
    <a className={className} href={fallbackUrl} target="_blank" rel="noreferrer" onClick={openMap}>
      {children}
    </a>
  );
}
