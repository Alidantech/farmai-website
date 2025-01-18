"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "About us", href: "#about" },
    { name: "Our solutions", href: "#solutions" },
    { name: "Impact", href: "#impact" },
    { name: "Get involved", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-10 transition-all ${
          scrolled ? "bg-background shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-2 md:py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold flex items-center space-x-2">
              <Image
                className="rounded-full mt-1 mr-1"
                src="/logo.png"
                alt="Farmai"
                width={20}
                height={20}
              />
              Farmai
            </h1>
          </div>
          <div className="flex space-x-4">
            <nav className="hidden md:block font-semibold">
              <ul className="flex space-x-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="block md:hidden">
              <Link href="#contact">
                <Button>Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
