import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    let targetTime = 0;
    let rafId;

    const handleLoaded = () => {
      const duration = video.duration || 5;

      // ScrollTrigger to control progress (0-1)
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          targetTime = self.progress * duration;
        },
      });

      // Smoothly interpolate video time
      const smoothUpdate = () => {
        // Limit video.currentTime to video duration
        video.currentTime = Math.min(video.duration, targetTime);
        rafId = requestAnimationFrame(smoothUpdate);
      };

      smoothUpdate();
    };

    video.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src="/end.mp4"
        className="w-full h-full object-cover"
        muted
        preload="auto"
      />

    </section>
  );
}

export default ScrollVideo;
