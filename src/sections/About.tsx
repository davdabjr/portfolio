"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { hobbies, toolBoxItems } from "@/data/data";
import { MapImage, EmojiSmileImage } from "@/assets";
import { useRef } from "react";

export const About = () => {
  const constraintRef = useRef<any>(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* ROW: My Skills (col-span-2) | Beyond the Code (col-span-2) + Map (col-span-1)
              We use a single grid row with fixed height, and cards inside use h-full so they match */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 h-[320px]">
            {/* My Skills (spans 2 columns on lg) */}
            <Card className="h-full md:col-span-3 lg:col-span-2 flex flex-col">
              <CardHeader
                title="My Skills"
                description="The technical foundation that drives my work — cybersecurity, IT management, cloud infrastructure, automation, and development."
              />
              <div className="mt-4 flex-1 flex flex-col justify-between overflow-hidden">
                <ToolboxItems
                  items={toolBoxItems}
                  itemsWrapperClassName="animate-move-left"
                />
                <ToolboxItems
                  items={toolBoxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right"
                />
              </div>
            </Card>

            {/* Beyond the Code (spans 2 columns on md/lg) */}
            <Card className="h-full p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Exploring how cybersecurity, technology, and innovation work together to build smarter, safer, and more efficient digital solutions."
                className="px-6 py-6"
              />
              <div ref={constraintRef} className="relative flex-1 overflow-hidden">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Map (keeps its visual and will match height because parent grid has fixed height
                and this card uses h-full) */}
            <Card className="h-full p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map"
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full after:content-[''] after:absolute after:w-full after:h-full after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-20 animate-ping"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10"></div>
                <Image
                  src={EmojiSmileImage}
                  alt="Smiling Emoji"
                  className="w-20 h-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
