import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Arrow } from "@/components/Arrow";
import { services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "1031 Exchange Services in Indianapolis",
  description: "Twenty-five Indianapolis 1031 exchange services for replacement property identification, deadline strategy, due diligence, QI coordination, and documentation.",
  alternates: { canonical: `${site.siteUrl}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="interior-main">
        <Breadcrumb items={[{ label: "Services" }]} />
        <section className="interior-hero">
          <p className="eyebrow">25 exchange services</p>
          <h1>Indianapolis 1031 exchange services built around deadlines, documents, and replacement property decisions.</h1>
          <p>Every service page is written for a distinct part of the exchange process, from first replacement-property screen to final advisor-ready file.</p>
        </section>
        <section className="card-index-grid">
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={service.slug} className="index-card">
              <span>{String(index + 1).padStart(2, "0")}</span><h2>{service.name}</h2><p>{service.summary}</p><strong>Explore service <Arrow /></strong>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
