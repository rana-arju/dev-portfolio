"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Project } from "@/type/projectTypes";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden border-2 border-gray-200 dark:border-gray-700">
        <CardHeader className="bg-gray-100 dark:bg-gray-800">
          <CardTitle className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mb-6"
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.name} screenshot ${index + 1}`}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-[400px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              asChild
              className="text-gray-600 dark:text-gray-300 hover:text-[#f9004d] hover:border-[#f9004d] dark:hover:text-[#ff3366] dark:hover:border-[#ff3366]"
            >
              <a
                href={project.server}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Server GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="text-gray-600 dark:text-gray-300 hover:text-[#f9004d] hover:border-[#f9004d] dark:hover:text-[#ff3366] dark:hover:border-[#ff3366]"
            >
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Frontend GitHub
              </a>
            </Button>
            <Button
              variant="default"
              asChild
              className={cn(
                "bg-[#f9004d] hover:bg-[#d0003f] text-white",
                "dark:bg-[#ff3366] dark:hover:bg-[#e62e5c] dark:text-white"
              )}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Project
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
