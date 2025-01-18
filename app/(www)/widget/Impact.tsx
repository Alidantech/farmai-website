import React from "react";

const ImpactSection = () => {
  const impactData = [
    {
      title: "Improved Productivity",
      description:
        "Farm-AI helps farmers make data-driven decisions, increasing crop yields and optimizing resource usage.",
      icon: "🌾",
    },
    {
      title: "Sustainability",
      description:
        "Our app promotes sustainable farming practices to ensure the health of both crops and the environment.",
      icon: "🌱",
    },
    {
      title: "Cost Savings",
      description:
        "With weather insights and tailored recommendations, farmers can save on water, fertilizers, and pesticides.",
      icon: "💰",
    },
    {
      title: "Empowering Farmers",
      description:
        "Farm-AI equips farmers with modern tools to adapt to climate change and embrace smart farming.",
      icon: "🚜",
    },
  ];

  return (
    <section className="bg-secondary-light py-16"  id="impact">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-primary mb-8">Our Impact</h2>
        <p className="text-lg text-gray-600 mb-12">
          Farm-AI is transforming farming practices worldwide by empowering farmers with actionable insights and tools to achieve more with less.
        </p>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
