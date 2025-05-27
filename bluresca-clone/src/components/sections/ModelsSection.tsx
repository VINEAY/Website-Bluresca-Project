"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

// Updated model data with actual images from the original site
const models = [
  {
    id: 1,
    name: 'Waifu Mia',
    image: 'https://ext.same-assets.com/405627677/4020220282.svg',
    slug: 'waifu-mia'
  },
  {
    id: 2,
    name: 'Scarlett Nior',
    image: 'https://ext.same-assets.com/405627677/914369201.svg',
    slug: 'scarlett-nior'
  },
  {
    id: 3,
    name: 'Addison Ivy',
    image: 'https://ext.same-assets.com/405627677/2822396790.svg',
    slug: 'addison-ivvy'
  },
  {
    id: 4,
    name: 'Lily Lanes',
    image: 'https://ext.same-assets.com/405627677/2449337300.svg',
    slug: 'lily-lanes'
  },
  {
    id: 5,
    name: 'Layla Adeline',
    image: 'https://ext.same-assets.com/405627677/3417929845.svg',
    slug: 'layla-adeline'
  },
  {
    id: 6,
    name: 'Flare',
    image: 'https://ext.same-assets.com/405627677/2862362159.svg',
    slug: 'flare'
  },
  {
    id: 7,
    name: 'Ana Nello',
    image: 'https://ext.same-assets.com/405627677/344353310.svg',
    slug: 'ana-nello'
  },
  {
    id: 8,
    name: 'Lems',
    image: 'https://ext.same-assets.com/405627677/2563800099.svg',
    slug: 'lems'
  },
  {
    id: 9,
    name: 'Ashtyn Sommer',
    image: 'https://ext.same-assets.com/405627677/1178140377.svg',
    slug: 'ashtyn-sommer'
  },
  {
    id: 10,
    name: 'Cherry Cat',
    image: 'https://ext.same-assets.com/405627677/2308280058.svg',
    slug: 'cherry-cat'
  },
  {
    id: 11,
    name: 'Mia Francis',
    image: 'https://ext.same-assets.com/405627677/3815702122.svg',
    slug: 'mia-francis'
  }
];

const ModelCard = ({ model }: { model: typeof models[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Hover effect with GSAP
  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const image = card.querySelector('img');
    const overlay = card.querySelector('.overlay');
    const text = card.querySelector('h3');

    // Setting initial states
    gsap.set(overlay, { opacity: 0 });
    gsap.set(text, { opacity: 0, y: 10 });

    // Mouse enter animation
    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.8,
        ease: "power2.out"
      });
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });
      gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out"
      });
    };

    // Mouse leave animation
    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut"
      });
      gsap.to(text, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.in"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative block h-full overflow-hidden bg-neutral-900 aspect-[3/4] group cursor-pointer rounded-[10px] shadow-lg"
    >
      <Link href={`/models/${model.slug}`} className="absolute inset-0 z-20">
        <span className="sr-only">View {model.name}</span>
      </Link>
      <img
        src={model.image}
        alt={model.name}
        className="w-full h-full object-contain transition-transform duration-700"
        loading="lazy"
      />
      <div className="overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none rounded-[10px]" />
      <h3 className="absolute bottom-4 left-4 text-xl font-light z-10 text-white drop-shadow-md">{model.name}</h3>
    </div>
  );
};

const ModelsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Enhanced section animations
  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !gridRef.current) return;

    // Add a slide-in line under the title
    const titleLine = document.createElement('div');
    titleLine.className = 'h-[1px] bg-white/20 w-32 mx-auto mt-4 transform origin-left';
    titleRef.current.parentNode?.insertBefore(titleLine, titleRef.current.nextSibling);

    gsap.from(titleLine, {
      scaleX: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power2.out"
    });

    // Subtle background animations
    const lines = sectionRef.current.querySelectorAll('.diagonal-line');
    gsap.fromTo(lines,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 0.3,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out"
      }
    );

    // Advanced hover effects for the button
    if (buttonRef.current) {
      const button = buttonRef.current.querySelector('a');
      if (button) {
        const bg = button.querySelector('.button-bg');
        if (bg) {
          const onMouseEnter = () => {
            gsap.to(bg, {
              y: 0,
              duration: 0.3,
              ease: "power1.out"
            });
          };
          const onMouseLeave = () => {
            gsap.to(bg, {
              y: '100%',
              duration: 0.3,
              ease: "power1.in"
            });
          };
          button.addEventListener('mouseenter', onMouseEnter);
          button.addEventListener('mouseleave', onMouseLeave);

          return () => {
            button.removeEventListener('mouseenter', onMouseEnter);
            button.removeEventListener('mouseleave', onMouseLeave);
          };
        }
      }
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden bg-black"
    >
      {/* Background design elements - exact match to Bluresca */}
      <div className="absolute left-1/2 top-24 w-1 h-40 diagonal-line opacity-0" />
      <div className="absolute right-20 bottom-40 w-1 h-60 diagonal-line opacity-0" />
      <div className="absolute left-20 top-1/3 w-[500px] h-[500px] circle-mesh-lg opacity-10 -translate-x-1/2" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] circle-mesh-lg opacity-10 translate-x-1/3 translate-y-1/4" />

      <div className="bluresca-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            ref={titleRef}
            className="section-title inline-block text-4xl md:text-5xl font-light font-cormorant tracking-wider uppercase"
          >
            Our Models
          </h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-8"
        >
          {models.slice(0, 12).map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <ModelCard model={model} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Link
            href="/models"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-2.5 text-[13px] font-light tracking-[0.15em] uppercase relative overflow-hidden group"
          >
            <span className="relative z-10">Discover More</span>
            <span className="button-bg absolute inset-0 bg-white/10 transform translate-y-full transition-transform duration-300 ease-in-out" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsSection;
