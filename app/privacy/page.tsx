import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { site } from "@/lib/site-data";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: `${site.siteUrl}/privacy` } };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="interior-main legal-page">
        <Breadcrumb items={[{ label: "Privacy" }]} />
        <h1>Privacy Policy</h1>
        <p>{site.brandName} collects contact details submitted through this website so we can respond to exchange-related inquiries. Submitted information may include name, phone number, email address, property address, service type, timeline, and project details.</p>
        <p>We use submitted information to respond to inquiries, route requests, operate the website, protect against spam or abuse, and maintain records related to the request. We do not sell personal information through this website.</p>
        <p>Form submissions may be processed by service providers such as hosting, email, CAPTCHA, and workflow tools. Do not submit confidential tax, legal, or financial records through the public form.</p>
        <p>To request an update or deletion of inquiry information, email <a href={`mailto:${site.email}`}>{site.email}</a>. We may retain records when needed for legitimate business, security, or legal purposes.</p>
      </main>
      <Footer />
    </>
  );
}
