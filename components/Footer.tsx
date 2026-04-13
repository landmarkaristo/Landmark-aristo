"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const navigation = [
  { name: "About Us", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Floor Plan", href: "#floorplan" },
  { name: "Location", href: "#location" },
];

const legal = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookies Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-bg-cream pt-20 pb-10 border-t border-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr] gap-12 lg:gap-24 mb-16 items-start">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-inner">
                <Image
                  src="/images/white-logo.png"
                  alt="Landmark Aristo Logo"
                  width={28}
                  height={28}
                  className="rounded-sm"
                />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-primary">
                Landmark Aristo
              </span>
            </Link>
            <p className="text-primary/60 text-sm leading-relaxed max-w-sm">
              Crafting premium residences in the heart of Kalyan since our foundation. Landmark Lifestyle's mission is to deliver architectural excellence and refined living for the deserving few.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2.5 bg-primary/5 text-primary/70 hover:bg-accent hover:text-white rounded-xl transition-premium shadow-sm"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2.5 bg-primary/5 text-primary/70 hover:bg-accent hover:text-white rounded-xl transition-premium shadow-sm"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-8 opacity-60">Navigation</h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary/70 hover:text-accent transition-premium text-sm font-medium decoration-accent/30 hover:underline underline-offset-8">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-8 opacity-60">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-primary/60 text-sm leading-relaxed">
                  Landmark Arista, Opp Davakhar Elegance, Anmol Garden, Pisavali, Kalyan (E) 421306.
                </span>
              </li>
              <li className="group">
                <Link href="tel:8828225376" className="flex items-center gap-4 hover:translate-x-1 transition-premium">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-premium">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-primary/60 text-sm font-medium tracking-wide">8828225376</span>
                </Link>
              </li>
              <li className="group">
                <Link href="mailto:landmarklifestyle44@gmail.com" className="flex items-center gap-4 hover:translate-x-1 transition-premium">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-premium">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-primary/60 text-sm font-medium break-all">landmarklifestyle44@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-primary/60 text-sm mb-6">Stay updated with our latest luxury developments.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white border border-primary/10 rounded-xl px-4 py-4 text-sm focus:border-accent outline-none transition-premium"
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-lg hover:bg-accent transition-premium">
                Join
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-primary/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary/40 text-xs">
            © {new Date().getFullYear()} Landmark Aristo. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            {legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-primary/40 hover:text-accent text-xs transition-premium">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
