"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import type { Rule } from "@/data/rules";

export default function RuleDetailClient({
  rule,
  related,
}: {
  rule: Rule;
  related: Rule[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-section-alt">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-8xl md:text-9xl font-bold text-accent/20">
              {String(rule.number).padStart(2, "0")}
            </span>
          </motion.div>
          <motion.h1
            className="heading-hero text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {rule.title}
          </motion.h1>
          <motion.p
            className="text-body-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {rule.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Wellness Interpretation */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-section text-foreground mb-6">
              Wellness Interpretation
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg">{rule.wellnessInterpretation}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Deep Explanation */}
      <section className="py-24 md:py-32 px-6 bg-section-alt">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-section text-foreground mb-6">
              Understanding the Principle
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg">{rule.deepExplanation}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Daily Tips */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-section text-foreground mb-10">
              Daily Practice
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {rule.dailyTips.map((tip, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <GlassCard hover={false} className="flex items-start gap-4">
                  <span className="text-accent font-bold text-lg shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted leading-relaxed">{tip}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Rules */}
      {related.length > 0 && (
        <section className="py-24 md:py-32 px-6 bg-section-alt">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2 className="heading-section text-foreground mb-10 text-center">
                Related Rules
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {related.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 0.1}>
                  <Link href={`/rules/${r.slug}`}>
                    <GlassCard className="h-full cursor-pointer group">
                      <span className="text-3xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                        {String(r.number).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold text-foreground mt-3 mb-2">
                        {r.title}
                      </h3>
                      <p className="text-xs text-muted">{r.subtitle}</p>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="py-16 px-6 text-center">
        <Link
          href="/rules"
          className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
        >
          &larr; Back to all rules
        </Link>
      </section>
    </>
  );
}
