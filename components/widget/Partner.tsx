export default function PartnerLogos() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          🌍 Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center text-5xl">
          {/* Google */}
          <div className="flex items-center justify-center">🔍</div>

          {/* OpenAI */}
          <div className="flex items-center justify-center">🤖</div>

          {/* Kenya Agricultural Research Institute (KALRO) */}
          <div className="flex items-center justify-center">🌾</div>

          {/* Twiga Foods */}
          <div className="flex items-center justify-center">🍌</div>

          {/* John Deere */}
          <div className="flex items-center justify-center">🚜</div>

          {/* Eco-Friendly Farming */}
          <div className="flex items-center justify-center">🌱</div>
        </div>
      </div>
    </section>
  );
}
