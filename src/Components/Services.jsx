import React from "react";

const Services = () => {
  const services = [
    {
      title: "Birthday Party",
      description:
        "Create unforgettable moments with soulful saxophone performances for birthdays, weddings, private celebrations, corporate events and special occasions.",
      image: "/birthday4.JPG",
    },
    {
      title: "Talking Drum",
      description:
        "Celebrate the beauty of African culture with captivating talking drum performances for traditional ceremonies, cultural celebrations and special events.",
      image: "/private2.PNG",
    },
    {
      title: "Live Music  Performances",
      description:
        "Bring energy and rhythm to your celebrations with engaging bongo drum performances for parties, live events and memorable occasions.",
      image: "/IMG_8173.png",
    },
    {
      title: "Weddding Event",
      description:
        "Experience a unique musical atmosphere with a blend of saxophone, talking drum and bongo drums for an unforgettable live performance.",
      image: "/2.jpeg",
    },
  ];

  return (
    <section
      id="Services"
      className="bg-[#151515] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">
            WHAT I DO
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold">
            Experiences Through <span className="text-amber-400">Music</span>
          </h2>

          <p className="text-stone-400 max-w-2xl mx-auto mt-5 leading-7">
            Creating unforgettable musical experiences through the beautiful
            sounds of saxophone, talking drum and bongo drums.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-xl bg-[#202020]"
            >
              {/* Service Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Service Details */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-amber-300 mb-3">
                  {service.title}
                </h3>

                <p className="text-stone-400 text-sm leading-7 mb-6">
                  {service.description}
                </p>

                <a
                  href="#Contact"
                  className="inline-block text-amber-400 text-sm hover:text-amber-200 transition-colors duration-300"
                >
                  Book This Service →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
