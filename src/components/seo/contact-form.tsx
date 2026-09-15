"use client";

import { useState } from "react";

const formSubmitEndpoint = "https://formsubmit.co/ajax/info@ivoryatlastours.com";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_subject", "New Contact Enquiry - Ivory Atlas Tours");
    formData.set("_template", "table");
    formData.set("_replyto", String(formData.get("email") ?? ""));

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || result.success === false) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("We could not send your enquiry. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[0_18px_52px_rgba(24,18,12,0.04)]">
      <input type="hidden" name="_captcha" value="true" />
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[var(--color-muted)]">
          <span>Full name</span>
          <input required name="name" type="text" autoComplete="name" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm text-[var(--color-muted)]">
          <span>Email</span>
          <input required name="email" type="email" autoComplete="email" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="you@example.com" />
        </label>
        <label className="space-y-2 text-sm text-[var(--color-muted)]">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="+254 ..." />
        </label>
        <label className="space-y-2 text-sm text-[var(--color-muted)]">
          <span>Country</span>
          <input name="country" type="text" autoComplete="country-name" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="Country" />
        </label>
        <label className="space-y-2 text-sm text-[var(--color-muted)] md:col-span-2">
          <span>Destinations of interest</span>
          <input name="destinations" type="text" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="Maasai Mara, Amboseli, Diani..." />
        </label>
        <label className="space-y-2 text-sm text-[var(--color-muted)] md:col-span-2">
          <span>Message</span>
          <textarea required name="message" rows={5} className="min-h-32 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="Tell us about your ideal trip..." />
        </label>
      </div>
      <button disabled={isSubmitting} type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f] disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>
      <div aria-live="polite">
        {submitted && <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">Your enquiry has been sent. We&apos;ll be in touch soon.</p>}
        {error && <p role="alert" className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>}
      </div>
    </form>
  );
}