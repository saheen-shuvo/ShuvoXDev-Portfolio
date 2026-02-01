import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, MapPin, Calendar, ChevronLeft, ChevronRight, Sparkles, Plane } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    placeholder: "University Campus",
    location: "Varna University of Management",
    date: "Spring 2024",
    description: "Exploring the beautiful campus",
  },
  {
    id: 2,
    placeholder: "City Center",
    location: "Belgrade, Serbia",
    date: "Spring 2024",
    description: "Weekend trip to the capital city",
  },
  {
    id: 3,
    placeholder: "Cultural Event",
    location: "Serbia",
    date: "Spring 2024",
    description: "Participating in local cultural activities",
  },
  {
    id: 4,
    placeholder: "Study Group",
    location: "University Library",
    date: "Spring 2024",
    description: "Collaborative learning with international students",
  },
  {
    id: 5,
    placeholder: "Travel Adventure",
    location: "Eastern Europe",
    date: "Spring 2024",
    description: "Exploring new places and cultures",
  },
  {
    id: 6,
    placeholder: "Graduation Moment",
    location: "Kragujevac, Serbia",
    date: "Spring 2024",
    description: "Celebrating semester completion",
  },
];

const ExchangeGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
            bottom: "10%",
            right: "-5%",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Plane className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">Erasmus+ Journey</span>
          </motion.div>

          <h2 className="section-heading">
            <span className="gradient-text">Exchange</span> Memories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Capturing moments from my semester abroad in Bulgaria 
          </p>
        </motion.div>

        {/* Featured Image Showcase */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Main Display */}
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-card p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl" />
              
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center"
              >
                {/* Placeholder Content */}
                <div className="text-center p-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center"
                  >
                    <Camera className="w-10 h-10 text-primary/70" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{galleryImages[activeIndex].placeholder}</h3>
                  <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {galleryImages[activeIndex].location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {galleryImages[activeIndex].date}
                    </span>
                  </div>
                  <p className="mt-4 text-foreground/70">{galleryImages[activeIndex].description}</p>
                  <p className="mt-6 text-xs text-muted-foreground/50 font-mono">
                    [ Upload your photo here ]
                  </p>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-foreground/30 hover:bg-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -left-4 top-1/4 glass-card px-4 py-3 hidden lg:block"
            >
              <div className="text-2xl font-bold gradient-text">4+</div>
              <div className="text-xs text-muted-foreground">Months Abroad</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-4 top-[20%] glass-card px-4 py-3 hidden lg:block "
            >
              <div className="text-2xl font-bold gradient-text-accent flex justify-center"><img className="w-8" src="https://img.icons8.com/?size=100&id=D8d97JyA7dc6&format=png&color=000000" alt="" /></div>
              <div className="text-xs text-muted-foreground">Bulgaria</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-4 left-1/4 glass-card px-4 py-3 hidden lg:block"
            >
              <div className="text-2xl font-bold gradient-text">🇪🇺</div>
              <div className="text-xs text-muted-foreground">Erasmus+</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer group ${
                activeIndex === index ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted" />
              
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center p-3"
              >
                <span className="text-xs font-medium text-white text-center line-clamp-2">
                  {image.placeholder}
                </span>
              </motion.div>

              {/* Camera Icon Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={hoveredCard === index ? { scale: 1.2, rotate: 15 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Camera className="w-8 h-8 text-muted-foreground/50" />
                </motion.div>
              </div>

              {/* Active Indicator */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 border-2 border-primary rounded-2xl"
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Glowing Effect on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                className="absolute inset-0 shadow-[inset_0_0_30px_hsl(var(--primary)/0.3)]"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            More memories coming soon...
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary/70 font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Uploading experiences
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExchangeGallery;
