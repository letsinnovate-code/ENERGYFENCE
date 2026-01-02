"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Stefan Leistner",
      title: "Head of Market, Strategy and Business Models",
      quote:
        "With our focus on the systematic digitalization of maintenance in the high-performance network, we are counting on the impact of KONUX Switch.",
      company: "DB",
      companyLogo: "https://via.placeholder.com/60x60?text=DB",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Angélique Chaboissier",
      title: "Maintenance Engineer at Oc'Via Maintenance",
      quote:
        "The data insights allow us to know the asset evolution in real time and to anticipate as much as possible all the preventative maintenance that we need in the future.",
      company: "Oc'Via Maintenance",
      companyLogo: "https://via.placeholder.com/60x60?text=OcVia",
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Damien Rose",
      title: "President of Oc'Via Maintenance",
      quote:
        "The more we digitize, the more we can prevent defects, if possible before they even appear, in order to do less corrective work and therefore save money.",
      company: "Oc'Via Maintenance",
      companyLogo: "https://via.placeholder.com/60x60?text=OcVia",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const partners = [
    "DB",
    "Network Rail",
    "adif",
    "FERROVIENORD",
    "TRAFIKVERKET",
    "INFRABEL",
  ];

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              {/* Profile Image, Logo, and Link */}
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                {/* Profile Image */}
                <img
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                {/* Company Logo */}
                <img
                  src={testimonial.companyLogo}
                  alt={testimonial.company}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-gray-300 object-cover"
                />
                {/* Read Case Study Link */}
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 flex items-center gap-1 ml-auto text-xs sm:text-sm"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                  }}
                >
                  Read case study
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
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

              {/* Quote */}
              <p
                className="mb-4 sm:mb-6 flex-grow break-words text-left"
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontSize: "clamp(13px, 2vw, 18px)",
                  color: "#5a6774",
                  lineHeight: "1.7",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  letterSpacing: "0.01em",
                }}
              >
                {testimonial.quote}
              </p>

              {/* Name and Title */}
              <div className="text-left">
                <h4
                  className="mb-2 break-words"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "clamp(14px, 2vw, 18px)",
                    color: "#171717",
                    fontWeight: 600,
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    lineHeight: "1.5",
                  }}
                >
                  {testimonial.name}
                </h4>
                <p
                  className="break-words"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "clamp(12px, 1.8vw, 16px)",
                    color: "#5a6774",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    lineHeight: "1.6",
                  }}
                >
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="h-px bg-gray-300 mb-8 sm:mb-12"></div>

        {/* Trusted by Industry Leaders */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-8">
          {/* Title Section */}
          <div
            className="flex items-center flex-shrink-0 w-full md:w-[30%]"
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
              style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                lineHeight: "clamp(18px, 3vw, 24px)",
              }}
            >
              Trusted by industry leaders:
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="flex-1 overflow-hidden relative md:ml-8 w-full">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4 sm:px-8 text-gray-600 font-medium"
                  style={{
                    fontFamily: "proxima-nova, sans-serif",
                    fontSize: "clamp(12px, 2vw, 16px)",
                  }}
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
