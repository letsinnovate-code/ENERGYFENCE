"use client";

export default function ImageSection() {
  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden bg-white">
      {/* Image Container - max-w-7xl */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop"
            alt="Railway background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content - At the bottom with padding */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Heading and CTA */}
          <div className="flex flex-col justify-center text-left">
            <h2
              className="mb-6 sm:mb-8 break-words"
              style={{
                fontSize: "clamp(18px, 3.5vw, 24px)",
                lineHeight: "clamp(24px, 4.5vw, 32px)",
                fontFamily: '"Prime Font", sans-serif',
                color: "#171717",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <span className="hidden sm:inline">
                KONUX CoBrix is our modular Data & AI Platform designed to help partners co-create rail infrastructure solutions.
              </span>
              <span className="sm:hidden">
                KONUX CoBrix is our modular Data & AI Platform for rail infrastructure solutions.
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                className="px-6 sm:px-8 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                }}
              >
                Learn more
              </button>
              <a
                href="#solutions"
                className="text-blue-500 hover:text-blue-600 flex items-center gap-2 text-sm sm:text-base"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                }}
              >
                Our Solutions
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
              </a>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-center text-left">
            <p
              className="break-words"
              style={{
                fontFamily: "proxima-nova, sans-serif",
                fontSize: "clamp(13px, 2.2vw, 18px)",
                lineHeight: "1.7",
                color: "#171717",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                letterSpacing: "0.01em",
              }}
            >
              <span className="hidden sm:inline">
                The railway industry is grappling with aging infrastructure, disconnected data systems, and siloed innovation. As a result, operators and technology partners often duplicate efforts and waste resources solving the same problems independently.
              </span>
              <span className="sm:hidden">
                The railway industry faces aging infrastructure and disconnected systems. Operators often duplicate efforts solving the same problems independently.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

