"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PhysicsInformedAIPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965"
                        alt="Physics-Informed AI"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                        Physics-Informed AI
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Embedding scientific first principles directly into neural networks for accurate, trustworthy predictions.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                        <div>
                            <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">Description</p>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                                Blending data and physics for robust predictions.
                            </h2>
                        </div>

                        <div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                ENERGYFENCE™ leverages physics-informed AI (PI-AI) models to achieve accurate, trustworthy predictions for energy systems. Unlike black-box algorithms, our PI-AI embeds scientific first principles (e.g. Ohm’s law, fluid dynamics, thermodynamics) directly into neural networks. This hybrid approach requires less data to train and inherently respects known physical laws.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="bg-white p-10 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scientific Consistency</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                By construction, PI-AI minimizes violations of physics. An AI model predicting temperature and pressure will not output values that break thermodynamic relationships. This leads to highly reliable forecasts, even in edge cases with sparse historical data.
                            </p>
                            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                        </div>

                        <div className="bg-white p-10 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real-Time What-Ifs</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Because our PI-AI runs orders of magnitude faster than conventional simulators, operators can rapidly explore thousands of scenarios (e.g. grid reconfiguration, fault conditions) with confidence. The AI takes seconds to evaluate what would have taken hours by physics-only simulation.
                            </p>
                            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                        </div>

                        <div className="bg-white p-10 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Operational Efficiency</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Blending data and physics means the system can generalize well to new situations. A model trained on existing data can predict how a brand-new design might behave because the underlying equations are learned.
                            </p>
                            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                        </div>

                        <div className="bg-white p-10 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transparency</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Outputs from PI-AI can be traced back to physical inputs, aiding interpretability. This is critical for industrial users who must understand why a prediction is made, especially under regulatory scrutiny.
                            </p>
                            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                            "Learning solutions by minimizing how much it violates the laws of physics."
                        </h3>
                        <p className="text-gray-500 text-sm tracking-wide uppercase">
                            - Resulting in robust predictions that stand up in real-world operations
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
