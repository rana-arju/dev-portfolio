import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experiance";
import React from "react";

const About = () => {
  return (
    <div className="mt-24">
      <AboutSection page="page" />
      <Experience />
    </div>
  );
};

export default About;
