"use client";

import Link from "next/link";
import GlassCard from "./GlassCard";

interface JournalCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export default function JournalCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  category,
}: JournalCardProps) {
  return (
    <Link href={`/journal/${slug}`}>
      <GlassCard className="h-full cursor-pointer group">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              {category}
            </span>
            <span className="text-xs text-muted">{readTime}</span>
          </div>
          <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-3">
            {excerpt}
          </p>
          <time className="text-xs text-muted/60">
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </GlassCard>
    </Link>
  );
}
