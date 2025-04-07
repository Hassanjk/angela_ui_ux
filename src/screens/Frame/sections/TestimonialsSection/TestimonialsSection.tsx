import React, { useEffect } from "react";

const testimonials = [
  {
    quote: "We make our customers' products valuable in the eyes of customers. To do this, we analyze and study people, build long-term strategies for interacting with them, develop creative ideas our customers' products valuable in the eyes of",
    name: "Dwight Schrute",
    designation: "CREATIVE MARKET INC.",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop"
  },
  {
    quote: "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond. I'll definitely keep returning for more exceptional creative experiences.",
    name: "Michael Scott",
    designation: "DESIGN DIRECTOR",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop"
  },
  {
    quote: "Creative & dedicated is things that gilber studio brings for your business. The impeccable service and overall attention to detail created a memorable experience.",
    name: "Jim Halpert",
    designation: "ART DIRECTOR",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop"
  }
];

export const TestimonialsSection = (): JSX.Element => {
  useEffect(() => {
    let activeIndex = 0;
    let autoplayInterval: NodeJS.Timeout;
    const imageContainer = document.getElementById("image-container");
    const nameElement = document.getElementById("name");
    const designationElement = document.getElementById("designation");
    const quoteElement = document.getElementById("quote");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    function calculateGap(width: number) {
      const minWidth = 1024;
      const maxWidth = 1456;
      const minGap = 60;
      const maxGap = 86;

      if (width <= minWidth) return minGap;
      if (width >= maxWidth)
        return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));

      return (
        minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
      );
    }

    function updateTestimonial(direction: number) {
      if (!imageContainer || !nameElement || !designationElement || !quoteElement) return;

      activeIndex = (activeIndex + direction + testimonials.length) % testimonials.length;

      const containerWidth = imageContainer.offsetWidth;
      const gap = calculateGap(containerWidth);
      const maxStickUp = gap * 0.8;

      testimonials.forEach((testimonial, index) => {
        let img = imageContainer.querySelector(`[data-index="${index}"]`) as HTMLImageElement;
        if (!img) {
          img = document.createElement("img");
          img.src = testimonial.src;
          img.alt = testimonial.name;
          img.classList.add("testimonial-image");
          img.dataset.index = index.toString();
          imageContainer.appendChild(img);
        }

        const offset = (index - activeIndex + testimonials.length) % testimonials.length;
        const zIndex = testimonials.length - Math.abs(offset);
        const opacity = index === activeIndex ? 1 : 1;
        const scale = index === activeIndex ? 1 : 0.85;

        let translateX, translateY, rotateY;
        if (offset === 0) {
          translateX = "0%";
          translateY = "0%";
          rotateY = "0deg";
        } else if (offset === 1 || offset === -2) {
          translateX = "20%";
          translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
          rotateY = "-15deg";
        } else {
          translateX = "-20%";
          translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
          rotateY = "15deg";
        }

        img.style.zIndex = zIndex.toString();
        img.style.opacity = opacity.toString();
        img.style.transform = `translate(${translateX}, ${translateY}) scale(${scale}) rotateY(${rotateY})`;
      });

      nameElement.textContent = testimonials[activeIndex].name;
      designationElement.textContent = testimonials[activeIndex].designation;
      quoteElement.innerHTML = testimonials[activeIndex].quote
        .split(" ")
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      animateWords();
    }

    function animateWords() {
      if (!quoteElement) return;
      const words = quoteElement.querySelectorAll(".word");
      words.forEach((word, index) => {
        const wordEl = word as HTMLElement;
        wordEl.style.opacity = "0";
        wordEl.style.transform = "translateY(10px)";
        wordEl.style.filter = "blur(10px)";
        setTimeout(() => {
          wordEl.style.transition =
            "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out";
          wordEl.style.opacity = "1";
          wordEl.style.transform = "translateY(0)";
          wordEl.style.filter = "blur(0)";
        }, index * 20);
      });
    }

    function handleNext() {
      updateTestimonial(1);
    }

    function handlePrev() {
      updateTestimonial(-1);
    }

    // Initial setup
    updateTestimonial(0);

    // Add event listeners
    prevButton?.addEventListener("click", handlePrev);
    nextButton?.addEventListener("click", handleNext);

    // Autoplay functionality
    autoplayInterval = setInterval(handleNext, 5000);

    // Stop autoplay on user interaction
    [prevButton, nextButton].forEach((button) => {
      button?.addEventListener("click", () => {
        clearInterval(autoplayInterval);
      });
    });

    // Handle window resize
    const handleResize = () => updateTestimonial(0);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      prevButton?.removeEventListener("click", handlePrev);
      nextButton?.removeEventListener("click", handleNext);
      window.removeEventListener("resize", handleResize);
      clearInterval(autoplayInterval);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0e0e0e] py-20">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-16">
          <span className="text-[#9C4A37] text-[15px] tracking-[1.12px] uppercase">
            TESTIMONIALS
          </span>
          <h2 className="mt-[29px] text-[#FDE3A7] text-[60px] leading-[60px] max-w-[770px]">
            Creative & dedicated is things that gilber studio brings for your business
          </h2>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-grid">
            <div className="image-container" id="image-container"></div>
            <div className="testimonial-content">
              <div>
                <h3 className="name" id="name"></h3>
                <p className="designation" id="designation"></p>
                <p className="quote" id="quote"></p>
              </div>
              <div className="arrow-buttons">
                <button className="arrow-button prev-button" id="prev-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button className="arrow-button next-button" id="next-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};