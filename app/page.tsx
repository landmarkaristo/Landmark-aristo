"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Landmark } from "@/components/sections/Landmark";
import { Amenities } from "@/components/sections/Amenities";
import { Features } from "@/components/sections/Features";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { Location } from "@/components/sections/Location";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/Footer";
import { EnquiryModal } from "@/components/modals/EnquiryModal";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <Landmark />
      <Amenities />
      <Features />
      <FloorPlans />
      <Location />
      <ContactForm />
      <Footer />
      
      {/* Global Modals */}
      <EnquiryModal />
    </main>
  );
}
