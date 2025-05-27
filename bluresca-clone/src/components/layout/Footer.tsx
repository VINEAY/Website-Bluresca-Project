"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);
  const circleRef1 = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const lineRef1 = useRef<HTMLDivElement>(null);
  const lineRef2 = useRef<HTMLDivElement>(null);

  // Apply subtle animations to background elements
  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo([circleRef1.current, circleRef2.current],
      { opacity: 0, scale: 0.8 },
      {
        opacity: 0.1,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out"
      }
    );

    gsap.fromTo([lineRef1.current, lineRef2.current],
      { opacity: 0, scaleX: 0 },
      {
        opacity: 0.15,
        scaleX: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative pt-20 pb-8 overflow-hidden border-t border-white/10 bg-black"
    >
      {/* Background design elements - exact match to Bluresca */}
      <div
        ref={circleRef1}
        className="absolute left-0 bottom-0 w-80 h-80 circle-mesh opacity-0 -translate-y-1/4"
      />
      <div
        ref={circleRef2}
        className="absolute right-0 bottom-0 w-60 h-60 circle-mesh opacity-0 translate-y-1/4"
      />
      <div
        ref={lineRef1}
        className="absolute left-1/2 top-10 w-1 h-60 diagonal-line opacity-0"
      />
      <div
        ref={lineRef2}
        className="absolute right-40 bottom-40 w-1 h-60 diagonal-line opacity-0"
      />

      <div className="bluresca-container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
          {/* Links */}
          <div>
            <h3 className="text-lg font-light mb-6 uppercase tracking-wider font-cormorant">Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/models" className="text-white/70 hover:text-white transition-colors text-sm">Models</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-light mb-6 uppercase tracking-wider font-cormorant">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/management" className="text-white/70 hover:text-white transition-colors text-sm">Management</Link></li>
              <li><Link href="/services/marketing" className="text-white/70 hover:text-white transition-colors text-sm">Marketing</Link></li>
              <li><Link href="/services/production" className="text-white/70 hover:text-white transition-colors text-sm">Production</Link></li>
              <li><Link href="/services/anti-piracy" className="text-white/70 hover:text-white transition-colors text-sm">Anti-Piracy</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-light mb-6 uppercase tracking-wider font-cormorant">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.instagram.com/bluresca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/bluresca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@bluresca.com"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  <span>Email</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="md:col-span-3 lg:col-span-1 flex justify-center md:justify-end items-start">
            <Link href="/">
              <img
                src="https://ext.same-assets.com/405627677/3898011052.svg"
                alt="Bluresca"
                className="h-10"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm mb-4 md:mb-0">Copyright © {currentYear} BLURESCA All rights reserved.</p>

          {/* Mobile footer links */}
          <div className="flex space-x-6 items-center">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors text-xs">
              Home
            </Link>
            <Link href="/models" className="text-white/50 hover:text-white/80 transition-colors text-xs">
              Models
            </Link>
            <Link href="/about" className="text-white/50 hover:text-white/80 transition-colors text-xs">
              About
            </Link>
            <Link href="/contact" className="text-white/50 hover:text-white/80 transition-colors text-xs">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
