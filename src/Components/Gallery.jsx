import React, { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "Live Saxophone Performance",
    category: "Live Performance",
    image: "/private3.PNG",
    size: "md:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Live Musical Experience",
    category: "Live Performance",
    image: "/IMG_4789.jpg",
    video: "/WhatsApp Video 2026-11-19 at 11.29.16.mp4",
    size: "",
  },
  {
    id: 3,
    type: "video",
    title: "Unforgettable Moments",
    category: "Events",
    image: "/IMG_8173.png",
    video: "/WhatsApp Video 2026-11-19 at 11.26.14.mp4",
    size: "",
  },

  {
    id: 4,
    type: "image",
    title: "Musical Excellence",
    category: "Behind The Scenes",
    image: "/IMG_7658.jpg",
    size: "md:row-span-2",
  },
  {
    id: 5,
    type: "video",
    title: "Talking Drum Performance",
    category: "Live Performance",
    image: "/IMG_8180.png",
    video: "/WhatsApp Video 2026-11-19 at 11.22.59.mp4",
    size: "",
  },
  {
    id: 6,
    type: "video",
    title: "Wedding Celebration",
    category: "Events",
    image: "/IMG_8371.jpg",
    video: "/WhatsApp Video 2026-11-19 at 11.24.06.mp4",
    size: "",
  },
];

const Gallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <section
      id="Gallery"
      className="bg-[#111111] text-white py-24 px-5 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-14">
        <p className="text-amber-400 uppercase tracking-[4px] text-sm mb-4">
          Our Gallery
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Moments Through <span className="text-amber-400">Music.</span>
        </h2>

        <p className="text-stone-400 max-w-xl leading-7">
          A glimpse into the performances, celebrations and unforgettable
          musical experiences that make every moment special.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-[250px]">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden rounded-xl bg-[#202020] ${item.size}`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

            {/* Video Play Button */}
            {item.type === "video" && (
              <button
                type="button"
                onClick={() => setActiveVideo(item.video)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                aria-label={`Play ${item.title}`}
              >
                <span className="w-16 h-16 rounded-full bg-amber-400 text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-300 transition duration-300 shadow-xl">
                  <Play fill="currentColor" size={25} />
                </span>
              </button>
            )}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 p-6 pointer-events-none">
              <p className="text-amber-400 text-xs uppercase tracking-widest mb-2">
                {item.category}
              </p>

              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-5"
          onClick={() => setActiveVideo(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition z-10"
            aria-label="Close video"
          >
            <X size={32} />
          </button>

          {/* Video Container */}
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              key={activeVideo}
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full h-full rounded-xl object-contain bg-black"
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
