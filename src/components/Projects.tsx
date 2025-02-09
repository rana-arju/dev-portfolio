import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/type/projectTypes";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <h3 className="text-2xl font-bold border-b-2 border-primary inline-block pb-1 uppercase">
            Best projects
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project._id}
              className="flex flex-col overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#f9004d] dark:hover:border-[#ff3366] transition-colors duration-300"
            >
              <CardHeader className="p-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.name}
                    width={400}
                    height={600}
                    className="object-cover w-full h-[200%] transition-transform duration-[4s] ease-in-out group-hover:translate-y-[-50%]"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardTitle className="mb-2 text-gray-800 dark:text-gray-100">
                  {project.name}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="text-gray-600 dark:text-gray-300 hover:text-[#f9004d] dark:hover:text-[#ff3366]"
                  >
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">Server GitHub</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="text-gray-600 dark:text-gray-300 hover:text-[#f9004d] dark:hover:text-[#ff3366]"
                  >
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">Frontend GitHub</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="text-gray-600 dark:text-gray-300 hover:text-[#f9004d] dark:hover:text-[#ff3366]"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Live Project</span>
                    </a>
                  </Button>
                </div>
                <Button
                  variant="default"
                  asChild
                  className={cn(
                    "bg-[#f9004d] hover:bg-[#d0003f] text-white",
                    "dark:bg-[#ff3366] dark:hover:bg-[#e62e5c] dark:text-white"
                  )}
                >
                  <Link href={`/projects/${project._id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
