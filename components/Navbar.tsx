'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass backdrop-blur-xl border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-primary font-headline">
          The Black Sheep Bistro
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 font-body antialiased tracking-tight">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={isActive(link.href) 
                ? "text-primary border-b border-primary/50 pb-1" 
                : "text-on-surface-variant hover:text-primary transition-colors duration-300"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <Link 
            href="/reservations"
            className="hidden sm:block gold-gradient text-on-primary-fixed px-4 md:px-6 py-2 md:py-2.5 rounded-md font-semibold text-sm transition-transform active:scale-95 duration-500"
          >
            Find a Table
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full mobile-menu-glass backdrop-blur-xl border-t border-outline-variant/20 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                isActive(link.href) 
                  ? "text-primary bg-primary/10 border-l-2 border-primary" 
                  : "text-on-surface hover:text-primary hover:bg-surface-container-high"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-outline-variant/20">
            <Link 
              href="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center gold-gradient text-on-primary-fixed px-6 py-3 rounded-md font-semibold text-base transition-transform active:scale-95"
            >
              Find a Table
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-[72px] bg-black/50 z-[-1]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
