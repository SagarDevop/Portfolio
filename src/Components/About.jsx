import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionsRef = useRef([]);
  const imgRefs = useRef([]);
  const textRefs = useRef([]);

 const aboutSections = [
    {
      img: "/about (8).png",
      title: "Who I Am",
      text: "I’m Sagar Singh Rajawat, a Full-Stack Developer who blends design sensibility with engineering rigor. I build polished, performant web apps that solve real problems—carefully crafted frontends, resilient backends, and intelligent features that improve user experiences.",
    },
    {
      img: "/about (9).png",
      title: "What I Do",
      text: "I design and ship end-to-end web solutions. On the front end I create responsive, animated UIs with React and Tailwind; on the back end I build scalable services with Node.js or Flask and persist data in MongoDB. I also integrate AI features and deploy projects to the cloud so they run reliably in production.",
    },
    {
      img: "/about (6).png",
      title: "My Journey",
      text: "My path started with curiosity—how websites work—and grew into a career of building them. From learning vanilla JavaScript to mastering React, exploring Python for automation, and building full apps with Flask and Node, each project has pushed my abilities and reshaped how I approach problems.",
    },
    {
      img: "/about (5).png",
      title: "Tech Stack",
      text: "I work with React, Tailwind CSS, JavaScript (ESNext), Node.js, Express, Flask, Python, MongoDB, and Git. For animations and motion I use GSAP and Framer Motion. For deployment and CI/CD I rely on Vercel/Netlify and cloud platforms to keep apps fast and available.",
    },
    {
      img: "/about (7).png",
      title: "Skills & Expertise",
      text: "Frontend architecture, component design, responsive and accessible UI, performant state management, RESTful API design, server-side logic, database modeling, and integrating AI models. I’m comfortable taking a product from prototype to production while keeping code maintainable and testable.",
    },
    {
      img: "/about (4).png",
      title: "My Process",
      text: "I follow a pragmatic process: clarify goals, prototype UI/UX, build components with reusability in mind, connect the backend with secure APIs, and continuously test and optimize. I prefer iterative development—fast feedback, measurable improvements, and clear documentation.",
    },
    {
      img: "/about (3).png",
      title: "Philosophy",
      text: "My mission is to create web experiences that are thoughtful, useful, and a little delightful. I believe great software strikes a balance between utility and aesthetics: it should be fast, accessible, and emotionally resonant.",
    },
    {
      img: "/about (2).png",
      title: "Future Goals",
      text: "I’m focused on leveling up in AI-driven interfaces and 3D web experiences, while refining my systems design and cloud architecture skills. Long term I want to build tools that make development more creative and less repetitive—so people can prototype and iterate faster.",
    },
    {
      img: "/about (10).png",
      title: "Beyond Code",
      text: "Outside of coding I experiment with 3D design and animation, tinker with creative AI projects, and produce short character videos for my channel. These hobbies influence my approach to UI—motion, storytelling, and personality matter.",
    },
    {
      img: "/about (1).png",
      title: "At a Glance",
      text: "Built 15+ real projects, completed certifications in React and ChatGPT integrations, implemented full-stack features (auth, deploy, analytics), and integrated AI assistants into user flows—skills shown across live demos and GitHub.",
    },
  ];

  useLayoutEffect(() => {
    
    const imgs = imgRefs.current;
    imagesLoaded(imgs, { background: true }, () => {
      const ctx = gsap.context(() => {
        imgRefs.current.forEach((img, i) => {
          const text = textRefs.current[i];
          if (!img || !text) return;

          gsap.fromTo(
            img,
            { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                end: "bottom 70%",
                scrub: 1,
              },
            }
          );

          gsap.fromTo(
            text,
            { x: i % 2 === 0 ? 100 : -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: text,
                start: "top 85%",
                end: "bottom 70%",
                scrub: 1,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden transition-colors duration-500">
      {aboutSections.map((sec, i) => (
        <section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className={`min-h-[70vh] flex flex-col md:flex-row items-center justify-evenly py-20 px-10 md:px-24 relative ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
         
          <div
            className={`absolute ${i % 2 === 0 ? "right-10" : "left-10"} top-10 w-64 h-64 bg-green-400/20 dark:bg-green-500/10 rounded-full blur-3xl`}
          ></div>

        
          <div
            ref={(el) => (imgRefs.current[i] = el)}
            className="about-img relative md:w-[30vw] h-[50vh] flex justify-center items-center mb-10 md:mb-0"
          >
            <div className="absolute -inset-2 bg-green-400/40 dark:bg-green-400/20 blur-xl rounded-3xl"></div>
            <img
              src={sec.img}
              alt={sec.title}
              className="relative w-80 h-80 object-cover rounded-3xl shadow-lg border-4 border-white dark:border-gray-800 hover:scale-105 transition-transform duration-700"
            />
          </div>

        
          <div
            ref={(el) => (textRefs.current[i] = el)}
            className="about-text md:w-[50vw] space-y-6 text-center md:text-left z-10"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 dark:text-green-400">{sec.title}</h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{sec.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default About;
