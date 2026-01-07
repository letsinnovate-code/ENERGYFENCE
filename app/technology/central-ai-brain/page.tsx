"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CentralAIBrainPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070"
                        alt="Central AI Brain"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                        Central AI Brain
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        The orchestrator of the ENERGYFENCE™ ecosystem, coordinating all specialized AI agents.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                        <div>
                            <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">Description</p>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                                A federated intelligence hub.
                            </h2>
                        </div>

                        <div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                The Central AI Brain is the orchestrator of the ENERGYFENCE™ ecosystem. It is a federated intelligence hub that coordinates all specialized AI agents (Edge, predictive models, compliance modules, etc.) to work toward common objectives. Drawing from multi-agent AI principles, our Central Brain serves as a “conductor” ensuring each component plays its part at the right time.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-1">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Orchestration</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Each AI agent has a specific role. The Central Brain monitors outputs and triggers tasks as needed. For example, if the Edge Agent flags a potential overload, the Central Brain might activate a network reconfiguration module. It manages and coordinates agent interactions so the right analysis runs for each situation.
                                </p>
                            </div>
                            <div className="order-2 h-px bg-gray-200 w-full mb-8 md:mb-0 md:h-full md:w-px mx-auto"></div>
                            {/* Using divider for visual separation instead of image in this layout style variant */}
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Unified Dashboard</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Aggregates results from all subsystems into enterprise dashboards. Executives see KPI trends at a glance, while engineers drill down into details. Provides context-rich views supporting mission-critical decision-making.
                                </p>
                            </div>
                            <div className="order-2 md:order-1 h-px bg-gray-200 w-full mb-8 md:mb-0 md:h-full md:w-px mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-1">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inter-Agent Communication</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Handles communication between subsystems. For instance, it might route a “weather alert” from an external service to both the Load Forecast Agent and the Compliance Agent, ensuring both adjust accordingly.
                                </p>
                            </div>
                            <div className="order-2 h-px bg-gray-200 w-full mb-8 md:mb-0 md:h-full md:w-px mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Human-in-the-Loop Integration</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Allows human operators to guide the AI. The Central Brain can accept operator overrides or preferences, incorporating them into its coordination logic. Helps meet regulatory requirements mandating human oversight.
                                </p>
                            </div>
                            <div className="order-2 md:order-1 h-px bg-gray-200 w-full mb-8 md:mb-0 md:h-full md:w-px mx-auto"></div>
                        </div>
                    </div>

                    <div className="mt-24 bg-[#050A0F] text-white p-12 relative overflow-hidden">
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-light mb-6">Enterprise Reliability</h3>
                            <p className="text-blue-100 text-lg leading-relaxed mb-8">
                                Underpinning all modules is a focus on uptime and security. We provide 24/7 cloud monitoring, strict access controls, and formal validation for industrial standards (e.g. NIST, IEC 62443). This guarantees that ENERGYFENCE™ advances intelligence at the reliability required by critical infrastructure.
                            </p>
                            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                                Contact Sales
                            </button>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
