import DashboardLayoutClient from "@/components/DashboardLayout";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import type React from "react";
export const metadata: Metadata = {
  title: "Dashboard - Mohammad Rana Arju",
  description:
    "I'm Mohammad Rana Arju. I'm a Jr Full Stack web developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. I'm a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I'm skilled at Next js, React js, JavaScript, Prisma, Node js, Express js, MongoDB, firebase, Github, JWT, CSS3, HTML5 and more. I am available for any kind of job opportunity that suits my skills and interests.",
};
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <DashboardLayoutClient session={session}>{children}</DashboardLayoutClient>
  );
}
