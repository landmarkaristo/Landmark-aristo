"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { useEnquiry } from "@/context/EnquiryContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Floor Plan", href: "#floorplan" },
  { name: "Location", href: "#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useEnquiry();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-premium",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        {/* <Link href="/images/golden-logo.png" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg group-hover:bg-accent transition-premium">
            <span className="text-white font-heading font-bold text-xl">L</span>
          </div>
          <span className={cn(
            "font-heading font-bold text-xl tracking-tight transition-premium",
            scrolled ? "text-primary" : "text-primary"
          )}>
            Landmark Aristo
          </span>
        </Link> */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/golden-logo.png"
            alt="Landmark Aristo Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-heading font-bold text-xl tracking-tight text-accent">
            Landmark Aristo
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-bold transition-premium text-sm uppercase tracking-wider hover:text-accent",
                scrolled ? "text-primary/80" : "text-white/90 drop-shadow-sm"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button onClick={openModal} variant="premium-outline" size="sm" className="ml-4">
            Enquiry
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[51]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85vw] max-w-sm z-[52] shadow-2xl p-8 flex flex-col border-l border-accent/20 bg-[#2D3628]"
            >
              <div className="flex items-center justify-between mb-16">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <Image src="/images/golden-logo.png" alt="Logo" width={40} height={40} className="rounded-md" />
                  <span className="text-accent font-heading font-bold text-2xl uppercase tracking-tighter">Aristo</span>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                  <X className="w-8 h-8 text-accent" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-white hover:text-accent font-heading text-3xl font-light tracking-wide transition-premium block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <Button 
                  onClick={() => { setMobileMenuOpen(false); openModal(); }} 
                  variant="premium-outline"
                  className="w-full py-6 text-xl border-accent/50 text-accent"
                >
                  Enquiry
                </Button>
                <p className="mt-8 text-white/40 text-xs text-center uppercase tracking-widest font-medium">
                  Experience Timeless Elegance
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
