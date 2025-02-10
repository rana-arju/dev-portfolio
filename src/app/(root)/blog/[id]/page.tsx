/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import NotFound from "@/app/not-found";

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const response = await fetch(`${process.env.BACKEND_URL}/blog/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const blogPosts = await response.json();
  const post = blogPosts?.data;
  return {
    title: post?.title || "No project found",
    description: post?.content || "No content found",
  };
}
export default async function BlogPost({ params }: any) {
  const { id } = await params;
  const response = await fetch(`http://localhost:5000/api/v1/project/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const blogPosts = await response.json();
  const post = blogPosts?.data;

  if (!post) {
    return <NotFound />;
  }

  return (
    <article className="container mx-auto px-4 py-2">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        {post.title}
      </h1>
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
        <span>{post.author}</span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {post?.tags?.map((tag: any) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        {post.content.split("\n").map((paragraph: any, index: number) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
