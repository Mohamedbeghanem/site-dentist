import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://evodentist.example"),
  title: {
    default: "EvoDentist | Exceptional Modern Dentistry",
    template: "%s | EvoDentist",
  },
  description: "Modern dentistry powered by experience and technology. Book premium, comfort-first dental care in Algiers.",
  keywords: ["dentist Algiers", "dental clinic Hydra", "dental implants", "Invisalign", "cosmetic dentist", "emergency dentist"],
  authors: [{ name: "EvoDentist" }],
  creator: "EvoDentist",
  openGraph: {
    type: "website",
    locale: "en_DZ",
    siteName: "EvoDentist",
    title: "Your Smile Deserves Exceptional Care.",
    description: "Advanced dentistry, considered comfort, and a team who takes the time to understand you.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "EvoDentist — Your smile deserves exceptional care." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvoDentist",
    description: "Exceptional modern dentistry in Algiers.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fffefc",
};

const dentalSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "EvoDentist",
  description: "Premium, comfort-first dental clinic providing complete modern dentistry in Algiers.",
  url: "https://evodentist.example",
  telephone: "+2135550100",
  email: "care@evodentist.com",
  image: "https://evodentist.example/images/clinic-hero-brand.webp",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Avenue des Oliviers",
    addressLocality: "Hydra",
    addressRegion: "Algiers",
    addressCountry: "DZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 36.7471, longitude: 3.0387 },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    opens: "08:00",
    closes: "19:00",
  }],
  medicalSpecialty: ["Dentistry", "Orthodontics", "Oral Surgery", "Pediatric Dentistry"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "486" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentalSchema) }}/>
      </body>
    </html>
  );
}
