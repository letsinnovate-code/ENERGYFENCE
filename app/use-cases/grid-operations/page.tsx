"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GridOperationsPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070"
                        alt="Grid Infrastructure"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
                        Grid Operations
                    </h1>
                    <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                        A control room with foresight for a smarter, more resilient grid.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                            Managing Complexity
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Large-scale transmission and distribution systems are becoming increasingly complex with distributed generation and dynamic loads.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            ENERGYFENCE™ helps grid operators by providing a holistic, real-time view and predictive capabilities.
                        </p>
                    </div>
                    <div>
                        <div className="bg-gray-50 p-8 h-full flex flex-col justify-center">
                            <blockquote className="text-xl text-gray-800 italic mb-4">
                                "AI augments traditional predictive maintenance to help utilities prioritize work, reduce failures."
                            </blockquote>
                            <cite className="text-gray-600 not-italic">- Deloitte</cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-2">
                        {/* Feature 1 */}
                        <div className="bg-gray-800 p-10 hover:bg-gray-700 transition-colors duration-300">
                            <h3 className="text-2xl font-normal text-white mb-4">Holistic Network Modeling</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                The digital twin provides a comprehensive map of the grid, including real-time status of distributed energy resources (solar, wind, EVs). Operators can simulate contingencies (e.g. a substation fault) and assess impacts without risking the actual grid.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-gray-800 p-10 hover:bg-gray-700 transition-colors duration-300">
                            <h3 className="text-2xl font-normal text-white mb-4">Adaptive Protection</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Our AI can detect incipient faults (like partial discharges or grounding faults) well before they escalate. By employing predictive analytics, outages are reduced.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-gray-800 p-10 hover:bg-gray-700 transition-colors duration-300">
                            <h3 className="text-2xl font-normal text-white mb-4">Real-Time Balancing</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                The Central Brain ingests telemetry from smart meters and DER controllers to adjust supply in milliseconds. For instance, if a surge of EV charging is detected, the system can reroute power or dispatch local storage to keep the grid stable.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-gray-800 p-10 hover:bg-gray-700 transition-colors duration-300">
                            <h3 className="text-2xl font-normal text-white mb-4">Regulatory Compliance</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                NERC CIP standards and other grid codes demand tight control over system changes. Every switch, tie-line opening, and maintenance action is automatically recorded, giving regulators full visibility with minimal effort from operators.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="relative h-[600px] flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=2070"
                        alt="Control Room"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/80"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl text-white font-light mb-8">
                        Future-Proof Your Grid Operations
                    </h2>
                    <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                        Industry trends show that operators who integrate AI into control centers are able to manage distributed resources more reliably.
                    </p>
                    <button className="bg-white text-blue-900 px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-colors uppercase tracking-wider">
                        Schedule a Demo
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
