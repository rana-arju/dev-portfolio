import { Projects } from "@/components/Projects";
import React from "react";

const ProjectPage = async () => {
  let projects;
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/project`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    projects = result?.data || [];

    console.log("Projects fetched successfully:", projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    projects = []; // Provide a fallback value
  }

  return (
    <main className="pt-10">
      <Projects projects={projects?.data} />
    </main>
  );
};

export default ProjectPage;
