"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  Building2,
  Layers,
  Star,
  Home,
  Landmark,
  Cctv,
} from "lucide-react";

const internalFeatures = [
  {
    title: "Living Room",
    items: [
      "Vitrified Tile Flooring",
      "Acrylic Emulsion Paint for Internal Walls & Ceiling",
      "Concealed Conduits with Copper Wiring",
      "Modular Switches",
      "Teakwood Frame Doors with Designer Shutters",
    ],
  },
  {
    title: "Bathroom",
    items: [
      "Vitrified Tile Flooring",
      "Finest Quality Fittings and Sanitary Ware",
      "CP Fittings",
      "Hot & Cold Diverters for All Showers",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Vitrified Tile Flooring",
      "Stainless Steel Sink",
      "Concealed Conduits with Copper Wiring",
      "Modular Switches",
    ],
  },
  {
    title: "Bedroom",
    items: [
      "Vitrified Tile Flooring",
      "Concealed Conduits with Copper Wiring",
    ],
  },
];

const securityFeatures = [
  { name: "Earthquake Resistant Structure", icon: ShieldCheck },
  { name: "Integrated Fire Protection Systems", icon: Flame },
  { name: "Premium Elevators", icon: Building2 },
  { name: "Refuge Area", icon: Layers },
  { name: "Best in Class Amenities", icon: Star },
  { name: "Club House", icon: Home },
  { name: "State Of The Art Amenities", icon: Landmark },
  { name: "CCTV Monitoring", icon: Cctv },
];

export function Features() {
  return (
    <section className="py-24 bg-bg-cream">
      <div className="container-custom">
        {/* Internal Features */}
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-4"
          >
            Fine Living
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl text-primary mb-16 !font-cormorant"
          >
            Internal <span className="text-secondary">Features</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {internalFeatures.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-bold text-primary border-b border-accent/20 pb-4">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-primary/80 text-md leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-primary/5 rounded-3xl p-12 lg:p-16 border border-accent/10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-primary mb-12 font-heading font-cormorant"
          >
            Security <span className="text-secondary">Protocols</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-y-10 gap-x-4 sm:gap-x-8">
            {securityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center text-center gap-3 sm:gap-4 group w-full max-w-[140px] mx-auto"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/5 group-hover:bg-accent group-hover:text-white transition-premium shrink-0">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent group-hover:text-white transition-premium" />
                </div>
                <span className="text-primary/80 font-medium text-[10px] sm:text-[12px] uppercase tracking-wide leading-snug sm:leading-relaxed text-center w-full break-words px-1">
                  {feature.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
