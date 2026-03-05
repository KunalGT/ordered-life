"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-section-alt">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="heading-display text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="text-body-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We&apos;d love to hear from you. Whether you have questions, feedback,
            or simply want to connect — reach out.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 px-6 bg-section-alt">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <Newsletter />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
