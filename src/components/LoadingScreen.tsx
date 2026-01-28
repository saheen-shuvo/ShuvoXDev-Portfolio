import { motion } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center">
        {/* Ripple animations behind the name */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-primary/30"
            style={{
              width: "100%",
              height: "100%",
              padding: "2rem 4rem",
            }}
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{
              scale: [0.8, 2.5, 3],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Glowing background pulse */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "120%",
            height: "200%",
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Name text */}
        <motion.h1
          className="relative z-10 text-xl md:text-3xl font-bold tracking-wider"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Shuvo</span>
          <motion.span
            className="gradient-text-accent inline-block"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            X
          </motion.span>
          <span className="gradient-text">Dev</span>
        </motion.h1>

        {/* Loading dots */}
        <div className="absolute -bottom-12 flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
