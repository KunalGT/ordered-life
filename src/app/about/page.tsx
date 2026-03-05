"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";

const values = [
  {
    title: "Order",
    description:
      "Structure is the foundation of freedom. We believe that ordering your environment, habits, and mind creates the space for genuine flourishing.",
  },
  {
    title: "Honesty",
    description:
      "Transformation begins with truth. Honest self-assessment — about your health, habits, and life — is the first and most important wellness practice.",
  },
  {
    title: "Meaning",
    description:
      "A life oriented toward meaning transcends mere comfort. We help you identify and pursue what truly matters, not just what feels good now.",
  },
  {
    title: "Discipline",
    description:
      "Discipline isn't punishment — it's the bridge between your goals and your achievements. Small, consistent actions compound into extraordinary results.",
  },
  {
    title: "Resilience",
    description:
      "Life involves suffering. We don't shy away from that reality — we equip you with the physical and mental tools to meet challenges with strength.",
  },
  {
    title: "Presence",
    description:
      "Amid the pursuit of goals, we practice being here — noticing beauty, savouring small moments, and finding gratitude in the everyday.",
  },
];

export default function AboutPage() {
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
            About
          </motion.h1>
          <motion.p
            className="text-body-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A wellness philosophy rooted in timeless principles, designed for the
            complexities of modern life.
          </motion.p>
        </div>
      </section>

      {/* Philosophy & Mission */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-hero text-foreground mb-8">
              Our Philosophy
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg mb-6">
              Ordered Life was born from a simple observation: the most
              transformative wellness advice isn&apos;t new — it&apos;s ancient. Stand
              tall. Tell the truth. Pursue what matters. Take care of yourself
              first. These principles echo through centuries of philosophy,
              psychology, and spiritual tradition.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg mb-6">
              We&apos;ve taken twelve of the most powerful life principles and
              reinterpreted them through the lens of modern wellness science.
              The result is a practical, evidence-informed approach to health
              that addresses not just your body, but your mind, relationships,
              and sense of purpose.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-body-lg">
              This isn&apos;t a quick fix or a 30-day challenge. It&apos;s a way of
              living — a daily commitment to order, honesty, and growth that
              compounds into a life of genuine meaning and vitality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 px-6 bg-section-alt">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-hero text-foreground mb-4">
                Core Values
              </h2>
              <p className="text-body max-w-xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <GlassCard className="h-full" hover={false}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-hero text-foreground mb-8">
              The Wellness Approach
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg mb-6">
              We believe wellness is holistic — it cannot be separated into
              isolated physical, mental, and emotional compartments. Your
              posture affects your confidence. Your honesty affects your stress.
              Your relationships affect your longevity.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg mb-6">
              Each of the twelve rules addresses a different facet of complete
              wellbeing. Together, they form an integrated system where
              improvement in one area naturally enhances the others. Stand
              taller, and you think more clearly. Think more clearly, and you
              make better choices. Make better choices, and your relationships
              deepen. Deepen your relationships, and your happiness grows.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-body-lg">
              This is the power of ordered living — not rigid control, but a
              framework of intentionality that allows your best self to emerge.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
