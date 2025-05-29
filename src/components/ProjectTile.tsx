import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectTileProps {
  title?: string;
  description?: string;
  category?: "Carrera" | "Targa" | "Turbo";
  image?: string;
  link?: string;
  technologies?: string[];
}

const ProjectTile = ({
  title = "Project Title",
  description = "A brief description of this amazing project showcasing innovative design and technical skills.",
  category = "Carrera",
  image = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  link = "#",
  technologies = ["React", "Three.js", "GSAP"],
}: ProjectTileProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  // Create audio element for engine sound
  useEffect(() => {
    audioRef.current = new Audio("/engine-rev.mp3");
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (hoverTimerRef.current) {
        window.clearInterval(hoverTimerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Play engine sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((e) => console.log("Audio play failed:", e));

      // Increase pitch over time
      let pitch = 1.0;
      hoverTimerRef.current = window.setInterval(() => {
        pitch += 0.05;
        if (pitch > 2.0) pitch = 2.0;
        if (audioRef.current) {
          audioRef.current.playbackRate = pitch;
        }
      }, 300);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    // Stop increasing pitch
    if (hoverTimerRef.current) {
      window.clearInterval(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }

    // Fade out audio
    if (audioRef.current) {
      const fadeOut = setInterval(() => {
        if (audioRef.current && audioRef.current.volume > 0.1) {
          audioRef.current.volume -= 0.1;
        } else {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.volume = 0.3;
          }
          clearInterval(fadeOut);
        }
      }, 50);
    }
  };

  // Category badge color mapping
  const categoryColors = {
    Carrera: "default",
    Targa: "secondary",
    Turbo: "destructive",
  };

  const categoryDescriptions = {
    Carrera: "Web Development",
    Targa: "Backend Systems",
    Turbo: "Research & ML",
  };

  return (
    <motion.div
      className="relative w-full h-full bg-background"
      initial={{ scale: 1 }}
      animate={{
        y: isHovered ? -15 : 0,
        scale: isHovered ? 1.03 : 1,
        rotateX: isHovered ? 5 : 0,
        rotateY: isHovered ? -5 : 0,
        z: isHovered ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <Card className="w-full h-full overflow-hidden border-0 shadow-lg">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-40" : "opacity-0"}`}
            style={{
              background: "linear-gradient(45deg, #FF6720, transparent)",
              mixBlendMode: "overlay",
            }}
          />
        </div>

        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant={categoryColors[category] as any}
              className="text-xs font-medium"
            >
              {category} - {categoryDescriptions[category]}
            </Badge>
          </div>

          <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>

          <p className="mb-4 text-sm text-muted-foreground">{description}</p>

          <div className="flex flex-wrap gap-1 mt-auto">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Elegant border that appears on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 border-2 border-[#FF6720] rounded-lg">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(45deg, rgba(255,103,32,0.2), transparent)",
              mixBlendMode: "overlay",
              opacity: 0.6,
            }}
          />
        </div>
      </motion.div>

      {/* View project overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity"
        style={{ opacity: isHovered ? 0.7 : 0 }}
      >
        <a
          href={link}
          className="px-4 py-2 text-sm font-medium text-white transition-transform bg-primary rounded-md hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          View Project
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectTile;
