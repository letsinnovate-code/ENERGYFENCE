"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IndustrialManufacturingPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1565515267326-b800ceb677a9?auto=format&fit=crop&q=80&w=2070"
                        alt="Industrial Factory"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
                        Industrial Manufacturing
                    </h1>
                    <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                        Eliminating downtime and optimizing efficiency for the factories of tomorrow.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-blue-600 font-medium mb-4 tracking-widest uppercase text-sm">Challenge</p>
                    <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                        The high cost of downtime.
                    </h2>
                    <p className="text-gray-600 text-xl leading-relaxed">
                        Factories and industrial plants consume massive energy and rely on continuous equipment operation. Downtime can cost millions per hour. ENERGYFENCE™ addresses industrial needs by providing deep visibility and predictive control.
                    </p>
                </div>
            </section>

            {/* Features Zig-Zag */}
            <section className="pb-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto space-y-24">
                    {/* Feature 1 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2070"
                                alt="Asset Monitoring"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-2xl md:text-4xl font-light text-gray-900 mb-6">Asset-Centric Health Monitoring</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Motors, pumps, compressors and other heavy machinery are instrumented. AI models learn vibration and temperature norms; when deviations occur, engineers are notified to perform maintenance.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                This approach extends machine life and boosts production.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-light text-gray-900 mb-6">Energy Usage Optimization</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The platform correlates process parameters with energy consumption, identifying waste. For example, it might reveal that a particular batch process runs inefficiently at certain times, prompting operational changes.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2070"
                                alt="Energy Optimization"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Feature 3 & 4 Grid */}
                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="bg-gray-50 p-12">
                            <h3 className="text-2xl font-light text-gray-900 mb-4">Safety Management</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Robotics and equipment safety systems (light curtains, safety interlocks) are integrated. If a fault is detected, ENERGYFENCE™ can trigger emergency stops instantly via the edge agents.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-12">
                            <h3 className="text-2xl font-light text-gray-900 mb-4">Regulatory Reporting</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Many plants are subject to environmental and safety audits (e.g. OSHA, EPA standards). ENERGYFENCE™ automatically logs emissions data, equipment certifications, and incident records into audit-ready formats.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Stats / Proof Section */}
            <section className="py-24 px-6 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-light mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                                Proven Impact
                            </h2>
                            <p className="text-blue-100 text-lg leading-relaxed mb-8">
                                Clients in manufacturing report improved throughput and near-elimination of unplanned breakdowns thanks to such solutions.
                            </p>
                            <div className="inline-block border-l-4 border-white pl-6">
                                <p className="text-4xl font-light mb-2">30% Reduction</p>
                                <p className="text-blue-200">in machine stoppages after deploying automated monitoring.</p>
                            </div>
                        </div>
                        <div className="relative h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=2009"
                                alt="Production Line"
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
