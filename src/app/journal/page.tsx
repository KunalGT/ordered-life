"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import JournalCard from "@/components/JournalCard";
import { journalPosts } from "@/data/journal";

export default function JournalPage() {
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
            Journal
          </motion.h1>
          <motion.p
            className="text-body-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Explorations in wellness, discipline, and the art of living with
            intention and meaning.
          </motion.p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
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
        </div>
      </section>
    </>
  );
}
