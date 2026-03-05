import { notFound } from "next/navigation";
import { journalPosts, getPostBySlug } from "@/data/journal";
import { getRuleByNumber } from "@/data/rules";
import JournalPostClient from "./JournalPostClient";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Ordered Life Journal`,
    description: post.excerpt,
  };
}

export default function JournalPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedRule = getRuleByNumber(post.relatedRule);

  return <JournalPostClient post={post} relatedRule={relatedRule} />;
}
