import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// Typewriter Hook
const useTypewriter = (text, speed = 80) => {
  const [content, setContent] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setContent(text.substring(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return content;
};

function FloatingLogos() {
  const navigate = useNavigate();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  const text = useTypewriter(
    "Hi, I'm Sagar Singh Rajawat — Fullstack Developer",
    60
  );
  const sa = () =>{
    navigate("/about")
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-between px-10 overflow-hidden relative"
      style={{
        backgroundImage: "url('webg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      <h1
        ref={headingRef}
        className="absolute top-10 w-full text-center text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
      >
        Welcome to My Portfolio
      </h1>

     
      <div
        ref={leftRef}
        className="w-1/2 h-full mt-10 flex items-center justify-center relative"
      >
        <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_40px_rgba(0,255,150,0.5)] animate-float-slow">
          <img
            src="/profile.jpg"
            alt="Sagar Singh Rajawat"
            className="w-full h-[90vh] object-cover z-10"
          />
       
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400/30 via-transparent to-transparent animate-glow"></div>
        </div>
      </div>

   
      <div
        ref={rightRef}
        className="w-[45%] h-[60vh] bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-3xl shadow-2xl p-10 flex flex-col justify-center items-start z-10"
      >
        <h2
          ref={textRef}
          className="text-3xl md:text-4xl font-bold text-green-900 mb-4 leading-tight"
        >
          {text}
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Passionate about building stunning, high-performance web experiences
          using <span className="font-semibold text-green-400">React</span>,{" "}
          <span className="font-semibold text-green-400">Node.js</span>,{" "}
          <span className="font-semibold text-green-400">Python</span>, and{" "}
          <span className="font-semibold text-green-400">MongoDB</span>.
        </p>
        <button onClick={sa} className="px-8 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">
          More about..
        </button>
      </div>

      
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          .animate-float-slow {
            animation: float-slow 5s ease-in-out infinite;
          }

          @keyframes glow {
            0%, 100% { opacity: 0.7; filter: drop-shadow(0 0 10px rgba(0,255,180,0.6)); }
            50% { opacity: 1; filter: drop-shadow(0 0 30px rgba(0,255,180,1)); }
          }

          .animate-glow {
            animation: glow 4s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default FloatingLogos;
