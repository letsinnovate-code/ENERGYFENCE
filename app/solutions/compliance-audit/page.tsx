'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ComplianceAuditPage() {
    const [activeTab, setActiveTab] = useState('operators');

    return (
        <div className="min-h-screen bg-white">
            <Navbar />



            {/* KONUX CoBrix Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1000&fit=crop"
                        alt="Railway tracks"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-light mb-4">
                        KONUX CoBrix
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        The Platform Powering Railway Innovation
                    </p>
                    <button className="group flex items-center gap-2 mx-auto text-white hover:text-blue-400 transition-colors duration-300">
                        <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                        <span className="text-lg">Learn more</span>
                    </button>
                </div>
            </section>
            {/* Hero Section */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-blue-500 font-medium mb-6 tracking-wide">The future of rail</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 max-w-5xl mx-auto leading-tight">
                        Most rail tech is either rigid or siloed. Legacy systems lack interoperability,
                        single-purpose solutions do not scale, and innovation gets stuck at the PoC
                        stage.
                    </h1>
                    <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
                        Infrastructure managers, OEMs, and tech firms struggle to turn data into decisions especially across domains.
                    </p>
                    <button className="w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 transition-all duration-300 flex items-center justify-center mx-auto">
                        <ChevronDown className="w-6 h-6 text-blue-500" />
                    </button>
                </div>
            </section>

            {/* Our Response Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative h-[500px]  overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=1000&fit=crop"
                                alt="Modern rail infrastructure"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <p className="text-blue-500 font-medium mb-4 tracking-wide">Our response</p>
                            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900 leading-tight">
                                KONUX CoBrix is our modular Data & AI Platform designed to help partners co-create
                                rail infrastructure solutions.
                            </h2>

                            <div className="mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-lg">
                                        faster, smarter, and at scale.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-200">
                                <p className="text-gray-600 leading-relaxed">
                                    The railway industry is grappling with aging infrastructure, disconnected
                                    data systems, and siloed innovation. As a result, operators and
                                    technology partners often duplicate efforts and waste resources solving
                                    the same problems independently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-400 text-center mb-16 text-lg">
                        Platform Architecture Highlights:
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text Content */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <span className="text-blue-400">→</span>
                                    Curated Components That Save Time
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    KONUX CoBrix includes ready-to-integrate data and analytics "blocks" – pre-processed, rail-specific
                                    components developed through operational experience. These accelerate the delivery of AI-powered applications
                                    and eliminate months of setup work for each new use case.
                                </p>
                            </div>

                            <div className="opacity-60">
                                <h3 className="text-xl font-medium mb-2">
                                    Enabling Federated Data
                                </h3>
                            </div>

                            <div className="opacity-60">
                                <h3 className="text-xl font-medium mb-2">
                                    Built for Real Integration, Not Isolation
                                </h3>
                            </div>
                        </div>

                        {/* Right Side - Architecture Diagram */}
                        <div className="relative h-[600px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&h=1200&fit=crop"
                                alt="Platform Architecture"
                                className="w-full h-full object-cover "
                            />
                            {/* Overlay labels would go here in a real implementation */}
                        </div>
                    </div>
                </div>
            </section>


            {/* What it enables Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-gray-900">
                        What it enables
                    </h2>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-16">
                        <button
                            onClick={() => setActiveTab('operators')}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'operators'
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            For rail operators
                        </button>
                        <button
                            onClick={() => setActiveTab('partners')}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'partners'
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            For OEMs and tech partners
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative h-[500px] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=1000&fit=crop"
                                alt="Rail infrastructure"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Features List */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">For rail operators</h3>
                            <p className="text-gray-600 mb-8">KONUX CoBrix becomes a foundation to:</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-lg">
                                        Connect switch, track, and power system data in one place.
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-lg">
                                        Add intelligence to existing infrastructure.
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-lg">
                                        AI models for predictive maintenance, planning, and anomaly detection.
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-lg">
                                        Enable fast optimization with new partners and tech.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* KONUX CoBrix Closing Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=800&fit=crop"
                        alt="Railway tracks at night"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-6xl font-light mb-4">
                        KONUX CoBrix
                    </h2>
                    <p className="text-gray-300 text-xl mb-8">
                        the foundation for co-creating the future of rail.
                    </p>
                    <button className="group flex items-center gap-2 mx-auto text-gray-300 hover:text-white transition-colors duration-300">
                        <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </section>
            {/* Proven Impact in the Field Section */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-black to-blue-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Proven Impact in the Field
                    </h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        See how leading rail operators are using KONUX to boost reliability, efficiency, and performance.
                    </p>
                    <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        View all case studies
                    </button>
                </div>
            </section>



            <Footer />




        </div>
    );
}
