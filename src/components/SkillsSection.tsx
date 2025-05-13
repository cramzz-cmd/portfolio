import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChevronRight,
  Code,
  Cpu,
  Database,
  Gauge,
  Globe,
  Layers,
  Palette,
} from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  description: string;
}

const SkillsSection = () => {
  const [activeGear, setActiveGear] = useState<number | null>(null);
  const [animateNeedles, setAnimateNeedles] = useState(false);

  // Default skills data
  const skills: Skill[] = [
    // Frontend
    {
      name: "React",
      level: 90,
      category: "frontend",
      description: "Advanced component architecture and state management",
    },
    {
      name: "TypeScript",
      level: 85,
      category: "frontend",
      description: "Type-safe development with advanced patterns",
    },
    {
      name: "CSS/SCSS",
      level: 80,
      category: "frontend",
      description: "Responsive layouts and animations",
    },
    {
      name: "Three.js",
      level: 75,
      category: "frontend",
      description: "3D rendering and interactive experiences",
    },

    // Backend
    {
      name: "Node.js",
      level: 85,
      category: "backend",
      description: "RESTful APIs and server architecture",
    },
    {
      name: "GraphQL",
      level: 70,
      category: "backend",
      description: "Schema design and resolvers",
    },
    {
      name: "PostgreSQL",
      level: 75,
      category: "backend",
      description: "Database design and optimization",
    },
    {
      name: "AWS",
      level: 65,
      category: "backend",
      description: "Cloud infrastructure and deployment",
    },

    // Design
    {
      name: "Figma",
      level: 80,
      category: "design",
      description: "UI/UX prototyping and design systems",
    },
    {
      name: "Motion Design",
      level: 70,
      category: "design",
      description: "Animation principles and implementation",
    },
    {
      name: "Design Systems",
      level: 85,
      category: "design",
      description: "Component libraries and style guides",
    },

    // Performance
    {
      name: "Optimization",
      level: 80,
      category: "performance",
      description: "Frontend performance and bundle optimization",
    },
    {
      name: "Testing",
      level: 75,
      category: "performance",
      description: "Unit, integration, and E2E testing",
    },
    {
      name: "CI/CD",
      level: 70,
      category: "performance",
      description: "Automated workflows and deployments",
    },
  ];

  // Gear categories mapping
  const gearCategories = [
    {
      gear: 1,
      category: "frontend",
      icon: <Globe className="h-5 w-5" />,
      label: "Frontend",
    },
    {
      gear: 2,
      category: "backend",
      icon: <Database className="h-5 w-5" />,
      label: "Backend",
    },
    {
      gear: 3,
      category: "design",
      icon: <Palette className="h-5 w-5" />,
      label: "Design",
    },
    {
      gear: 4,
      category: "performance",
      icon: <Gauge className="h-5 w-5" />,
      label: "Performance",
    },
    {
      gear: 5,
      category: "all",
      icon: <Layers className="h-5 w-5" />,
      label: "All Skills",
    },
  ];

  // Scroll animation for tachometer needles
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimateNeedles(true);
        } else {
          setAnimateNeedles(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter skills based on active gear
  const filteredSkills =
    activeGear !== null && activeGear !== 5
      ? skills.filter(
          (skill) => skill.category === gearCategories[activeGear - 1].category,
        )
      : skills;

  return (
    <section
      id="skills-section"
      className="relative py-20 bg-[#121820] overflow-hidden"
    >
      {/* Blueprint background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1588412079929-791b9f958fab?w=1200&q=80')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center text-[#E0E0E0] font-['Poppins', sans-serif]">
          <span className="relative inline-block">
            Technical Specs
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-[#FF6720] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </span>
        </h2>

        {/* Gearbox Selector */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center text-[#E0E0E0]">
            Shift Gears to Explore Skills
          </h3>
          <div className="flex justify-center items-center gap-4 md:gap-8 bg-[#1A2430] p-6 rounded-xl shadow-md">
            {gearCategories.map((item) => (
              <TooltipProvider key={item.gear}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      className={`relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-4 ${activeGear === item.gear ? "border-[#FF6720] bg-[#0A0F16] text-white" : "border-[#A4C3CB] bg-[#1A2430] text-[#A4C3CB]"}`}
                      onClick={() => setActiveGear(item.gear)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <span className="absolute top-1 left-1/2 -translate-x-1/2 text-xs font-bold">
                        {item.gear}
                      </span>
                      {item.icon}
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* Tachometer Skills Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="overflow-hidden bg-[#1A2430]/90 backdrop-blur-sm border-2 border-[#2A3A4A] shadow-lg">
                <CardContent className="p-6">
                  <div className="relative h-48 flex flex-col items-center justify-center">
                    {/* Tachometer Background */}
                    <div className="absolute w-40 h-40 rounded-full border-4 border-[#2A3A4A] flex items-center justify-center shadow-inner">
                      <div className="absolute w-full h-full">
                        {/* Tachometer Markings */}
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-4 bg-[#A4C3CB] origin-bottom"
                            style={{
                              transform: `rotate(${i * 18 - 90}deg) translateY(-18px)`,
                              left: "50%",
                              bottom: "50%",
                            }}
                          />
                        ))}
                      </div>

                      {/* Needle */}
                      <motion.div
                        className="absolute w-2 h-20 bg-[#FF6720] rounded-t-full origin-bottom"
                        initial={{ rotate: -90 }}
                        animate={{
                          rotate: animateNeedles
                            ? (skill.level / 100) * 180 - 90
                            : -90,
                        }}
                        transition={{
                          duration: 2.2,
                          delay: index * 0.3,
                          type: "spring",
                          stiffness: 60,
                          damping: 15,
                        }}
                      />

                      {/* Center Cap */}
                      <div className="absolute w-6 h-6 rounded-full bg-[#0A0F16] border-2 border-[#A4C3CB] z-10" />

                      {/* Skill Level Text */}
                      <div className="absolute bottom-4 text-lg font-bold font-mono text-[#E0E0E0]">
                        {skill.level}%
                      </div>
                    </div>

                    {/* Piston with Skill Name */}
                    <motion.div
                      className="absolute top-0 flex flex-col items-center"
                      initial={{ y: 30 }}
                      animate={{ y: animateNeedles ? [30, 0, 5, 0] : 30 }}
                      transition={{
                        duration: 1.8,
                        delay: index * 0.3 + 0.5,
                        times: [0, 0.6, 0.8, 1],
                        repeat: animateNeedles ? Infinity : 0,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-20 h-8 bg-[#1A2430] rounded-md flex items-center justify-center border-2 border-[#2A3A4A] shadow-md">
                        <span className="font-bold text-sm font-sans text-[#E0E0E0]">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-4 h-10 bg-[#2A3A4A]" />
                    </motion.div>
                  </div>

                  {/* Skill Description */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-[#A4C3CB] font-light">
                      {skill.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Engine Blueprint Background Element */}
        <div className="mt-20 flex justify-center">
          <motion.div
            className="relative w-full max-w-2xl h-40 opacity-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
              alt="Engine Blueprint"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
