import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experiance";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About me - Mohammad Rana Arju",
  description: "Mohammad Rana Arju is a web developer, a youtuber.",
};
const About = () => {
  return (
    <div className="mt-24">
      <AboutSection page="page" />
      <Experience />
    </div>
  );
};

export default About;
