"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Waves,
  Gamepad2,
  ShieldCheck,
  Baby,
  Trees,
  Car,
  Coffee,
  Trophy,
  Users
} from "lucide-react";
import Image from "next/image";


const amenities = [
  { name: "Luxury Pool", icon: Waves, description: "Temperature controlled" },
  { name: "Elite Gym", icon: Dumbbell, description: "Cardio & Strength" },
  { name: "Indoor Games", icon: Gamepad2, description: "Chess, Pool, Carrom" },
  { name: "Kids Zone", icon: Baby, description: "Safe play area" },
  { name: "Skypark", icon: Trees, description: "Zen garden views" },
  { name: "EV Parking", icon: Car, description: "Fast charging" },
  { name: "Co-Working", icon: Users, description: "Private pods" },
  { name: "Coffee Lounge", icon: Coffee, description: "Professional barista" },
];

const actualImages = [
  { name: "AEROBICS STUDIO", src: "/images/amenities/aerobics-studio.jpeg" },
  { name: "AMPHITHEATRE", src: "/images/amenities/ampih-theatre.jpeg" },
  { name: "BANQUET HALL", src: "/images/amenities/banquet-hall.jpeg" },
  { name: "GYM", src: "/images/amenities/gym.jpeg" },
  { name: "INDOOR GAMES", src: "/images/amenities/indoor-games.jpeg" },
  { name: "KIDS PLAY AREA", src: "/images/amenities/kids-play.jpeg" },
  { name: "MINI GOLF", src: "/images/amenities/mini-golf.jpeg" },
  { name: "OPEN GYM", src: "/images/amenities/open-gym.jpeg" },
  { name: "SEATING AREA", src: "/images/amenities/seating-area.jpeg" },
  { name: "SWING LOUNGE", src: "/images/amenities/swing-lounge.jpeg" },
  { name: "YOGA DEN", src: "/images/amenities/yoga-den.jpeg" },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: typeof actualImages, direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="overflow-hidden flex w-full relative group">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        className="flex gap-6 w-max py-2"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="relative w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 shrink-0 overflow-hidden rounded-xl border-4 border-white/10"
          >
            <Image
              src={item.src}
              alt={item.name}
              fill
              className="object-cover transition-premium filter grayscale-[30%] hover:grayscale-0 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block px-4 py-1.5 bg-bg-cream/90 backdrop-blur-sm rounded-full shadow-xl">
                <span className="text-primary font-bold text-[10px] tracking-widest uppercase">{item.name}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-primary text-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-4"
          >
            Exclusive Access
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="!font-cormorant text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            <span className="text-secondary">Amenities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-white/60 leading-relaxed"
          >
            A world of recreation designed to complement your lifestyle. From wellness to work, everything is within your reach.
          </motion.p>
        </div>

        {/* Feature Grid */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-accent/30 transition-premium"
            >
              <item.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-premium" />
              <h4 className="text-lg font-heading mb-2">{item.name}</h4>
              <p className="text-sm text-white/40">{item.description}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Visual Highlights (As requested by user) */}
        {/* Visual Highlights (Marquee Carousels) */}
        <div className="flex flex-col gap-6 relative w-full overflow-hidden">
          <MarqueeRow items={[...actualImages]} direction="left" speed={45} />
          <MarqueeRow items={[...actualImages].reverse()} direction="right" speed={50} />
          <MarqueeRow items={[...actualImages.slice(5), ...actualImages.slice(0, 5)]} direction="left" speed={40} />
        </div>
      </div>
    </section>
  );
}
