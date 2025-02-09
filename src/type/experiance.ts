export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}
