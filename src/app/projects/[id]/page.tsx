/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProjectDetails } from "@/components/ProjectDetails";
import { projects } from "@/utils/data/project";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const projectId = await params;
  const project = projects.find((p) => p._id === projectId.id);
  return {
    title: project?.name || "Project Not Found",
    description: project?.description || "No description available.",
  };
}

export default async function ProjectDetailsPage({ params }: any) {
  const projectId = await params;
  const project = projects.find((p) => p._id === projectId.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
