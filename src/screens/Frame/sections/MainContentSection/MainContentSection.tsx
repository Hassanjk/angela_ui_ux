import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Blog post data for mapping
  const blogPosts = [
    {
      id: 1,
      date: "12 January, 2021",
      category: "Photography",
      title: "How to take pictures correctly",
      image: "/frame-119.svg", // Placeholder since actual image isn't specified
    },
    {
      id: 2,
      date: "13 February, 2021",
      category: "Journal",
      title: "Dostoevskiy Memorie",
      image: "/frame-119.svg", // Placeholder since actual image isn't specified
    },
    {
      id: 3,
      date: "13 February, 2021",
      category: "Photography",
      title: "Elegant women's clothing",
      image: "/frame-119.svg", // Placeholder since actual image isn't specified
    },
  ];

  // Navigation items
  const navItems = [
    { id: 1, label: "HOME" },
    { id: 2, label: "PAGES" },
    { id: 3, label: "BLOG" },
    { id: 4, label: "CONTACT" },
    { id: 5, label: "PORTFOLIO" },
  ];

  return (
    <section className="relative w-full">
      <img
        className="absolute w-[18px] h-[119px] top-[494px] left-[37px]"
        alt="Frame"
        src="/frame-119.svg"
      />

      <div className="absolute right-[93px] top-[284px] w-[3px] h-[541px] bg-[#fde3a7]">
        <div className="h-[149px] bg-[#9c4a37]" />
      </div>

      <div className="absolute bottom-[74px] right-[202px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fde3a7] text-base tracking-[0] leading-[22.4px]">
        © Centrix&nbsp;&nbsp;2021.
      </div>

      <img
        className="absolute w-[38px] h-[37px] bottom-[37px] left-[38px]"
        alt="Arrow"
        src="/arrow.svg"
      />

      <div className="absolute w-full h-[26px] top-11 left-0">
        <div className="absolute w-[454px] h-[18px] top-1 left-[315px] flex space-x-[40px]">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#fde3a7] text-[15px] tracking-[0] leading-normal whitespace-nowrap"
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="absolute top-[7px] right-[250px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-[#fde3a7] text-xl tracking-[0] leading-[18px] whitespace-nowrap">
          +2 325 452 32 35
        </div>

        <div className="absolute -top-px left-[37px] [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-[#fde3a7] text-[25px] tracking-[0] leading-[25px] whitespace-nowrap">
          SB.
        </div>
      </div>

      <div className="absolute w-[1290px] h-[647px] top-[217px] left-[315px]">
        <img
          className="absolute w-[79px] h-[49px] top-[191px] left-0"
          alt="Mask group"
        />

        <div className="absolute w-full h-full top-0 left-0">
          <div className="top-[39px] left-0 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#fde3a7] text-6xl tracking-[0] leading-[60px] absolute whitespace-nowrap">
            Latest News
          </div>

          <div className="absolute top-2.5 left-0 [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#9c4a37] text-[15px] tracking-[1.12px] leading-[19.5px] whitespace-nowrap">
            FROM THE BLOG
          </div>

          <div className="flex gap-[60px] absolute top-[197px]">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col gap-[28px]">
                <Card className="w-[390px] h-[354px] bg-[#c4c4c4] rounded-none border-none">
                  <CardContent className="p-0 h-full"></CardContent>
                </Card>

                <div className="flex flex-col gap-[12px]">
                  <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[15px] tracking-[0] leading-[19.5px] whitespace-nowrap">
                    <span className="text-[#9c4a37]">
                      {post.date}&nbsp;&nbsp;/&nbsp;&nbsp;
                    </span>
                    <span className="text-[#fde3a7]">{post.category}</span>
                  </div>

                  <div className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#fde3a7] text-[28px] tracking-[0] leading-[36.4px] whitespace-nowrap">
                    {post.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
