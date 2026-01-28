import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import ExchangeGallery from "@/components/ExchangeGallery";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import GlobalBackground from "@/components/GlobalBackground";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the page to fully load
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1500); // Minimum display time
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <LoadingScreen isLoading={isLoading} />
      </AnimatePresence>
      
      <div className="min-h-screen bg-background overflow-x-hidden relative">
        <GlobalBackground />
        <CursorFollower />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Stats />
          <Achievements />
          <ExchangeGallery />
          <Highlights />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
