import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.brandName} | Indianapolis 1031 Exchange Services`,
    template: `%s | ${site.brandName}`,
  },
  description: "Indianapolis 1031 exchange support for replacement property identification, deadline strategy, QI coordination, and advisor-ready documentation.",
  alternates: { canonical: site.siteUrl },
  openGraph: {
    title: `${site.brandName} | Indianapolis 1031 Exchange Services`,
    description: "Replacement property identification and exchange coordination for Indianapolis investors.",
    url: site.siteUrl,
    siteName: site.brandName,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.brandName,
    url: site.siteUrl,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    areaServed: ["Indianapolis", "Central Indiana", "Marion County", "Hamilton County", "Hendricks County", "Johnson County"],
    knowsAbout: ["1031 exchange", "replacement property identification", "qualified intermediary coordination", "DST placement", "like-kind real estate"],
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
