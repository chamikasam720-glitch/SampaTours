import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sampa Tours | Hello Sri Lanka",
  description: "Discover Sri Lanka with Sampa Tours. Private vehicle and driver services with personalized travel quotations.",
  keywords: ["Sri Lanka tours", "private driver Sri Lanka", "Sampa Tours", "Hello Sri Lanka"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
