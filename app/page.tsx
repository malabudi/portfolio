"use client";

import Section from "@/components/Section";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import UserRound from "@/components/UserIcon";


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
  #14213d
  #fca311
  #e5e5e5
  #ffffff
  */

  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();


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
        <nav className="fixed top-0 left-0 z-50 w-full bg-nav-bg/75 backdrop-blur-md">
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
              <button
                onClick={toggleTheme}
                className="
                  ml-4
                  inline-flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-4xl
                  bg-nav-toggle-bg
                  text-black
                  hover:bg-accent/90
                  transition-colors
                "
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
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
        <Section id="home" title="Hello 👋 I'm Mohamad">
          <div className="flex flex-row items-center">
            <div className="max-w-xl">
              <p className="pt-4 text-lg text-muted mr-16">
                I am a passionate developer with experience across full-stack development, devops, and Java backend systems, 
                coding professionally and as a lifelong hobby since writing my first lua script.
              </p>
              <br />
              <p className="pt-4 text-lg text-muted mr-16">
                In my free time, I enjoy playing video games like factorio or modded minecraft, fishing, and playing guitar and drums.
              </p>
              <br/>
              <p className="pt-4 text-lg text-muted mr-16">
                Explore my work to see what I&apos;ve built, and feel free to reach out to me for collaborations, job opportunities, or just to say hi!
              </p>
            </div>
            <UserRound />
          </div>
        </Section>
        <Section id="experience" title="Experience">
          <p className="mt-4 text-lg text-muted">
            Welcome to my portfolio! Here you&apos;ll find a showcase of my professional experience, projects, certifications, skills, and ways to get in touch with me.
          </p>
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
        <Section id="skills" title="Skills">
          <p className="mt-4 text-lg text-muted">
            A comprehensive list of my technical and soft skills that I bring to the table.
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
