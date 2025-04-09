import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';

const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  });
};

const PageTransition = ({ isLoading, onTransitionComplete, currentSection, prevSection, children }) => {
  const contentRef = useRef(null);
  const layersRef = useRef(null);
  const tlRef = useRef(null);
  const isInitialLoadRef = useRef(true);

  useEffect(() => {
    // Set background color of body to prevent white flashes
    document.body.style.backgroundColor = '#0e0e0e';

    if (isLoading) {
      const init = async () => {
        // Set initial position of content - hidden and positioned below viewport
        gsap.set(contentRef.current, { 
          opacity: 0,
          y: 100 // Start from below
        });
        
        // Check if this is the initial page load
        if (isInitialLoadRef.current && layersRef.current) {
          const layers = [...layersRef.current.querySelectorAll('.layers__item')];
          
          gsap.set(layers, {
            opacity: 0,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
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

          // Create a sequence for the layer animations
          const layersTL = gsap.timeline({
            defaults: {
              duration: 1.2,
              ease: 'power2.inOut',
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
            opacity: 1, // Keep the last item visible instead of clipping it
            onComplete: () => {
              // Create a seamless transition by ensuring the next element is ready before fading out
              gsap.set(contentRef.current, {
                opacity: 0,
                y: 0, // Position content without transform to prevent rendering artifacts
                backgroundColor: '#0e0e0e'
              });
              
              // Fade out layers with a short duration to prevent flashing
              gsap.to(layersRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: 'power1.inOut',
                onComplete: () => {
                  // Hide layers container
                  gsap.set(layersRef.current, { display: 'none' });
                  
                  // Fade in content
                  gsap.to(contentRef.current, {
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power1.inOut',
                    onComplete: () => onTransitionComplete?.()
                  });
                }
              });
            }
          }, '>');
          
          tlRef.current = layersTL;
          
          // After initial load, set the flag to false for future transitions
          isInitialLoadRef.current = false;
        } else {
          // For navigation between sections
          await preloadImages();
          
          // Check if we're navigating to about, contact, or portfolio - use slide up for these
          if (currentSection === 'about' || currentSection === 'contact' || currentSection === 'portfolio') {
            // Use slide up animation for these specific sections
            gsap.set(contentRef.current, { 
              opacity: 0,
              y: 100 // Start from below
            });
            
            tlRef.current = gsap.timeline({
              defaults: {
                duration: 0.8,
                ease: 'power2.out',
              },
              onComplete: () => {
                onTransitionComplete?.();
              }
            })
            .to(contentRef.current, {
              opacity: 1,
              y: 0, // Slide up to final position
            });
          } else {
            // For other sections use the fade overlay transition
            // Set overlay to create smooth transition
            gsap.set('#page-transition-overlay', { 
              display: 'block',
              opacity: 0,
              backgroundColor: '#0e0e0e'
            });
            
            // First fade to black
            tlRef.current = gsap.timeline({
              defaults: { ease: 'power2.inOut' },
            })
            .to('#page-transition-overlay', {
              opacity: 1,
              duration: 0.3,
              onComplete: () => {
                // Switch content during black screen
                gsap.set(contentRef.current, {
                  opacity: 1,
                  y: 0
                });
              }
            })
            .to('#page-transition-overlay', {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                gsap.set('#page-transition-overlay', { display: 'none' });
                onTransitionComplete?.();
              }
            });
          }
        }
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
      {/* Dark overlay for page transitions */}
      <div 
        id="page-transition-overlay" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#0e0e0e',
          zIndex: 30,
          display: 'none'
        }}
      />
      
      {isInitialLoadRef.current && (
        <div className="layers" ref={layersRef} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 20,
          backgroundColor: '#0e0e0e'
        }}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="layers__item" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}>
              <div 
                className="layers__item-img" 
                style={{
                  backgroundImage: `url(/images/${num}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      <div 
        className="content__inner" 
        ref={contentRef}
        style={{
          opacity: 0,
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          width: '100%',
          transform: 'translateY(100px)',
          backgroundColor: '#0e0e0e'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;