"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const lineRef1 = useRef<HTMLDivElement>(null);
  const lineRef2 = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Matches exact Bluresca animations
  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();

    // Create the animation sequence that matches Bluresca exactly
    gsap.set([starRef.current, circleRef.current, lineRef1.current, lineRef2.current, dotRef.current], {
      opacity: 0
    });

    tl.to([starRef.current, circleRef.current, lineRef1.current, lineRef2.current, dotRef.current], {
      opacity: 1,
      stagger: 0.15,
      duration: 1.2,
      ease: "power1.inOut"
    });

    // Continuous subtle animations
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 180,
      repeat: -1,
      ease: "none"
    });

    gsap.to(starRef.current, {
      rotation: 20,
      duration: 15,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black"
    >
      {/* Background elements positioned exactly as in Bluresca */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Small circle at bottom left - exactly as Bluresca */}
        <div className="absolute bottom-[12%] left-[15%] w-20 h-20">
          <div ref={dotRef} className="w-full h-full circle-grid-sm opacity-40" />
        </div>

        {/* Large circle at right - exactly as Bluresca */}
        <div className="absolute right-[10%] top-[50%] translate-y-[-50%] w-[500px] h-[500px]">
          <div ref={circleRef} className="w-full h-full circle-grid opacity-50" />
        </div>

        {/* Diagonal line 1 - exactly as Bluresca */}
        <div
          className="absolute left-[5%] top-[20%] w-[400px] h-1 opacity-30 origin-top-left"
          style={{ transform: 'rotate(45deg)' }}
          ref={lineRef1}
        >
          <div className="w-full h-px bg-white opacity-10" />
        </div>

        {/* Diagonal line 2 - exactly as Bluresca */}
        <div
          className="absolute right-[40%] bottom-[10%] w-[300px] h-1 opacity-30 origin-bottom-right"
          style={{ transform: 'rotate(45deg)' }}
          ref={lineRef2}
        >
          <div className="w-full h-px bg-white opacity-10" />
        </div>

        {/* Star decoration - exactly as Bluresca */}
        <div
          ref={starRef}
          className="absolute right-[20%] top-[25%]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="bluresca-container relative z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-full md:w-1/2 text-center md:text-left mb-16 md:mb-0">
            {/* Heading with the exact styling as Bluresca */}
            <h1 className="headline-xl relative">
              <span className="block leading-tight">UNLOCK</span>
              <div className="relative inline-block mt-1">
                <span className="leading-tight">YOUR POTENTIAL</span>
                {/* Small star icon positioned exactly as on Bluresca */}
                <div className="absolute -top-6 -right-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
                  </svg>
                </div>
              </div>
            </h1>
          </div>

          {/* Image section - with exact Bluresca positioning */}
          <div className="w-full md:w-1/3 relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://ext.same-assets.com/405627677/3040771988.jpeg"
                alt="Lily Lanes"
                className="w-full h-full object-cover"
              />
              {/* Overlay with name styled exactly as Bluresca */}
              <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-black/80 to-transparent">
                <Link href="/models/lily-lanes" className="text-lg text-white hover:text-opacity-80 transition-opacity">
                  Lily Lanes
                </Link>
              </div>
            </div>

            {/* Numbers on the right - exactly as in Bluresca */}
            <div className="absolute right-[-20px] top-[30%] text-white/40 text-xs flex flex-col items-center">
              <div>0</div>
              <div>2</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
