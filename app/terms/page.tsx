import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { site } from "@/lib/site-data";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: `${site.siteUrl}/terms` } };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="interior-main legal-page">
        <Breadcrumb items={[{ label: "Terms" }]} />
        <h1>Terms of Service</h1>
        <p>This website provides general educational information about 1031 exchange coordination, replacement property identification, local market screening, and documentation workflows. It does not provide tax, legal, accounting, securities, or investment advice.</p>
        <p>1031 exchange decisions should be reviewed with a qualified intermediary, CPA, tax attorney, lender, broker, and other licensed professionals as appropriate. No website content guarantees tax deferral, property performance, financing approval, or closing success.</p>
        <p>By using this website, you agree not to rely on website content as a substitute for professional advice. You are responsible for verifying property information, deadlines, financial assumptions, and legal requirements before making decisions.</p>
        <p>Contact forms are provided for inquiry routing. Submitting a form does not create an advisory, fiduciary, brokerage, tax, legal, intermediary, or securities relationship.</p>
      </main>
      <Footer />
    </>
  );
}
