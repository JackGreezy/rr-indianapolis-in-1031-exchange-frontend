import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Arrow } from "@/components/Arrow";
import { locations, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "1031 Exchange Locations Around Indianapolis",
  description: "Twenty-two Indianapolis and Central Indiana 1031 exchange location pages with market-specific replacement property context.",
  alternates: { canonical: `${site.siteUrl}/locations` },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="interior-main">
        <Breadcrumb items={[{ label: "Locations" }]} />
        <section className="interior-hero"><p className="eyebrow">22 local markets</p><h1>Compare Indianapolis-area replacement property markets before the 45-day list is due.</h1><p>Each location page covers corridors, asset types, local demand, exchange angles, watchouts, and nearby backup markets.</p></section>
        <section className="location-index-grid">
          {locations.map((location, index) => (
            <Link href={`/locations/${location.slug}`} key={location.slug} className={`location-card location-card-${(index % 6) + 1}`}>
              <span>{location.county}</span><h2>{location.name}</h2><p>{location.summary}</p><strong>Review market <Arrow /></strong>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
