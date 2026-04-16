"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { useEnquiry } from "@/context/EnquiryContext";
import { cn } from "@/lib/utils";

export function EnquiryModal() {
  const { isOpen, closeModal, unlockFloorPlans } = useEnquiry();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "Enquiry for Landmark Aristo",
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
        unlockFloorPlans(); // Unlock floor plans after successful submission
        setTimeout(() => {
          closeModal();
          setStatus("idle");
          setFormData({ name: "", phone: "", email: "", message: "Enquiry for Landmark Aristo" });
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg max-h-[85vh] flex flex-col bg-bg-cream rounded-2xl shadow-2xl border border-accent/20"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex items-center justify-between shrink-0 rounded-t-2xl">
              <div>
                <h3 className="text-2xl font-heading mb-1">Get an Exclusive Viewing</h3>
                <p className="text-white/70 text-sm italic">Unlock floor plans and premium details</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/10 rounded-full transition-premium"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-5 sm:p-8 overflow-y-auto">
              {status === "success" ? (
                <div className="py-12 flex flex-col items-center text-center animate-fade-in">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="text-2xl font-heading text-primary mb-2">Thank You!</h4>
                  <p className="text-primary/70">Our relationship manager will contact you shortly. Floor plans are now unlocked for you.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-primary/70">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white text-black border border-primary/10 rounded-lg px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-premium"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-primary/70">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white text-black border border-primary/10 rounded-lg px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-premium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-primary/70">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="rahulsharma@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white text-black border border-primary/10 rounded-lg px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-premium"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-primary/70">Message (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="I'm interested in..."
                      className="w-full bg-white text-black border border-primary/10 rounded-lg px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-premium resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                  )}

                  <Button
                    type="submit"
                    isLoading={status === "loading"}
                    className="w-full py-4 text-lg mt-2"
                  >
                    Submit Enquiry
                  </Button>
                  <p className="text-[10px] text-center text-primary/40 uppercase tracking-widest mt-4">
                    By submitting, you agree to our privacy policy and terms.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
