import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const EducationDetailsSection = (): JSX.Element => {
  // Contact form data
  const navigationItems = [
    { label: "HOME", href: "#" },
    { label: "PAGES", href: "#" },
    { label: "BLOG", href: "#" },
    { label: "CONTACT", href: "#" },
    { label: "PORTFOLIO", href: "#" },
  ];

  const contactImages = [
    { src: "/mask-group-3.png", alt: "Mask group" },
    { src: "/mask-group-4.png", alt: "Mask group" },
    { src: "/mask-group-5.png", alt: "Mask group" },
    { src: "/mask-group-6.png", alt: "Mask group" },
  ];

  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <img
          className="w-[18px] h-[119px] absolute top-[494px] left-[37px]"
          alt="Frame"
          src="/frame-119-5.svg"
        />

        <div className="absolute right-[93px] top-[284px] w-[3px] h-[541px] bg-[#fde3a7]">
          <div className="h-[149px] bg-[#9c4a37]" />
        </div>

        <div className="absolute bottom-[37px] right-[202px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fde3a7] text-base tracking-[0] leading-[22.4px]">
          © Centrix&nbsp;&nbsp;2021.
        </div>

        <img
          className="absolute bottom-0 left-[38px] w-[38px] h-[37px]"
          alt="Arrow"
          src="/arrow.svg"
        />

        <nav className="absolute top-[44px] w-full flex justify-between items-center px-[37px]">
          <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-[#fde3a7] text-[25px] leading-[25px]">
            SB.
          </div>

          <ul className="flex space-x-[40px]">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#fde3a7] text-[15px] leading-normal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-[#fde3a7] text-xl leading-[18px]">
            +2 325 452 32 35
          </div>
        </nav>

        <div className="relative mx-auto w-full max-w-[1290px] mt-[263px] px-[37px]">
          <div className="mb-[29px]">
            <span className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#9c4a37] text-[15px] tracking-[1.12px] leading-[19.5px]">
              CONTACT
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col space-y-10">
              <h2 className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fde3a7] text-6xl leading-[60px]">
                Get in touch
              </h2>

              <p className="w-[309px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fde3a7] text-[15px] leading-[19.5px]">
                You&apos;ll called for yielding male, so lights Stars
                abundantly, is their.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-[100px]">
                {contactImages.map((image, index) => (
                  <img
                    key={index}
                    className="w-[108px] h-[70px] object-cover"
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fde3a7] text-[28px] leading-7">
                Sambayler@info.com
              </div>

              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-[#fde3a7] text-[28px] leading-[25.2px]">
                +2 325 452 32 35
              </div>

              <div className="mt-[100px] w-[630px]">
                <div className="mb-[50px]">
                  <label className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#fde3a7] text-[15px] tracking-[1.12px] leading-[19.5px]">
                    NAME
                  </label>
                  <Input className="border-0 border-b border-[#fde3a7] rounded-none bg-transparent h-[34px] px-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                </div>

                <div className="mb-[50px]">
                  <label className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#fde3a7] text-[15px] tracking-[1.12px] leading-[19.5px]">
                    E-MAIL
                  </label>
                  <Input className="border-0 border-b border-[#fde3a7] rounded-none bg-transparent h-[34px] px-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                </div>

                <div className="mb-[50px]">
                  <label className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#fde3a7] text-[15px] tracking-[1.12px] leading-[19.5px]">
                    MESSAGE
                  </label>
                  <Separator className="mt-[34px] bg-[#fde3a7]" />
                </div>

                <Button className="bg-[#9c4a37] hover:bg-[#9c4a37]/90 rounded-none px-[34px] py-[13px] h-auto transition-all duration-500 ease-in-out">
                  <span className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fde3a7] text-xs tracking-[0.60px] leading-3">
                    SUBMIT
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button className="absolute top-[-1171px] left-0 bg-[#9c4a37] hover:bg-[#9c4a37]/90 rounded-none px-[34px] py-[13px] h-auto transition-all duration-500 ease-in-out md:hidden">
        <span className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fde3a7] text-xs tracking-[0.60px] leading-3">
          DOWNLOAD RESUME
        </span>
      </Button>
    </section>
  );
};