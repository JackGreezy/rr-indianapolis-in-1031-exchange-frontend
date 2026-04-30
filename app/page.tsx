import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Arrow } from "@/components/Arrow";
import { featuredLocations, featuredServices, locations, services, site } from "@/lib/site-data";

const listingCards = [
  { service: services[0], image: "/assets/exchange-card-industrial.svg", price: "45 days", stat: "Identification window", detail: "Shortlist replacement candidates before sale momentum controls the process." },
  { service: services[10], image: "/assets/exchange-card-multifamily.svg", price: "DST", stat: "Passive option", detail: "Coordinate allocation review when direct property inventory is too thin." },
  { service: services[12], image: "/assets/exchange-card-retail.svg", price: "T12 + rent roll", stat: "Income review", detail: "Check operating history before naming multifamily replacements." },
  { service: services[13], image: "/assets/exchange-card-office.svg", price: "I-65 / I-70", stat: "Industrial corridors", detail: "Screen loading, access, tenant depth, and deadline-ready documents." },
];

export default function Home() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.siteUrl }],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header overlay />
      <main>
        <section className="home-hero">
          <div className="hero-image" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Indianapolis 1031 Exchange Coordination</p>
            <h1>Find your replacement path</h1>
            <div className="search-panel" role="search" aria-label="Exchange planning search panel">
              <div className="search-tabs"><span>Identify</span><span>Analyze</span><span>Close</span></div>
              <div className="search-box"><span>Replacement property, 45-day strategy, QI coordination, or Indianapolis market</span><Link href="/contact#contact-form" aria-label="Start replacement property search"><Arrow /></Link></div>
            </div>
          </div>
        </section>

        <section className="listing-section section-wrap">
          <div className="section-heading-row"><div><h2>Exchange priorities</h2><p>Start with the decisions that shape the 45-day list, 180-day closing plan, and advisor review file.</p></div></div>
          <div className="listing-grid">
            {listingCards.slice(0, 2).map(({ service, image, price, stat, detail }) => (
              <Link className="listing-card" href={`/services/${service.slug}`} key={service.slug}>
                <img src={image} alt="" />
                <div className="listing-card-body"><strong>{price}</strong><span>{stat}</span><p>{detail}</p></div>
              </Link>
            ))}
            <div className="private-card"><p className="compass-small">1031 EXCHANGE INDIANAPOLIS</p><h3>Unlock a clearer replacement property plan before Day 45.</h3><p>Use local market screening, rule selection, and documentation control before the exchange clock narrows your options.</p><Link href="/services">See Exchange Services</Link></div>
            {listingCards.slice(2).map(({ service, image, price, stat, detail }) => (
              <Link className="listing-card" href={`/services/${service.slug}`} key={service.slug}>
                <img src={image} alt="" />
                <div className="listing-card-body"><strong>{price}</strong><span>{stat}</span><p>{detail}</p></div>
              </Link>
            ))}
          </div>
          <Link href="/services" className="blue-button">View All Exchange Services <Arrow /></Link>
        </section>

        <section className="mortgage-band section-wrap">
          <div><h2>Know your exchange window before the first offer and the final ID letter.</h2><p>Coordinate sale date, identification rules, lender readiness, and closing documents in one working calendar.</p></div>
          <Link href="/contact#contact-form">See What Needs Coordinated <Arrow /></Link>
        </section>

        <section className="concierge-section section-wrap">
          <div className="before-after"><img src="/assets/concierge-before.svg" alt="Illustrated before view of unorganized exchange files" /><img src="/assets/concierge-after.svg" alt="Illustrated after view of organized exchange records" /></div>
          <div className="concierge-copy"><h2>Exchange coordination for the parts listings do not show.</h2><p>Replacement property decisions depend on leases, T12s, title, debt, identification rules, QI instructions, and tax-advisor questions. We organize those moving pieces around the Indianapolis market and your exchange deadlines.</p><Link href="/about">Learn More <Arrow /></Link></div>
        </section>

        <section className="neighborhood-section section-wrap">
          <h2>Find the replacement market for you</h2><p>Compare Indianapolis-area markets by property type, corridor access, tenant demand, and exchange fit.</p>
          <div className="market-tile-grid">{featuredLocations.map((location, index) => <Link href={`/locations/${location.slug}`} key={location.slug} className={`market-tile market-tile-${index + 1}`}><span>{location.name}</span></Link>)}</div>
          <Link href="/locations" className="blue-button">View More Locations <Arrow /></Link>
        </section>

        <section className="popular-links section-wrap">
          <div><h2>Popular exchange services</h2><p>Browse planning services frequently used by Indianapolis exchangers.</p><div className="link-columns">{featuredServices.concat(services.slice(5, 17)).map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.name}</Link>)}</div></div>
          <div><h2>Central Indiana markets</h2><p>Review local replacement-property context before naming candidates.</p><div className="link-columns">{locations.slice(0, 18).map((location) => <Link href={`/locations/${location.slug}`} key={location.slug}>{location.name} 1031 Exchange</Link>)}</div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
