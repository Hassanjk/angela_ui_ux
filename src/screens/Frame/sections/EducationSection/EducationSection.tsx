import React, { useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Education data for mapping
const educationItems = [
  {
    id: 1,
    period: "2019-2020",
    title: "UX/UI Designer",
    description:
      "We make our customers ' products valuable in the eyes of customers. To do this, we analyze and study people, build long-term strategies for interacting with them, develop creative",
    image: "/image-10.png",
  },
  {
    id: 2,
    period: "2019-2020",
    title: "Graphic Designer",
    description:
      "Rule bearing whales. Created gathering blessed, sixth likeness male. Over were which you'll so be make moveth made saw above.",
    image: "/image-12.png",
  },
  {
    id: 3,
    period: "2019-2020",
    title: "Marketing Manager",
    description:
      "Firmament itself rule their evening, which moved very night so great them cattle bearing and gathered forth had whose bearing.",
    image: "/image-13.png",
  },
];

// Navigation items
const navItems = ["HOME", "PAGES", "BLOG", "CONTACT", "PORTFOLIO"];

export const EducationSection = (): JSX.Element => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.education-card');
    
    if (cards) {
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, []);

  return (
    <section className="relative w-full py-32 bg-[#0e0e0e] text-[#fde3a7] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[#0e0e0e] transform rotate-3 opacity-50"></div>
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-[1440px] mx-auto px-8">
        {/* Section header */}
        <div className="mb-20">
          <span className="inline-block text-[#9c4a37] text-[15px] tracking-[1.12px] uppercase mb-4">
            MY SKILL
          </span>

          <div className="flex justify-between items-end">
            <h2 className="text-[#fde3a7] text-6xl leading-[1.2] max-w-[500px]">
              Education & Experience
            </h2>

            <Button className="bg-[#9c4a37] hover:bg-[#9c4a37]/90 text-[#fde3a7] rounded-none px-8 py-4 h-auto transition-all duration-300 hover:transform hover:translate-y-[-2px]">
              <span className="text-sm tracking-[0.60px] leading-none uppercase">
                DOWNLOAD RESUME
              </span>
            </Button>
          </div>
        </div>

        {/* Education cards */}
        <Card className="bg-transparent border-none" ref={cardsRef}>
          <CardContent className="p-0 space-y-0">
            {educationItems.map((item, index) => (
              <div 
                key={item.id} 
                className="education-card group relative"
              >
                <Separator className="w-full h-px bg-[#fde3a7]/20" />

                <div className="py-12 grid grid-cols-12 gap-8 items-center transition-all duration-300 hover:bg-[#fde3a7]/5">
                  <div className="col-span-1">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#9c4a37]/10 p-3 transition-all duration-300 group-hover:bg-[#9c4a37]/20">
                      <img
                        src={item.image}
                        alt={`${item.title} logo`}
                        className="w-full h-full object-contain filter brightness-0 invert opacity-70"
                      />
                    </div>
                  </div>

                  <div className="col-span-2">
                    <div className="text-[28px] leading-tight font-light text-[#fde3a7]/80">
                      {item.period}
                    </div>
                  </div>

                  <div className="col-span-4">
                    <h3 className="text-[28px] leading-tight font-medium text-[#fde3a7] transition-all duration-300 group-hover:translate-x-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="col-span-5">
                    <p className="text-[15px] leading-[1.5] text-[#fde3a7]/70 transition-all duration-300 group-hover:text-[#fde3a7]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {index === educationItems.length - 1 && (
                  <Separator className="w-full h-px bg-[#fde3a7]/20" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Navigation dots */}
        <div className="flex justify-center mt-20">
          <div className="flex space-x-2">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  dot === 0 
                    ? "bg-[#9c4a37] w-8" 
                    : "bg-[#fde3a7]/20 hover:bg-[#fde3a7]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};