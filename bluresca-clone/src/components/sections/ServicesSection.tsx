"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Services data
const services = [
  {
    id: 1,
    title: 'MARKETING',
    description: 'We have the network and strategies to bring you the immense audience required to flourish.',
    icon: 'https://ext.same-assets.com/405627677/2777540248.svg',
    slug: 'marketing',
    number: '01'
  },
  {
    id: 2,
    title: 'MANAGEMENT',
    description: 'We offer full-service management to keep you spending more time on creating beautiful content for your fans.',
    icon: 'https://ext.same-assets.com/405627677/3225579771.svg',
    slug: 'management',
    number: '02'
  },
  {
    id: 3,
    title: 'PRODUCTION',
    description: 'We pair creativity, data, and the latest trends to provide guidance that ensures your content achieves virality.',
    icon: 'https://ext.same-assets.com/405627677/1269660704.svg',
    slug: 'production',
    number: '03'
  },
  {
    id: 4,
    title: 'ANTI-PIRACY',
    description: 'We offer 24/7 anti-piracy protection and takedowns of illegal copies of your content.',
    icon: 'https://ext.same-assets.com/405627677/286459257.svg',
    slug: 'anti-piracy',
    number: '04'
  }
];

const ServiceCard = ({ service, isInView }: { service: typeof services[0], isInView: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !isInView) return;

    const card = cardRef.current;
    const icon = card.querySelector('.service-icon');
    const title = card.querySelector('.service-title');
    const description = card.querySelector('.service-description');
    const link = card.querySelector('.service-link');
    const number = card.querySelector('.service-number');

    // Create line separator
    const line = document.createElement('div');
    line.className = 'w-full h-px bg-white/10 transform-gpu origin-left';
    card.parentNode?.insertBefore(line, card);

    gsap.set([icon, title, description, link], {
      y: 20,
      opacity: 0
    });

    gsap.set(line, {
      scaleX: 0,
      opacity: 0
    });

    // Animate line first
    gsap.to(line, {
      scaleX: 1,
      opacity: 1,
      duration: 0.8,
      delay: Number(service.number.replace('0', '')) * 0.15,
      ease: "power3.out"
    });

    // Then animate the card contents with staggered timing
    gsap.to([number, icon, title, description, link], {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      delay: Number(service.number.replace('0', '')) * 0.15 + 0.3,
      ease: "power2.out"
    });

  }, [isInView, service.number]);

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col py-8 border-t border-white/10"
    >
      <div className="flex items-center mb-4">
        <span className="service-number text-base text-white/60 w-12 font-light tracking-wider">{service.number}</span>
        <img
          src={service.icon}
          alt={service.title}
          className="service-icon w-6 h-6 text-white/70 mr-4"
        />
        <h3 className="service-title text-xl font-light tracking-wide uppercase">{service.title}</h3>
      </div>

      <p className="service-description text-white/70 pl-12 mb-4 text-sm leading-relaxed max-w-lg">{service.description}</p>

      <div className="mt-3 pl-12">
        <Link
          href={`/services/${service.slug}`}
          className="service-link text-sm text-white/90 hover:text-white flex items-center transition-colors uppercase tracking-wider"
        >
          Learn More
          <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Enhanced section animations
  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // Background animations
    const bgElements = sectionRef.current.querySelectorAll('.bg-element');

    gsap.fromTo(bgElements,
      { opacity: 0, scale: 0.9 },
      {
        opacity: (index) => {
          // Vary opacity based on element index to match Bluresca's look
          return [0.4, 0.3, 0.2, 0.15][index % 4];
        },
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out"
      }
    );

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden bg-black"
    >
      {/* Background design elements - exact match to Bluresca */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] circle-mesh-lg opacity-10 -translate-x-1/2 -translate-y-1/4 bg-element" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] circle-mesh-lg opacity-10 translate-x-1/2 translate-y-1/4 bg-element" />

      <div className="absolute left-[10%] top-[30%] w-1 h-60 diagonal-line opacity-20 bg-element" />
      <div className="absolute right-[15%] bottom-[40%] w-1 h-40 diagonal-line opacity-30 bg-element" />

      <div className="absolute left-[15%] top-[20%] bg-element">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="rgba(255,255,255,0.2)" />
        </svg>
      </div>

      <div className="absolute right-[10%] top-[35%] bg-element">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="rgba(255,255,255,0.15)" />
        </svg>
      </div>

      <div className="bluresca-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <h2
            ref={titleRef}
            className="section-title inline-block relative text-4xl md:text-5xl font-light font-cormorant tracking-wider uppercase"
          >
            SERVICES
            <div className="absolute -right-6 -top-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="rgba(255,255,255,0.6)" />
              </svg>
            </div>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto mt-6 text-base leading-relaxed"
          >
            We have the network and strategies to bring you the immense audience required to flourish.
          </motion.p>
        </motion.div>

        <div className="mt-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
