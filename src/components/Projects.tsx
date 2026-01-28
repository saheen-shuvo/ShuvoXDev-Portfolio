import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

import logixshuvoImg from "../assets/projects/logix.webp";
import shuvoBitesImg from "@/assets/projects/shuvobites.webp";
import stem from "@/assets/projects/stem.webp";
import shaheen from "../assets/projects/shaheen.webp";
import ia from "../assets/projects/ia.webp";
import cp from "../assets/projects/cp.webp";

const projects = [
  {
    title: "SHAHEENS OFFICIAL",
    description:
      "A live e-commerce website for girls’ fashion. Built collaboratively, where I developed ~75% of the project, including UI, frontend logic, and Node.js CRUD APIs, while my teammate handled server setup and database connection.",
    image: shaheen,
    tags: ["Next.js", "MongoDB", "Shadcn", "Tailwind", "Node.js"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Repo", url: "#" },
    ],
    gradient: "from-rose-500 to-rose-500/50",
  },
  {
    title: "LOGIXSHUVO",
    description:
      "A MERN-based parcel delivery platform with role-based dashboards for Admin, Deliveryman, and Customer. I designed and developed the entire project end-to-end, including UI, backend APIs, payment gateway, authentication, and business logic.",
    image: logixshuvoImg,
    tags: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Client Repo", url: "#" },
      { label: "Server Repo", url: "#" },
    ],
    gradient: "from-primary to-primary/50",
  },
  {
    title: "SHUVOBITES",
    description:
      "A modern food ordering platform that allows users to browse menus, place orders, make payments, and manage carts with a smooth user experience. I developed the project focusing on responsive UI, frontend logic, and core feature integration.",
    image: shuvoBitesImg,
    tags: ["React", "Node.js", "MongoDB", "Axios", "Tailwind"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Repo", url: "#" },
    ],
    gradient: "from-accent to-accent/50",
  },
  {
    title: "STEM FOR SUPER GIRLS",
    description:
      "A web platform promoting girls’ participation in STEM through programs, events, and community initiatives. I designed and developed a responsive UI with interactive sections, authentication, and smooth user flows to showcase impact and engagement.",
    image: stem,
    tags: ["React", "Firebase", "DaisyUI", "Framer Motion", "MongoDB"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Repo", url: "#" },
    ],
    gradient: "from-emerald-500 to-emerald-500/50",
  },
  {
    title: "INTERNATIONAL AFFAIRS DIU",
    description:
      "An ongoing web project for the International Affairs Office of Daffodil International University, focused on presenting international programs, partnerships, and student services. I am working on building a clean, responsive UI and integrating dynamic content to improve accessibility and user experience.",
    image: ia,
    tags: ["React", "Tailwind", "Responsive", "MongoDB", "Firebase"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Repo", url: "#" },
    ],
    gradient: "from-violet-500 to-violet-500/50",
  },
  {
    title: "PROBLEM SOLVING",
    description:
      "Actively practicing competitive programming on platforms such as Codeforces and CodeChef, with a strong focus on data structures, algorithms, and efficient problem-solving techniques. This regular practice has strengthened my logical thinking, optimized coding approach, and improved my ability to solve complex problems.",
    image: cp,
    tags: ["C", "C++", "Algorithms", "DSA"],
    links: [{ label: "Codeforces", url: " https://codeforces.com/profile/saheen_shuvo" },
    { label: "CodeChef", url: "https://www.codechef.com/users/saheen_shuvo" }
    ],
    gradient: "from-amber-500 to-amber-500/50",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
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
      {/* Project Image Header */}
      <div className=" relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center
             group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-xs mb-4 leading-relaxed text-justify">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
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
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label.includes("Repo") ? (
                <Github size={14} />
              ) : (
                <ExternalLink size={14} />
              )}
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
      <div
        className="floating-blob w-96 h-96 bg-accent/10 top-1/2 right-0"
        style={{ animationDelay: "-12s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            My work
          </span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for
            building
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
