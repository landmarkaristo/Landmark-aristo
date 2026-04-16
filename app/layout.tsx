import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ✅ Added Cormorant */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  display: "swap",
});

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const viewport: Viewport = {
  themeColor: "#2D3628",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://landmarkaristo.com"),
  title: "Landmark Aristo | Refining Modern Living with Timeless Elegance",
  description: "Experience luxury redefined at Landmark Aristo. Premium residential sanctuary with modern architecture, world-class amenities, and sophisticated design in the heart of the city.",
  keywords: ["Luxury Apartments", "Real Estate", "Landmark Aristo", "Premium Residency", "Modern Architecture", "Luxe Living"],
  authors: [{ name: "Landmark Aristo" }],
  openGraph: {
    title: "Landmark Aristo | Luxury Redefined",
    description: "Experience luxury redefined at Landmark Aristo. Premium residential sanctuary with modern architecture and world-class amenities.",
    url: "https://landmarkaristo.com",
    siteName: "Landmark Aristo",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landmark Aristo Luxury Living",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landmark Aristo | Luxury Redefined",
    description: "Modern Living with Timeless Elegance at Landmark Aristo.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://landmarkaristo.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { EnquiryProvider } from "@/context/EnquiryContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          cormorant.variable, // ✅ Added here
          "min-h-screen bg-bg-cream font-body antialiased"
        )}
      >
        <EnquiryProvider>
          {children}
        </EnquiryProvider>
      </body>
    </html>
  );
}