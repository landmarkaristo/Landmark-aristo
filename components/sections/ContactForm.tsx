"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useEnquiry } from "@/context/EnquiryContext";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const { unlockFloorPlans } = useEnquiry();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "Footer enquiry for Landmark Aristo",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        unlockFloorPlans();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white/5 rounded-[2rem] p-8 md:p-16 border border-white/10 relative">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading mb-6"
            >
              Begin Your <span className="text-accent">Journey</span>
            </motion.h2>
            <p className="text-white/60">Leave your details below, and our bespoke team will reach out to schedule a private viewing.</p>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-accent mb-6" />
              <h3 className="text-3xl font-heading mb-2">Message Received</h3>
              <p className="text-white/60">An executive will call you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/40">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Maximilian Ross"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-premium"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/40">Contact Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+1-555-000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-premium"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/40">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="maximilian@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-premium"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <Button isLoading={status === "loading"} className="w-full py-5 text-xl font-heading shadow-2xl">
                  Submit Enquiry <Send className="ml-2 w-5 h-5" />
                </Button>
                {status === "error" && (
                  <p className="mt-4 text-center text-red-400 text-sm">Error submitting form. Please try again.</p>
                )}
              </div>
            </form>
          )}

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-[4rem] -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-tr-[4rem] -z-10" />
        </div>
      </div>
    </section>
  );
}
