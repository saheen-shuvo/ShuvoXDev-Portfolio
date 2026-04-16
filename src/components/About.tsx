import { useRef } from "react";
import { Code2, Rocket, Bug, MessageSquare } from "lucide-react";

const aboutItems = [
  {
    icon: Code2,
    text: "I am a dedicated full-stack web developer with a strong focus on building scalable, maintainable, and user-friendly web applications.",
  },
  {
    icon: Rocket,
    text: "I work primarily with modern web technologies and frameworks, ensuring performance-driven and responsive solutions from development to deployment.",
  },
  {
    icon: Bug,
    text: "I value clean code, debugging, and continuous improvement to deliver reliable software that meets both technical and business requirements.",
  },
  {
    icon: MessageSquare,
    text: "I enjoy collaborating with teams, communicating ideas clearly, and translating complex problems into efficient technical solutions.",
  },
];
const About = () => {
  const ref = useRef(null);

  return (
    <section id="about" className="py-24 relative">
      <div
        className="floating-blob w-72 h-72 bg-accent/15 top-0 right-0"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            Get to know me
          </span>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A passionate developer who loves turning complex problems into
            simple, beautiful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon size={24} />
              </div>
              <p className="text-foreground/90 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
