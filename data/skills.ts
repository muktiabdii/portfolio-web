import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    id: 1,
    title: "Mobile Development",
    subtitle: "Android & Cross-Platform",
    description:
      "Building Android applications using Jetpack Compose and Flutter with a focus on clean architecture, API integration, and real world problem solving.",
    icon: "📱",
    color: "blue",
    items: [
      "Jetpack Compose & Material Design",
      "Flutter (Cross-platform Mobile Development)",
      "API Integration (FastAPI, REST)",
      "Clean Architecture",
    ],
  },
  {
    id: 2,
    title: "Backend & API",
    subtitle: "Scalable Services",
    description:
      "Experience building backend services and APIs with attention to architecture, data flow, authentication, and cloud infrastructure.",
    icon: "⚙️",
    color: "green",
    items: [
      "RESTful API Design",
      "ERD & Database Schema",
      "DevOps & Cloud Deployment",
      "Authentication & Security",
    ],
  },
  {
    id: 3,
    title: "AI-Powered Apps",
    subtitle: "Machine Learning Integration",
    description:
      "Developing AI-assisted applications by integrating machine learning models into mobile apps to solve real world problems.",
    icon: "🤖",
    color: "purple",
    items: [
      "Speech & Emotion Recognition",
      "ML Model Integration via API",
      "AI-assisted features for decision support and recommendations",
    ],
  },
  {
    id: 4,
    title: "Problem Solving",
    subtitle: "System Design & Architecture",
    description:
      "Approaching real world problems by breaking them into manageable features and building solutions iteratively with a system-oriented mindset.",
    icon: "🧩",
    color: "orange",
    items: [
      "Feature Breakdown & MVP Scoping",
      "Trade off Analysis",
      "End-to-end System Thinking",
    ],
  },
];
