"use client"

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ 
    id, 
    title, 
    children,
    className=""
  }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`
        relative
        overflow-hidden
        snap-start 
        scroll-mt-16 
        min-h-screen
        w-full
        flex
        flex-col
        items-center
        justify-center
        z-10
        ${className}
      `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full max-w-4xl px-16 pt-16 z-10">
        {title && <h1 className="relative text-5xl font-bold text-center pb-24 z-10">{title}</h1>}
        {children}
      </div>
    </motion.section>
  );
}
