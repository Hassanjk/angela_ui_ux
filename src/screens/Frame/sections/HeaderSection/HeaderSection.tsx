import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "PAGES", href: "#" },
    { label: "BLOG", href: "#" },
    { label: "CONTACT", href: "#" },
    { label: "PORTFOLIO", href: "#" },
  ];

  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Main container */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-8">
        {/* Header navigation */}
        <div className="flex items-center justify-between pt-8">
          <a href="#" className="text-[#FDE3A7] text-2xl">SB.</a>

          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-[#FDE3A7] text-sm tracking-[1.5px] hover:text-[#9C4A37] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="tel:+2325452325" className="text-[#FDE3A7] text-xl">
            +2 325 452 32 35
          </a>
        </div>

        {/* Hero content */}
        <div className="flex h-[calc(100vh-96px)]">
          {/* Left sidebar - Social links */}
          <div className="flex flex-col justify-center space-y-8 w-12">
            <a href="#" className="text-[#FDE3A7] hover:text-[#9C4A37] transition-colors">
              <img src="/mask-group.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#FDE3A7] hover:text-[#9C4A37] transition-colors">
              <img src="/2.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#FDE3A7] hover:text-[#9C4A37] transition-colors">
              <img src="/mask-group-1.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center pl-20">
            <div className="flex items-center">
              <h1 className="text-[#FDE3A7] text-[140px] leading-[133px] font-normal mb-16">
                Sam<br />Bailey
              </h1>
              <Button
                className="w-[105px] h-[105px] rounded-full bg-[#9C4A37] hover:bg-[#9C4A37]/90 ml-12"
                size="icon"
              >
                <img src="/polygon-1.svg" alt="Play" className="w-5 h-5 ml-1" />
              </Button>
            </div>

            <p className="text-[#FDE3A7] text-[25px] leading-[32.5px] font-normal">
              Hello, my name is Sam Luise,<br />
              i'm designer
            </p>
          </div>

          {/* Right progress bar */}
          {/* <div className="w-[3px] h-full ml-20 relative">
            <div className="absolute inset-0 bg-[#FDE3A7]">
              <div className="absolute top-0 left-0 w-full h-[149px] bg-[#9C4A37]" />
            </div>
          </div> */}
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 w-[calc(100%-4rem)] flex justify-between items-center">
          <img src="/arrow.svg" alt="Arrow" className="w-[38px] h-[37px]" />
          <p className="text-[#FDE3A7] text-base">© Centrix 2021.</p>
        </div>
      </div>
    </section>
  );
};