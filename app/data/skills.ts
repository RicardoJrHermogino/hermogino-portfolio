import { Code, Database, Smartphone, Globe } from "lucide-react";

export const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Express.js", 
  "PostgreSQL", "MongoDB", "Python", "Django", "AWS", 
  "Docker", "Kubernetes", "Git", "REST APIs", "GraphQL"
];

export const expertise = [
  {
    icon: Globe,
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with modern frameworks and libraries."
  },
  {
    icon: Database,
    title: "Backend Development", 
    description: "Building scalable server-side applications, APIs, and database architectures."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with React Native and Flutter."
  },
  {
    icon: Code,
    title: "DevOps & Cloud",
    description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure management."
  }
];