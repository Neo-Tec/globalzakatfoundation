"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 
      ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-zakat-primary">
              GlobalZakat
            </span>
            <span className="text-2xl font-heading font-light text-zakat-accent">
              Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover-underline font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/mission"
              className="text-foreground hover-underline font-medium transition-colors"
            >
              Mission
            </Link>
            <Link
              href="/#about"
              className="text-foreground hover-underline font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover-underline font-medium transition-colors"
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-zakat-primary hover:bg-zakat-dark text-white font-medium animate-pulse-gentle"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground py-2 hover:text-zakat-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-foreground py-2 hover:text-zakat-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-foreground py-2 hover:text-zakat-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/mission"
                className="text-foreground py-2 hover:text-zakat-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mission
              </Link>
              <Link
                href="/#contact"
                className="text-foreground py-2 hover:text-zakat-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                asChild
                className="bg-zakat-primary hover:bg-zakat-dark text-white w-full"
              >
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
