import React, { useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: formRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    const formElements = formRef.current?.querySelectorAll('.form-element');
    formElements?.forEach((element, index) => {
      tl.fromTo(element,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
        `-=0.3`
      );
    });
  }, []);

  return (
    <section className="relative w-full bg-[#0e0e0e] py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#fde3a7] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 2 + 1}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left Column - Contact Info */}
          <div>
            <span className="text-[#9c4a37] text-[15px] tracking-[1.12px] uppercase">
              GET IN TOUCH
            </span>
            <h2 
              ref={titleRef}
              className="text-[#fde3a7] text-6xl leading-[1.2] mt-4 mb-8"
            >
              Let's Create Something Amazing Together
            </h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#9c4a37]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#fde3a7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#fde3a7]/60 text-sm">Mail Us</p>
                  <p className="text-[#fde3a7] text-lg">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#9c4a37]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#fde3a7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#fde3a7]/60 text-sm">Call Us</p>
                  <p className="text-[#fde3a7] text-lg">+2 325 452 32 35</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form 
            ref={formRef}
            className="space-y-8 bg-[#fde3a7]/5 p-8 rounded-lg backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-element">
              <label className="block text-[#fde3a7] text-sm mb-2">Name</label>
              <Input 
                className="bg-transparent border-[#fde3a7]/20 text-[#fde3a7] focus:border-[#9c4a37] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="form-element">
              <label className="block text-[#fde3a7] text-sm mb-2">Email</label>
              <Input 
                type="email"
                className="bg-transparent border-[#fde3a7]/20 text-[#fde3a7] focus:border-[#9c4a37] transition-colors"
                placeholder="Your email"
              />
            </div>

            <div className="form-element">
              <label className="block text-[#fde3a7] text-sm mb-2">Message</label>
              <textarea 
                className="w-full h-32 bg-transparent border border-[#fde3a7]/20 rounded-md p-3 text-[#fde3a7] focus:border-[#9c4a37] transition-colors resize-none"
                placeholder="Your message"
              />
            </div>

            <Button 
              className="form-element w-full bg-[#9c4a37] hover:bg-[#9c4a37]/90 text-[#fde3a7] py-6 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};