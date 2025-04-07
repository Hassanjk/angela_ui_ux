import React, { useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { preloadImages } from "../../../../utils";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = (): JSX.Element => {
  const projects = [
    {
      name: "A cup of coffee",
      image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80"
    },
    {
      name: "Exoape",
      image: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&q=80"
    },
    {
      name: "Gaming",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
    },
    {
      name: "Balenciaga",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    let lenis: Lenis;

    const initSmoothScrolling = () => {
      lenis = new Lenis({
        lerp: 0.2,
        smoothWheel: true
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      const contentElements = [...document.querySelectorAll('.project-sticky')];
      const totalContentElements = contentElements.length;

      contentElements.forEach((el, position) => {
        const isLast = position === totalContentElements - 1;
        const isPreLast = position === totalContentElements - 2;

        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: () => {
              if (isLast) {
                return 'top top';
              } else if (isPreLast) {
                return 'bottom top';
              } else {
                return 'bottom+=100% top';
              }
            },
            end: '+=100%',
            scrub: true
          }
        })
        .to(el, {
          ease: 'none',
          yPercent: -100
        }, 0)
        .fromTo(el.querySelector('.project-image'), {
          yPercent: 20,
          rotation: 40,
          scale: 0.8,
          filter: 'contrast(400%)'
        }, {
          ease: 'none',
          yPercent: -100,
          rotation: 0,
          scale: 1,
          filter: 'contrast(100%)',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'max',
            scrub: true
          }
        }, 0);
      });
    };

    const init = () => {
      initSmoothScrolling();
      scroll();
    };

    // Initialize after images are loaded
    preloadImages('.project-image').then(() => {
      document.body.classList.remove('loading');
      init();
    });

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0E0E0E]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <span className="text-[#9C4A37] text-[15px] tracking-[1.12px] uppercase block pt-20">
          LATEST PROJECTS
        </span>

        <div className="wrap">
          {projects.map((project, index) => (
            <div 
              key={project.name} 
              className={`project-sticky content content--sticky content--half ${
                index % 2 === 0 ? 'bg-1' : 'bg-2'
              } relative w-full md:w-1/2 ${
                index % 2 === 0 ? 'ml-0' : 'ml-auto'
              } min-h-screen flex flex-col justify-center px-4 md:px-8`}
            >
              <h2 className="text-[#FDE3A7] text-[60px] leading-[60px] mb-8 font-normal">
                <i className="font-normal">The</i> {project.name}
              </h2>
              
              <div className="project-image relative w-full h-[50vh] md:h-[674px] group overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[81px] h-[81px] rounded-full border border-[#FDE3A7] bg-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRightIcon className="w-6 h-6 text-[#FDE3A7]" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};