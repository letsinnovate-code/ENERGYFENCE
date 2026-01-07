import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Whitepapers() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#050A0F" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <h1 className="text-white mb-6" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", fontWeight: "700" }}>
                            Whitepapers
                        </h1>
                        <p className="text-gray-300 mb-8" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.6", maxWidth: "800px" }}>
                            In-depth technical papers and research on energy management, AI applications, and industry best practices.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Physics-Informed AI for Energy Systems", category: "AI & Machine Learning", description: "Explore how combining physics principles with machine learning delivers superior prediction accuracy for energy applications.", pages: "24 pages" },
                            { title: "Predictive Maintenance in EV Charging Infrastructure", category: "Use Cases", description: "A comprehensive guide to implementing predictive maintenance strategies for electric vehicle charging networks.", pages: "18 pages" },
                            { title: "Digital Twin Technology for Renewable Energy", category: "Technology", description: "Learn how digital twins enable optimization and simulation for solar and wind energy installations.", pages: "32 pages" },
                            { title: "Cybersecurity in Industrial Energy Systems", category: "Security", description: "Best practices for securing critical energy infrastructure against evolving cyber threats.", pages: "28 pages" },
                            { title: "Grid Modernization with AI", category: "Grid Operations", description: "Strategies for transforming legacy grid infrastructure with artificial intelligence and automation.", pages: "36 pages" },
                            { title: "Battery Energy Storage Optimization", category: "Energy Storage", description: "Advanced techniques for maximizing battery performance, lifespan, and return on investment.", pages: "22 pages" }
                        ].map((paper, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <div className="mb-3">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm" style={{ fontFamily: "proxima-nova, sans-serif" }}>
                                        {paper.category}
                                    </span>
                                </div>
                                <h3 className="mb-3" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "24px", fontWeight: "700", color: "#050A0F" }}>
                                    {paper.title}
                                </h3>
                                <p className="mb-4" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
                                    {paper.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm" style={{ fontFamily: "proxima-nova, sans-serif" }}>{paper.pages}</span>
                                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "14px" }}>
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-6" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "700", color: "#050A0F" }}>
                        Stay Updated
                    </h2>
                    <p className="mb-8" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "18px", lineHeight: "1.6", color: "#666" }}>
                        Subscribe to receive new whitepapers and research directly to your inbox.
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-gray-300 rounded" style={{ fontFamily: "proxima-nova, sans-serif" }} />
                        <button className="px-6 py-3 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "14px" }}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
