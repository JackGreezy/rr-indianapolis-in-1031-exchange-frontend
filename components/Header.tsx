import Link from "next/link";
import { site } from "@/lib/site-data";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={overlay ? "site-header site-header-overlay" : "site-header"}>
      <div className="header-inner">
        <Link href="/" className="brand-mark" aria-label={`${site.brandName} home`}>
          <span className="brand-ring">1</span>
          <span>Exchange Indianapolis</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact#contact-form" className="nav-signin">Start an Exchange</Link>
        </nav>
        <details className="mobile-details">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/contact#contact-form">Start an Exchange</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
