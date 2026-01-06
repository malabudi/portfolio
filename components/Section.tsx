"use client"

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="
        snap-start 
        scroll-mt-16 
        min-h-screen 
        px-16 
        py-12
        flex
        flex-col
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full max-w-4xl px-16 pt-16">
        <h1 className="text-5xl font-bold">{title}</h1>
        {children}
      </div>
    </motion.section>
  );
}
