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

const formSchema = z.object({
  title: z.string().min(2, "Blog title must be at least 2 characters"),
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      image: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const formData = {
      ...values,
      image: imageUrls[0],
    };

    const response = await fetch("/api/blood-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    console.log(response);
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
