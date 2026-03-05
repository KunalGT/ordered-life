"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import RuleCard from "@/components/RuleCard";
import { rules } from "@/data/rules";

export default function RulesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-section-alt">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="heading-display text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The 12 Rules
          </motion.h1>
          <motion.p
            className="text-body-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Twelve principles drawn from psychology, philosophy, and biology —
            reinterpreted as a practical guide for modern health and wellbeing.
          </motion.p>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rules.map((rule, i) => (
              <ScrollReveal key={rule.slug} delay={i * 0.06}>
                <RuleCard
                  number={rule.number}
                  title={rule.title}
                  subtitle={rule.subtitle}
                  slug={rule.slug}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
