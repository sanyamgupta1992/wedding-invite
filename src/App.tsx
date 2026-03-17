import { useState } from "react";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative min-h-screen bg-bg text-text">
      {/* Preloader / Reveal Screen */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-bg transition-all duration-1000 ease-in-out ${isRevealed ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100"
          }`}
      >
        <div className="flex flex-col items-center gap-10">
          <div
            className="wax-seal"
            onClick={() => setIsRevealed(true)}
          >
            K&M
          </div>
          <p className="font-heading text-xl text-primary tracking-[0.2em] animate-pulse">
            Tap to Reveal
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 delay-500 ${isRevealed ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
        <Hero />
        <Schedule />
        <Gallery />
        <RSVP />
        <Footer />
      </div>
    </div>
  );
}

export default App;
