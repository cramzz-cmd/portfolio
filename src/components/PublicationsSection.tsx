import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  description: string;
  link: string;
  date: string;
  tags: string[];
}

const PublicationsSection = () => {
  const publications: Publication[] = [
    {
      title:
        "Detection of Suspicious Activities at Remote Locations by using UAVs and Computer Vision",
      description:
        "Research on preventing security threats at remote locations using drones and machine learning algorithms including OpenCV, image processing libraries and YOLO object detection.",
      link: "https://www.researchgate.net/publication/377547504_Detection_of_Suspicious_Activities_at_Remote_Locations_by_using_UAVs_and_Computer_Vision",
      date: "2023",
      tags: ["Computer Vision", "YOLO", "Drone Surveillance", "Security"],
    },
    {
      title:
        "Performance Assessment of Neural Radiance Fields and Photogrammetry for 3D Reconstruction",
      description:
        "Comparative analysis of Neural Radiance Fields (NeRF) and Photogrammetry for 3D reconstruction of man-made and natural features.",
      link: "https://www.researchgate.net/publication/378826735_Performance_Assessment_of_Neural_Radiance_Fields_NeRF_and_Photogrammetry_for_3D_Reconstruction_of_Man-Made_and_Natural_Features",
      date: "2023",
      tags: [
        "Neural Radiance Fields",
        "Photogrammetry",
        "3D Reconstruction",
        "Computer Graphics",
      ],
    },
  ];

  return (
    <section id="publications" className="py-20 bg-[#121820]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 text-[#FF6720] text-center tracking-tight"
        >
          RESEARCH PUBLICATIONS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1A2430]/90 backdrop-blur-sm border-2 border-[#2A3A4A] h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                      variant="outline"
                      className="bg-[#FF6720]/20 text-[#FF6720]"
                    >
                      {pub.date}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[#E0E0E0]">
                    {pub.title}
                  </h3>

                  <p className="text-[#A4C3CB] mb-6 flex-grow">
                    {pub.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#FF6720] hover:text-[#FF8F50] transition-colors mt-auto"
                  >
                    View Publication <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
