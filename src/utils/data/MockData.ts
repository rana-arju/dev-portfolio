import { Blog, Message } from "@/type";
import { Project } from "@/type/projectTypes";

export const blogs: Blog[] = [
  {
    _id: "1",
    title: "Getting Started with Next.js",
    content: "Next.js is a powerful React framework...",
    author: "John Doe",
    createdAt: "2023-06-01",
  },
  {
    _id: "2",
    title: "Mastering Tailwind CSS",
    content: "Tailwind CSS is a utility-first CSS framework...",
    author: "Jane Smith",
    createdAt: "2023-06-15",
  },
];

export const projects: Project[] = [
  {
    _id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution...",
    images: ["https://example.com/ecommerce.jpg"],
    technologies: ["React", "Node.js", "MongoDB"],
    live: "https://ecommerce-example.com",
    server: "https://github.com/username/ecommerce",
    frontend: "https://github.com/username/ecommerce",
  },
  {
    _id: "2",
    title: "Task Management App",
    description: "A collaborative task management application...",
    images: ["https://example.com/taskapp.jpg"],
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    live: "https://ecommerce-example.com",
    server: "https://github.com/username/ecommerce",
    frontend: "https://github.com/username/ecommerce",
  },
];

export const messages: Message[] = [
  {
    _id: "1",
    sender: "Alice",
    content: "Hello! I love your portfolio.",
    timestamp: "2023-06-20T10:30:00Z",
  },
  {
    _id: "2",
    sender: "Bob",
    content: "Are you available for freelance work?",
    timestamp: "2023-06-20T11:15:00Z",
  },
];
