'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaFacebookF,
} from 'react-icons/fa';

const CONTACT_INFO = {
  phone: '08048058099',
  phoneDisplay: '08048058099',
  email: 'office@iqasagri.com',
  hours: 'Sun - Sat: 07:00 AM - 07:00 PM',
  nextOpen: 'Opens Tomorrow at 07:00 AM',
  address: {
    line1: '3, Vinayaka Complex, Kalaskar Nagar, Panchavati, Nashik.(MH) - 422003',
    line2: 'Nashik, India, 422004',
  },
  whatsappNumber: '9022926922',
  otherWebsiteUrl: '#',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61567069587484',
};

const initialFormState = {
  name: '',
  email: '',
  mobileNo: '',
  subject: '',
  message: '',
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitStatus('success');
    setFormData(initialFormState);
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero — minimal */}
      <section className="relative overflow-hidden bg-slate-900 px-4 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.25),transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative -mt-8 px-4 pb-20 md:-mt-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Form card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200/60 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="contact-mobile" className="text-sm font-medium text-slate-700">
                        Mobile No
                      </label>
                      <input
                        id="contact-mobile"
                        type="tel"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleChange}
                        required
                        placeholder="10-digit number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this about?"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-y min-h-[120px]"
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Thank you! Your message has been sent.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto sm:min-w-[180px]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane className="h-4 w-4" aria-hidden />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Contact information</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Reach us by phone, email or visit our office.
                  </p>
                </div>

                <ContactItem
                  icon={<FaPhone className="h-5 w-5" aria-hidden />}
                  label="Phone"
                  href={`tel:${CONTACT_INFO.phone}`}
                  primary={CONTACT_INFO.phoneDisplay}
                  secondary="Keep 0 before dialling."
                />
                <ContactItem
                  icon={<FaEnvelope className="h-5 w-5" aria-hidden />}
                  label="Email"
                  href={`mailto:${CONTACT_INFO.email}`}
                  primary={CONTACT_INFO.email}
                  secondary={CONTACT_INFO.hours}
                />
                <ContactItem
                  icon={<FaMapMarkerAlt className="h-5 w-5" aria-hidden />}
                  label="Office"
                  primary={CONTACT_INFO.address.line1}
                  secondary={CONTACT_INFO.address.line2}
                  isAddress
                />
                {/* <ContactItem
                  icon={<FaGlobe className="h-5 w-5" aria-hidden />}
                  label="Website"
                  href={CONTACT_INFO.otherWebsiteUrl}
                  primary="Other website"
                  asLink
                /> */}
                <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:gap-4">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-200/60 transition hover:border-emerald-300 hover:bg-emerald-50/50 hover:ring-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                      <FaWhatsapp className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900">WhatsApp</p>
                      <p className="text-sm text-slate-500">Chat with us in real time</p>
                    </div>
                  </a>
                  <a
                    href={CONTACT_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-200/60 transition hover:border-blue-400 hover:bg-blue-50/50 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white">
                      <FaFacebookF className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900">Facebook</p>
                      <p className="text-sm text-slate-500">IQAS-Integrated Quick Agri Solutions</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

function ContactItem({
  icon,
  label,
  href,
  primary,
  secondary,
  isAddress,
  asLink,
}) {
  const content = (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-200/60 transition hover:border-slate-300 hover:shadow-md focus-within:ring-2 focus-within:ring-emerald-500/50">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</p>
        {href && !asLink ? (
          <a
            href={href}
            className="mt-0.5 block font-medium text-slate-900 hover:text-emerald-600 focus:outline-none"
          >
            {primary}
          </a>
        ) : asLink && href ? (
          <Link
            href={href}
            className="mt-0.5 block font-medium text-slate-900 hover:text-emerald-600 focus:outline-none"
          >
            {primary}
          </Link>
        ) : (
          <p className="mt-0.5 font-medium text-slate-900">{primary}</p>
        )}
        {secondary && (
          <p className="mt-0.5 text-sm text-slate-500">{secondary}</p>
        )}
      </div>
    </div>
  );

  if (isAddress) {
    return <div>{content}</div>;
  }
  return content;
}

export default ContactUsPage;
