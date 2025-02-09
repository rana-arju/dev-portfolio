"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send a POST request to your API and handle image upload
    console.log({
      title,
      description,
      technologies,
      liveUrl,
      githubUrl,
      image,
    });
    toast( "Project Added",
     );
    router.push("/dashboard/projects");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="h-32"
          />
        </div>
        <div>
          <label
            htmlFor="technologies"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Technologies (comma-separated)
          </label>
          <Input
            id="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="liveUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Live URL
          </label>
          <Input
            id="liveUrl"
            type="url"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="githubUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            GitHub URL
          </label>
          <Input
            id="githubUrl"
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Project Image
          </label>
          <Input
            id="image"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <Button type="submit">Add Project</Button>
      </form>
    </div>
  );
}
