import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Press() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#050A0F" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <h1 className="text-white mb-6" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", fontWeight: "700" }}>
                            Press & Media
                        </h1>
                        <p className="text-gray-300 mb-8" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.6", maxWidth: "800px" }}>
                            Latest news, press releases, and media resources from ENERGYFENCE.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-12" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "700", color: "#050A0F" }}>
                        Press Releases
                    </h2>
                    <div className="space-y-8">
                        {[
                            { date: "January 5, 2026", title: "ENERGYFENCE Expands to Asia-Pacific with New Singapore Office", excerpt: "Company announces strategic expansion to serve growing demand for AI-powered energy management solutions in APAC region." },
                            { date: "December 15, 2025", title: "ENERGYFENCE Raises $50M Series B to Accelerate Product Development", excerpt: "Funding round led by prominent energy and technology investors to expand platform capabilities and market reach." },
                            { date: "November 20, 2025", title: "Major Utility Company Deploys ENERGYFENCE Across 10,000 Sites", excerpt: "Largest deployment to date demonstrates scalability and reliability of ENERGYFENCE platform for enterprise operations." },
                            { date: "October 10, 2025", title: "ENERGYFENCE Launches Central AI Brain Platform", excerpt: "New orchestration layer enables enterprise-wide optimization and autonomous decision-making for energy systems." },
                            { date: "September 5, 2025", title: "ENERGYFENCE Named to Forbes Cloud 100 Rising Stars", excerpt: "Recognition highlights company's rapid growth and innovation in cloud-based energy management solutions." }
                        ].map((release, index) => (
                            <div key={index} className="border-b border-gray-200 pb-8">
                                <div className="text-gray-500 mb-2" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "14px" }}>
                                    {release.date}
                                </div>
                                <h3 className="mb-3" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "24px", fontWeight: "700", color: "#050A0F" }}>
                                    {release.title}
                                </h3>
                                <p className="mb-4" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
                                    {release.excerpt}
                                </p>
                                <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "14px" }}>
                                    Read Full Release →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-12" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "700", color: "#050A0F" }}>
                        Media Coverage
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { outlet: "TechCrunch", title: "How ENERGYFENCE is Using AI to Transform Energy Management", date: "Dec 2025" },
                            { outlet: "Forbes", title: "The Future of Smart Grids: An Interview with ENERGYFENCE CEO", date: "Nov 2025" },
                            { outlet: "VentureBeat", title: "ENERGYFENCE's Physics-Informed AI Approach Sets New Standard", date: "Oct 2025" },
                            { outlet: "Energy Tech Magazine", title: "Case Study: ENERGYFENCE Reduces Downtime by 65% for Major Manufacturer", date: "Sep 2025" }
                        ].map((coverage, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg">
                                <div className="text-blue-600 font-bold mb-2" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "14px" }}>
                                    {coverage.outlet}
                                </div>
                                <h3 className="mb-2" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "20px", fontWeight: "700", color: "#050A0F" }}>
                                    {coverage.title}
                                </h3>
                                <div className="text-gray-500 text-sm" style={{ fontFamily: "proxima-nova, sans-serif" }}>
                                    {coverage.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="mb-8" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "700", color: "#050A0F" }}>
                        Media Inquiries
                    </h2>
                    <p className="mb-6" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "18px", lineHeight: "1.6", color: "#666" }}>
                        For press inquiries, interviews, or media kit requests, please contact our communications team:
                    </p>
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="mb-4">
                            <div className="font-bold mb-1" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", color: "#050A0F" }}>Email</div>
                            <a href="mailto:press@energyfence.com" className="text-blue-500 hover:text-blue-600" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px" }}>
                                press@energyfence.com
                            </a>
                        </div>
                        <div>
                            <div className="font-bold mb-1" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", color: "#050A0F" }}>Phone</div>
                            <a href="tel:+1-555-0123" className="text-blue-500 hover:text-blue-600" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px" }}>
                                +1 (555) 012-3456
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
