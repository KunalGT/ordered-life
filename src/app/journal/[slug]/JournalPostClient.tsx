"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import type { JournalPost } from "@/data/journal";
import type { Rule } from "@/data/rules";

export default function JournalPostClient({
  post,
  relatedRule,
}: {
  post: JournalPost;
  relatedRule?: Rule;
}) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-6 bg-section-alt">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              {post.category}
            </span>
            <span className="text-xs text-muted">{post.readTime}</span>
          </motion.div>
          <motion.h1
            className="heading-hero text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {post.title}
          </motion.h1>
          <motion.time
            className="text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </motion.time>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <article className="prose-custom">
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-body-lg mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Rule */}
      {relatedRule && (
        <section className="py-24 md:py-32 px-6 bg-section-alt">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-muted mb-6">
                Related Rule
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href={`/rules/${relatedRule.slug}`}>
                <GlassCard className="cursor-pointer group inline-block text-left">
                  <span className="text-3xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                    {String(relatedRule.number).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">
                    {relatedRule.title}
                  </h3>
                  <p className="text-sm text-muted">{relatedRule.subtitle}</p>
                </GlassCard>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="py-16 px-6 text-center">
        <Link
          href="/journal"
          className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
        >
          &larr; Back to journal
        </Link>
      </section>
    </>
  );
}
