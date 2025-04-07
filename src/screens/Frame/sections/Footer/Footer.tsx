import React from "react";
import { Button } from "../../../../components/ui/button";

export const Footer = (): JSX.Element => {
  const socialLinks = [
    { name: "Twitter", icon: "/2.svg" },
    { name: "Facebook", icon: "/mask-group.png" },
    { name: "LinkedIn", icon: "/mask-group-1.png" },
    { name: "Instagram", icon: "/mask-group-2.png" },
  ];

  const quickLinks = [
    "About Us",
    "Services",
    "Projects",
    "Blog",
    "Contact",
  ];

  return (
    <footer className="relative w-full bg-[#0e0e0e] pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#fde3a7]/10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-[#fde3a7] text-2xl font-medium mb-6">SB.</h3>
            <p className="text-[#fde3a7]/70 max-w-md mb-8">
              We make our customers' products valuable in the eyes of customers. 
              To do this, we analyze and study people, build long-term strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-[#9c4a37]/10 hover:bg-[#9c4a37]/20 transition-colors"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#fde3a7] text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-[#fde3a7]/70 hover:text-[#fde3a7] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#fde3a7] text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-[#fde3a7]/70 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border border-[#fde3a7]/20 rounded-l-md px-4 py-2 text-[#fde3a7] focus:outline-none focus:border-[#9c4a37]"
              />
              <Button 
                className="bg-[#9c4a37] hover:bg-[#9c4a37]/90 text-[#fde3a7] rounded-l-none"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-[#fde3a7]/70 text-sm">
            © 2024 SB. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#fde3a7]/70 text-sm hover:text-[#fde3a7] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#fde3a7]/70 text-sm hover:text-[#fde3a7] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};