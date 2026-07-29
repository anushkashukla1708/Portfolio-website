import {
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
} from "lucide-react";

const skillData = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
    ],
  },

  {
    title: "Programming",
    icon: Code2,
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "Data Structures & Algorithms",
    ],
  },

  {
    title: "Database",
    icon: Database,
    skills: [
      "MySQL",
      "SQLite",
      "MongoDB",
    ],
  },

  {
    title: "Tools & AI",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "PyMuPDF",
      "Ollama",
      "VS Code",
    ],
  },
];

export default skillData;