import { Projects } from "@/components/Projects";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "All Projects - Mohammad Rana Arju",
  description: "Mohammad Rana Arju develop many project. here is best project assign.",
};
const ProjectPage = async () => {

  let projects = [];
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/project`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 20 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    projects = result?.data || [];

  } catch (error) {
    console?.error("Error fetching projects:", error);
    projects = []; // Provide a fallback value
  }

  return (
    <main className="pt-10">
      <Projects projects={projects} />
    </main>
  );
};

export default ProjectPage;
