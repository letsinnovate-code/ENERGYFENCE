import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CaseStudies() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#050A0F" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <h1 className="text-white mb-6" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", fontWeight: "700" }}>
                            Case Studies
                        </h1>
                        <p className="text-gray-300 mb-8" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.6", maxWidth: "800px" }}>
                            Real-world success stories from our customers across industries and applications.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                    {[
                        { company: "ChargePoint Network", industry: "EV Charging", challenge: "Managing 5,000+ charging stations with frequent downtime and high maintenance costs.", solution: "Implemented ENERGYFENCE predictive maintenance and load optimization.", results: ["99.5% uptime achieved", "40% reduction in maintenance costs", "3x faster issue resolution"], image: "bg-emerald-500" },
                        { company: "SunPower Energy", industry: "Solar & Battery", challenge: "Optimizing battery charging cycles and maximizing solar energy utilization across 50 sites.", solution: "Deployed Digital Twin Engine and AI-powered forecasting.", results: ["15% increase in energy yield", "25% battery life extension", "$2M annual savings"], image: "bg-amber-500" },
                        { company: "TechManufacturing Inc", industry: "Industrial", challenge: "Frequent equipment failures causing production delays and quality issues.", solution: "Integrated Edge AI Agents for real-time monitoring and predictive analytics.", results: ["65% reduction in downtime", "50% fewer defects", "20% productivity increase"], image: "bg-slate-500" },
                        { company: "Metro Grid Authority", industry: "Grid Operations", challenge: "Balancing renewable integration with grid stability and reliability requirements.", solution: "Implemented Central AI Brain for grid optimization and demand response.", results: ["99.99% grid reliability", "50% renewable integration", "20% loss reduction"], image: "bg-sky-500" }
                    ].map((study, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className={`relative h-64 md:h-auto ${study.image}`}></div>
                                <div className="p-8">
                                    <div className="mb-3">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm" style={{ fontFamily: "proxima-nova, sans-serif" }}>
                                            {study.industry}
                                        </span>
                                    </div>
                                    <h3 className="mb-4" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "28px", fontWeight: "700", color: "#050A0F" }}>
                                        {study.company}
                                    </h3>
                                    <div className="mb-4">
                                        <h4 className="font-bold mb-2" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", color: "#050A0F" }}>Challenge</h4>
                                        <p style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#666" }}>{study.challenge}</p>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-bold mb-2" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", color: "#050A0F" }}>Solution</h4>
                                        <p style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#666" }}>{study.solution}</p>
                                    </div>
                                    <div className="mb-6">
                                        <h4 className="font-bold mb-2" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", color: "#050A0F" }}>Results</h4>
                                        <ul className="space-y-2">
                                            {study.results.map((result, idx) => (
                                                <li key={idx} className="flex items-start gap-2" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", color: "#333" }}>
                                                    <span className="text-blue-500">✓</span>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "14px" }}>
                                        Read Full Case Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
