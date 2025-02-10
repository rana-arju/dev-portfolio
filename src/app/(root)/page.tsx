import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";

export default async function Home() {
  let projects =[];
  let blogPosts = [];

  try {
    const response = await fetch("http://localhost:5000/api/v1/project", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    projects = result?.data || [];

    const res = await fetch("http://localhost:5000/api/v1/blog", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result2 = await res.json();
    blogPosts = result2?.data;

    console.log("Projects fetched successfully:", projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div>
      <Hero />
      <AboutSection page="" />
      <Skills />
      <Projects projects={projects?.slice(0, 3)} />
      <Blogs blogPosts={blogPosts?.slice(0, 3)} />
    </div>
  );
}
