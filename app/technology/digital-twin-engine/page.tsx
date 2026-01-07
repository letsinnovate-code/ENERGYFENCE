"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DigitalTwinEnginePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070"
                        alt="Digital Twin Engine"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                        Digital Twin Engine
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A powerful virtual testing and analytics environment blending digital twin technology with cloud scale.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                        <div>
                            <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">Description</p>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                                Extending the physical control room with a virtual one.
                            </h2>
                        </div>

                        <div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                At the heart of ENERGYFENCE™ is our Cloud-based Digital Twin Engine, which provides a powerful virtual testing and analytics environment. It combines the latest advances in digital twin technology with the scale of cloud computing. Operators using ENERGYFENCE™ gain actionable insights from both real and simulated domains – turning data into foresight.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="relative h-[250px] md:h-[350px] overflow-hidden shadow-lg group">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" alt="Continuous Data Sync" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-xl font-semibold text-white mb-2">Continuous Data Sync</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Live data from IoT sensors (telemetry, voltages, mechanical readings) flows into the engine in near real time, keeping the virtual model in lockstep with the physical system.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[250px] md:h-[350px] overflow-hidden shadow-lg group">
                            <img src="https://images.unsplash.com/photo-1531297461136-82lw9b44d940?auto=format&fit=crop&q=80&w=2074" alt="Lifecycle Integration" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-xl font-semibold text-white mb-2">Lifecycle Integration</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Covers the full asset lifecycle. Helps identify performance drifts so engineers can schedule recalibration or maintenance.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[250px] md:h-[350px] overflow-hidden shadow-lg group">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" alt="Holistic Scenario Engine" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-xl font-semibold text-white mb-2">Holistic Scenario Engine</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Simulate multiple dimensions simultaneously. E.g., combine weather data with grid load profiles to simulate a storm's impact and propose pre-emptive load shedding.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[250px] md:h-[350px] overflow-hidden shadow-lg group">
                            <img src="https://images.unsplash.com/photo-1555664424-778a69022365?auto=format&fit=crop&q=80&w=2070" alt="AI-Driven Optimization" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-xl font-semibold text-white mb-2">AI-Driven Optimization</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Machine learning optimizes parameters, like adjusting an inverter's settings to maximize yield or simulating transformer tap settings for voltage stability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
