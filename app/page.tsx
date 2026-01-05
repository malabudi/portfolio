"use client";

import Section from "@/components/Section";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  /*
  #000000
  #0c1821
  #1b2a41
  #324a5f
  #ccc9dc
  */

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-64px 0px -50% 0px", // accounts for navbar height
        threshold: 0.1,
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
      className="flex min-h-screen items-center justify-center bg-background font-sans"
    >
      {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 z-50 w-full bg-gray-800/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-16 items-center space-x-4">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="relative px-3 py-2 text-sm"
                >
                  {/* Active background */}
                  {activeSection === id && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-md bg-gray-950/50"
                      transition={{ type: "spring", stiffness: 500, damping: 50 }}
                    />
                  )}

                  {/* Text */}
                  <span
                    className={`relative z-10 ${
                      activeSection === id
                        ? "text-white"
                        : "text-gray-300 hover:text-white transition-colors duration-200"
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
      <main className="p-16 flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Section id="home" title="Welcome to My Portfolio">
          <p className="mt-4 text-lg">
            Hi! I&apos;m [Your Name], a passionate full-stack developer. Explore my work and get to know more about me!
          </p>
        </Section>
        <Section id="experience" title="Experience">
          <p className="mt-4 text-lg">
            Welcome to my portfolio! Here you&apos;ll find a showcase of my professional experience, projects, certifications, skills, and ways to get in touch with me.
          </p>
        </Section>
        <Section id="projects" title="Projects">
          <p className="mt-4 text-lg">
            Explore a selection of my projects that demonstrate my skills and expertise in various technologies and domains.
          </p>
        </Section>
        <Section id="certifications" title="Certifications">
          <p className="mt-4 text-lg">
            Here are some of the certifications I&apos;ve earned that validate my knowledge and skills in the tech industry.
          </p>
        </Section>
        <Section id="skills" title="Skills">
          <p className="mt-4 text-lg">
            A comprehensive list of my technical and soft skills that I bring to the table.
          </p>
        </Section>
        <Section id="contact" title="Contact Me">
          <p className="mt-4 text-lg">
            Feel free to reach out to me through the following channels. I&apos;m always open to new opportunities and collaborations!
          </p>
        </Section>
      </main>
    </div>
  );
}
