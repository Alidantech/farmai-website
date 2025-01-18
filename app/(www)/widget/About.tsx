import React from "react";

const About = () => {
  return (
    <section className="bg-background py-12" id="about">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          About Farmai
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Farmai is a mobile application designed to revolutionize agriculture by integrating cutting-edge machine learning algorithms with traditional farming practices. We aim to empower farmers with smart tools for efficient and sustainable farming.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From weather predictions to crop recommendations, our app ensures that farmers can make informed decisions and achieve better yields while minimizing environmental impact.
        </p>
      </div>
    </section>
  );
};

export default About;
