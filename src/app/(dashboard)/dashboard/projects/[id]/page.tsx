/* eslint-disable @typescript-eslint/no-explicit-any */
import UpdateProjectForm from "@/components/EditProject";
import { toast } from "sonner";

export default async function UpdateProjectPage({ params }: any) {
  const { id } = await params;
  const res = await fetch(`${process.env.BACKEND_URL}/project/${id}`);
  if (!res.ok) {
    toast.error("Someting went wrong");
  }
  const data = await res.json();
  const project = data?.data;

  return (
    <div className="max-w-2xl mx-auto">
      <UpdateProjectForm project={project} />
    </div>
  );
}
