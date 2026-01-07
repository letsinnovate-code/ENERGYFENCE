"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SystemArchitecturePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034"
                        alt="System Architecture"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                        System Architecture
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A three-tier system optimized for energy infrastructure, blending hardened edge computing, secure connectivity, and cloud intelligence.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                        <div>
                            <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">Overview</p>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                                Built for reliability, security, and real-time performance.
                            </h2>
                        </div>

                        <div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                ENERGYFENCE™ is underpinned by a robust, scalable technology stack designed for the most demanding industrial environments. Our modular design ensures that the system can be deployed incrementally and scaled across any number of sites. Each component communicates via encrypted channels and follows industry standards (e.g., MQTT, OPC-UA), forming a unified, secure IoT fabric.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-24">
                        {/* Device Layer */}
                        <div className="grid md:grid-cols-2 gap-2 items-center">
                            <div className="order-2 md:order-1 relative h-[400px] overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1563770095-39d468f9a51d?auto=format&fit=crop&q=80&w=2070"
                                    alt="Device Layer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Device Layer</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Field devices and sensors (temperature, vibration, current, weather, video, etc.) collect data at substations, generation sites, and customer facilities. These connect directly to the Edge AI Agents for immediate processing.
                                </p>
                            </div>
                        </div>

                        {/* Edge & Fog Layer */}
                        <div className="grid md:grid-cols-2 gap-2 items-center">
                            <div className="order-1">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Edge & Fog Layer</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    At each site or substation, our Edge AI Agent and Command Gateway reside on ruggedized hardware. The Edge AI Agent processes data locally and can make autonomous decisions, especially when disconnected. The Command Gateway serves as a fog node, aggregating data and ensuring connectivity. Gateways are deployed in clusters for high availability, allowing task transfer if one fails.
                                </p>
                            </div>
                            <div className="order-2 relative h-[400px] overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                                    alt="Edge Layer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Cloud & Central Layer */}
                        <div className="grid md:grid-cols-2 gap-2 items-center">
                            <div className="order-2 md:order-1 relative h-[400px] overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                                    alt="Cloud Layer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud & Central Layer</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    In the cloud (or private datacenter), the Central AI Brain and Digital Twin Engine perform heavy analytics, long-term storage, and user interfacing. Machine learning models are trained and updated here, with results and alerts fed back down to edge systems or operations centers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center font-sans">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-12">Key Design Principles</h2>
                    <div className="grid md:grid-cols-3 gap-2">
                        <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Resilience</h3>
                            <p className="text-gray-600">Blending on-premises intelligence with centralized oversight balances resilience, compliance, and scalability.</p>
                        </div>
                        <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Security</h3>
                            <p className="text-gray-600">Data pipelines use standard encryption and authentication. The system supports air-gapped network operation.</p>
                        </div>
                        <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Scalability</h3>
                            <p className="text-gray-600">Modular design allows incremental deployment and scaling across any number of sites.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
