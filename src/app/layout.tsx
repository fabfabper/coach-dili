import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Coach Dili | Personal Training", description: "Thoughtful personal training in Zurich." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
