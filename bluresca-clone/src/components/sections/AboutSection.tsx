"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const starRef1 = useRef<HTMLDivElement>(null);
  const starRef2 = useRef<HTMLDivElement>(null);
  const starRef3 = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  // Animations that match Bluresca exactly
  useEffect(() => {
    if (!sectionRef.current) return;

    const stars = [starRef1.current, starRef2.current, starRef3.current];

    // Initialize visual elements
    gsap.set(stars, {
      opacity: 0,
      scale: 0.8
    });

    gsap.set(circleRef.current, {
      opacity: 0,
      scale: 0.9
    });

    // Animate stars
    gsap.to(stars, {
      opacity: 0.8,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    // Animate circle mesh
    gsap.to(circleRef.current, {
      opacity: 0.2,
      scale: 1,
      duration: 1.5,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    // Subtle rotation for stars
    for (const star of stars) {
      if (star) {
        gsap.to(star, {
          rotation: "+=25",
          duration: gsap.utils.random(10, 20),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }

    // Animate the heading
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%"
        }
      });
    }

    // Create horizontal line animation
    if (textRef.current) {
      const line = document.createElement('div');
      line.className = 'w-full max-w-[200px] h-px bg-white/20 mx-auto my-6 transform origin-left scale-x-0';
      textRef.current.parentNode?.insertBefore(line, textRef.current);

      gsap.to(line, {
        scaleX: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%"
        }
      });
    }

    return () => {
      // Cleanup ScrollTrigger instances
      const triggers = ScrollTrigger.getAll();
      for (const trigger of triggers) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden bg-black"
    >
      {/* Background elements - exactly as Bluresca */}
      <div
        ref={circleRef}
        className="absolute right-0 bottom-0 w-[600px] h-[600px] translate-x-1/3 translate-y-1/3"
      >
        <div className="w-full h-full circle-grid" />
      </div>

      <div ref={starRef1} className="absolute left-[10%] top-[30%]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
        </svg>
      </div>

      <div ref={starRef2} className="absolute right-[20%] top-[20%]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
        </svg>
      </div>

      <div ref={starRef3} className="absolute left-[25%] bottom-[25%]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
        </svg>
      </div>

      <div className="absolute left-0 top-[40%] w-[500px] h-1 opacity-10 origin-left" style={{ transform: 'rotate(45deg)' }}>
        <div className="w-full h-px bg-white opacity-30" />
      </div>

      <div className="bluresca-container relative z-10">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl font-light font-cormorant tracking-wider uppercase relative inline-block"
          >
            WORKING
            <div className="absolute -right-6 -top-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
              </svg>
            </div>
            <br />
            WITH BLURESCA
          </h2>

          <p
            ref={textRef}
            className="text-white/70 text-lg mt-6 max-w-2xl mx-auto"
          >
            Bluresca is a full-service talent management and digital marketing agency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24">
            <div className="text-center">
              <div className="text-lg font-light opacity-70 mb-4">01</div>
              <h3 className="text-3xl md:text-4xl font-light font-cormorant tracking-wider uppercase mb-4 leading-tight">
                WE UNITE BRANDS AND<br />CUSTOMERS THROUGH<br />ENGAGING CONTENT
              </h3>
            </div>

            <div className="text-center">
              <div className="text-lg font-light opacity-70 mb-4">02</div>
              <h3 className="text-3xl md:text-4xl font-light font-cormorant tracking-wider uppercase mb-4 leading-tight">
                WE HELP YOUR SOCIALS<br />REALIZE THEIR FULL<br />FINANCIAL POTENTIAL
              </h3>
            </div>
          </div>

          <div className="mt-20">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-2.5 text-[13px] font-light tracking-[0.15em] uppercase relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Connect</span>
              <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
