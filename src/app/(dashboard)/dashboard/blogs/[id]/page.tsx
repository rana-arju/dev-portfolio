/* eslint-disable @typescript-eslint/no-explicit-any */
import UpdateBlogForm from "@/components/updateBlog";
import { toast } from "sonner";

export default async function UpdateBlog({ params }: any) {
  const { id } = await params;

  const res = await fetch(
    `https://portfolio-backend02.vercel.app/api/v1/blog/${id}`
  );
  if (!res.ok) {
    toast.error("Something error")
  }
  const result = await res.json();
  const data = result?.data;
  return (
    <div className="max-w-2xl mx-auto">
      <UpdateBlogForm blog = {data} />
    </div>
  );
}
