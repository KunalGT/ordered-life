"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import RuleCard from "@/components/RuleCard";
import JournalCard from "@/components/JournalCard";
import { rules } from "@/data/rules";
import { journalPosts } from "@/data/journal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-section-alt to-background" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="heading-display text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Order Your Life
          </motion.h1>
          <motion.p
            className="text-body-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A wellness philosophy built on timeless principles. Twelve rules to
            transform your health, sharpen your mind, and give your life
            direction.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/rules"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Explore the 12 Rules
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground hover:bg-border transition-colors"
            >
              Our Philosophy
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Intro */}
      <section className="py-32 md:py-40 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="heading-hero text-foreground mb-6">
              Wellness Through Order
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-body-lg">
              Life is complex, chaotic, and often overwhelming. But within the
              chaos, there are principles — ancient and modern — that light the
              way forward. We&apos;ve distilled twelve of the most powerful into a
              practical wellness philosophy that transforms how you move, think,
              connect, and live.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 12 Rules Preview */}
      <section className="py-32 md:py-40 px-6 bg-section-alt">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-hero text-foreground mb-4">
                The 12 Rules
              </h2>
              <p className="text-body max-w-xl mx-auto">
                Twelve principles to bring order, meaning, and vitality to every
                dimension of your life.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rules.map((rule, i) => (
              <ScrollReveal key={rule.slug} delay={i * 0.05}>
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

      {/* Featured Journal */}
      <section className="py-32 md:py-40 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-hero text-foreground mb-4">
                From the Journal
              </h2>
              <p className="text-body max-w-xl mx-auto">
                Explorations in wellness, discipline, and the pursuit of a
                meaningful life.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journalPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <JournalCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/journal"
                className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
              >
                View all posts &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 md:py-40 px-6 bg-section-alt">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="heading-hero text-foreground mb-6">
              Begin the Journey
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-body-lg mb-10">
              Every great transformation begins with a single step. The twelve
              rules aren&apos;t just ideas — they&apos;re a daily practice. Start today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              href="/rules/stand-up-straight"
              className="inline-block rounded-full bg-accent px-10 py-4 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Start with Rule 1
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
