import { ProjectDetails } from "@/components/ProjectDetails";
import { projects } from "@/utils/data/project";
import { notFound } from "next/navigation";

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p._id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
