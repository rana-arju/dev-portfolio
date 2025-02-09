import { EducationItem, ExperienceItem } from "@/type/experiance";

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Jr. Software Developer",
    company: "Wikiance",
    location: "Kolkata, India",
    period: "2022 - 2023",
    description: [
      "Developed and deployed web applications using the MERN stack.",
      " application Improvedperformance by 40% through code optimization",
      "Collaborated with the team to troubleshoot and enhance system functionality.",
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Community Nutrition Worker",
    company: "Concern WorldWide (NGO)",
    location: "Ukhia, Cox's Bazar",
    period: "2024 - 2025",
    description: [
      "Collected project participant data using Kobo Toolbox.",
      "Conducted training sessions on health, nutrition, and newborn care.",
      "Distributed seeds and homestead gardening tools to beneficiaries.",
      "Monitored and reported project progress to ensure alignment with objectives.",
    ],
    technologies: [""],
  },
  {
    id: "3",
    title: "Support Teacher",
    company: "Well-up Technology",
    location: "Chattogram, Bangladesh",
    period: "2023 - 2023",
    description: [
      "Supported students in programming-related tasks, including debugging and problem-solving.",
      "Simplified technical concepts to enhance learning outcomes.",
    ],
    technologies: ["JavaScript", "SCSS", "React js"],
  },
];

export const education: EducationItem[] = [
  {
    id: "1",
    degree: "Diploma in Computer Engineering",
    institution: "Cox's Bazar Polytechnic Institute.",
    location: "Cox's Bazar, Bangladesh",
    period: "2019 - 2023",
    description: "",
    achievements: ["CGPA: 3.55/4"],
  },
  {
    id: "2",
    degree: "SSC (Secondary School Certificate)",
    institution: "Moricha Palong High School.",
    location: "Moricha Palong, Ukhia, Cox's Bazar",
    period: "2017 - 2018",
    description: "",
    achievements: [
     
      "GPA: 4.50",
    ],
  },
];
