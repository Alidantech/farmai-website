import React from "react";

const Contact = () => {
  return (
    <section className="bg-background py-12" id="contact">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Have questions or need support? We&apos;re here to help! Get in touch with
          us through any of the following methods.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-primary text-5xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Email Us
            </h3>
            <p className="text-gray-600">
              Reach out at{" "}
              <span className="text-primary">support@Farmai.com</span>.
            </p>
          </div>
          {/* Phone */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-primary text-5xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Call Us
            </h3>
            <p className="text-gray-600">
              Talk to our team at{" "}
              <span className="text-primary">+1-800-Farmai</span>.
            </p>
          </div>
          {/* Location */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-primary text-5xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Visit Us
            </h3>
            <p className="text-gray-600">
              Our office: 123 Green Fields Lane, AgriCity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
