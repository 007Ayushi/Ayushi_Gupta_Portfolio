import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "text-orange-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    ],
  },

  {
    title: "Data Science",
    skills: [
      { name: "NumPy", icon: SiNumpy, color: "text-blue-400" },
      { name: "Pandas", icon: SiPandas, color: "text-purple-400" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    ],
  },
];