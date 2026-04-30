import Link from "next/link";
import { locations, services, site } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();
  const map = `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`;

  return (
    <footer className="footer-shell">
      <div className="footer-grid">
        <div>
          <h2>{site.brandName}</h2>
          <p className="footer-muted">Replacement property identification, exchange deadline coordination, and advisor-ready documentation for Indianapolis-area investors.</p>
          <address>
            {site.address.street}<br />
            {site.address.city}, {site.address.state} {site.address.zip}<br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 10).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}
          <Link href="/services">All Services</Link>
        </div>
        <div>
          <h3>Markets</h3>
          {locations.slice(0, 10).map((location) => <Link key={location.slug} href={`/locations/${location.slug}`}>{location.name}</Link>)}
          <Link href="/locations">All Locations</Link>
        </div>
        <div className="footer-map-card">
          <h3>Office Context</h3>
          <iframe title="Map to 1031 Exchange Indianapolis" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      <div className="footer-legal">
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
        <p>{site.disclaimer} 1031 exchanges involve tax, legal, financing, securities, and property-specific decisions that should be reviewed by qualified professionals.</p>
        <p>Copyright {year} {site.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
