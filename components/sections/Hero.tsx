"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useEnquiry } from "@/context/EnquiryContext";
import { ChevronRight } from "lucide-react";

const HEADING = "ARISTO";

const letterVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4 + i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
  },
});

function GoldLine() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
      className="h-[2px] bg-accent mt-2 mb-5 w-16"
      style={{ transformOrigin: "left" }}
    />
  );
}

export function Hero() {
  const { openModal } = useEnquiry();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: "easeOut" }}
        >
          {/* Desktop Image */}
          <Image
            src="/images/hero-building.jpg"
            alt="Landmark Aristo — Premium Residences in Kalyan East"
            fill
            priority
            className="object-cover object-right hidden md:block"
          />

          {/* Mobile Image */}
          <Image
            src="/images/hero-banner-mob.jpg"
            alt="Landmark Aristo — Premium Residences in Kalyan East"
            fill
            priority
            className="object-cover object-center block md:hidden"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20 md:pb-16 lg:pb-20">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">

          {/* H1 for SEO */}
          <h1 className="sr-only">
            Landmark Aristo — 1 & 2 BHK premium balcony homes
          </h1>

          {/* LANDMARK */}
          <div className="flex overflow-hidden" aria-hidden="true">
            {"LANDMARK ".split("").map((char, i) => (
              <motion.span
                key={`lm-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-white/90 font-black font-cormorant leading-none"
                style={{
                  fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
                  display: "inline-block",
                  whiteSpace: "pre",
                  letterSpacing: "0.04em",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* ARISTO */}
          <div className="flex overflow-hidden -mt-1">
            {HEADING.split("").map((char, i) => (
              <motion.span
                key={`ar-${i}`}
                custom={i + 9}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-black font-cormorant leading-none"
                style={{
                  fontSize: "clamp(3.2rem, 8.5vw, 6rem)",
                  display: "inline-block",
                  color: "#C9A84C",
                  letterSpacing: "-0.01em",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Gold Line */}
          <GoldLine />

          {/* Tagline */}
          <motion.p
            variants={fadeUp(1.05)}
            initial="hidden"
            animate="visible"
            className="text-white/70 text-sm md:text-base leading-relaxed font-light mb-7 max-w-sm md:max-w-md"
          >
            1 &amp; 2 BHK premium balcony homes <br />
            Rooftop Clubhouse and amenities
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp(1.2)}
            initial="hidden"
            animate="visible"
            className="flex flex-row flex-wrap items-center gap-3"
          >
            <button
              onClick={openModal}
              className="px-4 py-2 text-xs font-semibold tracking-wide text-white rounded-md cursor-pointer"
              style={{ background: "#C9A84C" }}
            >
              Explore Floor Plans
            </button>

            <button
              onClick={openModal}
              className="px-4 py-2 text-xs font-semibold tracking-wide text-white rounded-md border border-white/40 hover:border-white hover:bg-white/10 cursor-pointer flex items-center gap-1 transition-colors"
            >
              Site Visit <ChevronRight className="w-3 h-3" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}