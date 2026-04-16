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
import AskShubot from "@/components/AskShubot";

const Index = () => {

  return (
    <>
      <div className="min-h-screen bg-background overflow-x-hidden relative ">
        <GlobalBackground />
        <CursorFollower />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <ParallaxShowcase /> */}
          <Stats />
          <Achievements />
          <ExchangeGallery />
          <Highlights />
          <Contact />
          <Footer />
        </div>
        <AskShubot />
      </div>
    </>
  );
};

export default Index;
