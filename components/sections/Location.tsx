"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Hospital,
  Plane,
  Train,
  Map,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";

const locations = [
  { name: "Kalyan Shil Road", dist: "2 Mins", icon: Map },
  { name: "Kalyan Station", dist: "7 Mins", icon: Train },
  { name: "Vitthalwadi Station", dist: "7 Mins", icon: Train },
  { name: "Dombivli Station", dist: "10-15 Mins", icon: Train },
  { name: "Navi Mumbai International Airport", dist: "1 Hour", icon: Plane },
];

const nearbyCategories = [
  {
    label: "Schools & Colleges",
    icon: GraduationCap,
    items: [
      "Arya Gurukul School - 2 Mins",
      "Ideal College of Pharmacy - 5 Mins",
      "K V Pendharkar College - 7 Mins",
      "B K Birla College - 10 Mins",
      "Omkar International School - 10-12 Mins",
    ],
  },
  {
    label: "Hospitals",
    icon: Hospital,
    items: [
      "Jan Kalyan Hospital - 2 Mins",
      "Amey Multi-Speciality Hospital - 3 Mins",
      "Fortis Hospital - 5 Mins",
      "Aims Hospital - 10 Mins",
    ],
  },
  {
    label: "Grocery & Shopping",
    icon: ShoppingCart,
    items: [
      "R K Bazar - 2 Mins",
      "Patel R Mart - 3 Mins",
      "Metro Mall - 5 Mins",
      "D Mart Kalyan - 5 Mins",
    ],
  },
];

export function Location() {
  return (
    <section id="location" className="py-24 bg-bg-cream">
      {/* Subtle Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200/40" />
      <div className="container-custom space-y-12">

        {/* Top Row — Map + Details Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5589517181133!2d73.12938067520886!3d19.21445678201881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7959b99919201%3A0x3be64ae51e0bbde2!2sLandmark%20Aristo!5e0!3m2!1sen!2sin!4v1775979586751!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Details Side */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-4"
            >
              Strategic Location
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-primary mb-8 leading-tight font-heading"
            >
              Connect to <span className="text-secondary">What Matters</span>
            </motion.h2>

            <p className="text-primary/70 mb-10 leading-relaxed max-w-lg">
              Nestled in the prime gateway of the city, Landmark Aristo ensures you are never far from life's essential destinations. Experience the perfect balance of serenity and connectivity.
            </p>

            {/* Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((loc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-primary/5 hover:border-accent/20 transition-premium group"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-premium flex-shrink-0">
                    <loc.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">{loc.name}</h4>
                    <p className="text-xs text-primary/40 font-medium">{loc.dist}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row — Nearby Categories Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="p-8 rounded-3xl bg-primary text-white shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {nearbyCategories.map((cat, colIdx) => (
              <div key={colIdx}>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/10">
                  <cat.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    {cat.label}
                  </p>
                </div>
                {/* Items */}
                <ul className="space-y-3">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      <span className="text-sm text-white/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}