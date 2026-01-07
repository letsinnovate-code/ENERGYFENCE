"use client";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#050A0F] to-[#050A0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Left Column - Logo and CTA */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded mb-6 sm:mb-8 flex items-center justify-center text-[#1C2530] font-bold text-xs">
              LOGO
            </div>

            {/* Headline */}
            <h2 className="text-white mb-4 sm:mb-6 text-[32px] sm:text-[36px] leading-tight font-medium">
              <span className="hidden sm:inline">Find out how we can work together</span>
              <span className="sm:hidden">Work with us</span>
            </h2>

            {/* CTA Button */}
            <button className="btn-primary">
              Get in touch
            </button>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
            {/* Solutions */}
            <div>
              <h3 className="text-white font-bold mb-3 sm:mb-4">
                Solutions
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: "Command Control & Safety", href: "/solutions/command-control-safety" },
                  { label: "Predictive Failure Intelligence", href: "/solutions/predictive-failure" },
                  { label: "Digital Twin & Simulation", href: "/solutions/digital-twin" },
                  { label: "Compliance & Audit Automation", href: "/solutions/compliance-audit" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors text-[#A9B4BD] text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology */}
            <div>
              <h3 className="text-white font-bold mb-3 sm:mb-4">
                Technology
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: "System Architecture", href: "/technology/system-architecture" },
                  { label: "Edge AI Agent", href: "/technology/edge-ai-agent" },
                  { label: "Command Gateway", href: "/technology/command-gateway" },
                  { label: "Physics-Informed AI", href: "/technology/physics-informed-ai" },
                  { label: "Digital Twin Engine", href: "/technology/digital-twin-engine" },
                  { label: "Central AI Brain", href: "/technology/central-ai-brain" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors text-[#A9B4BD] text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-white font-bold mb-3 sm:mb-4">
                Use Cases
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: "EV Charging Networks", href: "/use-cases/ev-charging" },
                  { label: "Solar & Battery Plants", href: "/use-cases/solar-battery" },
                  { label: "Industrial Manufacturing", href: "/use-cases/industrial-manufacturing" },
                  { label: "Grid Operations", href: "/use-cases/grid-operations" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors text-[#A9B4BD] text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold mb-3 sm:mb-4">
                Resources
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: "Whitepapers", href: "/resources/whitepapers" },
                  { label: "Case Studies", href: "/resources/case-studies" },
                  { label: "Blog", href: "/resources/blog" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors text-[#A9B4BD] text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-3 sm:mb-4">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: "About", href: "/company/about" },
                  { label: "Leadership", href: "/company/leadership" },
                  { label: "Careers", href: "/company/careers" },
                  { label: "Press", href: "/company/press" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors text-[#A9B4BD] text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-t border-gray-700/50 pt-6 sm:pt-8 pb-6 sm:pb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
            {/* Partnership Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-gray-400 text-sm">
                Member of:
              </span>
              <div className="text-white font-bold text-lg">
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
                <span className="text-white font-bold mr-2 text-sm">
                  Mail
                </span>
                <a
                  href="mailto:info@konux.com"
                  className="hover:text-white transition-colors break-all text-[#A9B4BD] text-sm"
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
                <span className="text-white font-bold mr-2 text-sm">
                  Tel
                </span>
                <a
                  href="tel:+498918955010"
                  className="hover:text-white transition-colors text-[#A9B4BD] text-sm"
                >
                  +49 89 18955010
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center">
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
                <span className="text-gray-400 text-sm">
                  Back to top
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <span className="text-gray-400 text-xs">
                © 2025 KONUX GmbH
              </span>
              <a
                href="#"
                className="hover:text-white transition-colors text-[#A9B4BD] text-xs"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-[#A9B4BD] text-xs"
              >
                Legal notice
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2 text-[#A9B4BD] text-xs"
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

