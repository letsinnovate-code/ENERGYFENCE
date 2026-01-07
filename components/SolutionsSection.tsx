"use client";

import { useEffect, useState } from "react";

export default function SolutionsSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 2560);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const solutions = [
    {
      title: "AI-Driven Rail Intelligence",
      description:
        "Years of domain expertise embedded into predictive AI models - proven models built on years of railway data.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
    },
    {
      title: "Modular IoT & Sensor Technology",
      description:
        "Configurable, fast-to-deploy sensor components that generate actionable data for a wide range of use cases.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=800&fit=crop",
    },
    {
      title: "KONUX CoBrix Platform",
      description:
        "A secure, federated data & AI platform where stakeholders can develop, integrate, and scale solutions while retaining control over their data.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=800&fit=crop",
    },
  ];

  return (
    <section
      className="relative min-h-[180vh] sm:h-[180vh] bg-white"
      style={{
        ...(isLargeScreen && {
          minHeight: "120rem",
          maxHeight: "140rem",
        }),
      }}
    >
      {/* Hero Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
        <div className="flex flex-col items-center text-center">
          <h2
            className="mb-4 sm:mb-6"
            style={{
              fontSize: "clamp(20px, 5vw, 36px)",
              lineHeight: "clamp(24px, 6vw, 42px)",
              fontFamily: '"Prime Font", sans-serif',
              color: "#171717",
            }}
          >
            Our solutions
          </h2>
          <p
            className="text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8"
            style={{
              fontFamily: "proxima-nova, sans-serif",
              color: "#5a6774",
              fontSize: "clamp(13px, 2vw, 18px)",
            }}
          >
            Enabling the rail ecosystem - together with KONUX
          </p>
          <button
            className="px-6 sm:px-8 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
            style={{
              fontFamily: "proxima-nova, sans-serif",
            }}
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Solutions Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col">
              {/* Image - Responsive aspect ratio */}
              <div className="w-full aspect-square md:aspect-[1/1.5] mb-6 bg-gray-200 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3
                className="mb-3 sm:mb-4 md:mb-6"
                style={{
                  fontSize: "clamp(18px, 4vw, 36px)",
                  lineHeight: "clamp(22px, 5vw, 42px)",
                  fontFamily: '"Prime Font", sans-serif',
                  color: "#171717",
                }}
              >
                {solution.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-base md:text-lg mb-4 sm:mb-6 flex-grow"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  color: "#5a6774",
                  fontSize: "clamp(12px, 1.8vw, 18px)",
                  lineHeight: "1.6",
                }}
              >
                {solution.description}
              </p>

              {/* Call to Action Arrow */}
              <button
                className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center self-start"
                aria-label={`Learn more about ${solution.title}`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#5a6774" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
