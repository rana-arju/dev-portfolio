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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2, "Blog title must be at least 2 characters"),
  tags: z.string().min(2, "Tags is required!"),
  image: z.string({
    required_error: "Enter one image url",
  }),
  content: z
    .string({
      required_error: "Blog content is required!",
    })
    .min(20, "Blog title must be at least 20 characters"),
});

export default function AddBlogForm() {
  //const [date, setDate] = useState<Date>();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const handleUploadComplete = (urls: string[]) => {
    setImageUrls(urls);
  };
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      image: "",
      tags: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { tags, ...restValues } = values;

    const tagArray = tags.split(",").map((item: string) => item.trim());
    const formData = {
      ...restValues,
      image: imageUrls[0],
      tags: tagArray,
    };
    try {
      const response = await fetch(
        `https://portfolio-backend02.vercel.app/api/v1/blog`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        await response.json();
        toast.success("New blog Create successfull");
        form.reset();
        router.push("/dashboard/blogs");
      }
    } catch (error) {
      console.log(error);
      toast.error("Someting error");
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Add Blog</CardTitle>
        <CardDescription className="text-center">
          Please fill out all the required information to add new blog
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
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Tags (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="javascript, React js" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ImageUpload onUploadComplete={handleUploadComplete} />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blog content</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-36"
                        placeholder="Write blog content..."
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
