"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  title: z
    .string({
      required_error: "Project title is required",
    })
    .min(2, "Blog title must be at least 2 characters"),
  live: z
    .string({
      required_error: "Live link is required",
    })
    .min(1, "Field is required"),
  description: z
    .string({
      required_error: "Project description is required!",
    })
    .min(20, "Project description must be at least 20 characters"),
  technologies: z.string({
    required_error: "Technologies are required!",
  }),
  server: z.string().min(1, "Field is required"),
  frontend: z.string().min(1, "Field is required"),
});

export default function AddProjectForm() {
  //const [date, setDate] = useState<Date>();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleUploadComplete = (urls: string[]) => {
    setImageUrls(urls);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      live: "",
      description: "",
      technologies: "",
      server: "",
      frontend: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { technologies, ...restValues } = values;

    const techArray = technologies
      .split(",")
      .map((item: string) => item.trim());

    const formData = {
      ...restValues,
      images: imageUrls,
      technologies: techArray,
    };

    const response = await fetch("http://localhost:5000/api/v1/project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      toast("New Project added successfull!");
      form.reset();
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Add Project</CardTitle>
        <CardDescription className="text-center">
          Please fill out all the required information to add new project
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="javascript..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="technologies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Technologies (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="javascript, React js" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="live"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Live link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="server"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Server github url</FormLabel>
                    <FormControl>
                      <Input placeholder="Server github url" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="frontend"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frontend github url</FormLabel>
                    <FormControl>
                      <Input placeholder="Frontend github url" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ImageUpload onUploadComplete={handleUploadComplete} />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-36"
                        placeholder="Write Project description..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Blog
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
