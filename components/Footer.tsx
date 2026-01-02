"use client";

export default function Footer() {
  return (
    <footer className="relative w-full" style={{ backgroundColor: "#050A0F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Left Column - Logo and CTA */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded mb-6 sm:mb-8"></div>
            
            {/* Headline */}
            <h2
              className="text-white mb-4 sm:mb-6"
              style={{
                fontSize: "clamp(18px, 4vw, 36px)",
                lineHeight: "clamp(22px, 5vw, 42px)",
                fontFamily: "proxima-nova, sans-serif",
              }}
            >
              <span className="hidden sm:inline">Find out how we can work together</span>
              <span className="sm:hidden">Work with us</span>
            </h2>
            
            {/* CTA Button */}
            <button
              className="px-4 sm:px-6 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
              style={{
                fontFamily: "proxima-nova, sans-serif",
              }}
            >
              Get in touch
            </button>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Solutions */}
            <div>
              <h3
                className="text-white font-bold mb-3 sm:mb-4"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(14px, 2vw, 16px)",
                }}
              >
                Solutions
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {["Solutions", "KONUX Switch", "KONUX CoBrix", "IoT Devices for Rail", "Case Studies"].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                      style={{
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "clamp(12px, 1.8vw, 14px)",
                        color: "#A9B4BD",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3
                className="text-white font-bold mb-3 sm:mb-4"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(14px, 2vw, 16px)",
                }}
              >
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {["Company", "Contact", "Partnership", "About"].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                      style={{
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "clamp(12px, 1.8vw, 14px)",
                        color: "#A9B4BD",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Careers */}
            <div>
              <h3
                className="text-white font-bold mb-3 sm:mb-4"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(14px, 2vw, 16px)",
                }}
              >
                Careers
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {["Life at KONUX", "Our Tech Stack", "Open Positions", "Recruitment Process"].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                      style={{
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "clamp(12px, 1.8vw, 14px)",
                        color: "#A9B4BD",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3
                className="text-white font-bold mb-3 sm:mb-4"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(14px, 2vw, 16px)",
                }}
              >
                Resources
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {["Blog", "Media Kit", "Privacy Policy"].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                      style={{
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "clamp(12px, 1.8vw, 14px)",
                        color: "#A9B4BD",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 pb-6 sm:pb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
            {/* Partnership Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="text-gray-400"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(12px, 2vw, 14px)",
                }}
              >
                Member of:
              </span>
              <div
                className="text-white font-bold"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(16px, 2vw, 20px)",
                }}
              >
                unife
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
              {/* Mail */}
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  className="text-white font-bold mr-2"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "clamp(12px, 1.8vw, 14px)",
                  }}
                >
                  Mail
                </span>
                <a
                  href="mailto:info@konux.com"
                  className="hover:text-white transition-colors break-all"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "clamp(11px, 1.8vw, 14px)",
                    color: "#A9B4BD",
                  }}
                >
                  info@konux.com
                </a>
              </div>

              {/* Telephone */}
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  className="text-white font-bold mr-2"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "clamp(12px, 1.8vw, 14px)",
                  }}
                >
                  Tel
                </span>
                <a
                  href="tel:+498918955010"
                  className="hover:text-white transition-colors"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "clamp(11px, 1.8vw, 14px)",
                    color: "#A9B4BD",
                  }}
                >
                  +49 89 18955010
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <span
                  className="text-gray-400"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "clamp(11px, 1.8vw, 14px)",
                  }}
                >
                  Back to top
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <span
                className="text-gray-400"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(12px, 2vw, 14px)",
                }}
              >
                © 2025 KONUX GmbH
              </span>
              <a
                href="#"
                className="hover:text-white transition-colors"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(12px, 2vw, 14px)",
                  color: "#A9B4BD",
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(12px, 2vw, 14px)",
                  color: "#A9B4BD",
                }}
              >
                Legal notice
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(12px, 2vw, 14px)",
                  color: "#A9B4BD",
                }}
              >
                LinkedIn
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

