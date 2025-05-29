import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectsGallery from "./ProjectsGallery";
import SkillsSection from "./SkillsSection";
import PublicationsSection from "./PublicationsSection";
import ExtraCurricular from "./ExtraCurricular";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ChevronDown, Mail, Github, Linkedin, Instagram } from "lucide-react";

const Home = () => {
  // Konami code easter egg
  const [konamiActivated, setKonamiActivated] = React.useState(false);
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const [konamiIndex, setKonamiIndex] = React.useState(0);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        setKonamiIndex(nextIndex);

        if (nextIndex === konamiCode.length) {
          setKonamiActivated(true);
          setKonamiIndex(0);
          // Play launch control animation
          setTimeout(() => setKonamiActivated(false), 5000);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex]);

  return (
    <div className="min-h-screen bg-[#121820] text-[#E0E0E0]">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A0F16]/90 backdrop-blur-sm text-[#E0E0E0] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: 0 }}
              className="w-8 h-8"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Porsche_logo.svg/2048px-Porsche_logo.svg.png"
                  alt="Porsche Logo"
                  className="w-full h-full object-contain"
                />
              </svg>
            </motion.div>
            <span
              className="font-bold text-xl"
              style={{ fontFamily: "'Porsche Next', sans-serif" }}
            >
              DRIVEN BY DESIGN
            </span>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="hover:text-[#FF6720] transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-[#FF6720] transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-[#FF6720] transition-colors"
            >
              Skills
            </a>
            <a
              href="#publications"
              className="hover:text-[#FF6720] transition-colors"
            >
              Publications
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0A0F16] text-[#E0E0E0]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12 text-[#FF6720]"
            style={{ fontFamily: "'Porsche Next', sans-serif" }}
          >
            ABOUT ME
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1A2430] p-6 rounded-lg relative overflow-hidden shadow-lg"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#FF6720]/20 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-[#A4C3CB]">
                Birla Institute of Science and Technology, Pilani - Hyderabad
                Campus (2020-2024) B.E Computer Science - 8.19/10 CGPA
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#1A2430] p-6 rounded-lg relative overflow-hidden shadow-lg"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#FF6720]/20 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <p className="text-[#A4C3CB]">
                Cisco, Bangalore (Jan 2024 - June 2024): Technical Intern in
                Distributed Systems organization. Optimized test cases for
                healthcheck and file transfer in router OS.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1A2430] p-6 rounded-lg relative overflow-hidden shadow-lg"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#FF6720]/20 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-bold mb-4">Internship</h3>
              <p className="text-[#A4C3CB]">
                Shris Infotech, Hyderabad (Jun 2022 - Jul 2022): Software
                Intern. Developed a face recognition app using Python libraries
                (deepface, OpenCV, retina-face) and Flutter.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                My Journey
              </h3>
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2A3A4A]"></div>

                {/* Timeline Items */}
                <div className="relative z-10">
                  {[
                    {
                      year: 2020,
                      event:
                        "Started B.E Computer Science at BITS Pilani, Hyderabad Campus",
                    },
                    {
                      year: 2022,
                      event:
                        "Software Internship at Shris Infotech, developed face recognition app",
                    },
                    {
                      year: 2023,
                      event:
                        "Published research on Neural Radiance Fields and Remote Drone Surveillance",
                    },
                    {
                      year: 2024,
                      event:
                        "Technical Internship at Cisco, Distributed Systems organization",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                      >
                        <div className="bg-[#1A2430] p-4 rounded-lg shadow-md">
                          <h4 className="text-xl font-bold text-[#FF6720]">
                            {item.year}
                          </h4>
                          <p className="text-[#A4C3CB]">{item.event}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#FF6720] border-4 border-[#133C8C]"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#121820]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12 text-[#FF6720] text-center"
            style={{ fontFamily: "'Porsche Next', sans-serif" }}
          >
            PROJECT GARAGE
          </motion.h2>

          <div className="mb-8 flex justify-center space-x-4">
            {["All", "Carrera", "Targa", "Turbo"].map((filter) => (
              <Button
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                className={
                  filter === "All"
                    ? "bg-[#FF6720]"
                    : "border-[#133C8C] hover:bg-[#133C8C] hover:text-[#F0F0F0]"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          <ProjectsGallery />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0A0F16] text-[#E0E0E0]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12 text-[#FF6720] text-center"
            style={{ fontFamily: "'Porsche Next', sans-serif" }}
          >
            TECHNICAL SPECS
          </motion.h2>
          <SkillsSection />
        </div>
      </section>

      {/* Publications Section */}
      <PublicationsSection />

      {/* Extra Curricular Section */}
      <ExtraCurricular />

      {/* Footer */}
      <footer className="bg-[#0A0F16] text-[#E0E0E0] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Porsche_logo.svg/2048px-Porsche_logo.svg.png"
                      alt="Porsche Logo"
                      className="w-full h-full object-contain"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl">DRIVEN BY DESIGN</span>
              </div>
              <p className="text-sm text-[#A4C3CB] mt-2">
                Where engineering precision meets street art
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6720] transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-jagan-polimera-411b431b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6720] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6720] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:abhinavpolimera@gmail.com"
                className="hover:text-[#FF6720] transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <Separator className="my-8 bg-[#2A3A4A]" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#A4C3CB]">
              &copy; {new Date().getFullYear()} DRIVEN BY DESIGN. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-[#A4C3CB] hover:text-[#FF6720] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-[#A4C3CB] hover:text-[#FF6720] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Konami Code Easter Egg */}
      {konamiActivated && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-[#FF6720] mb-4">
              LAUNCH CONTROL ACTIVATED
            </h2>
            <div className="w-32 h-32 mx-auto mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.path
                  d="M50 0 L100 50 L50 100 L0 50 Z"
                  fill="#FF6720"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              </svg>
            </div>
            <motion.p
              className="text-white text-xl"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              HOLD ON TIGHT
            </motion.p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
