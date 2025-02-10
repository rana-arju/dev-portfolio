export const dynamic = "force-dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Blog } from "@/type";
import moment from "moment";
import DeleteModel from "@/components/DeleteModel";

export default async function AllBlogs() {
  let blogPosts = [];

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/blog`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
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
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Blog Posts</h2>
        <Button asChild>
          <Link href="/dashboard/addBlog">Create New Blog</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts?.map((blog: Blog) => (
            <TableRow key={blog._id}>
              <TableCell>
                {blog?.title?.split(/\s+/).slice(0, 10).join(" ") + "..."}
              </TableCell>
              <TableCell>Rana Arju</TableCell>
              <TableCell>
                {moment(blog.createdAt).format("MMM Do YY")}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/dashboard/blogs/${blog._id}`}>Edit</Link>
                  </Button>
                  <DeleteModel id={blog._id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
