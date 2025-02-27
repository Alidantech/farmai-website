"use client";

import { Phone, Search, ArrowRight, X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div
          className={`container mx-auto px-4 md:pr-0 flex items-center justify-between ${
            scrolled ? "h-14" : "h-16"
          } transition-all duration-500`}
        >
          <div className="flex items-center gap-2">
            {/* <Image
              src="/placeholder.svg"
              alt="StreamLine Logo"
              width={40}
              height={40}
              className="rounded"
            /> */}
            <span
              className={`text-2xl font-medium ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              <b className="text-primary">Farm</b>.ai
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className={`text-sm font-medium hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              HOME
            </Link>
            <Link
              href="#features"
              className={`text-sm font-medium hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              FEATURES
            </Link>
            <Link
              href="#testimonials"
              className={`text-sm font-medium hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              TESTIMONIALS
            </Link>
            <Link
              href="#pricing"
              className={`text-sm font-medium hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              PRICING
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              CONTACT US
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div
              className={`flex items-center gap-2 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              <Phone size={18} />
              <span className="text-sm font-medium">Call us Now</span>
              <span className="text-sm font-medium">+1(213)255-511</span>
            </div>
            <div className="flex items-center gap-2 ">
              <Button
                variant="ghost"
                size="icon"
                className={
                  scrolled
                    ? ""
                    : "text-white hover:text-white hover:bg-white/20"
                }
              >
                <Search size={18} />
              </Button>
              <div
                className={`transition-background duration-300 ${
                  scrolled
                    ? "pr-4"
                    : "bg-white rounded-bl-2xl w-full h-full p-3 pr-2"
                }`}
              >
                <Button className="rounded-full bg-[#ebd96b] hover:bg-[#d9c85c] text-black">
                  Get In Touch
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="border-t bg-background px-4 text-center">
            <div className="container mx-auto py-4 flex flex-col gap-4">
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                FEATURES
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                TESTIMONIALS
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                PRICING
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
              <div className="flex items-center gap-2 pt-4 justify-center">
                <Phone size={18} />
                <span className="text-sm font-medium">Call us Now</span>
                <span className="text-sm font-medium">+1(213)255-511</span>
              </div>
              <Button className="mt-2 rounded-full bg-[#ebd96b] hover:bg-[#d9c85c] text-black">
                Get In Touch
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
