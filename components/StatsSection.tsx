"use client";

export default function StatsSection() {
  const stats = [
    {
      value: "500m",
      label: "Train traces recorded",
    },
    {
      value: "240",
      label: "Seasons around the world seen",
    },
    {
      value: "6k",
      label: "Assets monitored",
    },
  ];

  return (
    <section className="relative h-[calc(100vh-10rem)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop"
          alt="Railway background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Stats Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white relative w-full md:w-1/3 px-4"
            >
              {/* Divider line between stats (hidden on mobile) */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/30"></div>
              )}

              {/* Stat Value */}
              <div className="flex items-center gap-2 mb-2">
                <h3
                  style={{
                    fontSize: "clamp(28px, 5vw, 36px)",
                    lineHeight: "clamp(32px, 6vw, 42px)",
                    fontFamily: '"Prime Font", sans-serif',
                  }}
                >
                  {stat.value}
                </h3>
                {/* Blue arrow icon pointing diagonally up-right */}
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>

              {/* Stat Label */}
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
