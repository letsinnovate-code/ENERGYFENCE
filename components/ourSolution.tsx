"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
    useEffect(() => {
        document.body.style.backgroundColor = "#050A0F";
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <>
            <Navbar />
            <main className="text-white overflow-x-hidden">

                {/* ================= HERO ================= */}
                <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050A0F] to-[#050A0F]" />

                    <div className="relative z-10 max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-light mb-6">
                            Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10">
                            Enabling the rail ecosystem – together with KONUX
                        </p>

                        <div className="inline-flex items-center gap-3 text-blue-500 hover:text-blue-400 transition cursor-pointer">
                            <span className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center">
                                →
                            </span>
                            Learn more
                        </div>
                    </div>
                </section>

                {/* ================= FULL BLEED IMAGE ================= */}
                <section className="w-full h-[80vh] relative">
                    <img
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt=""
                    />
                </section>

                {/* ================= VISION TEXT ================= */}
                <section className="bg-white text-[#050A0F] py-32 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-blue-600 font-medium mb-6">
                            KONUX’s Vision of Collaboration:
                        </p>

                        <h2 className="text-3xl md:text-4xl font-light  mb-10">
                            KONUX is building a rail-centric ecosystem that brings together deep
                            railway domain expertise, scalable modular technology building
                            blocks, and a network of partners to drive smarter infrastructure
                            decisions.
                        </h2>

                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Instead of isolated products, we are building a collaborative
                            ecosystem where rail operators, technology providers, and KONUX
                            build solutions together — accelerating innovation and delivering
                            greater value to the industry.
                        </p>

                        <div className="mt-16 flex justify-center">
                            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                ↓
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= SPLIT SECTION ================= */}
                <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
                    {/* LEFT */}
                    <div className="bg-[#050A0F] flex items-center justify-center">
                        <div className="relative w-[420px] h-[420px] rounded-full border border-blue-500 flex items-center justify-center text-xl">
                            The Rail Ecosystem
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-[#002F5F] flex items-center px-16">
                        <div className="max-w-xl">
                            <h3 className="text-2xl font-medium mb-6">
                                The Vision, Building a Rail Ecosystem
                            </h3>
                            <p className="text-gray-200 leading-relaxed">
                                The railway industry is grappling with aging infrastructure,
                                disconnected data systems, and siloed innovation. Operators and
                                technology partners often duplicate efforts and waste resources
                                solving the same problems independently.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ================= FULL BLEED MOTION IMAGE ================= */}
                <section className="w-full mt-2 h-[80vh] relative">
                    <img
                        src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt=""
                    />
                </section>

                {/* ================= PHILOSOPHY ================= */}
                <section className="bg-[#050A0F] py-32 px-6 text-center">
                    <p className="text-blue-500 mb-6">At KONUX,</p>

                    <h2 className="text-3xl md:text-4xl font-light max-w-5xl mx-auto leading-relaxed mb-10">
                        We believe that the future of rail is collaborative. This ecosystem
                        connects data, people, and applications to solve rail’s most critical
                        problems faster, together.
                    </h2>

                    <p className="text-gray-400">
                        This ecosystem strategy is rooted in three synergistic pillars:
                    </p>

                    <div className="mt-14 flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                            ↓
                        </div>
                    </div>
                </section>

                {/* ================= SOLUTION CARDS ================= */}
                <section className="bg-[#050A0F] py-32 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">

                        {[
                            {
                                title: "AI-Driven Rail Intelligence",
                                desc:
                                    "Years of domain expertise embedded into predictive AI models – proven models built on years of railway data.",
                                img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                            },
                            {
                                title: "Modular IoT & Sensor Technology",
                                desc:
                                    "Configurable, fast-to-deploy sensor components that generate actionable data for a wide range of use cases.",
                                img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
                            },
                            {
                                title: "KONUX CoBrix Platform",
                                desc:
                                    "A secure, federated data & AI platform where stakeholders can develop, integrate, and scale solutions.",
                                img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="group relative bg-[#050A0F] overflow-hidden cursor-pointer"
                            >
                                <div className="h-[320px] overflow-hidden">
                                    <img
                                        src={card.img}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                        alt=""
                                    />
                                </div>

                                <div className="pt-8">
                                    <h3 className="text-xl font-medium mb-4">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {card.desc}
                                    </p>

                                    <div className="w-12 h-12 rounded-full bg-[#1A1F24] flex items-center justify-center group-hover:bg-blue-600 transition">
                                        →
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>

                {/* ================= ECOSYSTEM INTRO TEXT ================= */}
                <section className="bg-white text-[#050A0F] py-24 px-6 text-center">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-blue-500 font-bold mb-6 text-sm tracking-wide">
                            Enabling the ecosystem
                        </p>
                        <h2 className="text-2xl md:text-4xl font-normal mb-8 leading-snug">
                            KONUX contributes to a modern rail ecosystem by providing the digital
                            foundation, modular tools, and partner-ready platform that enable co-creation.
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto mb-8 font-medium">
                            We believe the future of rail is collaborative, modular, and insight-driven.
                            No single vendor can solve the biggest rail problems alone.
                        </p>
                        <p className="text-gray-900 font-medium text-lg">
                            But together, as part of a shared ecosystem — <span className="text-blue-500">we can.</span>
                        </p>
                    </div>
                </section>

                {/* ================= ECOSYSTEM GRID ================= */}
                <section className="grid grid-cols-1 md:grid-cols-2">
                    {/* 01: Ecosystem Benefits */}
                    <div className="bg-[#E5E7EB] text-[#050A0F] p-12 md:p-20 flex flex-col justify-between min-h-[500px]">
                        <span className="text-sm font-medium text-gray-500">01</span>
                        <div>
                            <h3 className="text-2xl font-medium mb-6">Ecosystem Benefits</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Accelerate innovation through reusable components and proven models.
                                Support open collaboration across operators, OEMs, and tech firms.
                                Break data silos by enabling integration not centralization.
                                Address real-world needs faster through co-development KONUX helps
                                power the ecosystem rail needs not by owning it, but by enabling it.
                            </p>
                        </div>
                    </div>

                    {/* Graphic: The Rail Ecosystem */}
                    <div className="bg-[#020609] flex items-center justify-center min-h-[500px] relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-900/10 rounded-full blur-3xl scale-50"></div>
                        <div className="relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border border-blue-400/10 scale-110"></div>
                            <span className="text-white text-lg font-light tracking-wide">The Rail Ecosystem</span>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative min-h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Team working together"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* 02: How We Work With Others */}
                    <div className="bg-[#002F5F] text-white p-12 md:p-20 flex flex-col justify-between min-h-[500px]">
                        <span className="text-blue-400 font-medium">02</span>
                        <div>
                            <h3 className="text-2xl font-medium mb-6">How We Work With Others</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-8">
                                We help partners build what they could not achieve alone – faster and
                                more effectively. Rail operators integrate and analyse data from across
                                domains OEMs turn raw sensor output into insight-rich services. Tech
                                companies use KONUX infrastructure to test, deploy, and scale railway-
                                focused applications without building their own platform.
                            </p>
                            <div className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition cursor-pointer font-medium">
                                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs">
                                    →
                                </span>
                                Learn more
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
