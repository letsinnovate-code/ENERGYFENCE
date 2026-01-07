"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EVChargingPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2072"
                        alt="EV Charging Station"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
                        EV Charging Networks
                    </h1>
                    <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                        Reshaping energy demand with intelligent, reliable, and safe charging infrastructure.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1646714083653-53303666d936?q=80&w=2070&auto=format&fit=crop"
                                alt="EV Charger Detail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-blue-600 font-medium mb-4 tracking-widest uppercase text-sm">Overview</p>
                            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                                Operational excellence for charging networks.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The rapid deployment of electric vehicle (EV) charging stations is reshaping energy demand. Networks of fast chargers present unique operational and reliability challenges: high, variable loads; voltage fluctuations; and safety at public sites.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                ENERGYFENCE™ transforms EV charging operations by providing a robust, AI-driven platform that ensures reliability, safety, and efficiency across your entire network.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
                            Smart Charging Brain
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Empowering stakeholders with AI-driven insights and control.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                        {/* Feature 1 */}
                        <div className="bg-white p-12 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                            <h3 className="text-2xl font-normal text-gray-900 mb-4">Demand Forecasting</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                AI models predict charging load surges (e.g. evening peak), enabling utilities to pre-position generation or storage.
                            </p>
                            <div className="h-48 bg-gray-200 mt-6 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                                    alt="Data Analytics"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-12 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                            <h3 className="text-2xl font-normal text-gray-900 mb-4">Real-Time Load Control</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Through our Command Gateway, chargers can be remotely throttled or sequenced to prevent local grid overloads during peak demand.
                            </p>
                            <div className="h-48 bg-gray-200 mt-6 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1974"
                                    alt="Control Panel"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-12 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                            <h3 className="text-2xl font-normal text-gray-900 mb-4">Preventive Maintenance</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Sensors monitor charger components (power electronics, cooling fans) so failures are anticipated before causing downtime. Studies show that such predictive strategies can improve charger uptime and reduce operational costs.
                            </p>
                            <div className="h-48 bg-gray-200 mt-6 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&q=80&w=2070"
                                    alt="Maintenance"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-12 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                            <h3 className="text-2xl font-normal text-gray-900 mb-4">Safety and Compliance</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                The system oversees site safety systems (ground-fault detection, emergency shutdown mechanisms) and logs all events in compliance-ready reports for regulators.
                            </p>
                            <div className="h-48 bg-gray-200 mt-6 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
                                    alt="Compliance"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion / Digital Twin Section */}
            <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=2070"
                        alt="Digital Twin Simulation"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                            Plan network expansion with confidence.
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            With ENERGYFENCE™, operators gain a “smart charging brain” that balances customer demand with grid safety. Rapid alerts warn of malfunctions, while simulations (via digital twin) help plan network expansion under future loads.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors uppercase tracking-wider">
                            Explore Digital Twin
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
