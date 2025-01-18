import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and About */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Farmai</h1>
            <p className="mt-2 text-sm">
              Empowering farmers with smart tools to optimize farming practices and build a sustainable future.
            </p>
          </div>
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:underline">
                  Our Solutions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-white/10 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Farmai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
