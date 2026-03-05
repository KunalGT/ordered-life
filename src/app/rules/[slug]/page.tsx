import { notFound } from "next/navigation";
import { rules, getRuleBySlug, getRuleByNumber } from "@/data/rules";
import RuleDetailClient from "./RuleDetailClient";

export function generateStaticParams() {
  return rules.map((rule) => ({ slug: rule.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const rule = getRuleBySlug(params.slug);
  if (!rule) return { title: "Rule Not Found" };
  return {
    title: `Rule ${rule.number}: ${rule.title} — Ordered Life`,
    description: rule.description,
  };
}

export default function RuleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const rule = getRuleBySlug(params.slug);
  if (!rule) notFound();

  const related = rule.relatedRules
    .map((num) => getRuleByNumber(num))
    .filter(Boolean) as typeof rules;

  return <RuleDetailClient rule={rule} related={related} />;
}
