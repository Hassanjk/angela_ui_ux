import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';

const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  });
};

const sectionContent = {
  about: {
    title: "About Me",
    text: "Passionate UI/UX designer with a keen eye for detail and a drive for creating intuitive, user-centered experiences. My approach combines aesthetic excellence with functional design principles."
  },
  portfolio: {
    title: "Portfolio",
    text: "Explore my collection of work spanning digital products, brand identities, and interactive experiences. Each project represents a unique challenge and creative solution."
  },
  contact: {
    title: "Contact",
    text: "Let's create something amazing together. Whether you have a specific project in mind or just want to chat about possibilities, I'm here to help bring your vision to life."
  }
};

const PageTransition = ({ section }) => {
  const layersRef = useRef(null);
  const contentRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    // Initially hide content
    gsap.set(contentRef.current, { opacity: 0 });
    
    const init = async () => {
      const layers = [...layersRef.current.querySelectorAll('.layers__item')];
      
      gsap.set(layers, {
        opacity: (index) => index === layers.length - 1 ? 1 : 0,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      });
      
      await preloadImages('.layers__item-img');

      const allItems = layers;
      const lastItem = layers[layers.length - 1];
      const allInnerItems = layers.map(item => item.querySelector('.layers__item-img'));

      gsap.set(layers, { opacity: 1 });

      tlRef.current = gsap.timeline({
        defaults: {
          duration: 1.4,
          ease: 'power3.inOut',
        },
        onComplete: () => {
          // Show content after animation completes
          gsap.to(contentRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      })
      .fromTo(allItems, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
      }, {
        stagger: {
          each: 0.2,
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
        yPercent: 0,
        filter: 'brightness(30%)'
      }, {
        stagger: 0.2,
        filter: 'brightness(100%)'
      }, 0)
      .to(lastItem, {
        duration: 1,
        ease: 'power4',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        onComplete: () => gsap.set(lastItem, {opacity: 0})
      }, '<');
    };

    init();

    // Cleanup function
    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, [section]);

  const content = sectionContent[section];

  return (
    <div className="content">
      <div className="content__inner" ref={contentRef}>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
      </div>
      <div className="layers" ref={layersRef}>
        <div className="layers__item">
          <div className="layers__item-img" style={{backgroundImage: 'url(/images/6.jpg)'}}></div>
        </div>
        <div className="layers__item">
          <div className="layers__item-img" style={{backgroundImage: 'url(/images/2.jpg)'}}></div>
        </div>
        <div className="layers__item">
          <div className="layers__item-img" style={{backgroundImage: 'url(/images/3.jpg)'}}></div>
        </div>
        <div className="layers__item">
          <div className="layers__item-img" style={{backgroundImage: 'url(/images/4.jpg)'}}></div>
        </div>
        <div className="layers__item">
          <div className="layers__item-img" style={{backgroundImage: 'url(/images/5.jpg)'}}></div>
        </div>
        <div className="layers__item">
          <div className="layers__item-img" style={{backgroundImage: 'url(/images/1.jpg)'}}></div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;