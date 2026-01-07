"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommandGatewayPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=2070"
                        alt="Command Gateway"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                        Command Gateway
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A secure communication hub connecting field devices with our central platform.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                        <div>
                            <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">Description</p>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                                Bridging legacy OT with modern AI.
                            </h2>
                        </div>

                        <div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                The ENERGYFENCE™ Command Gateway is a secure communication hub that connects field devices with the central platform. It supports a wide range of industrial protocols (Modbus, DNP3, IEC 61850, MQTT, etc.), enabling legacy equipment to link into the modern AI-driven system. The gateway's responsibilities include: collecting sensor streams, relaying operator commands, and clustering for redundancy.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Protocol Translation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Bridges legacy OT interfaces to IP networks. For example, it can translate from a substation’s SCADA network to encrypted MQTT for cloud ingestion.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Clustering</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Gateways at multiple substations can form a mesh. If one gateway fails or gets overloaded, it automatically hands over its tasks to another node. This horizontal scaling reduces system failures.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Command Escalation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Handles critical output signals – an alarm trigger, an HV switch command, or any control directive – and escalates them to the appropriate device.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Some basic analytics (like initial threshold checks) can be performed on the gateway itself, acting as a fog node. This further speeds up detection of urgent issues.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 p-8 bg-gray-50">
                        <div className="max-w-3xl mx-auto text-center">
                            <h3 className="text-2xl font-normal text-gray-900 mb-4">A Trusted Bridge</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                "The Command Gateway ensures that ENERGYFENCE™ can integrate with any industrial environment, from modern smart grids to factories with decades-old equipment. It is the trusted bridge that makes our overall architecture robust and future-proof."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
