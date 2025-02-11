export const dynamic = "force-dynamic";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Project } from "@/type/projectTypes";
import DeleteModel from "@/components/DeleteModel";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects - Mohammad Rana Arju",
  description:
    "I'm Mohammad Rana Arju. I'm a Jr Full Stack web developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. I'm a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I'm skilled at Next js, React js, JavaScript, Prisma, Node js, Express js, MongoDB, firebase, Github, JWT, CSS3, HTML5 and more. I am available for any kind of job opportunity that suits my skills and interests.",
};
export default async function AllProjects() {
  let projects;
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/project`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("result", result);

    projects = result?.data || [];
  } catch (error) {
    console?.error("Error fetching projects:", error);
    projects = []; // Provide a fallback value
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Projects</h2>
        <Button asChild>
          <Link href="/dashboard/add-project">Add New Project</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project: Project) => (
          <Card key={project._id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project?.description?.split(" ").slice(0, 10).join(" ") +
                  (project?.description?.split(" ").length > 10 ? "..." : "")}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/projects/${project._id}`}>Edit</Link>
              </Button>
              <DeleteModel url={`project/${project._id}`} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
