import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Trophy, Briefcase, Coffee } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 30,
    suffix: "+",
    label: "Projects Completed",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Trophy,
    value: 300,
    suffix: "+",
    label: "Problems Solved",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Code2,
    value: 10000,
    suffix: "+",
    label: "Lines of Code",
    gradient: "from-emerald-500 to-emerald-500/50",
  },
  {
    icon: Coffee,
    value: 1000,
    suffix: "+",
    label: "Cups of Coffee",
    gradient: "from-amber-500 to-amber-500/50",
  },
];

const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-24 relative">
      <div
        className="floating-blob w-80 h-80 bg-accent/15 top-0 right-1/4"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            Numbers
          </span>
          <h2 className="section-heading">
            My <span className="gradient-text">Journey</span> in Numbers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A quick snapshot of my coding journey and accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-6 md:p-8 text-center group relative overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon size={28} className="text-white" />
              </motion.div>

              {/* Counter */}
              <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-tl-3xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
