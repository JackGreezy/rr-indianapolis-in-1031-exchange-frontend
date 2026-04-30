"use client";

import { FormEvent, Suspense, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    _turnstileLoaded?: boolean;
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      execute: (widgetId: string, options?: Record<string, unknown>) => Promise<string>;
      reset: (widgetId: string) => void;
    };
  }
}

type FormData = { name: string; phone: string; email: string; property: string; projectType: string; timeline: string; message: string; };

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window._turnstileLoaded) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    if (existing) { window._turnstileLoaded = true; resolve(); return; }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => { window._turnstileLoaded = true; resolve(); };
    script.onerror = () => reject(new Error("Turnstile script failed to load"));
    document.head.appendChild(script);
  });
}

function ContactForm() {
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "", property: "", projectType: "", timeline: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [turnstileId, setTurnstileId] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const siteKey = typeof window !== "undefined" && window.location.hostname === "localhost"
    ? undefined
    : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    let cancelled = false;
    const init = setTimeout(async () => {
      if (cancelled || !siteKey) return;
      try {
        await loadTurnstile();
        if (cancelled || !window.turnstile || !captchaRef.current) return;
        const id = window.turnstile.render(captchaRef.current, { sitekey: siteKey, size: "normal", callback: () => setTurnstileReady(true), "error-callback": () => setTurnstileReady(false), "timeout-callback": () => setTurnstileReady(false) });
        setTurnstileId(id);
        setTurnstileReady(true);
      } catch (error) {
        console.error("Failed to initialize Turnstile:", error);
        setTurnstileReady(false);
      }
    }, 500);
    return () => { cancelled = true; clearTimeout(init); };
  }, [siteKey]);

  const handleChange = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<FormData> = {};
    if (!formData.name.trim()) next.name = "Full name is required";
    if (!formData.phone.trim()) next.phone = "Phone number is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) next.email = "Valid email is required";
    if (!formData.property.trim()) next.property = "Property address is required";
    if (!formData.projectType.trim()) next.projectType = "Service type is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) { setFeedback("Please complete all required fields."); setStatus("error"); return; }
    setStatus("submitting");
    setFeedback("");
    try {
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) { setStatus("error"); setFeedback("Please complete the security verification."); return; }
      let turnstileToken = "";
      if (siteKey && window.turnstile && turnstileId) {
        try {
          window.turnstile.reset(turnstileId);
          turnstileToken = await new Promise<string>((resolve, reject) => {
            if (!window.turnstile) return reject(new Error("Turnstile unavailable"));
            window.turnstile.execute(turnstileId, { async: true, action: "form_submit", callback: (token: string) => resolve(token), "error-callback": () => reject(new Error("turnstile-error")), "timeout-callback": () => reject(new Error("turnstile-timeout")) });
          });
        } catch {
          setStatus("error"); setFeedback("Security verification failed. Please try again."); if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId); return;
        }
      }
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: formData.name, phone: formData.phone.replace(/\D/g, ""), email: formData.email, property: formData.property, projectType: formData.projectType, timeline: formData.timeline, details: formData.message, turnstileToken }) });
      if (!response.ok) { const data = await response.json().catch(() => ({ error: "Failed to submit form" })); setStatus("error"); setFeedback(data.error || "Failed to submit form. Please try again."); if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId); return; }
      setFormData({ name: "", phone: "", email: "", property: "", projectType: "", timeline: "", message: "" });
      setStatus("success");
      setFeedback("Thank you. Your exchange inquiry was received and the next step is a review of your timing, property address, and service request.");
      if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
    } catch {
      setStatus("error"); setFeedback("An error occurred. Please try again or email us directly."); if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
    }
  };

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full Name *<input required value={formData.name} onChange={handleChange("name")} aria-invalid={!!errors.name} /></label>
        <label>Phone Number *<input required type="tel" value={formData.phone} onChange={handleChange("phone")} aria-invalid={!!errors.phone} /></label>
        <label>Email Address *<input required type="email" value={formData.email} onChange={handleChange("email")} aria-invalid={!!errors.email} /></label>
        <label>Property Address *<input required value={formData.property} onChange={handleChange("property")} aria-invalid={!!errors.property} /></label>
        <label>Service Type *<select required value={formData.projectType} onChange={handleChange("projectType")} aria-invalid={!!errors.projectType}><option value="">Select a service</option><option>Replacement Property Identification</option><option>45 Day Identification Strategy</option><option>180 Day Closing Coordination</option><option>Forward Exchange Coordination</option><option>Reverse Exchange Coordination</option><option>Qualified Intermediary Coordination</option><option>DST Placement Coordination</option><option>Boot Calculation Support</option></select></label>
        <label>Project Timeline<select value={formData.timeline} onChange={handleChange("timeline")}><option value="">Select timeline</option><option>Planning before sale</option><option>Relinquished property under contract</option><option>Inside 45-day identification window</option><option>Inside 180-day closing window</option><option>Post-closing documentation support</option></select></label>
      </div>
      <label>Project Details<textarea rows={6} value={formData.message} onChange={handleChange("message")} /></label>
      {siteKey && <div className="captcha-wrap"><div ref={captchaRef} className="min-h-78" /></div>}
      <button type="submit" disabled={status === "submitting" || !!(siteKey && !turnstileReady)}>{status === "submitting" ? "Submitting..." : "Submit Exchange Inquiry ->"}</button>
      <p className="form-note">{Object.values(errors).filter(Boolean).join(". ")}</p>
      {feedback && <p role="status" aria-live="polite" className={status === "success" ? "form-success" : "form-error"}>{feedback}</p>}
    </form>
  );
}

export function ContactFormWrapper() {
  return <Suspense fallback={<div className="contact-form">Loading form...</div>}><ContactForm /></Suspense>;
}
