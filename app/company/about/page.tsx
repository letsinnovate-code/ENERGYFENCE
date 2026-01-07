'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative h-screen w-full overflow-hidden bg-black">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop"
                            alt="Railway worker"
                            fill
                            className="object-cover opacity-70"
                            priority
                        />
                    </div>
                    <div className="absolute bottom-[-30%] left-[40%] z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                        <h1 className="mb-4 text-4xl font-semibold text-white md:text-5xl">About</h1>
                        <p className="mb-8 text-lg text-white/90 md:text-xl">Leading AI company in the rail industry.</p>
                        <button className="group flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20">
                            <span className="text-sm font-medium">Learn more</span>
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </section>
                {/* Data Focus Section */}
                <section className="bg-white px-4 py-36 md:px-8 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16">
                        <div className="flex flex-col justify-between">
                            <h2 className="mb-6 text-3xl font-normal leading-tight text-[#273441] md:text-3xl">
                                Data is our focus. That's great because to overcome the many challenges of rail, we're going to need a lot of it.
                            </h2>
                            <button className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0099FF] text-white transition-all hover:bg-[#0088EE]">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-base max-w-xl leading-8 text-[#5A6774]">
                                Data is the answer for a necessary transformation of existing infrastructure to avoid collapse. We bring next generation predictive maintenance, network usage and traffic monitoring and planning solutions to railway infrastructure management.{' '}

                                By applying state-of-the art data science and machine learning, we make use of the exponential value

                                of data. While others see it as finite and something to compete over, we see data as a resource to be shared and multiplied to create unlimited potential. With our team of scientists and domain experts, we are solving some of the hardest problems in railway and pushing the limits of what was once thought impossible.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Why Railway Section */}
                <section className="bg-white px-4 py-20 md:px-8 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-2 md:grid-cols-2">
                        {/* Top Left - Text */}
                        <div className="flex flex-col h-[700px] justify-end bg-[#E0E6EC] p-12 md:p-16">
                            <h3 className="mb-6 text-2xl font-bold text-[#273441] md:text-3xl">Why railway?</h3>
                            <p className="text-base leading-relaxed text-[#5A6774]">
                                The Hidden Sustainability Champion. Railway is the safest, most efficient and most sustainable means of motorised transport. But living up to its potential requires taking radical steps to ensure the resilience and competitiveness of the system on which millions rely.
                            </p>
                        </div>
                        {/* Top Right - Image */}
                        <div className="relative h-[700px] md:h-auto">
                            <Image
                                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop"
                                alt="Railway platform"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Bottom Left - Image */}
                        <div className="relative h-[700px] md:h-auto">
                            <Image
                                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop"
                                alt="Aerial view of railway and nature"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Bottom Right - Text */}
                        <div className="flex flex-col h-[700px] justify-center bg-[#003D7A] p-12 md:p-16">
                            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">What can a modal shift to railway achieve?</h3>
                            <p className="mb-8 text-base leading-relaxed text-white/90">
                                CO2 reduction equivalent to the amount absorbed by the entire Amazon Rainforest each year, or all the forests in Europe combined.
                            </p>
                            <div className="text-5xl font-bold text-[#0099FF] md:text-6xl">
                                2.1 Gt CO<sub className="text-3xl">2</sub>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Railway's Growing Challenges Section */}
                <section className="bg-[#E8E9ED] px-4 py-20 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-3 text-3xl font-bold text-[#273441] md:text-4xl">Railway's Growing Challenges</h2>
                            <p className="text-base text-[#5A6774] md:text-lg">Rising Problems in the Railway Industry</p>
                        </div>
                        <div className="grid gap-2 md:grid-cols-3">
                            {/* Card 1 */}
                            <div className="flex flex-col justify-between h-[400px] bg-white p-8 shadow-sm">
                                <h3 className="mb-32 text-xl font-normal text-[#273441]">Insufficient capacity</h3>
                                <p className="text-md text-[#5A6774]">Demand for railway is expected to double by 2050</p>
                            </div>
                            {/* Card 2 */}
                            <div className="flex flex-col justify-between h-[400px] bg-white p-8 shadow-sm">
                                <h3 className="mb-32 text-xl font-normal text-[#273441]">Low reliability</h3>
                                <p className="text-md text-[#5A6774]">Time of delays equivalent to 10,000 human lives p.a. globally</p>
                            </div>
                            {/* Card 3 */}
                            <div className="flex flex-col justify-between h-[400px] bg-white p-8 shadow-sm">
                                <h3 className="mb-32 text-xl font-normal text-[#273441]">Growing costs</h3>
                                <p className="text-md text-[#5A6774]">$170 B in OPEX $200 B in CAPEX $400 B in delays</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* New Era Section */}
                <section className="relative h-screen w-full overflow-hidden bg-black">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&h=1080&fit=crop"
                            alt="Aerial view of railway"
                            fill
                            className="object-cover opacity-60"
                        />
                    </div>
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                        <h2 className="mb-6 max-w-4xl text-3xl font-semibold text-white md:text-4xl">
                            A new era for rail empowered by data
                        </h2>
                        <p className="mb-8 max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
                            Powered by machine learning, data insights can unlock sources of operational efficiency previously unimaginable. From helping to minimize downtimes of critical assets to intelligent traffic management, artificial intelligence changes the game.
                        </p>
                        <button className="rounded-full bg-[#0099FF] px-8 py-5 text-md font-medium text-white transition-all hover:bg-[#0088EE]">
                            Learn about our solutions
                        </button>
                    </div>
                </section>


            </main>
            <Footer />
        </>
    );
}
