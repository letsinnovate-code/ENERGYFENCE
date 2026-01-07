'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Sub-navigation items for Solutions section
const subNavItems = [
    { label: 'Command Control & Safety', href: '/solutions/command-control-safety', active: true },
    { label: 'Predictive Failure Intelligence', href: '/solutions/predictive-failure', active: false },
    { label: 'Digital Twin & Simulation', href: '/solutions/digital-twin', active: false },
    { label: 'Compliance & Audit Automation', href: '/solutions/compliance-audit', active: false },
];

// Main navigation items
const mainNavItems = [
    { label: 'Solutions', href: '/solutions', active: true },
    { label: 'Technology', href: '/technology', active: false },
    { label: 'Use Cases', href: '/use-cases', active: false },
    { label: 'Resources', href: '/resources', active: false },
    { label: 'Company', href: '/company', active: false },
    { label: 'Contact', href: '/contact', active: false },
];

// Use Cases data
const useCases = [
    {
        id: 1,
        title: 'Real-Time Fault Detection & Response',
        description: 'Provides millisecond-level detection and autonomous response to electrical faults, arc flash events, and equipment anomalies. Evaluates the severity of incidents and triggers appropriate protective actions. Helps prevent cascading failures and minimizes equipment damage through intelligent isolation.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
    },
    {
        id: 2,
        title: 'Predictive Equipment Monitoring',
        description: 'Continuously monitors equipment health indicators to predict potential failures before they occur. Uses AI-driven analytics to identify degradation patterns and recommend preventive maintenance actions.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
        id: 3,
        title: 'Grid Stability & Load Management',
        description: 'Monitors grid connections and load distribution in real-time to maintain optimal power flow. Automatically adjusts settings to prevent overloads and ensure stable grid integration.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop'
    },
    {
        id: 4,
        title: 'Safety Compliance & Audit Automation',
        description: 'Automatically generates compliance documentation and audit trails for regulatory requirements. Tracks all safety events, responses, and maintenance activities for complete traceability.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    }
];

export default function CommandControlSafetyPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeUseCase, setActiveUseCase] = useState(1);
    const [sliderIndex, setSliderIndex] = useState(0);

    // Features data for the slider
    const features = [
        {
            id: 1,
            title: 'Smart Alerts',
            description: 'Context-aware alarms and warnings triggered by meaningful changes in signal data. Alerts are corrected for weather, temperature, and load patterns to reduce false positives.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            title: 'Wheel Trajectory Reconstruction (WTR)',
            description: 'AI-powered reconstruction of the wheel path through the monitoring area, identifying dip angles, impact forces, and early-stage geometry defects.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            title: 'Asset Prioritisation',
            description: 'Aggregated reliability scores representing the health of the asset across substations, inverters, and grid connections, supporting consistent triage and fleet-wide asset prioritisation.',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'
        },
        {
            id: 4,
            title: 'Asset Notes & Annotations',
            description: 'Attach field observations, inspection records, videos, and alerts to individual assets. Supports collaboration and long-term asset intelligence.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop'
        }
    ];

    // Benefits data
    const [activeBenefit, setActiveBenefit] = useState(1);
    const benefits = [
        {
            id: 1,
            title: 'Reduce disruption',
            description: 'Catch failures early and schedule interventions before they cause unplanned downtime or speed restrictions.',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
        },
        {
            id: 2,
            title: 'Lower cost',
            description: 'Optimize maintenance schedules and resource allocation to significantly reduce operational expenditure across your asset base.',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
        },
        {
            id: 3,
            title: 'Increase safety',
            description: 'Proactively identify safety-critical issues and ensure compliance with regulatory standards through continuous monitoring.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
        },
        {
            id: 4,
            title: 'Improve decision-making',
            description: 'Leverage AI-driven insights and comprehensive data analytics to make informed decisions about asset management and maintenance priorities.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: '"Prime Font", sans-serif' }}>
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=80"
                        alt="Energy Infrastructure"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 pt-24">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                        Command Control & Safety
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
                        Intelligent protection at optimal efficiency.
                    </p>

                    {/* Learn More Button */}
                    <button className="group flex items-center gap-3 mx-auto text-white/90 hover:text-white transition-colors duration-300">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                        <span className="text-base font-medium">Learn more</span>
                    </button>
                </div>

                {/* Decorative Element - Floating Device Visual */}
                <div className="absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 hidden lg:block">
                    <div className="w-80 h-64 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#007DCD]/20 to-transparent rounded-lg backdrop-blur-sm border border-white/10"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-24 h-24 bg-[#007DCD] rounded-lg flex items-center justify-center shadow-2xl">
                                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Label */}
                    <p className="text-[#007DCD] font-medium text-sm tracking-wide mb-8">
                        Introduction
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-normal text-gray-900 leading-tight mb-6">
                        Command Control & Safety is a predictive and prescriptive protection solution built for the most critical and costly assets in energy infrastructure.
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl mx-auto">
                        By combining IoT devices, AI, and deep energy expertise, it enables early failure detection, precise diagnostics, and data-driven planning. The result: fewer disruptions, lower OPEX, and longer asset life.
                    </p>

                    {/* Scroll Down Button */}
                    <button className="w-12 h-12 rounded-full bg-[#e8f4fc] flex items-center justify-center mx-auto hover:bg-[#d0ebf7] transition-colors duration-300">
                        <svg className="w-5 h-5 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Stats Slider Section */}
            <section className="py-8 border-t border-gray-200 overflow-hidden">
                <style jsx>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-scroll {
                        animation: scroll 20s linear infinite;
                    }
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="relative">
                    {/* Slider Container - Duplicated for seamless loop */}
                    <div className="flex animate-scroll" style={{ width: 'fit-content' }}>
                        {/* First set of cards */}
                        <div className="flex">
                            {/* Stat Card 1 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">20%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">longer component lifetime</p>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">90%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">of service-affecting defects detected in advance</p>
                            </div>

                            {/* Stat Card 3 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">50%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">fewer delay minutes</p>
                            </div>

                            {/* Stat Card 4 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">45%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">reduction in downtime for repair</p>
                            </div>

                            {/* Stat Card 5 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">30%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">lower maintenance costs</p>
                            </div>

                            {/* Stat Card 6 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">99.9%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">system uptime guarantee</p>
                            </div>
                        </div>

                        {/* Duplicated set of cards for seamless loop */}
                        <div className="flex">
                            {/* Stat Card 1 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">20%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">longer component lifetime</p>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">90%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">of service-affecting defects detected in advance</p>
                            </div>

                            {/* Stat Card 3 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">50%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">fewer delay minutes</p>
                            </div>

                            {/* Stat Card 4 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">45%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">reduction in downtime for repair</p>
                            </div>

                            {/* Stat Card 5 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">30%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">lower maintenance costs</p>
                            </div>

                            {/* Stat Card 6 */}
                            <div className="flex-shrink-0 w-64 px-8 py-6 border-r border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-3xl font-light text-gray-900">99.9%</span>
                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">system uptime guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* What It Does Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div>
                            {/* Section Label */}
                            <p className="text-[#007DCD] font-medium text-sm tracking-wide mb-6">
                                What It Does
                            </p>

                            {/* Main Heading */}
                            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-normal text-gray-900 leading-tight mb-10">
                                Command Control & Safety continuously analyzes the condition of your most critical components, substations, inverters, and grid connections, providing early alerts and actionable recommendations.
                            </h2>

                            {/* Feature List */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#007DCD] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-base">Detect anomalies before they escalate</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#007DCD] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-base">Optimize inspection and maintenance schedules</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#007DCD] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-base">Track the effectiveness of maintenance actions</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#007DCD] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-base">Extend component life through smarter planning</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                                    alt="Dashboard analytics view"
                                    className="w-full h-auto object-cover shadow-lg"
                                />
                                {/* Subtle overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 px-6 bg-[#1a1a2e]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl font-normal text-white text-center mb-16">
                        Use Cases
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Left Image */}
                        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                            <img
                                src={useCases.find(uc => uc.id === activeUseCase)?.image || useCases[0].image}
                                alt="Use case illustration"
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />
                        </div>

                        {/* Right Accordion */}
                        <div className="space-y-0">
                            {useCases.map((useCase) => (
                                <div key={useCase.id} className="border-b border-gray-700">
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => setActiveUseCase(activeUseCase === useCase.id ? 0 : useCase.id)}
                                        className="w-full py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className={`text-base font-medium transition-colors ${activeUseCase === useCase.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                            }`}>
                                            {useCase.title}
                                        </span>
                                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${activeUseCase === useCase.id
                                            ? 'border-white bg-white/10 rotate-45'
                                            : 'border-gray-600 group-hover:border-gray-400'
                                            }`}>
                                            <svg className={`w-4 h-4 transition-colors ${activeUseCase === useCase.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                                                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* Accordion Content */}
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeUseCase === useCase.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="pb-6">
                                            {/* Expanded Title */}
                                            <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
                                                {useCase.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {useCase.description}
                                            </p>

                                            {/* Watch Video Button */}
                                            <button className="px-6 py-2.5 bg-[#007DCD] text-white text-sm font-medium hover:bg-[#006bb0] transition-colors">
                                                Watch video
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-[#f5f7f9]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-2">
                        {/* Left Title and Navigation */}
                        <div className="md:w-48 flex flex-col justify-between h-[400px] flex-shrink-0">
                            <h2 className="text-2xl md:text-3xl font-normal text-[#007DCD] mb-8">
                                Features
                            </h2>

                            {/* Navigation Arrows */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSliderIndex(Math.max(0, sliderIndex - 1))}
                                    disabled={sliderIndex === 0}
                                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${sliderIndex === 0
                                        ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-400 text-gray-600 hover:border-[#007DCD] hover:text-[#007DCD]'
                                        }`}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setSliderIndex(Math.min(features.length - 2, sliderIndex + 1))}
                                    disabled={sliderIndex >= features.length - 2}
                                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${sliderIndex >= features.length - 2
                                        ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-400 text-gray-600 hover:border-[#007DCD] hover:text-[#007DCD]'
                                        }`}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Cards Slider */}
                        <div className="flex-1 overflow-hidden">
                            <div
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${sliderIndex * (100 / 2)}%)` }}
                            >
                                {features.map((feature) => (
                                    <div
                                        key={feature.id}
                                        className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
                                    >
                                        {/* Card */}
                                        <div className="bg-white h-full">
                                            {/* Image */}
                                            <div className="relative h-48 md:h-56 overflow-hidden">
                                                <img
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                    {feature.description}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center gap-2 text-[#007DCD] text-sm font-medium hover:underline"
                                                >
                                                    <span className="w-5 h-5 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </span>
                                                    Learn more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6">
                            Benefits
                        </h2>
                        {/* Scroll Indicator */}
                        <div className="w-10 h-10 mx-auto rounded-full border border-[#007DCD] flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Left Image */}
                        <div className="relative h-[350px] md:h-[450px] overflow-hidden">
                            <img
                                src={benefits.find(b => b.id === activeBenefit)?.image || benefits[0].image}
                                alt="Benefit illustration"
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                        </div>

                        {/* Right Benefits List */}
                        <div className="space-y-0">
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit.id}
                                    className={`border-b border-gray-200 cursor-pointer transition-all ${activeBenefit === benefit.id ? '' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveBenefit(benefit.id)}
                                >
                                    {/* Benefit Header */}
                                    <div className="py-4 flex items-center gap-3">
                                        {activeBenefit === benefit.id && (
                                            <svg className="w-4 h-4 text-gray-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        )}
                                        <span className={`text-base transition-colors ${activeBenefit === benefit.id
                                            ? 'font-semibold text-[#007DCD]'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}>
                                            {benefit.title}
                                        </span>
                                    </div>

                                    {/* Benefit Description (shown when active) */}
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeBenefit === benefit.id ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
                                        }`}>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted in the Field Section */}
            <section className="bg-[#0a0a1a]">
                {/* Hero Image */}
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=800&fit=crop"
                        alt="Field workers"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a]"></div>
                </div>

                {/* Content */}
                <div className="px-6 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
                            {/* Left Content */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-normal text-white mb-6">
                                    Trusted in the Field
                                </h2>
                                {/* Scroll Indicator */}
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    ENERGYFENCE Command Control & Safety is deployed across major energy networks including utility providers and industrial operators. It has passed third-party verification and enabled infrastructure managers to reduce delays, prioritise investment, and modernise maintenance regimes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industry Logos Slider */}
                <div className="border-t border-gray-800 py-6 overflow-hidden">
                    <style jsx>{`
                        @keyframes scrollLogos {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        .animate-scroll-logos {
                            animation: scrollLogos 25s linear infinite;
                        }
                    `}</style>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-8">
                            {/* Label */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <svg className="w-5 h-5 text-[#007DCD]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-400 whitespace-nowrap">Trusted by industry leaders:</span>
                            </div>

                            {/* Logos Slider */}
                            <div className="flex-1 overflow-hidden">
                                <div className="flex animate-scroll-logos" style={{ width: 'fit-content' }}>
                                    {/* First set of logos */}
                                    <div className="flex items-center gap-16 px-8">
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">SIEMENS ENERGY</span>
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">SCHNEIDER ELECTRIC</span>
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">ABB</span>
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">GE VERNOVA</span>
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">ENEL</span>
                                    </div>
                                    {/* Duplicate for seamless loop */}
                                    <div className="flex items-center gap-16 px-8">
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">SIEMENS ENERGY</span>
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">SCHNEIDER ELECTRIC</span>
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">ABB</span>
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">GE VERNOVA</span>
                                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">ENEL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Overview Section */}
            <section className="py-20 px-6 bg-[#dce4eb]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6">
                            System Overview
                        </h2>
                        {/* Scroll Indicator */}
                        <div className="w-10 h-10 mx-auto rounded-full border border-[#007DCD] flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#007DCD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>

                    {/* Dashboard Mockup Image */}
                    <div className="mb-12">
                        <div className="relative max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                                alt="System Dashboard"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature Cards - Full Width */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row">
                        {/* Hardware Card */}
                        <div className="flex-1 bg-white p-8 border-b md:border-b-0 md:border-r border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-12 md:mb-20">
                                Hardware
                            </h3>
                            <p className="text-[#007DCD] text-sm leading-relaxed">
                                IIoT sensors installed in under 15 minutes, with 5+ years battery life
                            </p>
                        </div>

                        {/* Software Card */}
                        <div className="flex-1 bg-white p-8 border-b md:border-b-0 md:border-r border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-12 md:mb-20">
                                Software
                            </h3>
                            <p className="text-[#007DCD] text-sm leading-relaxed">
                                Cloud-based dashboard for monitoring, alerts, and planning
                            </p>
                        </div>

                        {/* AI Core Card */}
                        <div className="flex-1 bg-white p-8 border-b md:border-b-0 md:border-r border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-12 md:mb-20">
                                AI Core
                            </h3>
                            <p className="text-[#007DCD] text-sm leading-relaxed">
                                Trained on 500M+ data points across 10+ countries, 13 AI models
                            </p>
                        </div>

                        {/* Security Card */}
                        <div className="flex-1 bg-white p-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-12 md:mb-20">
                                Security
                            </h3>
                            <p className="text-[#007DCD] text-sm leading-relaxed">
                                ISO 27001-compliant; hosted in Germany; fully encrypted
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Get in Touch Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-16">
                                Get in Touch
                            </h2>

                            {/* Links */}
                            <div className="space-y-8">
                                {/* Link 1 */}
                                <a href="/contact" className="flex items-center gap-3 group">
                                    <span className="w-6 h-6 rounded-full border border-[#007DCD] flex items-center justify-center group-hover:bg-[#007DCD] transition-colors">
                                        <svg className="w-3 h-3 text-[#007DCD] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <span className="text-[#007DCD] font-medium group-hover:underline">
                                        Talk to an ENERGYFENCE expert
                                    </span>
                                </a>

                                {/* Link 2 */}
                                <a href="#" className="flex items-center gap-3 group">
                                    <span className="w-6 h-6 rounded-full border border-[#007DCD] flex items-center justify-center group-hover:bg-[#007DCD] transition-colors">
                                        <svg className="w-3 h-3 text-[#007DCD] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <span className="text-[#007DCD] font-medium group-hover:underline">
                                        Download the solution overview
                                    </span>
                                </a>

                                {/* Link 3 */}
                                <a href="/contact" className="flex items-center gap-3 group">
                                    <span className="w-6 h-6 rounded-full border border-[#007DCD] flex items-center justify-center group-hover:bg-[#007DCD] transition-colors">
                                        <svg className="w-3 h-3 text-[#007DCD] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <span className="text-[#007DCD] font-medium group-hover:underline">
                                        Request a product demo
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-[400px] md:h-[450px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#0a1628] to-[#0a0a1a]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                            Case Studies
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Look at possible applications
                        </p>
                    </div>

                    {/* Case Study Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {/* Card 1 */}
                        <div className="group">
                            <div className="relative h-48 md:h-56 overflow-hidden mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                                    alt="Point Machine Maintenance"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                Point Machine Maintenance
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                From compliance-driven visits to reliability-based decisions
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-[#007DCD] rounded flex items-center justify-center text-white text-xs font-bold">
                                    EF
                                </span>
                                <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center">
                                        <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    Read case study
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group">
                            <div className="relative h-48 md:h-56 overflow-hidden mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop"
                                    alt="Network Rail – Wales Route"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                Network Rail – Wales Route
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Learn about how ENERGYFENCE detects critical wheel-rail contact loss.
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-white text-xs font-bold">
                                    NR
                                </span>
                                <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center">
                                        <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    Read case study
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group">
                            <div className="relative h-48 md:h-56 overflow-hidden mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
                                    alt="OcVia Maintenance"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                OcVia Maintenance
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Learn about how OcVia Maintenance optimizes geometry monitoring with the help of AI and IIoT.
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-[#4CAF50] rounded flex items-center justify-center text-white text-xs font-bold">
                                    OV
                                </span>
                                <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center">
                                        <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    Read case study
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Proven Impact Section */}
                    <div className="text-center pt-12 border-t border-gray-800">
                        <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">
                            Proven Impact in the Field
                        </h3>
                        <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto">
                            See how leading rail operators are using ENERGYFENCE to boost reliability, efficiency, and performance.
                        </p>
                        <a
                            href="/resources/case-studies"
                            className="inline-block px-8 py-3 bg-[#007DCD] text-white text-sm font-medium rounded-full hover:bg-[#006bb0] transition-colors"
                        >
                            View all case studies
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
