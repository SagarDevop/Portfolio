import React, { useState } from "react";
import {
  FaReact,
  FaPython,
  FaGithub,
  FaHtml5,
  FaCode,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCss3,
  SiMongoose,
  SiNodedotjs,
  SiGreensock,
  SiMongodb,
  SiFramer,
  SiPostman,
  SiMysql,
  SiNpm,
  SiGit,
  SiNetlify,
  SiVercel,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills = [
    {
      icon: <FaReact className="text-4xl text-blue-500" />,
      title: "React",
      level: "Advanced",
      percent: 85,
      desc: "State Management, Hooks, Performance",
    },
    {
      icon: <SiJavascript className="text-4xl text-yellow-500" />,
      title: "JavaScript",
      level: "Proficient",
      percent: 90,
      desc: "ES6+, DOM, APIs",
    },
    {
      icon: <SiCss3 className="text-4xl text-blue-400" />,
      title: "CSS3",
      level: "Intermediate",
      percent: 75,
      desc: "Responsive Design, SASS, Animations",
    },
    {
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
      title: "HTML5",
      level: "Proficient",
      percent: 95,
      desc: "Semantic Markup, Accessibility, SEO",
    },
    {
      icon: <SiGreensock className="text-4xl text-green-400" />,
      title: "GSAP",
      level: "Intermediate",
      percent: 70,
      desc: "ScrollTrigger, Timelines, Motion Effects",
    },
    {
      icon: <SiFramer className="text-4xl text-pink-500" />,
      title: "Framer Motion",
      level: "Intermediate",
      percent: 65,
      desc: "Animations, Variants, Transitions",
    },
  ];

  const backendSkills = [
    {
      icon: <FaPython className="text-4xl text-yellow-600" />,
      title: "Python",
      level: "Advanced",
      percent: 85,
      desc: "Core Python, Scripting, Automation",
    },
    {
      icon: <SiMongoose className="text-4xl text-indigo-500" />,
      title: "Mongoose",
      level: "Intermediate",
      percent: 70,
      desc: "Schema Design, ODM, Data Modeling",
    },
    {
      icon: <SiNodedotjs className="text-4xl text-green-600" />,
      title: "Node.js",
      level: "Intermediate",
      percent: 75,
      desc: "Server-side JS, Event-driven, APIs",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-700" />,
      title: "MongoDB",
      level: "Intermediate",
      percent: 70,
      desc: "NoSQL Database, CRUD Operations, Aggregation",
    },
    {
      icon: <SiMysql className="text-4xl text-blue-500" />,
      title: "MySQL",
      level: "Intermediate",
      percent: 65,
      desc: "Relational Database, Queries, Joins",
    },
    {
      icon: <i className="devicon-flask-original text-4xl text-gray-700"></i>,
      title: "Flask",
      level: "Intermediate",
      percent: 75,
      desc: "REST APIs, Routing, Backend Integration",
    },
    {
      icon: <SiExpress className="text-4xl text-gray-800 dark:text-gray-200" />,
      title: "Express.js",
      level: "Intermediate",
      percent: 70,
      desc: "Middleware, Routing, RESTful APIs",
    },
  ];

  const toolsSkills = [
    {
      icon: <FaGithub className="text-4xl text-gray-800 dark:text-gray-200" />,
      title: "GitHub",
      level: "Advanced",
      percent: 80,
      desc: "Cloning, Pushing, Automation",
    },
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "VS Code",
      level: "Advanced",
      percent: 90,
      desc: "Extensions, Debugging, Productivity",
    },
    {
      icon: <SiPostman className="text-4xl text-orange-500" />,
      title: "Postman",
      level: "Proficient",
      percent: 80,
      desc: "API Testing, Environment Setup",
    },
    {
      icon: <SiNpm className="text-4xl text-red-500" />,
      title: "NPM",
      level: "Intermediate",
      percent: 70,
      desc: "Package Management, Scripts",
    },
    {
      icon: <SiGit className="text-4xl text-red-600" />,
      title: "Git",
      level: "Proficient",
      percent: 85,
      desc: "Branching, Merging, Version Control",
    },
    {
      icon: <SiNetlify className="text-4xl text-teal-500" />,
      title: "Netlify",
      level: "Proficient",
      percent: 85,
      desc: "Frontend Deployment, CI/CD, Custom Domains",
    },
    {
      icon: <SiVercel className="text-4xl text-black dark:text-white" />,
      title: "Vercel",
      level: "Proficient",
      percent: 80,
      desc: "React App Hosting, Auto Deployments, Previews",
    },
    {
      icon: <FaDocker className="text-4xl text-blue-500" />,
      title: "Docker",
      level: "Beginner",
      percent: 50,
      desc: "Containerization Basics, App Packaging",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Project Management",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-[#0a140a] dark:to-[#0e1710] flex flex-col items-center py-16 px-6 transition-colors duration-500">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-300">
          My Expertise
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
          A continuous learner, I thrive on building robust and intuitive
          solutions using a diverse set of tools and platforms.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 dark:bg-green-900 shadow-md rounded-full p-1 mb-10 transition-colors duration-500">
        {["frontend", "backend", "tools"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === tab
                ? "bg-green-600 text-white"
                : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            }`}
          >
            {tab === "frontend"
              ? "Frontend"
              : tab === "backend"
              ? "Backend"
              : "Tools"}
          </button>
        ))}
      </div>

      {/* Sections */}
      {activeTab === "frontend" && (
        <SkillSection title="Frontend Development" skills={frontendSkills} />
      )}
      {activeTab === "backend" && (
        <SkillSection title="Backend Development" skills={backendSkills} />
      )}
      {activeTab === "tools" && (
        <SkillSection title="Tools & Platforms" skills={toolsSkills} />
      )}

      {/* Soft Skills */}
      <div className="w-full max-w-4xl bg-green-100 dark:bg-green-900/40 p-8 mt-10 rounded-2xl shadow-lg transition-colors duration-500">
        <h2 className="text-xl font-semibold mb-6 text-green-700 dark:text-green-300">
          Key Strengths
        </h2>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-white dark:bg-green-800 rounded-full text-gray-700 dark:text-gray-200 font-medium shadow-sm hover:bg-green-50 dark:hover:bg-green-700 transition-all"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillSection = ({ title, skills }) => (
  <div className="w-full max-w-5xl bg-white dark:bg-green-900/40 p-8 rounded-2xl shadow-lg transition-colors duration-500">
    <h2 className="text-xl font-semibold mb-6 text-green-700 dark:text-green-300">
      {title}
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </div>
);

const SkillCard = ({ icon, title, level, percent, desc }) => (
  <div className="p-6 border border-green-200 dark:border-green-800 rounded-xl shadow-sm hover:shadow-md transition-all bg-gray-50 dark:bg-green-950/40 text-gray-700 dark:text-gray-200">
    <div className="flex items-center gap-3 mb-3">{icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-sm opacity-80 mb-2">{level}</p>
    <div className="w-full bg-gray-200 dark:bg-green-800 h-2 rounded-full overflow-hidden mb-3">
      <div
        className="h-full bg-green-500 rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
    <p className="text-sm opacity-80">{desc}</p>
  </div>
);

export default Skills;
