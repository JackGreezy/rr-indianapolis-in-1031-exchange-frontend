import { site } from "./site-data";

export function getBrand() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl;
  const email = process.env.BUSINESS_EMAIL || process.env.SENDGRID_FROM_EMAIL || site.email;

  return {
    subject: "We received your 1031 exchange inquiry",
    preheader: "Thanks for your inquiry. Your exchange request has been received for review.",
    company_name: site.brandName,
    city_state: `${site.city}, ${site.state}`,
    brand_accent: "#0064e5",
    cta_dark_bg: "#000000",
    bg_color: "#ffffff",
    text_dark: "#171717",
    text_muted: "#6c6c6c",
    text_body: "#333333",
    text_faint: "#999999",
    border_color: "#dadada",
    card_header_bg: "#f6f6f6",
    card_header_text: "#171717",
    header_text_color: "#ffffff",
    footer_text_color: "#ffffff",
    hero_title: "Thanks for your inquiry. We received your 1031 exchange request.",
    hero_subtitle: "We will review the timing, property address, and service request you submitted.",
    details_title: "Your exchange details",
    call_cta_label: "Email Us",
    call_phone: "",
    call_phone_plain: "",
    site_cta_label: "Go To Site",
    site_url: siteUrl,
    address_line: site.address.full,
    footer_note: "This confirmation is a transactional email related to your request.",
    supportEmail: email,
  };
}
