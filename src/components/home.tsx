import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectsGallery from "./ProjectsGallery";
import SkillsSection from "./SkillsSection";
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
            <span className="font-bold text-xl">DRIVEN BY DESIGN</span>
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
              href="#contact"
              className="hover:text-[#FF6720] transition-colors"
            >
              Contact
            </a>
          </div>
          <Button
            variant="outline"
            className="border-[#FF6720] text-[#FF6720] hover:bg-[#FF6720] hover:text-white"
          >
            <Mail className="mr-2 h-4 w-4" /> Get In Touch
          </Button>
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
            style={{ fontFamily: "'Urban Decay', sans-serif" }}
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
              <h3 className="text-2xl font-bold mb-4">Career Start</h3>
              <p className="text-[#A4C3CB]">
                Started my journey in web development with a passion for
                creating visually stunning and high-performance applications,
                just like the engineering precision of a Porsche 911.
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
              <h3 className="text-2xl font-bold mb-4">Awards</h3>
              <p className="text-[#A4C3CB]">
                Recognized for innovative approaches to UI/UX design and
                development, combining technical excellence with artistic
                expression - where engineering meets street art.
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
              <h3 className="text-2xl font-bold mb-4">Current Role</h3>
              <p className="text-[#A4C3CB]">
                Currently focused on creating high-performance web applications
                that combine cutting-edge technology with striking visual
                design, pushing the boundaries of what's possible.
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
                  {[2018, 2020, 2022, 2024].map((year, index) => (
                    <motion.div
                      key={year}
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
                            {year}
                          </h4>
                          <p className="text-[#A4C3CB]">{`Career milestone ${index + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
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
            className="text-5xl font-bold mb-12 text-[#FF6720]"
            style={{ fontFamily: "'Urban Decay', sans-serif" }}
          >
            PROJECTS
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
            className="text-5xl font-bold mb-12 text-[#FF6720]"
            style={{ fontFamily: "'Urban Decay', sans-serif" }}
          >
            TECHNICAL SKILLS
          </motion.h2>

          <SkillsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#121820] text-[#E0E0E0]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12 text-[#FF6720]"
            style={{ fontFamily: "'Urban Decay', sans-serif" }}
          >
            GET IN TOUCH
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border-2 border-[#2A3A4A] bg-[#1A2430] text-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6720] focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border-2 border-[#2A3A4A] bg-[#1A2430] text-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6720] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#2A3A4A] bg-[#1A2430] text-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6720] focus:border-transparent transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <Button className="w-full bg-[#FF6720] hover:bg-[#FF6720]/80 text-white py-4">
                  <motion.span
                    initial={{ opacity: 1 }}
                    whileHover={{
                      opacity: [1, 0.8, 1],
                      transition: { duration: 0.3, repeat: Infinity },
                    }}
                  >
                    START IGNITION
                  </motion.span>
                </Button>
              </form>
            </div>

            {/* 3D Porsche Configurator Placeholder */}
            <div className="bg-[#1A2430] rounded-lg overflow-hidden relative h-[500px] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-[#F0F0F0]">
                  <p className="text-xl font-bold mb-4">
                    3D Porsche Configurator
                  </p>
                  <p className="text-sm text-[#A4C3CB]">
                    Interactive 3D model will load here
                  </p>
                </div>
              </div>

              {/* Color Selection */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0A0F16]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-[#E0E0E0] text-sm mb-2">Select Color:</p>
                <div className="flex space-x-3">
                  {["#FF6720", "#1A2430", "#E0E0E0", "#A4C3CB", "#0057B7"].map(
                    (color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                        style={{ backgroundColor: color }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <a href="#" className="hover:text-[#FF6720] transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-[#FF6720] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-[#FF6720] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#FF6720] transition-colors">
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
