"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="glass rounded-2xl p-8 md:p-12 text-center">
      <h3 className="heading-section text-foreground mb-3">
        Stay Ordered
      </h3>
      <p className="text-body mb-8 max-w-md mx-auto">
        Weekly insights on wellness, discipline, and meaning. No spam, just substance.
      </p>
      {submitted ? (
        <p className="text-accent font-medium">
          Thank you for subscribing. Welcome to the journey.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="flex-1 rounded-full bg-background border border-border px-5 py-3 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
