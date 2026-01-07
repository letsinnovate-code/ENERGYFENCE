import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Leadership() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#050A0F" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <h1 className="text-white mb-6" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", fontWeight: "700" }}>
                            Leadership Team
                        </h1>
                        <p className="text-gray-300 mb-8" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.6", maxWidth: "800px" }}>
                            Meet the experienced leaders driving innovation and growth at ENERGYFENCE.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { name: "Dr. Sarah Chen", role: "CEO & Co-Founder", bio: "Former VP of AI at a leading energy company with 15+ years in energy technology and machine learning.", image: "bg-blue-500" },
                            { name: "Michael Rodriguez", role: "CTO & Co-Founder", bio: "Previously led engineering teams at major tech companies, expert in distributed systems and IoT.", image: "bg-purple-500" },
                            { name: "Dr. James Patterson", role: "Chief Scientist", bio: "PhD in Physics, pioneered physics-informed AI approaches for energy applications.", image: "bg-indigo-500" },
                            { name: "Lisa Wang", role: "VP of Product", bio: "Product leader with track record of launching successful enterprise software platforms.", image: "bg-teal-500" },
                            { name: "David Kumar", role: "VP of Engineering", bio: "20+ years building scalable systems for mission-critical applications.", image: "bg-cyan-500" },
                            { name: "Emily Foster", role: "VP of Sales", bio: "Energy industry veteran with deep relationships across utilities and industrial sectors.", image: "bg-emerald-500" }
                        ].map((leader, index) => (
                            <div key={index} className="group">
                                <div className={`relative h-80 ${leader.image} rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300`}></div>
                                <h3 className="mb-1" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "22px", fontWeight: "700", color: "#050A0F" }}>
                                    {leader.name}
                                </h3>
                                <p className="mb-3 text-blue-600" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", fontWeight: "600" }}>
                                    {leader.role}
                                </p>
                                <p style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
                                    {leader.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-6" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "700", color: "#050A0F" }}>
                        Join Our Team
                    </h2>
                    <p className="mb-8" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "18px", lineHeight: "1.6", color: "#666" }}>
                        We're always looking for talented individuals to join our mission.
                    </p>
                    <button className="px-8 py-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300" style={{ fontFamily: "proxima-nova, sans-serif", fontSize: "14px" }}>
                        View Open Positions
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
