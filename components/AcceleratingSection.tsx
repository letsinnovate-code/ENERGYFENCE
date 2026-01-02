"use client";

import { useEffect, useState } from "react";

export default function AcceleratingSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 2560);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      className="relative h-[250vh] overflow-hidden flex flex-col"
      style={{
        backgroundColor: "#0000",
        ...(isLargeScreen && {
          height: "150rem",
          maxHeight: "160rem",
        }),
      }}
    >
      {/* Header Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16 lg:pt-24">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16">
          <p
            className="text-blue-400 mb-3 sm:mb-4"
            style={{
              fontFamily: "proxima-nova, sans-serif",
              fontSize: "clamp(14px, 2vw, 18px)",
            }}
          >
            Solutions
          </p>
          <h2
            className="text-white mb-4 sm:mb-6"
            style={{
              fontSize: "clamp(20px, 5vw, 36px)",
              lineHeight: "clamp(24px, 6vw, 42px)",
              fontFamily: '"Prime Font", sans-serif',
            }}
          >
            Accelerating Railway Digitalisation
          </h2>
          <p
            className="text-white mb-6 sm:mb-8"
            style={{
              fontFamily: "proxima-nova, sans-serif",
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

      {/* Main Content - 60/40 Split */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex-1 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 h-full items-stretch">
          {/* Left Column - 60% (3/5) with 2 rows: 60/40 */}
          <div className="md:col-span-3 flex flex-col gap-2 h-full">
            {/* Row 1 - 60% */}
            <div className="flex-[0.6] min-h-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop"
                alt="Railway track through forest"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Row 2 - 40% */}
            <div className="flex-[0.4] min-h-0 bg-white p-4 sm:p-6 overflow-hidden">
              <h3
                className="mb-3 sm:mb-4 break-words"
                style={{
                  fontSize: "clamp(18px, 3.5vw, 36px)",
                  lineHeight: "clamp(24px, 4.5vw, 42px)",
                  fontFamily: '"Prime Font", sans-serif',
                  color: "#171717",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                Card Title
              </h3>
              <p
                className="break-words text-left"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(12px, 2vw, 18px)",
                  color: "#5a6774",
                  lineHeight: "1.7",
                  letterSpacing: "0.01em",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                Card content goes here
              </p>
            </div>
          </div>

          {/* Right Column - 40% (2/5) with 3 rows: 60/20/20 */}
          <div className="md:col-span-2 flex flex-col gap-2 h-full">
            {/* Row 1 - 60% */}
            <div className="flex-[0.6] min-h-0 bg-blue-900 p-4 sm:p-6 lg:p-8 overflow-hidden">
              <h3
                className="text-white mb-4 sm:mb-6 break-words"
                style={{
                  fontSize: "clamp(18px, 3.5vw, 36px)",
                  lineHeight: "clamp(24px, 4.5vw, 42px)",
                  fontFamily: '"Prime Font", sans-serif',
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                Recent updates
              </h3>
              <p
                className="text-white mb-6 sm:mb-8 break-words text-left"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(12px, 2vw, 18px)",
                  lineHeight: "1.7",
                  letterSpacing: "0.01em",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                <span className="hidden sm:inline">
                  KONUX Switch now offers smarter frog-health monitoring with a
                  dual-layer model combining real-time alerts and a new
                  AI-powered Reliability Score that predicts failure risk up to
                  four months ahead.
                </span>
                <span className="sm:hidden">
                  KONUX Switch offers smarter frog-health monitoring with
                  AI-powered Reliability Score predicting failure risk up to
                  four months ahead.
                </span>
              </p>
              <div className="space-y-2">
                {[
                  "Moving Beyond Thresholds",
                  "Asset Notes",
                  "Population Correction Models",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                    style={{
                      fontFamily: "proxima-nova, sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    <svg
                      className="w-5 h-5"
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
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {/* Row 2 - 20% */}
            <div className="flex-[0.2] min-h-0 bg-gray-200 p-6 overflow-hidden">
              <h3
                style={{
                  fontSize: "36px",
                  lineHeight: "42px",
                  fontFamily: '"Prime Font", sans-serif',
                  color: "#171717",
                }}
              >
                Blog
              </h3>
            </div>
            {/* Row 3 - 20% */}
            <div className="flex-[0.2] min-h-0 bg-gray-200 p-6 overflow-hidden">
              <h3
                style={{
                  fontSize: "36px",
                  lineHeight: "42px",
                  fontFamily: '"Prime Font", sans-serif',
                  color: "#171717",
                }}
              >
                Case Studies
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
