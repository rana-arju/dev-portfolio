import Blogs from "@/components/Blogs";

export default async function BlogPage() {
  const response = await fetch("http://localhost:5000/api/v1/blog", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const blogPosts = await response.json();
  return (
    <main className="pt-16">
      <Blogs blogPosts={blogPosts?.data} />
    </main>
  );
}
