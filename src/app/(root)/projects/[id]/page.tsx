/* eslint-disable @typescript-eslint/no-explicit-any */
import NotFound from "@/app/not-found";
import { ProjectDetails } from "@/components/ProjectDetails";

export async function generateMetadata({ params }: any) {
  const { id } = await params;

  const res = await fetch(`${process.env.BACKEND_URL}/project/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const project = await res.json();
  return {
    title: project?.data?.title || "Project Not Found",
    description: project?.data.description || "No description available.",
  };
}

export default async function ProjectDetailsPage({ params }: any) {
  const { id } = await params;
  const res = await fetch(`${process.env.BACKEND_URL}/project/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const project = await res.json();

  if (!project) {
    return <NotFound />;
  }

  return <ProjectDetails project={project?.data} />;
}
