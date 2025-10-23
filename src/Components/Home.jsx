import React, { useLayoutEffect, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingLogos from "./FloatingLogos";
import ScrollVideo from "./ScrollVideo";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://portfolio-chatbot-2qzc.onrender.com/"
        );
        console.log(res);
      } catch (err) {
        console.log("Failed to fetch data");
      }
    };
    fetchData();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
      },
    });

    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.8, ease: "power3.out" }
    ).fromTo(
      subtextRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
      "-=1"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="home.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1
            ref={textRef}
            className="text-5xl md:text-7xl font-bold mb-4 opacity-0"
          >
            Hi, I’m <span className="text-green-500">Sagar Singh Rajawat</span>
          </h1>

          <p
            ref={subtextRef}
            className="text-xl md:text-2xl text-gray-300 opacity-0 flex justify-center items-center"
          >
            Fullstack Developer |{" "}
            <span>
              <img className="h-[14vh] w-[14vw]" src="/mern.png" alt="" />
            </span>{" "}
            Specialist
          </p>
        </div>
      </div>
      <FloatingLogos/>
      <ScrollVideo/>
      <Footer/>
    </>
  );
}

export default Home;
