export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/addBlog",
    "/dashboard/projects",
    "/dashboard/blogs",
    "/dashboard/messages",
    "/dashboard/add-project",
  ],
};
