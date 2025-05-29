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
      title: "Playlistify",
      description:
        "Web application that converts Spotify's liked songs into personalized playlists",
      category: "Carrera",
      image:
        "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&q=80",
      link: "#",
    },
    {
      id: "2",
      title: "Event Scheduler",
      description:
        "Backend system with multi-user login for seamless appointment scheduling",
      category: "Targa",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b173b8c5a5?w=800&q=80",
      link: "#",
    },
    {
      id: "3",
      title: "Remote Drone Surveillance",
      description:
        "ML system preventing security threats using drones and computer vision",
      category: "Turbo",
      image:
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80",
      link: "https://www.researchgate.net/publication/377547504_Detection_of_Suspicious_Activities_at_Remote_Locations_by_using_UAVs_and_Computer_Vision",
    },
    {
      id: "4",
      title: "Neural Radiance Fields",
      description:
        "Performance assessment of NeRF and Photogrammetry for 3D reconstruction",
      category: "Turbo",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      link: "https://www.researchgate.net/publication/378826735_Performance_Assessment_of_Neural_Radiance_Fields_NeRF_and_Photogrammetry_for_3D_Reconstruction_of_Man-Made_and_Natural_Features",
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
    { id: "Carrera", name: "Carrera", description: "Web Development" },
    { id: "Targa", name: "Targa", description: "Backend Systems" },
    { id: "Turbo", name: "Turbo", description: "Research & ML" },
  ];

  return (
    <section className="w-full py-20 bg-[#121820]" id="projects">
      <div className="container mx-auto px-4">
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
