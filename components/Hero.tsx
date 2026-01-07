"use client";



export default function Hero() {
  const partners = [
    "FERROVIENORD GROUP",
    "TRAFIKVERKET",
    "INFRABEL",
    "BANE NOR",
    "FGC",
  ];

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
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

      {/* Black gradient going upward to center */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent z-15"></div>

      {/* Main Content - Two Column Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 flex-1 flex items-start">
        {/* Our solutions link - Top right corner */}
        <a
          href="/solutions"
          className="absolute top-20 sm:top-24 right-4 sm:right-6 lg:right-8 text-xs sm:text-sm hover:underline opacity-90 z-30"
          style={{
            color: "#FFFFFF",
            fontFamily: "proxima-nova, sans-serif",
          }}
        >
          Our solutions <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-white/50 ml-1"><i className="ri-arrow-right-s-line text-xs"></i></span>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-28 w-full h-full">
          {/* Left Side - Main Text */}
          <div className="text-white flex flex-col justify-center pt-8 sm:pt-0">
            <h1
              className="mb-4 text-white sm:mb-6"
              style={{
                fontSize: "clamp(20px, 5vw, 36px)",
                lineHeight: "clamp(24px, 6vw, 42px)",
                fontFamily: "proxima-nova, sans-serif",
              }}
            >
              Transform railway operations
              <br />
              for a sustainable future.
            </h1>
            <button className="px-4 sm:px-6 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-xs sm:text-sm w-fit">
              Get in touch
            </button>
          </div>

          {/* Right Side - Description */}
          <div className="text-white flex flex-col justify-end pb-8 sm:pb-16">
            <p
              className="leading-relaxed max-w-md text-left sm:text-left"
              style={{
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                unicodeBidi: "isolate",
                color: "#FFFFFF",
                fontFamily: "proxima-nova, sans-serif",
                fontSize: "clamp(13px, 2.2vw, 18px)",
                lineHeight: "1.7",
                letterSpacing: "0.01em",
              }}
            >
              <span className="hidden sm:inline">
                KONUX is a leading AI scale-up transforming railway operations
                for a sustainable future. We combine AI and IIoT to deliver SaaS
                solutions that enhance capacity, reliability, and
                cost-efficiency in rail transport.
              </span>
              <span className="sm:hidden">
                KONUX is a leading AI scale-up transforming railway operations.
                We combine AI and IIoT to deliver SaaS solutions.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Trusted Partners Marquee - Bottom of Video */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-0 lg:px-0">
          {/* Divider line */}
          <div className="h-px bg-gray-400/30"></div>
        </div>

        <div
          className="relative max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 lg:px-8"
          style={{
            padding: "16px 0",
          }}
        >
          {/* Title Section */}
          <div
            className="flex items-center flex-shrink-0 w-full sm:w-[30%] py-2 mb-4 sm:mb-0"
            style={{
              alignItems: "center",
              color: "#A9B4BD",
              fontFamily: "proxima-nova, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(12px, 2vw, 14px)",
            }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: "#A9B4BD" }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h2
              className="whitespace-nowrap"
              style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                lineHeight: "clamp(18px, 2.5vw, 24px)",
              }}
            >
              Trusted by industry leaders:
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="flex-1 overflow-hidden relative sm:ml-8 w-full">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4 sm:px-8 text-white font-medium text-xs sm:text-sm"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
