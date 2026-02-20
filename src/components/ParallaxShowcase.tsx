import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import project1 from "@/assets/projects/logix.webp";
import project2 from "@/assets/projects/logix.webp";
import project3 from "@/assets/projects/logix.webp";
import project4 from "@/assets/projects/logix.webp";
import project5 from "@/assets/projects/logix.webp";
import project6 from "@/assets/projects/logix.webp";

const topRowImages = [
  project1,
  project2,
  project3,
  project1,
  project2,
  project3,
];
const bottomRowImages = [
  project4,
  project5,
  project6,
  project4,
  project5,
  project6,
];

const ParallaxShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0.15, 1]);

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden ">
      <div className="absolute inset-0 top-0 to-background pointer-events-none z-10" />

      {/* Top Row - Moves Left to Right */}
      <motion.div style={{ x: x1 }} className="flex gap-6">
        <div className="flex gap-6 animate-marquee-left">
          {topRowImages.map((img, idx) => (
            <div
              key={`top-${idx}`}
              className="relative flex-shrink-0 w-[400px] h-[250px] rounded-xl overflow-hidden border border-border/30 group"
            >
              <img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="flex gap-6 animate-marquee-left">
          {topRowImages.map((img, idx) => (
            <div
              key={`top-dup-${idx}`}
              className="relative flex-shrink-0 w-[400px] h-[250px] rounded-xl overflow-hidden border border-border/30 group"
            >
              <img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Center Text - with gap and scroll opacity */}
      <div className="relative z-20 py-8 lg:py-12">
        <motion.div style={{ opacity: textOpacity }} className="text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Functional
          </h2>
          <h2 className="text-5xl md:text-6xl font-display font-bold">
            <span className="gradient-text">Components</span>
          </h2>
        </motion.div>
      </div>

      {/* Bottom Row - Moves Right to Left */}
      <motion.div style={{ x: x2 }} className="flex gap-6">
        <div className="flex gap-6 animate-marquee-right">
          {bottomRowImages.map((img, idx) => (
            <div
              key={`bottom-${idx}`}
              className="relative flex-shrink-0 w-[400px] h-[250px] rounded-xl overflow-hidden border border-border/30 group"
            >
              <img
                src={img}
                alt={`Project ${idx + 4}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="flex gap-6 animate-marquee-right">
          {bottomRowImages.map((img, idx) => (
            <div
              key={`bottom-dup-${idx}`}
              className="relative flex-shrink-0 w-[400px] h-[250px] rounded-xl overflow-hidden border border-border/30 group"
            >
              <img
                src={img}
                alt={`Project ${idx + 4}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxShowcase;
