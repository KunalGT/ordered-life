import { notFound } from "next/navigation";
import { journalPosts, getPostBySlug } from "@/data/journal";
import { getRuleByNumber } from "@/data/rules";
import JournalPostClient from "./JournalPostClient";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Ordered Life Journal`,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedRule = getRuleByNumber(post.relatedRule);

  return <JournalPostClient post={post} relatedRule={relatedRule} />;
}
