import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageTransition = ({ isLoading, onTransitionComplete, currentSection, prevSection, children }) => {
  const contentRef = useRef(null);
  const loaderRef = useRef(null);
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
        if (isInitialLoadRef.current && loaderRef.current) {
          // Initial loading animation
          const loaderTL = gsap.timeline({
            defaults: {
              duration: 0.8,
              ease: 'power2.inOut'
            }
          });

          loaderTL
            .to(loaderRef.current, {
              scale: 1.2,
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                // Hide loader
                gsap.set(loaderRef.current, { display: 'none' });
                
                // Fade in content
                gsap.to(contentRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: 'power2.out',
                  onComplete: () => onTransitionComplete?.()
                });
              }
            });
          
          tlRef.current = loaderTL;
          isInitialLoadRef.current = false;
        } else {
          // For navigation between sections
          const slideUpSections = ['about', 'contact', 'portfolio'];
          const isSlideTransition = slideUpSections.includes(currentSection) && slideUpSections.includes(prevSection);
          
          if (slideUpSections.includes(currentSection)) {
            if (isSlideTransition) {
              gsap.set('#page-transition-overlay', { display: 'none' });
              gsap.set(contentRef.current, { 
                opacity: 0,
                y: 100
              });
              
              tlRef.current = gsap.timeline({
                defaults: {
                  duration: 0.6,
                  ease: 'power2.inOut',
                },
                onComplete: () => {
                  onTransitionComplete?.();
                }
              })
              .to(contentRef.current, {
                opacity: 1,
                y: 0,
              });
            } else {
              gsap.set(contentRef.current, { 
                opacity: 0,
                y: 100
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
                y: 0,
              });
            }
          } else {
            gsap.set('#page-transition-overlay', { 
              display: 'block',
              opacity: 0,
              backgroundColor: '#0e0e0e'
            });
            
            tlRef.current = gsap.timeline({
              defaults: { ease: 'power2.inOut' },
            })
            .to('#page-transition-overlay', {
              opacity: 1,
              duration: 0.3,
              onComplete: () => {
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
      
      {/* Initial loader */}
      {isInitialLoadRef.current && (
        <div 
          ref={loaderRef} 
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '3px solid #fde3a7',
            borderTopColor: 'transparent',
            animation: 'spin 1s linear infinite',
            zIndex: 20
          }}
        />
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