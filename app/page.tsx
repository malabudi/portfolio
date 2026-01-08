"use client";

import Section from "@/components/Section";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";
import InteractiveShape from "@/components/InteractivePuzzle";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="overflow-hidden h-screen bg-background text-foreground font-sans"
    >
      {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 z-50 w-full bg-nav-bg/85 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-2 pl-6">
            <div className="flex h-16 items-center justify-end space-x-4">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="relative px-3 py-2 text-sm"
                >
                  {/* Active Item */}
                  {activeSection === id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent"
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 50
                      }}
                    />
                  )}

                  {/* Inactive Item */}
                  <span
                    className={`relative z-10 ${
                      activeSection === id
                        ? "text-accent"
                        : "text-nav-text hover:text-nav-text-hover transition-colors duration-200"
                    }`}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>

      {/* Main Content */}
      <main className="
        h-full
        w-full 
        flex
        flex-col 
        items-center
        snap-y
        snap-mandatory
        scroll-smooth
        overscroll-contain
        overflow-y-scroll
        scrollbar-none
      ">
        <Section 
          id="home"
        >
          <HeroBackground />
          <div className="flex w-full flex-row items-center justify-center flex-wrap">
            <div className="flex-1">
              <h1 className="relative text-5xl font-bold pb-4">👋 Hello, I&apos;m Mohamad</h1>
              <p className="pt-4 z-10 text-lg text-[#000000]">
                I am a software developer with experience across full-stack development, 
                devops, and Java backend systems, coding professionally and as a lifelong hobby.
              </p>
              <p className="pt-4 z-10 text-lg text-[#000000]">
                In my free time, I enjoy playing video games like factorio or modded minecraft, 
                fishing, and playing guitar and drums.
              </p>
            </div>
            <div className="perspective-midrange ">
              <InteractiveShape />
            </div>
          </div>
        </Section>
        <Section id="projects" title="Projects">
          <p className="mt-4 text-lg text-muted">
            Explore a selection of my projects that demonstrate my skills and expertise in various technologies and domains.
          </p>
        </Section>
        <Section id="certifications" title="Certifications">
          <p className="mt-4 text-lg text-muted">
            Here are some of the certifications I&apos;ve earned that validate my knowledge and skills in the tech industry.
          </p>
        </Section>
        <Section id="contact" title="Contact Me">
          <p className="mt-4 text-lg text-muted">
            Feel free to reach out to me through the following channels. I&apos;m always open to new opportunities and collaborations!
          </p>
        </Section>
      </main>
    </div>
  );
}
