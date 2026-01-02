"use client";

export default function CapacitySection() {
  return (
    <section className="relative h-[calc(100vh-10rem)] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 170, 255, 0) 0%, rgba(0, 170, 255, 0.54) 50%, rgba(40, 200, 255, 0.8) 100%)",
        }}
      ></div>

      {/* Content - Centered with max-w-7xl */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Title - Smaller and Centered */}
          <h2
            className="text-white mb-6 sm:mb-8 lg:mb-12"
            style={{
              fontSize: "clamp(20px, 5vw, 36px)",
              lineHeight: "clamp(24px, 6vw, 42px)",
              fontFamily: '"Prime Font", sans-serif',
            }}
          >
            Capacity <strong>meets</strong> AI
          </h2>

          {/* Description Text - No background, white text for readability */}
          <div
            className="max-w-3xl w-full space-y-4 sm:space-y-6 mb-8 sm:mb-12 px-4 sm:px-0"
            style={{
              fontSize: "clamp(13px, 2.2vw, 18px)",
              color: "#ffffff",
              fontFamily: "proxima-nova, sans-serif",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "1.7",
              letterSpacing: "0.01em",
            }}
          >
            <span className="hidden sm:inline">
              Railway is the hidden sustainability champion in transportation.
              But with demand predicted to double by 2050, radical steps are
              needed to ensure the resilience and competitiveness of the system
              on which millions rely. AI can unlock sources of operational
              capacity and efficiency previously unimaginable, fueling a true
              railway revolution.
            </span>
            <span className="sm:hidden">
              Railway is the hidden sustainability champion. With demand
              predicted to double by 2050, AI can unlock operational capacity
              and efficiency previously unimaginable.
            </span>
          </div>

          {/* CTA Buttons - Centered */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button
              className="px-6 sm:px-8 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
              style={{
                fontFamily: "proxima-nova, sans-serif",
              }}
            >
              Company
            </button>
            <a
              href="#solutions"
              className="text-white hover:opacity-80 transition-opacity flex items-center gap-2 text-sm sm:text-base"
              style={{
                fontFamily: "proxima-nova, sans-serif",
              }}
            >
              Our solutions
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
      </div>
    </section>
  );
}
