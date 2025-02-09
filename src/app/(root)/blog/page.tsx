
import { blogPosts } from "@/utils/data/blogPosts";
import Blogs from "@/components/Blogs";

export default function BlogPage() {
  return (
    <main className="pt-16">
      <Blogs blogPosts={blogPosts} />
    </main>
  );
}
