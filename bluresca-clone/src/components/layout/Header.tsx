"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect - exactly like Bluresca's
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Exact navigation links from Bluresca
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Models', href: '/models' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-black/90 backdrop-blur-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="bluresca-container flex items-center justify-between h-[60px]">
        {/* Desktop Nav Links - Left Side - exactly as Bluresca */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link text-[13px]">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center Logo - exactly as Bluresca */}
        <div className="flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:left-auto">
          <Link href="/" className="block">
            <img
              src="https://ext.same-assets.com/405627677/3898011052.svg"
              alt="Bluresca"
              className="h-8 md:h-10"
            />
          </Link>
        </div>

        {/* Desktop Right Items - exactly as Bluresca */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="https://www.instagram.com/bluresca/" target="_blank" rel="noopener noreferrer" className="nav-link text-[13px]">
            Instagram
          </Link>
          <Link
            href="/contact"
            className="bluresca-button"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button - exactly as Bluresca */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu - styled to match Bluresca */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black w-full border-t border-white/10 mt-1"
          >
            <div className="bluresca-container py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-link py-2 text-center text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-6">
                <Link
                  href="https://www.instagram.com/bluresca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Instagram
                </Link>
                <Link
                  href="/contact"
                  className="bluresca-button w-3/4 mx-auto text-center py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connect
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
