"use client";

import dynamic from "next/dynamic";

const DynamicContactForm = dynamic(
  () => import("./contact-form").then((mod) => mod.ContactFormWrapper),
  { ssr: false, loading: () => <div className="contact-form">Loading form...</div> }
);

export default function ContactFormDynamic() {
  return <DynamicContactForm />;
}
