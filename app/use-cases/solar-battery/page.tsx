"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SolarBatteryPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2072"
                        alt="Solar Farm"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
                        Solar & Battery Plants
                    </h1>
                    <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                        Optimizing dynamic assets with physics-informed AI and predictive analytics.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-blue-600 font-medium mb-4 tracking-widest uppercase text-sm">Overview</p>
                            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                                Maximize yield and longevity.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Utility-scale solar farms and battery energy storage systems (BESS) are dynamic assets – their output varies with weather and state of charge.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                ENERGYFENCE™ optimizes these facilities by combining real-time performance monitoring with advanced machine learning for yield prediction and battery health analytics.
                            </p>
                        </div>
                        <div className="relative h-[500px] bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1620641933455-d4e5832157d5?auto=format&fit=crop&q=80&w=2070"
                                alt="Solar Panels"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Breakdown */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-2">
                        {/* Card 1 */}
                        <div className="bg-white overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1548325958-380d12e873ae?auto=format&fit=crop&q=80&w=1974"
                                    alt="Monitoring"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-normal text-gray-900 mb-4">Performance Monitoring</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Continuous tracking of panel string currents and inverter temperatures identifies underperforming cells or units.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2074"
                                    alt="Prediction"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-normal text-gray-900 mb-4">Yield Prediction</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Machine learning forecasts solar production based on weather data and historical patterns, improving grid integration.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=2058"
                                    alt="Battery Health"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-normal text-gray-900 mb-4">Battery Health Analytics</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our physics-informed models predict state-of-health and estimate remaining life, scheduling maintenance before costly failures.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 mt-8">
                        {/* Card 4 */}
                        <div className="bg-white p-10 border border-gray-100 flex flex-col justify-center">
                            <h3 className="text-2xl font-normal text-gray-900 mb-4">Energy Management</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The platform’s AI engine can autonomously decide when to charge or discharge storage, maximizing revenue (selling at peak prices) or ensuring reserve capacity.
                            </p>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-white p-10 border border-gray-100 flex flex-col justify-center">
                            <h3 className="text-2xl font-normal text-gray-900 mb-4">Virtual Simulation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                By replicating the solar plant and battery bank in the digital twin, operators can test the impact of, say, adding more panels or changing the inverter configuration before doing it on-site.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact / Results Section */}
            <section className="py-24 px-6 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                                Proven Results
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                These capabilities lead to higher overall efficiency. For example, a large solar operator using a digital twin reduced inverter downtime by identifying optimal cooling schedules. Meanwhile, BESS sites using predictive analytics achieved longer battery lifetimes and avoided unplanned outages.
                            </p>
                        </div>
                        <div className="bg-blue-600 p-12 text-white">
                            <h3 className="text-2xl font-normal mb-6">Ready to optimize your assets?</h3>
                            <p className="text-blue-100 leading-relaxed mb-8">
                                Connect your solar and battery infrastructure to ENERGYFENCE™ and unlock the full potential of your renewable investments.
                            </p>
                            <button className="bg-white text-blue-600 px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors uppercase tracking-wider">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
