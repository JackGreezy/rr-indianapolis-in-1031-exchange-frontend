import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Arrow } from "@/components/Arrow";
import { getLocation, getLocationSections, locations, services, site, wordCountFromSections } from "@/lib/site-data";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return { title: location.seoTitle, description: location.metaDescription, alternates: { canonical: `${site.siteUrl}/locations/${location.slug}` } };
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  const index = locations.findIndex((item) => item.slug === location.slug);
  const sections = getLocationSections(location, index);
  const schema = { "@context": "https://schema.org", "@type": "Service", name: `${location.name} 1031 Exchange Support`, provider: { "@type": "ProfessionalService", name: site.brandName, url: site.siteUrl }, areaServed: { "@type": "Place", name: location.name }, description: location.metaDescription };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="interior-main detail-main">
        <Breadcrumb items={[{ label: "Locations", href: "/locations" }, { label: location.name }]} />
        <section className="detail-hero location-detail-hero"><div><p className="eyebrow">{location.county}</p><h1>{location.name} 1031 Exchange Services</h1><p>{location.summary}</p></div><aside><span>Body copy</span><strong>{wordCountFromSections(sections).toLocaleString()}+ words</strong><p>Original local market copy for this location page.</p><Link href="/contact#contact-form">Discuss this market <Arrow /></Link></aside></section>
        <article className="detail-article">{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}</article>
        <section className="detail-links-band"><div><h2>Nearby markets</h2>{location.nearby.map((name) => { const match = locations.find((item) => item.name === name); return match ? <Link href={`/locations/${match.slug}`} key={name}>{name}</Link> : <span key={name}>{name}</span>; })}</div><div><h2>Helpful services</h2>{services.slice(index % 10, index % 10 + 4).map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.name}</Link>)}</div></section>
      </main>
      <Footer />
    </>
  );
}
