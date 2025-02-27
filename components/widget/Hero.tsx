"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[750px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto relative z-10 px-4 md:px-6 text-white flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <div className="inline-block rounded-full border border-primary px-3 py-1 text-sm mb-6">
            SMART FARMING MADE EASY!
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Making You Farm Smarter with
            <br />
            <span className="text-primary">Farm-AI</span>
          </h1>

          <p className="text-sm md:text-lg text-white/80 mb-8 max-w-xl">
            Get AI-powered farming insights, accurate weather forecasts, and
            smart recommendations to maximize your yield. <br />
            🌱 <strong>Better Planning. Higher Profits.</strong> 🚜
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <Button className="rounded-full bg-primary text-white hover:bg-primary/60 px-8">
              Download Now
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-transparent hover:border-primary border-white hover:text-primary text-white px-8 hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side - Smaller Dummy Phone UI (Only on Large Screens) */}
        <div className="hidden md:flex mr-32 mt-10 items-center justify-center w-[200px] lg:w-[250px]">
          <div className="relative bg-black rounded-[20px] shadow-lg p-3 w-full aspect-[9/16] border-2 border-gray-700">
            {/* Screen Content */}
            <div className="bg-gray-900 rounded-lg h-full overflow-hidden flex flex-col">
              {/* App Header */}
              <div className="bg-primary text-white text-center py-2 font-bold">
                Farm-AI App
              </div>

              {/* Farming Content */}
              <div className="flex flex-col p-3 space-y-3">
                <div className="bg-gray-800 text-white p-2 rounded-md shadow">
                  🌤️ <strong>Weather:</strong> Rain expected in 2 days
                </div>
                <div className="bg-gray-800 text-white p-2 rounded-md shadow">
                  🌱 <strong>Best Crop:</strong> Maize recommended
                </div>
                <div className="bg-gray-800 text-white p-2 rounded-md shadow">
                  🚜 <strong>Tip:</strong> Use organic fertilizers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
