import React from "react";
import { Progress } from "../../../../components/ui/progress";

export const HeroSection = (): JSX.Element => {
  const skillsData = [
    { name: "WORDPRESS", percentage: 80 },
    { name: "PHOTOSHOP", percentage: 70 },
    { name: "MARKETING", percentage: 76 },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0E0E0E] text-[#FDE3A7] py-20">
      <div className="max-w-[1440px] mx-auto px-8 flex justify-between">
        {/* Left side - Image with dot pattern */}
        <div className="relative w-[630px]">
          <div className="absolute w-[375px] h-[375px] top-0 left-0 grid grid-cols-[repeat(25,1fr)] grid-rows-[repeat(25,1fr)]">
            {Array(625).fill(0).map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute w-[7px] h-[7px] bg-[#FDE3A7]/20" />
              </div>
            ))}
          </div>

          <div className="relative w-[539px] h-[674px] mt-[42px] ml-[91px]">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Experience section */}
        <div className="w-[440px]">
          <span className="text-[#9C4A37] text-[15px] tracking-[1.12px] uppercase">
            ABOUT US
          </span>

          <h2 className="text-[60px] leading-[60px] mt-7">
            My Experience
          </h2>

          <p className="mt-[42px] w-[330px] text-[15px] leading-[19.5px]">
            We make our customers' products valuable in the eyes of customers. 
            To do this, we analyze and study people, build long-term strategies 
            for interacting with them, develop creative ideas
          </p>

          <div className="mt-[142px] space-y-[52px]">
            {skillsData.map((skill) => (
              <div key={skill.name} className="w-full">
                <div className="flex justify-between mb-[14px]">
                  <span className="text-[15px] font-medium">{skill.name}</span>
                  <span className="text-[15px] font-medium">{skill.percentage}%</span>
                </div>
                <div className="relative h-[5px] bg-[#FDE3A7]">
                  <Progress
                    value={skill.percentage}
                    className="absolute inset-0"
                    indicatorClassName="bg-[#9C4A37]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};