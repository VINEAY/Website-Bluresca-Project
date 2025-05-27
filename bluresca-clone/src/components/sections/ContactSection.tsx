"use client";

import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    tiktok: '',
    twitter: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const circleRef1 = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const lineRef1 = useRef<HTMLDivElement>(null);
  const lineRef2 = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Enhanced animations
  useEffect(() => {
    if (!sectionRef.current) return;

    // Background animations
    gsap.fromTo([circleRef1.current, circleRef2.current],
      { opacity: 0, scale: 0.8 },
      {
        opacity: 0.2,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out"
      }
    );

    gsap.fromTo([lineRef1.current, lineRef2.current],
      { opacity: 0, scaleX: 0.5, scaleY: 0.5 },
      {
        opacity: 0.3,
        scaleX: 1,
        scaleY: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out"
      }
    );

    // Title animation
    if (titleRef.current) {
      // Split text into spans for letter animation
      const title = titleRef.current;
      const text = title.innerText;
      const words = text.split(' ');

      title.innerHTML = '';
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = wordIndex === 0 ? 'block' : 'block mt-2';

        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.className = 'char inline-block opacity-0';
          charSpan.textContent = word[i];
          wordSpan.appendChild(charSpan);
        }

        title.appendChild(wordSpan);
        if (wordIndex < words.length - 1) {
          title.appendChild(document.createElement('br'));
        }
      });

      const chars = title.querySelectorAll('.char');
      gsap.to(chars, {
        opacity: 1,
        stagger: 0.02,
        duration: 0.4,
        ease: "power2.inOut",
        delay: 0.3
      });
    }

    // Form inputs animation
    if (formRef.current && isInView) {
      const inputs = formRef.current.querySelectorAll('input, textarea');
      gsap.fromTo(inputs,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.6,
          ease: "power2.out"
        }
      );
    }

  }, [isInView]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Animate the success message
      if (formRef.current) {
        gsap.to(formRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.inOut"
        });
      }
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden bg-black"
      id="contact"
    >
      {/* Background design elements - exact match to Bluresca */}
      <div
        ref={circleRef1}
        className="absolute left-0 top-0 w-[600px] h-[600px] circle-mesh-lg opacity-0 -translate-x-1/4 -translate-y-1/4"
      />
      <div
        ref={circleRef2}
        className="absolute right-0 bottom-0 w-[600px] h-[600px] circle-mesh-lg opacity-0 translate-x-1/4 translate-y-1/4"
      />

      <div
        ref={lineRef1}
        className="absolute left-[20%] top-[30%] w-1 h-[300px] diagonal-line opacity-0"
      />
      <div
        ref={lineRef2}
        className="absolute right-[15%] bottom-[25%] w-1 h-[200px] diagonal-line opacity-0"
      />

      <div className="bluresca-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            ref={titleRef}
            className="unlock-potential mb-6 text-5xl md:text-6xl font-light font-cormorant tracking-wider uppercase leading-[1.1]"
          >
            UNLOCK YOUR POTENTIAL
          </h2>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto text-center p-12 rounded-lg"
          >
            <h3 className="text-3xl font-light mb-4 font-cormorant uppercase tracking-wider">Thanks for reaching out!</h3>
            <p className="text-white/70 text-lg">We'll be in touch shortly</p>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto"
          >
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name *"
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 px-0 focus:outline-none text-white text-sm font-light placeholder:text-white/40 transition-all duration-300"
                value={formState.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email *"
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 px-0 focus:outline-none text-white text-sm font-light placeholder:text-white/40 transition-all duration-300"
                value={formState.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 px-0 focus:outline-none text-white text-sm font-light placeholder:text-white/40 transition-all duration-300"
                value={formState.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="instagram" className="sr-only">Instagram</label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                placeholder="Instagram"
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 px-0 focus:outline-none text-white text-sm font-light placeholder:text-white/40 transition-all duration-300"
                value={formState.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tiktok" className="sr-only">TikTok</label>
              <input
                id="tiktok"
                name="tiktok"
                type="text"
                placeholder="TikTok"
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 px-0 focus:outline-none text-white text-sm font-light placeholder:text-white/40 transition-all duration-300"
                value={formState.tiktok}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="twitter" className="sr-only">Twitter</label>
              <input
                id="twitter"
                name="twitter"
                type="text"
                placeholder="Twitter"
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 px-0 focus:outline-none text-white text-sm font-light placeholder:text-white/40 transition-all duration-300"
                value={formState.twitter}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 px-0 focus:outline-none text-white text-sm font-light placeholder:text-white/40 transition-all duration-300 resize-none"
                value={formState.message}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2 flex justify-center mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-2.5 text-[13px] font-light tracking-[0.15em] uppercase relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send'}
                </span>
                <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
