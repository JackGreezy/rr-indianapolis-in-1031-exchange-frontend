"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4L22 16L34 20L22 24L20 36L18 24L6 20L18 16L20 4Z"
        fill="#C9A065"
      />
      <circle cx="10" cy="10" r="2" fill="#C9A065" />
      <circle cx="30" cy="10" r="2" fill="#C9A065" />
      <circle cx="10" cy="30" r="2" fill="#C9A065" />
      <circle cx="30" cy="30" r="2" fill="#C9A065" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb items={[{ label: "Contact" }]} />
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Ready to start your 1031 exchange? Get in touch with our team of
              experts and let us guide you through the process.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                {submitted ? (
                  <div className="bg-cream p-12 text-center">
                    <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
                    <h3 className="text-3xl text-heading font-serif italic mb-4">
                      Thank You
                    </h3>
                    <p className="text-ink">
                      We&apos;ve received your message and will be in touch
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm text-ink mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-3 bg-cream border border-gray-300 text-heading focus:ring-2 focus:ring-teal focus:border-teal outline-none"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm text-ink mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-3 bg-cream border border-gray-300 text-heading focus:ring-2 focus:ring-teal focus:border-teal outline-none"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-ink mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 bg-cream border border-gray-300 text-heading focus:ring-2 focus:ring-teal focus:border-teal outline-none"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm text-ink mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 bg-cream border border-gray-300 text-heading focus:ring-2 focus:ring-teal focus:border-teal outline-none"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block text-sm text-ink mb-2"
                      >
                        Property Type of Interest
                      </label>
                      <select
                        id="propertyType"
                        className="w-full px-4 py-3 bg-cream border border-gray-300 text-heading focus:ring-2 focus:ring-teal focus:border-teal outline-none"
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyType: e.target.value })
                        }
                      >
                        <option value="">Select a property type</option>
                        <option value="nnn">NNN Properties</option>
                        <option value="retail">Retail</option>
                        <option value="office">Office Buildings</option>
                        <option value="industrial">Industrial</option>
                        <option value="multifamily">Multifamily</option>
                        <option value="medical">Medical Office</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="student-housing">Student Housing</option>
                        <option value="self-storage">Self-Storage</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-ink mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-cream border border-gray-300 text-heading focus:ring-2 focus:ring-teal focus:border-teal outline-none resize-none"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <button type="submit" className="btn btn-solid">
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <div className="mb-12">
                  <h3 className="text-2xl text-heading font-serif italic mb-4">
                    Our Office
                  </h3>
                  <p className="text-ink mb-2">100 Monument Circle</p>
                  <p className="text-ink mb-6">Indianapolis, IN 46204</p>

                  <h4 className="text-sm text-ink/60 uppercase tracking-wider mb-2">
                    Phone
                  </h4>
                  <p className="text-heading text-xl mb-6">(317) 555-1031</p>

                  <h4 className="text-sm text-ink/60 uppercase tracking-wider mb-2">
                    Email
                  </h4>
                  <p className="text-heading text-xl">info@indy1031exchange.com</p>
                </div>

                <div className="bg-teal p-8">
                  <h3 className="text-xl text-white font-serif italic mb-4">
                    Office Hours
                  </h3>
                  <div className="text-white/80 space-y-2">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
