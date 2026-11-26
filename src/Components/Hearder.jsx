import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";

const Header = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.5,
        },
      });

      tl.from(".hero-title", {
        y: 60,
        opacity: 0,
      })
        .from(
          ".hero-talents",
          {
            y: 40,
            opacity: 0,
            duration: 1.3,
          },
          "-=0.8",
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 1.3,
          },
          "-=0.8",
        )
        .from(
          ".hero-buttons",
          {
            y: 25,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.7",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="hero relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden">
      <Navbar />

      <div
        ref={heroRef}
        className="
    w-full
    max-w-[90%]
    mx-auto
    mt-100
    px-3
    sm:max-w-[85%]
    md:max-w-3xl
    md:mt-12
    md:ml-12
    lg:max-w-3xl
    lg:mt-[180px]
    text-left
  "
      >
        <h2
          className="
  hero-title text-stone-200
  text-3xl sm:text-3xl
  md:text-5xl lg:text-3xl
  font-bold leading-tight
"
        >
          Where music meets energetic performance, Good vibe, audience
          interaction Emotions and unforgettable memories.
        </h2>

        <p
          className="hero-description max-w-2xl
          text-stone-200 text-sm sm:text-base
          md:text-lg leading-relaxed mt-5"
        >
          Creating unforgettable experiences through soulful saxophone
          performances, electrifying DJ sets and captivating drum rhythms.
          Bringing every celebration to life with the power of music.
        </p>

        <div className="hero-buttons flex  gap-4 mt-8">
          <a
            href="#About"
            className="bg-amber-400 w-48 text-stone-950
            px-6 py-3 rounded-md font-semibold
            hover:bg-amber-300 hover:-translate-y-1
            transition-all duration-300"
          >
            Explore My World
          </a>

          <a
            href="https://youtube.com/@iamayoemmanuel?feature=shared"
            className="border w-48 border-amber-400
            text-stone-100 px-6 py-3 rounded-md
            font-semibold hover:bg-amber-400
            hover:text-stone-950
            transition-all duration-300"
          >
            Listen To Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
