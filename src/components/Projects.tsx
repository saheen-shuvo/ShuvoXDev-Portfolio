import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Package, Truck, Utensils, GraduationCap, Globe, Languages, Code } from "lucide-react";

const projects = [
  {
    title: "LogiXShuvo",
    description: "Modern MERN stack application that streamlines parcel booking, tracking, and management. Role-based access for admins, deliverymen, and customers.",
    icon: Truck,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Client Repo", url: "#" },
      { label: "Server Repo", url: "#" },
    ],
    gradient: "from-primary to-primary/50",
  },
  {
    title: "Shuvo Bites",
    description: "Restaurant management system featuring orders, reservations, menu management, and staff scheduling with a modern interface.",
    icon: Utensils,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Repo", url: "#" },
    ],
    gradient: "from-accent to-accent/50",
  },
  {
    title: "EdTech",
    description: "Client project showcasing a youth-led initiative empowering girls through STEM education with modern responsive UI.",
    icon: GraduationCap,
    tags: ["React", "Responsive", "Modern UI"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Repo", url: "#" },
    ],
    gradient: "from-emerald-500 to-emerald-500/50",
  },
  {
    title: "International Affairs DIU",
    description: "Ongoing web project showcasing international programs, partnerships, and exchange opportunities with modern responsive design.",
    icon: Globe,
    tags: ["React", "Tailwind", "Responsive"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Repo", url: "#" },
    ],
    gradient: "from-violet-500 to-violet-500/50",
  },
  {
    title: "Shuvolingo",
    description: "Language learning platform where users can find tutors, view profiles, book sessions, manage bookings, and add tutorials.",
    icon: Languages,
    tags: ["React", "MongoDB", "Firebase Auth"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Repo", url: "#" },
    ],
    gradient: "from-rose-500 to-rose-500/50",
  },
  {
    title: "Codeforces Problem Solving",
    description: "Collection of Codeforces solutions demonstrating proficiency in algorithms and data structures for competitive programming.",
    icon: Code,
    tags: ["C++", "Algorithms", "DSA"],
    links: [
      { label: "Repo", url: "#" },
    ],
    gradient: "from-amber-500 to-amber-500/50",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card overflow-hidden group"
    >
      {/* Project Image/Icon Header */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <project.icon size={64} className="text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label.includes("Repo") ? <Github size={14} /> : <ExternalLink size={14} />}
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="floating-blob w-96 h-96 bg-accent/10 top-1/2 right-0" style={{ animationDelay: "-12s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">My work</span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
