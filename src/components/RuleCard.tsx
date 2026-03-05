"use client";

import Link from "next/link";
import GlassCard from "./GlassCard";

interface RuleCardProps {
  number: number;
  title: string;
  subtitle: string;
  slug: string;
}

export default function RuleCard({ number, title, subtitle, slug }: RuleCardProps) {
  return (
    <Link href={`/rules/${slug}`}>
      <GlassCard className="h-full cursor-pointer group">
        <div className="flex flex-col gap-4">
          <span className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-300">
            {String(number).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold leading-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{subtitle}</p>
        </div>
      </GlassCard>
    </Link>
  );
}
