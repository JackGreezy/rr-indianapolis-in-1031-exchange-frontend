import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { site } from "@/lib/site-data";
import ContactFormDynamic from "./contact-form-dynamic";

export const metadata: Metadata = { title: "Contact", description: "Contact 1031 Exchange Indianapolis for replacement property identification, exchange deadline coordination, and documentation support.", alternates: { canonical: `${site.siteUrl}/contact` } };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="interior-main">
        <Breadcrumb items={[{ label: "Contact" }]} />
        <section className="contact-layout"><div><p className="eyebrow">Start the exchange conversation</p><h1>Bring the sale facts, deadline pressure, and replacement property questions into one plan.</h1><p>Use the form to share the property address, service need, and timeline. The form keeps payload keys stable for name, phone, email, property, projectType, timeline, details, and Turnstile token validation.</p><div className="contact-card"><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></div><div className="contact-card"><strong>Office context</strong><span>{site.address.full}</span></div></div><ContactFormDynamic /></section>
      </main>
      <Footer />
    </>
  );
}
