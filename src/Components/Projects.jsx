import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "./projectData";
import { projectsDataGrid } from "./projectData";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const heroRef = useRef(null);
  const techRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });

      gsap.from(techRef.current.children, {
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 80%",
        },
      });

      gsap.from(gridRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-green-50 text-green-900 dark:from-[#0a140a] dark:to-[#0e1710] dark:text-white transition-colors duration-500">
      {/* ================= Hero Section ================= */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
      >
        <h1 className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">
          Crafted with Code & Creativity
        </h1>
        <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          A showcase of projects blending innovation, clean code, and powerful
          user experiences.
        </p>

        {/* Project Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.title || index}
              className="group relative w-[24vw] h-60 bg-green-100 dark:bg-green-900/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer border border-green-200 dark:border-green-800 transition-all duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-200 mb-4">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-400 text-green-100 dark:text-green-300 px-4 py-1 rounded-md hover:bg-green-400 hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Tech Stack ================= */}
      <section
        ref={techRef}
        className="py-20 bg-green-50 dark:bg-[#111d12] text-green-900 dark:text-green-100 text-center relative z-10 transition-colors duration-500"
      >
        <h2 className="text-4xl font-bold mb-8 text-green-700 dark:text-green-300">
          Technologies That Power My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-10 px-6">
          {[
            "/pylo (1).png",
            "/pylo (2).png",
            "/pylo (3).png",
            "/pylo (4).png",
            "/pylo (5).png",
            "/pylo (6).png",
            "/pylo (7).png",
            "/pylo (8).png",
            "/pylo (9).png",
            "/pylo (10).png",
            "/pylo (11).png",
            "/pylo (12).png",
          ].map((tech, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-green-900/50 h-[15vh] w-[9vw] rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-green-200 dark:border-green-800"
            >
              <img className="object-cover h-full w-full" src={tech} alt="" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= More Creations ================= */}
      <section
        ref={gridRef}
        className="py-24 bg-white dark:bg-[#0e1710] text-green-950 dark:text-white relative z-10 transition-colors duration-500"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700 dark:text-green-300">
          More Creations
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-10">
          {projectsDataGrid.map((project, index) => (
            <div
              key={index}
              className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt="Project"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-xl mb-2 text-green-700 dark:text-green-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.live}
                    className="text-green-700 dark:text-green-400 font-semibold hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
