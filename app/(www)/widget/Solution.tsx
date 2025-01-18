import React from "react";

const OurSolutions = () => {
  return (
    <section className="bg-background py-12" id="solutions">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          Our Solutions
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Empowering farmers with smart, data-driven tools to enhance productivity, improve decision-making, and create sustainable farming practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-primary text-5xl mb-4">☀️</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Weather Forecast
            </h3>
            <p className="text-gray-600">
              Get real-time weather updates and forecasts tailored to your farm location.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-primary text-5xl mb-4">🌧️</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Rain Prediction
            </h3>
            <p className="text-gray-600">
              Plan irrigation and farming activities with accurate rain predictions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-primary text-5xl mb-4">🌾</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Crop Recommendations
            </h3>
            <p className="text-gray-600">
              Receive crop suggestions based on your area’s weather conditions and climate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
