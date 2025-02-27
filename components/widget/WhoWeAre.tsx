import { Trees, Tractor } from "lucide-react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/image.png"
                alt="Farmer using technology to optimize farming practices"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#ebd96b] p-8 rounded-2xl z-10">
              <div className="text-5xl font-bold mb-1">
                435<sup>+</sup>
              </div>
              <div className="text-sm">AI-Optimized Harvests</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="text-sm font-medium mb-2">What We Do</div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Enhancing Farming with AI and Data-Driven Insights
              </h2>
              <p className="mt-4 text-muted-foreground">
                Farm-AI is revolutionizing agriculture by using AI to predict
                weather patterns, suggest crop care strategies, and enhance
                farming techniques, leading to higher yields and sustainable
                farming practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 text-[#6d8c54]">
                  <Trees className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold">
                  AI-Driven Crop Recommendations
                </h3>
                <p className="text-muted-foreground">
                  Farm-AI analyzes soil, weather, and market data to recommend
                  the best crops for each season, improving productivity and
                  profitability for farmers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 text-[#6d8c54]">
                  <Tractor className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold">Smart Farming Tools</h3>
                <p className="text-muted-foreground">
                  Our platform integrates with smart equipment that helps
                  optimize farming processes, reduce waste, and enhance
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
