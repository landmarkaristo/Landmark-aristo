"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEnquiry } from "@/context/EnquiryContext";
import { Button } from "../ui/Button";
import { Lock, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    type: "1 BHK Luxury",
    area: "750 Sq. Ft.",
    image: "/images/floor plan/1BHK.jpg",
    details: ["Spacious Living", "Master Suite", "Designer Kitchen"],
  },
  {
    type: "2 BHK Premium",
    area: "1150 Sq. Ft.",
    image: "/images/floor plan/2BHK.jpg",
    details: ["Grand Balcony", "Dual Bathrooms", "Smart Storage"],
  },
];

export function FloorPlans() {
  const { isUnlocked, openModal } = useEnquiry();

  // ✅ NEW STATE
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <>
      <section id="floorplan" className="py-24 bg-bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-4"
            >
              Luxury Layouts
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-heading"
            >
              Space <span className="text-secondary">Redefined</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-primary/5 border border-primary/5"
              >
                <div className="p-8 border-b border-primary/5 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-heading text-primary">
                      {plan.type}
                    </h3>
                  </div>

                  {!isUnlocked && (
                    <div className="p-2 bg-accent/10 rounded-full">
                      <Lock className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </div>

                {/* Image Container */}
                <div
                  className="relative aspect-square md:aspect-[4/3] group cursor-pointer"
                  onClick={() => {
                    if (!isUnlocked) {
                      openModal();
                    } else {
                      setSelectedImage(plan.image); // ✅ OPEN IMAGE
                    }
                  }}
                >
                  <Image
                    src={plan.image}
                    alt={plan.type}
                    fill
                    className={cn(
                      "object-contain p-8 transition-premium duration-1000",
                      !isUnlocked
                        ? "blur-xs grayscale saturate-0"
                        : "blur-0"
                    )}
                  />

                  {/* Locked Overlay */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center group-hover:bg-primary/30 transition-premium">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-premium">
                        <Eye className="w-8 h-8 text-accent" />
                      </div>

                      <Button variant="primary" className="shadow-2xl">
                        Unlock Floor Plan
                      </Button>
                    </div>
                  )}

                  {/* Unlocked Badge */}
                  {isUnlocked && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-fade-in">
                      Unlocked
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)} // click outside closes
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl h-[80vh]"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image
          >
            <Image
              src={selectedImage}
              alt="Floor Plan"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}