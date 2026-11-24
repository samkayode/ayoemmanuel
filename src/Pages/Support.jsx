import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Heart, Music2 } from "lucide-react";

const Support = () => {
  // Replace with Ayoemmanuel's actual PayPal donation link.
  const paypalLink = "PASTE_PAYPAL_DONATION_LINK_HERE";

  return (
    <section className="min-h-screen bg-[#08090B] text-white flex flex-col px-5 py-8">
      {/* Header */}
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-amber-400 font-bold tracking-[0.2em] text-lg"
        >
          AYOEMMANUEL
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors duration-300 text-sm"
        >
          <ArrowLeft size={16} />
          Back Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="w-full max-w-md mx-auto text-center">
          {/* Artist Profile */}
          <div className="w-38 h-38 mx-auto rounded-full p-1 border border-amber-400/70">
            <img
              src="/ayoD.jpeg"
              alt="Ayoemmanuel"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>

          {/* Artist Name */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-5">
            Ayoemmanuel
          </h1>

          <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mt-3">
            Musician · Performer · Entertainer
          </p>

          {/* Introduction */}
          <div className="mt-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Music2 size={17} className="text-amber-400" />

              <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">
                Support The Music
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Keep The Music Alive.
            </h2>

            <p className="text-stone-400 text-sm leading-relaxed mt-4 max-w-sm mx-auto">
              Your support means a lot and helps keep the music, creativity and
              passion going.
            </p>
          </div>

          {/* Donation Card */}
          <div className="mt-10 bg-[#121315] border border-white/10 hover:border-amber-400/50 rounded-2xl p-6 transition-colors duration-300">
            <div className="flex items-center justify-center mb-5">
              <div className="w-14 h-14 rounded-full bg-amber-400/10 flex items-center justify-center">
                <Heart size={25} className="text-amber-400" />
              </div>
            </div>

            <h3 className="text-white font-semibold text-lg">
              Support Ayoemmanuel
            </h3>

            <p className="text-stone-500 text-sm mt-2 mb-6">
              Every contribution makes a difference.
            </p>

            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold py-4 px-5 rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              Donate via PayPal
              <ArrowUpRight size={20} />
            </a>
          </div>

          {/* Appreciation */}
          <div className="mt-9 flex items-center justify-center gap-2 text-stone-500 text-sm">
            Thank you for being part of the journey.
            <Heart size={14} className="text-amber-400" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center border-t border-white/5 pt-6 mt-5">
        <p className="text-xs text-stone-600 tracking-wide">
          © {new Date().getFullYear()} Ayoemmanuel. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Support;
