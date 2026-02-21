import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import RippleButton from "./RippleButton";
import profilePic from "../assets/hero/heroBanner.webp";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 "
    >

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse pt-8 lg:pt-0 lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-6"
            >
              <span className="text-primary font-mono text-sm md:text-base">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">Saheen Alam</span>{" "}
              <span className="text-foreground">Shuvo</span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-lg md:text-xl text-accent font-medium mb-6 font-mono"
            >
              Full Stack Developer | Competitive Programmer
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed"
            >
              I’m a Full Stack web developer specializing in the MERN stack,
              with a strong passion for problem-solving and competitive
              programming. I build scalable, user-friendly web applications and
              enjoy transforming complex ideas into clean, elegant digital
              solutions.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <RippleButton
                onClick={handleScrollToProjects}
                variant="primary"
                className="w-full sm:w-auto"
              >
                View Projects
              </RippleButton>
              <RippleButton
                onClick={handleScrollToContact}
                variant="outline"
                className="w-full sm:w-auto text-center"
              >
                Contact Me
              </RippleButton>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <motion.a
                href="https://github.com/saheen-shuvo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{
                  y: -3,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{
                  y: -3,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:saheenshuvo182@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{
                  y: -3,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-3xl opacity-40 scale-110" />

              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={profilePic}
                  alt="Saheen Alam Shuvo - Full Stack Developer"
                  width={384}
                  height={384}
                  decoding="async"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Ring */}
              <motion.div
                animate={reduceMotion ? {} : { rotate: 360 }}
                transition={
                  reduceMotion
                    ? {}
                    : { duration: 20, repeat: Infinity, ease: "linear" }
                }
                className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 10, 0] }}
            transition={reduceMotion ? {} : { duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
