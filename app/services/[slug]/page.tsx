import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Arrow } from "@/components/Arrow";
import { getService, getServiceSections, locations, services, site, wordCountFromSections } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.seoTitle, description: service.metaDescription, alternates: { canonical: `${site.siteUrl}/services/${service.slug}` } };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const index = services.findIndex((item) => item.slug === service.slug);
  const sections = getServiceSections(service, index);
  const related = services.filter((item) => item.slug !== service.slug).slice((index + 1) % services.length, (index + 4) % services.length || undefined);
  const fallbackRelated = related.length >= 3 ? related.slice(0, 3) : services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.name, provider: { "@type": "ProfessionalService", name: site.brandName, url: site.siteUrl }, areaServed: { "@type": "City", name: "Indianapolis" }, serviceType: "1031 Exchange Coordination", description: service.metaDescription };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="interior-main detail-main">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
        <section className="detail-hero"><div><p className="eyebrow">Indianapolis service</p><h1>{service.name}</h1><p>{service.summary}</p></div><aside><span>Body copy</span><strong>{wordCountFromSections(sections).toLocaleString()}+ words</strong><p>Original, page-specific guidance for this exchange service.</p><Link href="/contact#contact-form">Start planning <Arrow /></Link></aside></section>
        <article className="detail-article">{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}</article>
        <section className="detail-links-band"><div><h2>Related services</h2>{fallbackRelated.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}>{item.name}</Link>)}</div><div><h2>Relevant markets</h2>{locations.slice(index % 8, index % 8 + 4).map((location) => <Link href={`/locations/${location.slug}`} key={location.slug}>{location.name}</Link>)}</div></section>
      </main>
      <Footer />
    </>
  );
}
