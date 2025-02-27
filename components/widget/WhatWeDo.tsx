import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative h-[400px] lg:h-full">
              <Image
                src="https://images.pexels.com/photos/4661752/pexels-photo-4661752.jpeg"
                alt="Farmer using technology in the field"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-[#ebd96b] p-8 md:p-12 lg:p-16">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-white px-4 py-1 text-sm">
                  What We Do
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Empowering Farmers with AI for Sustainable Growth
                </h2>
                <p className="text-gray-700">
                  Farm-AI harnesses the power of artificial intelligence and
                  weather data to help farmers optimize their crops, increase
                  yields, and adapt to changing climate conditions. With our
                  advanced AI tools, farmers can make informed decisions and
                  grow food more efficiently and sustainably.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="space-y-4">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-gray-200"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray="226.19"
                          strokeDashoffset="22.619"
                          className="text-gray-800"
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                        90<sup>+</sup>
                      </div>
                    </div>
                    <h3 className="font-semibold">
                      Global Reach for Smart Farming
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-gray-200"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray="226.19"
                          strokeDashoffset="56.5475"
                          className="text-gray-800"
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                        78<sup>+</sup>
                      </div>
                    </div>
                    <h3 className="font-semibold">
                      Cutting-edge Agricultural Tools
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
