import { motion } from "framer-motion";

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
            top: "-20%",
            left: "-10%",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)",
            top: "30%",
            right: "-15%",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -80, -40, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(200, 100%, 50%) 0%, transparent 70%)",
            bottom: "10%",
            left: "20%",
            filter: "blur(70px)",
          }}
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.3, 0.95, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      {/* <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Moving Light Beams */}
      <motion.div
        className="absolute w-px h-[200vh] bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        style={{ left: "20%" }}
        animate={{ 
          y: ["-100%", "100%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-px h-[200vh] bg-gradient-to-b from-transparent via-accent/15 to-transparent"
        style={{ left: "70%" }}
        animate={{ 
          y: ["100%", "-100%"],
          opacity: [0, 0.4, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
      />
      <motion.div
        className="absolute w-px h-[200vh] bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        style={{ left: "45%" }}
        animate={{ 
          y: ["-100%", "100%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 8 }}
      />

      {/* Horizontal Scan Lines */}
      {/* <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{ top: ["-5%", "105%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      /> */}

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <div className="absolute top-8 left-8 w-32 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute top-8 left-8 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
        <div className="absolute top-8 right-8 w-32 h-px bg-gradient-to-l from-accent/50 to-transparent" />
        <div className="absolute top-8 right-8 w-px h-32 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </div>
  );
};

export default GlobalBackground;
