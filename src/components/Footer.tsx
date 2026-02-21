import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            Developed by{" "}
            <a
              href="https://github.com/saheen-shuvo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Saheen Alam Shuvo
            </a>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Last Updated: 20 February 2026
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground/60 text-xs mt-6"
        >
          © {new Date().getFullYear()} Saheen Alam Shuvo. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
