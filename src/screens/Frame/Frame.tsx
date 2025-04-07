import React from "react";
import { EducationDetailsSection } from "./sections/EducationDetailsSection/EducationDetailsSection";
import { EducationSection } from "./sections/EducationSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

export const Frame = (): JSX.Element => {
  return (
    <main className="bg-[#0e0e0e] flex flex-col items-center w-full">
      <div className="bg-[#0e0e0e] w-full max-w-[1920px]">
        <HeaderSection />
        <HeroSection />
        <EducationSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};