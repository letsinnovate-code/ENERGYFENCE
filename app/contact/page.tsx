'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white  mx-auto font-sans text-gray-900">


                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&h=900&fit=crop"
                            alt="Railway tracks aerial view"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
                        <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">Get in Touch</h1>
                        <p className="text-xl text-gray-200 font-light mb-12">
                            Please drop us a message if you would like to know more.
                        </p>

                        <div className="flex items-center gap-2 text-white/90 cursor-pointer hover:text-white transition-colors mt-8">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                <ChevronDown className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-sm tracking-wide">Learn more</span>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="bg-white py-20 max-w-7xl mx-auto lg:py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Form */}
                            <div className="max-w-xl">
                                <h3 className="text-[#0073C2] font-bold text-sm mb-2 uppercase tracking-wide">Any questions?</h3>
                                <h2 className="text-4xl font-normal text-gray-900 mb-10">Feel free to contact us.</h2>

                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Name"
                                            className="w-full bg-[#ecf0f5] border-none rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#0073C2] focus:outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            className="w-full bg-[#ecf0f5] border-none rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#0073C2] focus:outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="sr-only">Message</label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            placeholder="Message"
                                            className="w-full bg-[#ecf0f5] border-none rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#0073C2] focus:outline-none resize-none transition-all"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3 mt-4">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gray-200 checked:border-[#0073C2] checked:bg-[#0073C2] focus:outline-none transition-all"
                                            />
                                            <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                                        </div>
                                        <label htmlFor="privacy" className="text-xs text-gray-500 leading-snug cursor-pointer select-none">
                                            I've read the data privacy statement and consent to my data being stored and used to process my request.
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="bg-[#0073C2] text-white font-bold py-3.5 px-8 rounded-full w-full hover:bg-[#0060a0] transition-colors mt-6 shadow-md"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Right: Image */}
                            <div className="relative h-[800px] hidden lg:block">
                                <div className="absolute inset-0 bg-gray-100 rounded-none overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                                        alt="Office culture"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Info & Address Section */}
                <section className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                        {/* Left: Mail Us */}
                        <div className="bg-[#002D56] text-white p-12 lg:p-24 flex flex-col justify-between min-h-[500px] relative overflow-hidden">
                            <div className="z-10">
                                <h3 className="text-[#009FE3] font-bold text-lg mb-4">Mail us</h3>
                                <a href="mailto:info@konux.com" className="text-4xl lg:text-5xl font-semibold hover:text-[#009FE3] transition-colors">
                                    info@konux.com
                                </a>
                            </div>
                            <div className="z-10 flex justify-end mt-12">
                                <button className="w-14 h-14 rounded-full bg-[#005B94] flex items-center justify-center hover:bg-[#0073C2] transition-colors group">
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Right: Address */}
                        <div className="relative min-h-[500px] p-12 lg:p-24 flex flex-col text-white">
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://unsplash.com/photos/vehicles-near-buildings-at-night-time-VmX3vmBecFE"
                                    alt="City aerial view"
                                    className="w-full h-full object-cover grayscale brightness-50"
                                />
                                <div className="absolute inset-0 bg-[#001A33]/80 mix-blend-multiply" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-gray-300 font-bold text-lg mb-8">Address</h3>
                                <h2 className="text-3xl font-bold mb-4">KONUX GmbH</h2>
                                <address className="not-italic text-xl text-gray-300 space-y-1 font-light">
                                    <p>Floessergasse 2</p>
                                    <p>81369 Munich,</p>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-white bg-gray-700 px-1 rounded text-xs">DE</span>
                                        <span>Germany</span>
                                    </div>
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Departments Grid */}
                    <div className="grid grid-cols-1 mt-2 gap-2 md:grid-cols-2 lg:grid-cols-4">
                        {/* Card 1: Contact */}
                        <div className="bg-[#E0E6EC] p-10 flex flex-col h-full min-h-[340px]">
                            <h3 className="text-xl font-bold text-[#002D56] mb-auto">Career</h3>
                            <div className="mt-8">
                                <p className="text-gray-600 font-normal text-sm leading-relaxed mb-6">
                                    For inquiries only - please use our online form to submit applications.
                                </p>
                                <a href="mailto:career@konux.com" className="text-[#0073C2] font-bold text-sm hover:underline">
                                    career@konux.com
                                </a>
                            </div>
                        </div>

                        {/* Card 2: Sales */}
                        <div className="bg-[#E0E6EC] p-10 flex flex-col h-full min-h-[340px] border-l border-white/50">
                            <h3 className="text-xl font-bold text-[#002D56] mb-auto">Sales</h3>
                            <div className="mt-8">
                                <p className="text-gray-600 font-normal text-sm leading-relaxed mb-6">
                                    Get in touch to learn more about our AI solutions
                                </p>
                                <a href="mailto:sales@konux.com" className="text-[#0073C2] font-bold text-sm hover:underline">
                                    sales@konux.com
                                </a>
                            </div>
                        </div>

                        {/* Card 3: Marketing */}
                        <div className="bg-[#E0E6EC] p-10 flex flex-col h-full min-h-[340px] border-l border-white/50">
                            <h3 className="text-xl font-bold text-[#002D56] mb-auto">Marketing</h3>
                            <div className="mt-8">
                                <p className="text-gray-600 font-normal text-sm leading-relaxed mb-6">
                                    Let us know about speaking & PR opportunities. We love to share our expertise.
                                </p>
                                <a href="mailto:marketing@konux.com" className="text-[#0073C2] font-bold text-sm hover:underline">
                                    marketing@konux.com
                                </a>
                            </div>
                        </div>

                        {/* Card 4: Cybersecurity */}
                        <div className="bg-[#E0E6EC] p-10 flex flex-col h-full min-h-[340px] border-l border-white/50">
                            <h3 className="text-xl font-bold text-[#002D56] mb-auto">Cybersecurity</h3>
                            <div className="mt-8">
                                <p className="text-gray-600 font-normal text-sm leading-relaxed mb-6">
                                    See something, say something. We take information security very seriously.
                                </p>
                                <a href="mailto:security@konux.com" className="text-[#0073C2] font-bold text-sm hover:underline">
                                    security@konux.com
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            <Footer />
        </>
    );
}
