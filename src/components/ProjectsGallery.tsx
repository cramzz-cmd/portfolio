import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import ProjectTile from "./ProjectTile";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "Carrera" | "Targa" | "Turbo";
  image: string;
  link: string;
}

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Racing Dashboard UI",
      description:
        "High-performance analytics dashboard with real-time data visualization",
      category: "Carrera",
      image:
        "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&q=80",
      link: "#",
    },
    {
      id: "2",
      title: "Automotive E-commerce",
      description: "Luxury car parts online store with 3D product previews",
      category: "Targa",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b173b8c5a5?w=800&q=80",
      link: "#",
    },
    {
      id: "3",
      title: "Engine Diagnostics App",
      description: "Complex system for real-time engine performance monitoring",
      category: "Turbo",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      link: "#",
    },
  ]);

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter),
      );
    }
  }, [activeFilter, projects]);

  const filterCategories = [
    { id: "all", name: "All Projects", description: "View all work" },
    { id: "Carrera", name: "Carrera", description: "High-Speed Projects" },
    { id: "Targa", name: "Targa", description: "UI/UX Designs" },
    { id: "Turbo", name: "Turbo", description: "Complex Systems" },
  ];

  return (
    <section className="w-full py-20 bg-[#121820]" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2
            className="text-5xl font-bold mb-4 text-[#E0E0E0]"
            style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "1px" }}
          >
            PROJECT GARAGE
          </h2>
          <p className="text-xl text-[#A4C3CB] max-w-2xl mx-auto">
            A collection of my finest engineering work, from high-performance
            applications to precision-crafted interfaces.
          </p>
        </motion.div>

        <div className="mb-10">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-[#1A2430] p-1 rounded-xl shadow-md">
                {filterCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className="px-6 py-2 data-[state=active]:bg-[#FF6720] data-[state=active]:text-white transition-all duration-300"
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-70 hidden md:inline">
                      {category.description}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="relative">
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectTile
                      title={project.title}
                      description={project.description}
                      category={project.category}
                      image={project.image}
                      link={project.link}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Tabs>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-[#FF6720] text-[#FF6720] hover:bg-[#FF6720] hover:text-white transition-all group"
          >
            View Archive
            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
