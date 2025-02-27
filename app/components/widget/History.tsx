"use client";

const timelineData = [
  {
    year: "1910",
    title: "Mechanization of Farming",
    description:
      "The industrial revolution brought tractors and mechanical plows, increasing efficiency but still dependent on manual decision-making.",
    alignRight: false,
  },
  {
    year: "2000",
    title: "Rise of Precision Farming",
    description:
      "Farmers began utilizing satellite imagery, GPS, and IoT sensors to enhance decision-making, marking the shift towards smart agriculture.",
    alignRight: true,
  },
  {
    year: "2015",
    title: "AI & Machine Learning in Farming",
    description:
      "AI-powered tools started analyzing weather patterns, soil conditions, and crop health, helping farmers make data-driven decisions.",
    alignRight: false,
  },
  {
    year: new Date().getFullYear().toString(),
    title: "Farm-AI: The Future of Agriculture",
    description:
      "Farm-AI integrates weather forecasting, soil analytics, and real-time AI insights to help farmers adapt to climate change, improve yields, and optimize resources like water and fertilizers.",
    alignRight: true,
  },
];

const TimelineItem = ({ year, title, description, alignRight }: any) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 transition-transform transform hover:scale-105">
      {alignRight ? (
        <div className="flex-1 md:text-right order-2 md:order-1 ml-4 md:ml-0">
          <div className="text-4xl font-light text-gray-300">{year}</div>
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      ) : (
        <div className="flex-1 order-2" />
      )}

      <div className="relative order-1 md:order-2">
        <div className="w-4 h-4 rounded-full bg-[#517D36] relative z-10 animate-pulse" />
      </div>

      {alignRight ? (
        <div className="flex-1 order-3" />
      ) : (
        <div className="flex-1 order-3 ml-4 md:ml-0">
          <div className="text-4xl font-light text-gray-300">{year}</div>
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      )}
    </div>
  );
};

export default function History() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div>
            <div className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm mb-4">
              Evolution of Smart Farming
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              How Farm-AI is Revolutionizing Agriculture
            </h2>
            <p className="mt-4 text-muted-foreground max-w-3xl">
              Agriculture has evolved from traditional methods to AI-powered
              precision farming. Farm-AI integrates weather predictions, soil
              analytics, and machine learning to optimize yields and combat
              climate change.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gray-200" />

            {/* Timeline Items */}
            <div className="space-y-12 relative">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 