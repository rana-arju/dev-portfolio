import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import BlogPage from "./blog/page";

export default async function Home() {
  const response = await fetch("http://localhost:5000/api/v1/project", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const projects = await response.json();
  return (
    <div>
      <Hero />
      <AboutSection page="" />
      <Skills />
      <Projects projects={projects?.data?.slice(0, 3)} />
      <BlogPage />
    </div>
  );
}
