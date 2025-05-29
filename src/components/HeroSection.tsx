import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  View as ViewIcon,
} from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const HeroSection = ({
  name = "ABHINAV POLIMERA",
  tagline = "COMPUTER SCIENCE ENGINEER",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/abhinav-jagan-polimera-411b431b1/",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
}: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const modelContainerRef = useRef<HTMLDivElement>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // Handle mouse movement for 3D model tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!modelContainerRef.current) return;

      const rect = modelContainerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      setMousePosition({ x, y });
    };

    const container = modelContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    // Simulate model loading
    const timer = setTimeout(() => {
      setIsModelLoaded(true);
    }, 1000);

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      clearTimeout(timer);
    };
  }, []);

  // Play engine rev sound on social icon hover
  const playEngineSound = () => {
    // This would be implemented with actual audio in a production environment
    console.log("Engine rev sound played");
  };

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row bg-[#121820]">
      {/* 3D Model Container (60%) */}
      <div
        ref={modelContainerRef}
        className="relative w-full md:w-3/5 h-1/2 md:h-full bg-[#0A0F16] flex items-center justify-center overflow-hidden"
      >
        {/* 3D Model Placeholder */}
        <div className="w-4/5 h-4/5 relative">
          {!isModelLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-t-[#FF6720] border-r-[#A4C3CB] border-b-[#0A0F16] border-l-[#E0E0E0] rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
                alt="Porsche 911 Gulf Livery"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content Container (40%) */}
      <div className="w-full md:w-2/5 h-1/2 md:h-full bg-[#121820] flex flex-col justify-center items-center p-8 text-center">
        {/* Animated Graffiti Name */}
        <motion.div
          className="mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#E0E0E0] tracking-tighter">
            {name}
          </h1>
          <div className="graffiti-drips absolute -bottom-6 left-0 right-0 h-6 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-[#FF6720] w-2 rounded-b-full"
                style={{
                  left: `${10 + i * 12}%`,
                  height: `${Math.random() * 100 + 20}%`,
                }}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5 + i * 0.2,
                  delay: 0.8 + i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Animated Tagline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl text-[#A4C3CB] font-medium tracking-wider">
            {tagline}
          </h2>
        </motion.div>

        {/* Social Links as Racing Flags */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {socialLinks.github && (
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="racing-flag-icon"
              onHoverStart={playEngineSound}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <div className="w-12 h-12 bg-[#1A2430] rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F16] to-[#FF6720] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <GithubIcon className="w-6 h-6 text-[#E0E0E0] z-10" />
              </div>
            </motion.a>
          )}

          {socialLinks.linkedin && (
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="racing-flag-icon"
              onHoverStart={playEngineSound}
              whileHover={{ scale: 1.2, rotate: -15 }}
            >
              <div className="w-12 h-12 bg-[#1A2430] rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F16] to-[#FF6720] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <LinkedinIcon className="w-6 h-6 text-[#E0E0E0] z-10" />
              </div>
            </motion.a>
          )}

          {socialLinks.twitter && (
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="racing-flag-icon"
              onHoverStart={playEngineSound}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <div className="w-12 h-12 bg-[#1A2430] rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F16] to-[#FF6720] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <TwitterIcon className="w-6 h-6 text-[#E0E0E0] z-10" />
              </div>
            </motion.a>
          )}

          {socialLinks.instagram && (
            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="racing-flag-icon"
              onHoverStart={playEngineSound}
              whileHover={{ scale: 1.2, rotate: -15 }}
            >
              <div className="w-12 h-12 bg-[#1A2430] rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F16] to-[#FF6720] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <InstagramIcon className="w-6 h-6 text-[#E0E0E0] z-10" />
              </div>
            </motion.a>
          )}
        </motion.div>

        {/* Interactive Cursor Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [0, 5, 0, -5, 0] }}
          transition={{ delay: 1.2, duration: 3, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-12 h-12 border-2 border-[#FF6720] rounded-full flex items-center justify-center cursor-pointer">
            <div className="w-8 h-8 bg-[#FF6720]/20 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-[#FF6720] rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-[#A4C3CB] mt-2 text-center font-light">
            EXPLORE
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
