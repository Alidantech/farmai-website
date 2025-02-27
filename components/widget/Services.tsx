"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "tailwindcss/tailwind.css";

const services = [
  {
    title: "AI-Powered Crop Monitoring",
    category: "CROP HEALTH",
    description:
      "Monitor your crops with AI-driven analysis to detect diseases and optimize growth conditions.",
    image: "https://images.pexels.com/photos/6231839/pexels-photo-6231839.jpeg",
  },
  {
    title: "Weather & Rain Prediction",
    category: "FORECASTING",
    description:
      "Get accurate weather forecasts to plan your farming activities and mitigate climate risks.",
    image: "https://images.pexels.com/photos/209761/pexels-photo-209761.jpeg",
  },
  {
    title: "Smart Irrigation System",
    category: "WATER MANAGEMENT",
    description:
      "AI-powered irrigation ensures optimal water usage, reducing waste and improving yield.",
    image: "https://images.pexels.com/photos/7724746/pexels-photo-7724746.jpeg",
  },
  {
    title: "Soil Health Analysis",
    category: "FERTILIZATION",
    description:
      "Analyze soil nutrients with AI to recommend the best fertilizers and farming techniques.",
    image: "https://images.pexels.com/photos/7081021/pexels-photo-7081021.jpeg",
  },
];

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#517D36] py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-4 space-x-4">
            <div className="inline-block ml-4 rounded-full bg-white/10 px-4 py-1 text-sm text-white">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Smart Farming with Farm AI
            </h2>
          </div>
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
              style={{
                scrollBehavior: "initial"
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="min-w-[320px] md:min-w-[400px] bg-white rounded-3xl p-6 space-y-4 snap-start shadow-lg"
                >
                  <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-yellow-400 text-sm font-medium">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    className="rounded-full hover:bg-yellow-50 p-2"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hidden md:block"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hidden md:block"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
