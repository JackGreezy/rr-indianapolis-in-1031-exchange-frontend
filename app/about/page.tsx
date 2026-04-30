import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { site } from "@/lib/site-data";

export const metadata: Metadata = { title: "About", description: "About 1031 Exchange Indianapolis and its coordination-focused approach to replacement property identification and exchange planning.", alternates: { canonical: `${site.siteUrl}/about` } };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="interior-main">
        <Breadcrumb items={[{ label: "About" }]} />
        <section className="about-layout">
          <div><p className="eyebrow">About the firm</p><h1>Practical 1031 exchange coordination for Indianapolis replacement property decisions.</h1><p>{site.brandName} supports investors who need organized replacement-property screening, deadline planning, QI coordination, and advisor-ready documentation in the Indianapolis market.</p><p>The work is coordination-focused. We help owners compare property candidates, understand market context, collect diligence materials, and keep exchange deadlines visible. We do not invent tax outcomes, legal advice, guarantees, or investment promises. Final tax and legal decisions belong with the exchanger&apos;s qualified intermediary, CPA, tax attorney, lender, and other licensed advisors.</p><p>Our local approach centers on Central Indiana&apos;s practical replacement-property choices: logistics corridors near the airport and interstates, north-suburban office and medical nodes, westside industrial and retail corridors, southside service markets, and downtown mixed-use opportunities.</p></div>
          <img src="/assets/market-map.svg" alt="Abstract Central Indiana market map" />
        </section>
        <section className="process-band"><h2>How the process stays grounded</h2><div className="process-grid"><div><span>01</span><h3>Define the exchange facts</h3><p>Sale date, net proceeds, debt payoff, target value, ownership entity, and advisor contacts.</p></div><div><span>02</span><h3>Screen local candidates</h3><p>Property type, submarket, leases, financials, lender fit, and closing readiness.</p></div><div><span>03</span><h3>Coordinate documentation</h3><p>QI notices, identification records, contracts, diligence, and CPA-ready closeout files.</p></div></div></section>
      </main>
      <Footer />
    </>
  );
}
