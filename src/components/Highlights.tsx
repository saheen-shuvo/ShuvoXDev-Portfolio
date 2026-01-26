import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Globe, Trophy } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Software Engineering Student",
    subtitle: "Daffodil International University",
    description: "Pursuing a degree in Software Engineering, focusing on modern web technologies and software development practices.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Globe,
    title: "Erasmus+ Scholar",
    subtitle: "International Exchange Program",
    description: "Selected for the prestigious Erasmus+ semester exchange program, gaining international exposure and cross-cultural experience in software development.",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Trophy,
    title: "Competitive Programmer",
    subtitle: "Problem Solving Enthusiast",
    description: "Active competitive programmer on platforms like Codeforces, solving algorithmic challenges and improving problem-solving skills daily.",
    gradient: "from-emerald-500 to-emerald-500/50",
  },
];

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highlights" className="py-24 relative">
      <div className="floating-blob w-72 h-72 bg-primary/15 bottom-0 left-1/4" style={{ animationDelay: "-8s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Experience</span>
          <h2 className="section-heading">
            <span className="gradient-text">Highlights</span> & Achievements
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Key milestones in my academic and professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-primary text-sm font-medium mb-4">{item.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
