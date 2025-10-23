import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".cert-item").forEach((el) => {
        gsap.from(el, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certificates = [
    {
      title: "Introduction to Software Engineering",
      org: "IBM",
      date: "August 2025",
      desc: "Explored the fundamentals of designing, developing, and managing software systems in real-world scenarios.",
      img: "/software.png",
      link: "https://www.coursera.org/account/accomplishments/records/50LPKH5OFW7T",
      skills: ["SDLC", "Project Management"],
    },
    {
      title: "Crash Course on Python",
      org: "Google",
      date: "August 2025",
      desc: "Gained hands-on experience in Python to write clean, efficient, and functional code.",
      img: "/pythongo.png",
      link: "https://coursera.org/share/bbfd9a332812e365fe436a1be01029a2",
      skills: ["Python"],
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      org: "IBM",
      date: "August 2025",
      desc: "Built a strong foundation in web development by learning HTML structure, CSS styling, and JavaScript interactivity.",
      img: "/htmlcssjs.png",
      link: "https://www.coursera.org/account/accomplishments/records/4LOKB36YF1U1",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Introduction to Cloud Computing",
      org: "IBM",
      date: "August 2025",
      desc: "Explored cloud computing concepts to build, manage, and deploy applications in modern cloud environments.",
      img: "/cloud.png",
      link: "https://www.coursera.org/account/accomplishments/records/VZWPMRUXR78G",
      skills: ["SaaS", "PaaS", "IaaS"],
    },
    {
      title: "Getting Started with Git and GitHub",
      org: "IBM",
      date: "September 2025",
      desc: "Gained hands-on experience in repository management, branching, and collaborative development workflows.",
      img: "/github.png",
      link: "https://www.coursera.org/account/accomplishments/records/E8TPDKG7SUFW",
      skills: ["Git", "GitHub", "Version Control"],
    },
    {
      title: "Developing Front-End Apps with React",
      org: "IBM",
      date: "September 2025",
      desc: "Explored React fundamentals to develop scalable, efficient, and user-friendly web interfaces.",
      img: "/react.png",
      link: "https://www.coursera.org/account/accomplishments/verify/EOSK7UO7BGFH",
      skills: ["React.js", "Redux.js", "Redux Thunk"],
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      org: "IBM",
      date: "September 2025",
      desc: "Gained hands-on experience in creating scalable back-end solutions with RESTful APIs and server management.",
      img: "/nodeexpress.png",
      link: "https://www.coursera.org/account/accomplishments/verify/03YC6WLS84V3",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Python for Data Science, AI & Development",
      org: "IBM",
      date: "October 2025",
      desc: "Gained hands-on experience in using Python for machine learning, data processing, and software development.",
      img: "/pythoncer.png",
      link: "https://www.coursera.org/account/accomplishments/verify/OJD2MHHXAZPG",
      skills: ["Pandas", "NumPy"],
    },
    {
      title: "Developing AI Applications with Python and Flask",
      org: "IBM",
      date: "October 2025",
      desc: "Built intelligent AI-powered web applications using Python and Flask, integrating machine learning models seamlessly.",
      img: "/flask.png",
      link: "https://www.coursera.org/account/accomplishments/records/71OO8IK6GGE6",
      skills: ["REST APIs", "API Development", "Flask"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-[#f9fdf9] to-[#edf8f1] dark:from-[#0a140a] dark:to-[#0e1710] text-gray-900 dark:text-white py-20 px-6 md:px-16 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.1),transparent_70%)]"></div>

      <h1 className="text-5xl font-extrabold text-center text-emerald-600 dark:text-green-400 mb-16 relative z-10">
        Certifications & Achievements
      </h1>

      <div className="relative border-l-2 border-emerald-400 dark:border-green-500 ml-10 md:ml-20 z-10">
        {certificates.map((item, i) => (
          <div key={i} className="cert-item mb-20 ml-6 relative">
            {/* Dot */}
            <div className="absolute -left-4 top-2 w-4 h-4 bg-emerald-500 dark:bg-green-400 rounded-full shadow-[0_0_15px_#10b981] dark:shadow-[0_0_15px_#00FF99]" />

            {/* Card */}
            <div className="bg-white dark:bg-[#0e1710]/80 border border-emerald-100 dark:border-green-700 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] dark:hover:shadow-[0_0_25px_#00FF99] backdrop-blur-sm transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full md:w-64 rounded-xl shadow-sm border border-emerald-100 dark:border-green-800 hover:scale-105 transition-transform duration-500"
                />

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-green-400">
                    {item.title}
                  </h3>
                  <h4 className="text-lg text-gray-500 dark:text-gray-300 mt-1">
                    {item.org} •{" "}
                    <span className="text-emerald-600 dark:text-green-300">
                      {item.date}
                    </span>
                  </h4>
                  <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm md:text-base bg-emerald-50 dark:bg-green-900/40 text-emerald-700 dark:text-green-200 rounded-full border border-emerald-300 dark:border-green-600 hover:bg-emerald-100 dark:hover:bg-green-700/60 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-8 py-3 bg-emerald-500 dark:bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-600 dark:hover:bg-green-600 hover:scale-105 transition-all duration-300">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Credential URL
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
