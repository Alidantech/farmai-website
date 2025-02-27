import { Hand, Factory, Sprout, Leaf } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "AI-Powered Crop Monitoring",
    description:
      "Monitor your crops with AI-driven analysis to detect diseases and optimize growth conditions.",
    icon: Hand,
  },
  {
    title: "Smart Irrigation System",
    description:
      "AI-powered irrigation ensures optimal water usage, reducing waste and improving yield.",
    icon: Factory,
  },
  {
    title: "Soil Health Analysis",
    description:
      "Analyze soil nutrients with AI to recommend the best fertilizers and farming techniques.",
    icon: Sprout,
  },
  {
    title: "Climate Adaptive Farming",
    description:
      "Use machine learning to adapt to climate change and predict the best planting seasons.",
    icon: Leaf,
  },
];
export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f8eb]">
      <div className="container flex flex-col my-4 w-full mx-auto px-4 md:px-6">
        <div className="inline-block mx-auto mb-4 rounded-full bg-gray-100 px-4 py-1 text-sm">
          Grow with AI
        </div>
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Choose What's Perfect <br /> For Your Field
        </h2>

        {/* Layout: Left Features - Corn Emoji - Right Features */}
        <div className="flex items-center flex-col md:flex-row justify-center gap-12 md:gap-16">
          {/* Left Features */}
          <div className="space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#ebd96b] rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Corn Emoji */}
          <div className="text-7xl">🌽</div>

          {/* Right Features */}
          <div className="space-y-6">
            {features.slice(2).map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#ebd96b] rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Image Gallery */}
      <div className="grid grid-cols-2 container mx-auto px-4 mt-16 md:grid-cols-4 gap-1">
        {[
          "https://images.pexels.com/photos/6231839/pexels-photo-6231839.jpeg",
          "https://images.pexels.com/photos/209761/pexels-photo-209761.jpeg",
          "https://images.pexels.com/photos/7724746/pexels-photo-7724746.jpeg",
          "https://images.pexels.com/photos/7724746/pexels-photo-7724746.jpeg",
        ].map((image, index) => (
          <div
            key={index}
            className="relative h-48 md:h-64 rounded-sm overflow-hidden"
          >
            <Image
              src={image}
              alt={`Farming activity ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
