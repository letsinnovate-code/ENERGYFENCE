"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EdgeAIAgentPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070"
                        alt="Edge AI Agent"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                        Edge AI Agent
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A self-contained computing module for real-time inference, reduced latency, and resilience.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                        <div>
                            <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">Description</p>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                                Real-time AI inference at the source.
                            </h2>
                        </div>

                        <div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                The Edge AI Agent is a self-contained computing module deployed at each critical site. It continuously acquires signals from attached sensors and runs AI inference in real time. The advantages of edge intelligence include reduced latency and resilience, enabling millisecond-level decisions. Events like a transformer overheating or a drive gear malfunction are detected locally, triggering near-instant alerts or protective actions without waiting for cloud analysis.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 lg:gap-2">
                        <div className="bg-gray-50 p-8">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Offline Operation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The device can operate autonomously during network outages. It caches data and syncs with the cloud when connectivity is restored, ensuring no critical event is lost. Vital for remote areas.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Robust</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Industrial-grade hardware with secure boot, encrypted storage, and tamper-proof enclosures. Models are containerized for safety, and updates are delivered via secure OTA channels.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sensor Fusion</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Capable of handling diverse data: analog sensors, PLC connections, cameras, and environmental inputs. Preprocesses data before passing concise insights upward.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Networking</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Edge Agents collaborate in a mini-network to share alerts. For example, if one agent detects a fire, it can notify a neighbor to initiate a coordinated shutdown.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <p className="text-gray-600 text-lg italic text-center max-w-3xl mx-auto">
                            "By offloading routine analytics to the edge, ENERGYFENCE™ greatly reduces cloud compute needs and network traffic, while keeping critical safety functions running even under duress."
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
