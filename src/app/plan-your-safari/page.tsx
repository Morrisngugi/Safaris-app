"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  destinations: "",
  dates: "",
  flexibleDates: "yes",
  adults: "2",
  children: "0",
  duration: "5-7 days",
  style: "Luxury safari",
  accommodation: "Luxury lodge",
  budget: "USD 3,000 - 5,000",
  interests: "Wildlife viewing",
  message: "",
};

export default function PlanYourSafariPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto max-w-[1400px] px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Plan your safari</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">Tell us how you imagine Africa.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Share the shape of the journey you have in mind. We&apos;ll use the details to help create an itinerary around you.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="border-y border-[var(--color-border)] bg-transparent py-8 sm:py-10">
            <div className="mb-8"><div className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-gold)]">About you</div><p className="mt-2 text-sm text-[var(--color-muted)]">A few details to help us begin.</p></div>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Full name</span>
                <input required type="text" autoComplete="name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Email</span>
                <input required type="email" autoComplete="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Phone</span>
                <input required type="tel" autoComplete="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Country</span>
                <input type="text" autoComplete="country-name" value={form.country} onChange={(e) => handleChange("country", e.target.value)} className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)] md:col-span-2">
                <span>Destinations of interest</span>
                <input type="text" value={form.destinations} onChange={(e) => handleChange("destinations", e.target.value)} className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" placeholder="Maasai Mara, Zanzibar, Serengeti..." />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Expected travel dates</span>
                <input type="date" value={form.dates} onChange={(e) => handleChange("dates", e.target.value)} className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Flexible dates?</span>
                <select value={form.flexibleDates} onChange={(e) => handleChange("flexibleDates", e.target.value)} className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Number of adults</span>
                <input type="number" min="1" value={form.adults} onChange={(e) => handleChange("adults", e.target.value)} className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Number of children</span>
                <input type="number" min="0" value={form.children} onChange={(e) => handleChange("children", e.target.value)} className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Approximate trip duration</span>
                <input value={form.duration} onChange={(e) => handleChange("duration", e.target.value)} className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Travel style</span>
                <select value={form.style} onChange={(e) => handleChange("style", e.target.value)} className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]">
                  <option>Luxury safari</option>
                  <option>Wildlife first</option>
                  <option>Family safari</option>
                  <option>Romantic escape</option>
                  <option>Adventure</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Accommodation preference</span>
                <select value={form.accommodation} onChange={(e) => handleChange("accommodation", e.target.value)} className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]">
                  <option>Luxury lodge</option>
                  <option>Private tented camp</option>
                  <option>Upscale resort</option>
                  <option>Eco-lodge</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Approximate budget</span>
                <input value={form.budget} onChange={(e) => handleChange("budget", e.target.value)} className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)] md:col-span-2">
                <span>Experiences of interest</span>
                <input value={form.interests} onChange={(e) => handleChange("interests", e.target.value)} className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)] md:col-span-2">
                <span>Additional requirements</span>
                <textarea rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="min-h-32 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]" placeholder="Tell us about flights, honeymoon details, family needs, dietary requests, or any special considerations." />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[var(--color-muted)]">This preview captures your travel brief locally for now. A submission service can be connected when ready.</p>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">
                Send My Travel Brief
              </button>
            </div>

            {submitted && (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                Your safari enquiry has been captured in the demo flow. Connect this form to an email or CRM endpoint when ready.
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
