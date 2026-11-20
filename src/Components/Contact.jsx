import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CalendarDays,
  LoaderCircle,
  Camera,
  Users,
  Play,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a1dc2aee-2903-4402-8811-1a15b780cd8b",
          subject: "New Booking Enquiry - Ayoemmanuel",
          from_name: "Ayoemmanuel Website",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Your enquiry has been sent successfully. Thank you!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          location: "",
          message: "",
        });
      } else {
        setStatus("Unable to send your enquiry. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      detail: "ayodejie29@gmail.com",
      link: "mailto:ayodejie29@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      detail: "+44781885852667",
      link: "tel:+44781885852667",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "40 Foxcombe New Addington ",
      Postcode: "CRO 9EY",
      link: null,
    },
  ];

  const inputStyle =
    "w-full bg-[#171717] border border-[#333333] rounded-lg px-4 py-3.5 text-stone-200 placeholder:text-stone-600 outline-none focus:border-amber-400 transition-colors duration-300";

  return (
    <section
      id="Contact"
      className="w-full bg-black px-5 py-20 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-stone-100 mb-5">
            Let's Connect
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-7">
            Have an event coming up? Get in touch and let's create something
            memorable together.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* LEFT SECTION */}
          <div className="lg:col-span-2 flex flex-col">
            <div>
              <p className="text-amber-400 text-sm tracking-widest mb-3">
                CONTACT INFORMATION
              </p>

              <h3 className="text-2xl sm:text-2xl text-stone-100 font-semibold mb-4">
                Let's Start a Conversation.
              </h3>

              <p className="text-stone-400 text-sm leading-7 mb-10">
                Whether you're planning a wedding, corporate event, private
                celebration or concert, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-7">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-2">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-[#1c1c1c] flex items-center justify-center">
                      <Icon size={21} className="text-amber-400" />
                    </div>

                    <div>
                      <h4 className="text-stone-100 text-sm font-medium mb-1">
                        {item.title}
                      </h4>

                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-stone-400 text-sm hover:text-amber-400 transition-colors"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-stone-400 text-sm">{item.detail}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-stone-100 text-sm mb-5">Connect With Me</h4>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/iamayoemmanuel?srtk=MWtiZzAwcXd0OGZobw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-[#1c1c1c] flex items-center justify-center text-stone-300 hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                  <FaInstagram size={19} />
                </a>
                <a
                  href="https://www.facebook.com/share/19oF8sDqmR/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-[#1c1c1c] flex items-center justify-center text-stone-300 hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                  <FaFacebookF size={19} />
                </a>

                <a
                  href="https://youtube.com/@iamayoemmanuel?feature=shared"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full bg-[#1c1c1c] flex items-center justify-center text-stone-300 hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                  <FaYoutube size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - BOOKING FORM */}
          <div className="lg:col-span-3 bg-[#1c1c1c] border border-[#292929] rounded-2xl p-5 sm:p-8 lg:p-10">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <CalendarDays size={21} className="text-amber-400" />
                <p className="text-amber-400 text-sm tracking-widest">
                  BOOKING ENQUIRY
                </p>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-stone-100 mb-3">
                Book A Performance
              </h3>

              <p className="text-stone-400 text-sm leading-6">
                Share a few details about your event and I'll get back to you as
                soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-stone-300 text-sm mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-stone-300 text-sm mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-stone-300 text-sm mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-stone-300 text-sm mb-2"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`${inputStyle} ${formData.eventType ? "text-stone-200" : "text-stone-600"}`}
                    required
                  >
                    <option value="" disabled>
                      Select event type
                    </option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Concert or Festival">
                      Concert or Festival
                    </option>
                    <option value="Nightclub or Restaurant">
                      Nightclub or Restaurant
                    </option>
                    <option value="Brand Activation">Brand Activation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-stone-300 text-sm mb-2"
                  >
                    Event Date *
                  </label>
                  <input
                    id="eventDate"
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`${inputStyle} [color-scheme:dark]`}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-stone-300 text-sm mb-2"
                  >
                    Event Location *
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    placeholder="City or venue"
                    value={formData.location}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-stone-300 text-sm mb-2"
                >
                  Tell Me About Your Event *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Share details about your event, expectations and any other information..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputStyle} resize-none`}
                  required
                />
              </div>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${status.startsWith("Your enquiry") ? "text-green-400" : "text-red-400"}`}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-amber-400 text-black font-semibold py-4 rounded-lg hover:bg-amber-300 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <LoaderCircle size={19} className="animate-spin" />
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Booking Enquiry
                  </>
                )}
              </button>

              <p className="text-stone-500 text-xs text-center">
                Your information will only be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
