import { Projects } from "@/components/Projects";
import React from "react";

const ProjectPage = async () => {
  const response = await fetch("http://localhost:5000/api/v1/project", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const projects = await response.json();

  return (
    <main className="pt-10">
      <Projects projects={projects?.data} />
    </main>
  );
};

export default ProjectPage;
