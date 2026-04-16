"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "RERA Registered — PM1330002501361",
  "Earthquake Resistant Structure",
  "High-Speed Schindler / OTIS Elevators",
  "CCTV Monitoring & 24/7 Security",
];

export function Landmark() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-cream overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 1, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/4] overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ scale: 1.15, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 5, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/aboutus.jpg" // User to replace
                  alt="Landmark Aristo Luxury Interior"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-accent/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-4">Our Integrity</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-tight font-cormorant">
              A Landmark of <span className="text-secondary">Sophistication</span>
            </h2>
            <div className="space-y-6 text-primary/70 mb-10 leading-relaxed">
              <p>
                Strategically placed in the thriving heart of Kalyan East, Landmark Aristo is more than a residence — it is a statement of refined living. Designed by Space Enviro Architects, every corner reflects precision, purpose and timeless elegance.
              </p>
              <p>
                From the grand entrance lobby to the rooftop sky amenities, Landmark Aristo delivers a life where comfort meets class — across thoughtfully crafted 1 & 2 BHK premium homes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="text-primary/80 font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
