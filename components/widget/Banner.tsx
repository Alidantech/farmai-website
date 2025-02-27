"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Hand, ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="py-0 md:py-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/30891568/pexels-photo-30891568/free-photo-of-expansive-scenic-view-of-rural-harvest-fields.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Wheat field background"
            width={1400}
            height={400}
            className="w-full h-[200px] object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#ebd96b] rounded-full flex items-center justify-center">
                    <Hand className="w-8 h-8 text-gray-800" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-xl">
                    We're popular leader in agriculture market globally
                  </h2>
                </div>
                <Button className="hidden md:flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/90">
                  Discover More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
