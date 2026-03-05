"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Ordered Life: ${data.get("subject") || "Contact Form"}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:hello@orderedlife.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-12 text-center">
        <h3 className="heading-section text-foreground mb-4">Thank you</h3>
        <p className="text-body">
          Your email client should have opened. If it didn&apos;t, please email
          us directly at hello@orderedlife.com.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-12 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
          placeholder="What's this about?"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-auto rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
