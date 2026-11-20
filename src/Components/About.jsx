import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { CalendarDays, CalendarCheck, Users, Music2 } from "lucide-react";

import { ProfileData } from "../data/ProfileData";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const aboutRef = useRef(null);

  const icons = [CalendarDays, CalendarCheck, Users, Music2];

  // GSAP ScrollTrigger Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(".artist-image", {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          ".about-heading",
          {
            y: -40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .from(
          ".first-text",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
    },
    { scope: aboutRef },
  );

  return (
    <section
      id="About"
      ref={aboutRef}
      className="w-full min-h-screen bg-black px-5 py-16 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-stone-100 text-sm text-center tracking-[0.3em] mb-12">
          GET TO KNOW THE ARTIST
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">
          {/* Artist Image */}
          <div className="artist-image w-full md:w-5/12">
            <img
              src="/ayoemmanuel-pink-suit.jpg"
              alt="Ayoemmanuel"
              loading="lazy"
              className="w-full max-w-md mx-auto h-[450px] md:h-[550px] object-cover object-top rounded-2xl"
            />
          </div>

          {/* Artist Biography */}
          <div className="w-full md:w-7/12">
            <h2 className="about-heading text-heading text-3xl lg:text-4xl font-semibold text-stone-100 mb-6">
              More Than Music.
            </h2>

            {/* First Biography */}
            <p className="first-text text-stone-300 text-sm md:text-base leading-7 mb-5">
              Hi All, my name is Ayo Emmanuel. With my 12 years of professional
              experience in music under my belt, I have established myself as a
              dynamic and versatile saxophone and percussion performer,
              comfortable across genres — Afrobeat, Amapiano, Jazz, R&B, Reggae,
              Funk, Soul, Pop, Classical, Electronic and beyond. From pulsating
              club nights to elegant weddings, high-energy birthday parties to
              captivating concert stages, I have graced venues around the UK and
              international stages, seamlessly adapting my repertoire to suit
              each audience.
            </p>

            {showMore && (
              <>
                {/* Second Biography - Original */}
                <p className="second-text text-stone-300 text-sm md:text-base leading-7 mt-5">
                  My devotion to music began at age 10, when I first fell under
                  the spell of the saxophone’s voice. From learning scales late
                  into the night to forming my first school band, it was clear
                  that music wasn’t just a hobby—it was a calling. Music, for
                  me, has always been more than notes—it’s a dialogue. Every
                  performance is personalized: I listen to the room, read the
                  energy, and deliver emotional honesty through tone, phrasing,
                  and improvisation. Whether closing a dance-floor anthem or
                  stirring tears at a wedding, my ultimate goal is to move
                  people, make them dance and have a memorable day.
                </p>

                {/* Profile Cards */}
                <div className="grid grid-cols-2 gap-4 md:gap-5 mt-10">
                  {ProfileData.map((profile, index) => {
                    const Icon = icons[index] || Music2;

                    return (
                      <div
                        key={profile.text}
                        className="bg-[#1c1c1c] rounded-xl p-4 text-center transition-all duration-300 hover:bg-[#252525] hover:-translate-y-1"
                      >
                        <div className="flex justify-center mb-3">
                          <Icon size={26} className="text-amber-400" />
                        </div>

                        <h3 className="text-2xl font-bold text-amber-400">
                          {profile.years}
                        </h3>

                        <p className="text-stone-300 text-xs mt-2">
                          {profile.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* Discover Button */}
            <button
              type="button"
              onClick={() => setShowMore((prev) => !prev)}
              aria-expanded={showMore}
              className="mt-6 px-6 py-3 w-full sm:w-auto outline-none bg-amber-400 cursor-pointer text-black rounded-md hover:bg-amber-300 transition-colors duration-300"
            >
              {showMore ? "Show Less" : "Discover My Journey"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
