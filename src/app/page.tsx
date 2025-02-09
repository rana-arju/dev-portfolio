import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import { projects } from "@/utils/data/project";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection page="" />
      <Skills />
      <Projects  projects={projects} />
      <BlogPage />
    </div>
  );
}
