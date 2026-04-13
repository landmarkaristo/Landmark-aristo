"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface EnquiryContextType {
  isOpen: boolean;
  isUnlocked: boolean;
  openModal: () => void;
  closeModal: () => void;
  unlockFloorPlans: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("landmark_floor_unlocked");
    if (saved === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  const unlockFloorPlans = () => {
    setIsUnlocked(true);
    localStorage.setItem("landmark_floor_unlocked", "true");
  };

  return (
    <EnquiryContext.Provider
      value={{ isOpen, isUnlocked, openModal, closeModal, unlockFloorPlans }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
