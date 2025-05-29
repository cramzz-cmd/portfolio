import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Palette, Crown } from "lucide-react";

interface Activity {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ExtraCurricular = () => {
  const activities: Activity[] = [
    {
      title: "Photography",
      description:
        "Self-taught photographer skilled in Adobe Lightroom, Adobe Photoshop, and Google Snapseed. Actively involved in college photography club.",
      icon: <Camera className="h-8 w-8" />,
      color: "#FF6720",
    },
    {
      title: "Graphic Design",
      description:
        "Experienced self-taught graphic designer actively involved in college designers and Art clubs. Worked on freelance projects for clients.",
      icon: <Palette className="h-8 w-8" />,
      color: "#A4C3CB",
    },
    {
      title: "Chess",
      description:
        "Represented my School in the CBSE south-zone cluster and won three out of six matches.",
      icon: <Crown className="h-8 w-8" />,
      color: "#E0E0E0",
    },
  ];

  return (
    <section className="py-20 bg-[#0A0F16]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 text-[#FF6720] text-center"
          style={{ fontFamily: "'Porsche Next', sans-serif" }}
        >
          EXTRA CURRICULAR
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1A2430] border-2 border-[#2A3A4A] h-full overflow-hidden relative">
                <div
                  className="absolute top-0 left-0 w-24 h-24 rounded-full opacity-10"
                  style={{
                    background: `radial-gradient(circle, ${activity.color} 0%, transparent 70%)`,
                    transform: "translate(-30%, -30%)",
                  }}
                />

                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${activity.color}20` }}
                  >
                    <div className="text-[#E0E0E0]">{activity.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[#E0E0E0]">
                    {activity.title}
                  </h3>

                  <p className="text-[#A4C3CB]">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
