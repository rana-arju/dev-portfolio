import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mohammad Rana Arju",
  description: "I'm Mohammad Rana Arju. I'm a Jr Full Stack web developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. I'm a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I'm skilled at Next js, React js, JavaScript, Prisma, Node js, Express js, MongoDB, firebase, Github, JWT, CSS3, HTML5 and more. I am available for any kind of job opportunity that suits my skills and interests.",
};
export default async function Home() {
  let projects = [];
  let blogPosts = [];

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/project`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    projects = result?.data || [];

    const res = await fetch(`${process.env.BACKEND_URL}/blog`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 30 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result2 = await res.json();
    blogPosts = result2?.data;
  } catch (error) {
    console?.error("Error fetching projects:", error);
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
