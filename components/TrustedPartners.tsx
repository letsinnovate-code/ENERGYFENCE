"use client";

export default function TrustedPartners() {
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
    <section className="relative bg-white py-12 overflow-hidden">
      {/* Shadow at the top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/10 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <h2 
            className="text-gray-900"
            style={{
              fontSize: "36px",
              lineHeight: "42px",
            }}
          >
            Trusted by industry leaders:
          </h2>
        </div>

        {/* Marquee Container - 20% width */}
        <div className="w-[20%] mx-auto overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 text-gray-600 font-medium text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

