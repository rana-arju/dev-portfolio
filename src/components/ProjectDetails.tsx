"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Project } from "@/type/projectTypes";
import Link from "next/link";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="container mx-auto px-1 sm:px-4 py-16 mt-8">
      <Card className="overflow-hidden border-2 border-gray-200 dark:border-gray-700">
        <CardHeader className="bg-gray-100 dark:bg-gray-800">
          <CardTitle className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {project?.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            className="mb-6"
            style={
              {
                "--swiper-navigation-color": "#f9004d",
                "--swiper-pagination-color": "#f9004d",
              } as React.CSSProperties
            }
          >
            {project?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={800}
                  height={500}
                  className="rounded-lg object-cover w-full h-[400px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            {project?.description}
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project?.technologies?.map((tech, index) => (
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
            {project?.server && (
              <Link
                href={project?.server}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#f9004d] hover:border-[#f9004d] dark:hover:text-[#ff3366] dark:hover:border-[#ff3366] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github mr-2 h-4 w-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Server
                </Button>
              </Link>
            )}
            {project?.frontend && (
              <Link
                href={project?.frontend}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#f9004d] hover:border-[#f9004d] dark:hover:text-[#ff3366] dark:hover:border-[#ff3366] cursor-pointer flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github mr-2 h-4 w-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>{" "}
                  Frontend
                </Button>
              </Link>
            )}
            {project?.live && (
              <Link
                href={project?.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className={cn(
                    "bg-[#f9004d] hover:bg-[#d0003f] text-white",
                    "dark:bg-[#ff3366] dark:hover:bg-[#e62e5c] dark:text-white cursor-pointer"
                  )}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Project
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
