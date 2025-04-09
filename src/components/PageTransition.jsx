import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';

const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  });
};

const PageTransition = ({ isLoading, onTransitionComplete, currentSection, prevSection, children }) => {
  const layersRef = useRef(null);
  const contentRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      const init = async () => {
        const layers = [...layersRef.current.querySelectorAll('.layers__item')];
        
        gsap.set(layers, {
          opacity: 0,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        });
        
        // Set initial position of content - hidden and positioned below viewport
        gsap.set(contentRef.current, { 
          opacity: 0,
          y: 100 // Start from below
        });
        
        await preloadImages('.layers__item-img');

        const allItems = layers;
        const lastItem = layers[layers.length - 1];
        const allInnerItems = layers.map(item => item.querySelector('.layers__item-img'));

        gsap.to(layers, {
          opacity: 1,
          duration: 0.1,
          stagger: 0
        });

        tlRef.current = gsap.timeline({
          defaults: {
            duration: 1.2,
            ease: 'power2.inOut',
          },
          onComplete: () => {
            // Animate content sliding up after transition completes
            gsap.to(contentRef.current, {
              opacity: 1,
              y: 0, // Slide up to final position
              duration: 0.8,
              ease: 'power2.out',
              onComplete: () => {
                onTransitionComplete?.();
              }
            });
          }
        })
        .fromTo(allItems, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        }, {
          stagger: {
            each: 0.1,
            onComplete: function() {
              const targetElement = this.targets()[0];
              const index = layers.indexOf(targetElement);
              if (index) {
                gsap.set(layers[index-1], {opacity: 0});
              }
            },
          },
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }, 0)
        .fromTo(allInnerItems, {
          scale: 1.2,
          filter: 'brightness(50%)'
        }, {
          scale: 1,
          filter: 'brightness(100%)',
          stagger: 0.1,
        }, 0)
        .to(lastItem, {
          duration: 1,
          ease: 'power4',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          onComplete: () => gsap.set(lastItem, {opacity: 0})
        }, '>');
      };

      init();
    }

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, [isLoading, currentSection]);

  return (
    <>
      <div className="content">
        <div className="layers" ref={layersRef}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="layers__item">
              <div 
                className="layers__item-img" 
                style={{backgroundImage: `url(/images/${num}.jpg)`}}
              />
            </div>
          ))}
        </div>
        <div 
          className="content__inner" 
          ref={contentRef}
          style={{
            opacity: 0,
            position: 'relative',
            zIndex: 10,
            minHeight: '100vh',
            width: '100%',
            transform: 'translateY(100px)' // Initial position before animation
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default PageTransition;