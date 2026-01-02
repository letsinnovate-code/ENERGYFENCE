"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const menuItems = {
    solutions: {
      label: "Solutions",
      href: "#solutions",
      subItems: [
        { label: "Solutions", href: "#solutions" },
        { label: "KONUX Switch", href: "#konux-switch" },
        { label: "KONUX CoBrix", href: "#konux-cobrix" },
        { label: "IoT Devices for Rail", href: "#iot-devices" },
        { label: "Case Studies", href: "#case-studies" },
      ],
    },
    company: {
      label: "Company",
      href: "#company",
      subItems: [
        { label: "Company", href: "#company" },
        { label: "Contact", href: "#contact" },
        { label: "Partnership", href: "#partnership" },
        { label: "About", href: "#about" },
      ],
    },
    careers: {
      label: "Careers",
      href: "#careers",
      subItems: [
        { label: "Life at KONUX", href: "#life-at-konux" },
        { label: "Our Tech Stack", href: "#tech-stack" },
        { label: "Open Positions", href: "#open-positions" },
        { label: "Recruitment Process", href: "#recruitment" },
      ],
    },
    resources: {
      label: "Resources",
      href: "#resources",
      subItems: [
        { label: "Blog", href: "#blog" },
        { label: "Media Kit", href: "#media-kit" },
        { label: "Privacy Policy", href: "#privacy" },
      ],
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent backdrop-blur-sm bg-black/20"
      }`}
      style={{
        backgroundColor: isScrolled ? undefined : "rgba(5, 10, 15, 0.08)",
        color: isScrolled ? undefined : "#FFFFFF",
        padding: "12px 0",
        fontFamily: "proxima-nova, sans-serif",
        fontSize: "clamp(12px, 2vw, 14px)",
        height: "60.8px"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded"></div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={menuItems.solutions.href}
                className={`transition-colors flex items-center gap-1 ${
                  isScrolled
                    ? "text-gray-900 hover:text-gray-700"
                    : "hover:opacity-80"
                }`}
                style={!isScrolled ? { color: "#FFFFFF" } : undefined}
              >
                {menuItems.solutions.label}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "solutions" && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg py-2 z-50"
                  style={{ backgroundColor: isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.95)" }}
                >
                  {menuItems.solutions.subItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("company")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={menuItems.company.href}
                className={`transition-colors flex items-center gap-1 ${
                  isScrolled
                    ? "text-gray-900 hover:text-gray-700"
                    : "hover:opacity-80"
                }`}
                style={!isScrolled ? { color: "#FFFFFF" } : undefined}
              >
                {menuItems.company.label}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "company" && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg py-2 z-50"
                  style={{ backgroundColor: isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.95)" }}
                >
                  {menuItems.company.subItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Careers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("careers")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={menuItems.careers.href}
                className={`transition-colors flex items-center gap-1 ${
                  isScrolled
                    ? "text-gray-900 hover:text-gray-700"
                    : "hover:opacity-80"
                }`}
                style={!isScrolled ? { color: "#FFFFFF" } : undefined}
              >
                {menuItems.careers.label}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "careers" && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg py-2 z-50"
                  style={{ backgroundColor: isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.95)" }}
                >
                  {menuItems.careers.subItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={menuItems.resources.href}
                className={`transition-colors flex items-center gap-1 ${
                  isScrolled
                    ? "text-gray-900 hover:text-gray-700"
                    : "hover:opacity-80"
                }`}
                style={!isScrolled ? { color: "#FFFFFF" } : undefined}
              >
                {menuItems.resources.label}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "resources" && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg py-2 z-50"
                  style={{ backgroundColor: isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.95)" }}
                >
                  {menuItems.resources.subItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact - No Dropdown */}
            <a
              href="#contact"
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-900 hover:text-gray-700"
                  : "hover:opacity-80"
              }`}
              style={!isScrolled ? { color: "#FFFFFF" } : undefined}
            >
              Contact
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <button
            className="hidden md:block transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: "#050A0F",
              color: "#FFFFFF",
              fontFamily: "proxima-nova, sans-serif",
              fontSize: "clamp(11px, 1.5vw, 12px)",
              padding: "8px 16px",
              height: "36px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Get started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-all duration-300 hover:opacity-80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={!isScrolled ? { color: "#FFFFFF" } : { color: "#171717" }}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {/* Solutions Mobile */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === "solutions" ? null : "solutions"
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-gray-900 hover:text-gray-700 transition-colors"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "13px",
                  }}
                >
                  {menuItems.solutions.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openMobileDropdown === "solutions" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openMobileDropdown === "solutions" && (
                  <div className="pl-4 space-y-1">
                    {menuItems.solutions.subItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block py-1.5 text-gray-600 hover:text-gray-900 transition-colors"
                        style={{
                          fontFamily: "proxima-nova, sans-serif",
                          fontSize: "12px",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Mobile */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === "company" ? null : "company"
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-gray-900 hover:text-gray-700 transition-colors"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "13px",
                  }}
                >
                  {menuItems.company.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openMobileDropdown === "company" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openMobileDropdown === "company" && (
                  <div className="pl-4 space-y-1">
                    {menuItems.company.subItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block py-1.5 text-gray-600 hover:text-gray-900 transition-colors"
                        style={{
                          fontFamily: "proxima-nova, sans-serif",
                          fontSize: "12px",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Careers Mobile */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === "careers" ? null : "careers"
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-gray-900 hover:text-gray-700 transition-colors"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "13px",
                  }}
                >
                  {menuItems.careers.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openMobileDropdown === "careers" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openMobileDropdown === "careers" && (
                  <div className="pl-4 space-y-1">
                    {menuItems.careers.subItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block py-1.5 text-gray-600 hover:text-gray-900 transition-colors"
                        style={{
                          fontFamily: "proxima-nova, sans-serif",
                          fontSize: "12px",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Mobile */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === "resources" ? null : "resources"
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-gray-900 hover:text-gray-700 transition-colors"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "13px",
                  }}
                >
                  {menuItems.resources.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openMobileDropdown === "resources" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openMobileDropdown === "resources" && (
                  <div className="pl-4 space-y-1">
                    {menuItems.resources.subItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block py-1.5 text-gray-600 hover:text-gray-900 transition-colors"
                        style={{
                          fontFamily: "proxima-nova, sans-serif",
                          fontSize: "12px",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Mobile */}
              <a
                href="#contact"
                className="block py-2 text-gray-900 hover:text-gray-700 transition-colors"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "13px",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>

              <button
                className="w-full mt-4 py-2 text-white transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: "#050A0F",
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "11px",
                  border: "none",
                  cursor: "pointer"
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

