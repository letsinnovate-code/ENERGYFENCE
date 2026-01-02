"use client";

export default function WorkTogetherSection() {
  return (
    <section className="relative w-full">
      {/* Top White Section */}
      <div className="relative bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Headline */}
            <h2
              className="mb-6 sm:mb-8"
              style={{
                fontSize: "clamp(20px, 5vw, 36px)",
                lineHeight: "clamp(24px, 6vw, 42px)",
                fontFamily: '"Prime Font", sans-serif',
                color: "#171717",
              }}
            >
              Find out how we can work together
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <button
                className="px-6 sm:px-8 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                }}
              >
                Learn more
              </button>
              <a
                href="#contact"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-base lg:text-lg"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  color: "#171717",
                }}
              >
                Get in touch
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
      </div>

      {/* Bottom Section with Video Background */}
      <div className="relative h-screen lg:max-h-[900px] xl:max-h-[1000px] flex flex-col justify-end overflow-hidden bg-white">
        {/* Background Video - Constrained to max-w-7xl */}
        <div className="absolute inset-0 z-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-7xl mx-auto h-full mb-8 sm:mb-12">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/landing_page_background.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-20 lg:pb-24 xl:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12 mx-auto">
            {/* Left Side - Heading */}
            <div className="text-white">
              <h2
                className="mb-4 sm:mb-6 break-words"
                style={{
                  fontSize: "clamp(18px, 3.5vw, 36px)",
                  lineHeight: "clamp(24px, 4.5vw, 42px)",
                  fontFamily: '"Prime Font", sans-serif',
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                Help drive the transition to sustainable mobility
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="text-white flex flex-col justify-start text-left">
              <p
                className="leading-relaxed break-words"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(13px, 2vw, 18px)",
                  lineHeight: "1.7",
                  color: "#FFFFFF",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  letterSpacing: "0.01em",
                }}
              >
                <span className="hidden sm:inline">
                  The KONUX team is strongly driven by engineering talents, and
                  complemented with an outstanding business team that dives deep
                  into customer problems and technical challenges, and
                  understands how we can build our product platform. We combine
                  Silicon Valley digital thinking with German engineering.
                </span>
                <span className="sm:hidden">
                  The KONUX team is driven by engineering talents and an
                  outstanding business team. We combine Silicon Valley digital
                  thinking with German engineering.
                </span>
              </p>
            </div>
          </div>

          {/* Bottom CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mx-auto">
            <button
              className="px-6 sm:px-8 py-2 sm:py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
              style={{
                fontFamily: "proxima-nova, sans-serif",
              }}
            >
              Career opportunities
            </button>
            <a
              href="#video"
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity text-sm sm:text-lg"
              style={{
                fontFamily: "proxima-nova, sans-serif",
              }}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
