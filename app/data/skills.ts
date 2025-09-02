import {  Database, } from "lucide-react";
import { 
  Code as CodeIcon,
  Palette as DesignIcon,
  Psychology as ProblemSolvingIcon,
} from "@mui/icons-material";

export const skills = [
  "React", "Next.js", "JavaScript", "TypeScript", "Node.js", 
   "MongoDB", "Git", "REST APIs", "Tailwind CSS", "Material-UI", "Figma"
];

export const expertise = [
  {
    icon: CodeIcon,
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with modern frameworks and libraries."
  },
  {
    icon: Database,
    title: "Backend Development", 
    description: "Building scalable server-side applications, APIs, and database architectures."
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences that users love",
    icon: DesignIcon,
  },
  {
    title: "Problem Solving",
    description: "Analyzing complex problems and delivering efficient, maintainable solutions",
    icon: ProblemSolvingIcon,
  },
];

