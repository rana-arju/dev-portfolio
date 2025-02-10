import Blogs from "@/components/Blogs";

export default async function BlogPage() {
  let blogPosts = [];

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/blog`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    blogPosts = result?.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    blogPosts = []; // Provide a fallback value
  }

  return (
    <main className="pt-16">
      <Blogs blogPosts={blogPosts} />
    </main>
  );
}
