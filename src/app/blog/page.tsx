
import { blogPosts } from "@/utils/data/blogPosts";
import Blogs from "@/components/Blogs";

export default function BlogPage() {
  return (
    <main >
      <Blogs blogPosts={blogPosts} />
    </main>
  );
}
