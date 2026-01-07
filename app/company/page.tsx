'use client';

import { useState } from 'react';
// Remix Icons are loaded via CDN
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CompanyPage() {
    const [expandedValue, setExpandedValue] = useState<string | null>('grit');

    const toggleValue = (value: string) => {
        setExpandedValue(expandedValue === value ? null : value);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <section className="bg-[#0a0f1a] h-[calc(100vh-10vh)] text-white pt-32 pb-48 relative">
                <div className="absolute top-8 left-8 flex items-center gap-8 text-sm">
                    <span className="text-gray-400">Company</span>
                    <a href="#partnership" className="text-gray-400 hover:text-white transition-colors">Partnership</a>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                </div>

                <div className="max-w-7xl mx-auto px-8 text-center">
                    <h1 className="text-6xl font-light mb-6">Company</h1>
                    <p className="text-xl text-gray-400 mb-12">Driving the digital transformation of rail.</p>

                    <a href="#about" className="inline-flex items-center gap-2 text-[#0ea5e9] hover:text-[#38bdf8] transition-colors">
                        <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line text-xl"></i>
                        </div>
                        <span className="font-medium">Learn more</span>
                    </a>
                </div>
            </section>

            {/* Image Section */}
            <section className="relative -mt-32">
                <div className="">
                    <div className="w-full h-[calc(100vh-30vh)] bg-gradient-to-r from-amber-100 to-amber-50 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=400&fit=crop"
                            alt="Team meeting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-24 bg-[#f8f9fa]">
                <div className="max-w-5xl mx-auto px-8 text-center">
                    <p className="text-[#0ea5e9] text-sm font-semibold mb-6 tracking-wide">About us</p>

                    <h2 className="text-5xl font-light text-gray-900 mb-8 leading-tight">
                        KONUX is a leading AI scale-up transforming railway operations for a sustainable future. We combine AI and IIoT to deliver SaaS solutions that enhance capacity, reliability, and cost-efficiency in rail transport.
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        With rail networks under increasing pressure to meet demand, KONUX enables smarter decision-making that extends asset lifetime and improves network performance.
                    </p>

                    <div className="mt-12 flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line text-2xl text-[#0ea5e9]"></i>
                        </div>
                    </div>
                </div>
            </section>



            {/* Mission/Vision Section */}
            <section className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                {/* Left - Image */}
                <div className="relative h-96 lg:h-auto">
                    <img
                        src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop"
                        alt="Railway tracks"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right - Text */}
                <div className="bg-[#003d6b] text-white p-16 flex flex-col justify-center">
                    <p className="text-[#0ea5e9] text-sm font-semibold mb-6 tracking-wide">Our mission</p>
                    <h2 className="text-4xl font-light leading-tight">
                        Make railway the mobility choice of tomorrow by increasing capacity, reliability, and cost-efficiency
                    </h2>
                </div>
            </section>

            {/* Vision Section */}
            <section className="relative mt-2 h-[600px]">
                <img
                    src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1600&h=600&fit=crop"
                    alt="Railway in forest"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                    <div className="max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
                        <p className="text-[#0ea5e9] text-sm font-semibold mb-6 tracking-wide">Our vision</p>
                        <h2 className="text-5xl font-light text-white mb-8 max-w-xl leading-tight">
                            Transform railway operations for a sustainable future
                        </h2>
                        <button className="px-6 py-3 bg-[#0ea5e9] text-white rounded-full font-medium hover:bg-[#38bdf8] transition-colors w-fit">
                            Watch video
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 right-8">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <i className="ri-arrow-down-s-line text-2xl text-gray-900"></i>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-[#0a0f1a] text-white py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-4xl font-light text-center mb-16">Values</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        <div className="w-full">
                            <div className="aspect-[3/4] bg-gray-800  overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                                    alt="Team member"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Values List */}
                        <div className="space-y-6">
                            {/* Grit */}
                            <div className="border-t border-gray-800 pt-6">
                                <button
                                    onClick={() => toggleValue('grit')}
                                    className="w-full flex items-start justify-between text-left group"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-1">Grit</h3>
                                        <p className="text-sm text-gray-400">Our special sauce</p>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-transform ${expandedValue === 'grit' ? 'rotate-180' : ''}`}>
                                        <i className="ri-arrow-down-s-line text-xl"></i>
                                    </div>
                                </button>

                                {expandedValue === 'grit' && (
                                    <div className="mt-6 space-y-4">
                                        <p className="text-white leading-relaxed">
                                            No matter how credible and ingenious we are, grit will be why we win. Grit is passion for what we do, that feeling of living in our purpose and driving change.
                                        </p>
                                        <p className="text-gray-400 leading-relaxed">
                                            It's what drives us to dig into what works and what doesn't and to constantly improve. It's what pushes us to set the bar high and to not be satisfied with good enough customer intelligence to ensure we develop the right solutions. In short, it's great to be innovative and failure embracing, it's better to apply and gain intelligence through our creativity.
                                        </p>
                                        <button className="mt-6 px-6 py-3 bg-[#0ea5e9] text-white rounded-full font-medium hover:bg-[#38bdf8] transition-colors">
                                            Watch video
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Ingenuity */}
                            <div className="border-t border-gray-800 pt-6">
                                <button
                                    onClick={() => toggleValue('ingenuity')}
                                    className="w-full flex items-start justify-between text-left group"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-1">Ingenuity</h3>
                                        <p className="text-sm text-gray-400">How we stand out</p>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-transform ${expandedValue === 'ingenuity' ? 'rotate-180' : ''}`}>
                                        <i className="ri-arrow-down-s-line text-xl"></i>
                                    </div>
                                </button>

                                {expandedValue === 'ingenuity' && (
                                    <div className="mt-6">
                                        <p className="text-gray-400 leading-relaxed">
                                            Our ingenuity allows us to create innovative solutions that set us apart in the industry.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Credibility */}
                            <div className="border-t border-gray-800 pt-6">
                                <button
                                    onClick={() => toggleValue('credibility')}
                                    className="w-full flex items-start justify-between text-left group"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-1">Credibility</h3>
                                        <p className="text-sm text-gray-400">Our foundation</p>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-transform ${expandedValue === 'credibility' ? 'rotate-180' : ''}`}>
                                        <i className="ri-arrow-down-s-line text-xl"></i>
                                    </div>
                                </button>

                                {expandedValue === 'credibility' && (
                                    <div className="mt-6">
                                        <p className="text-gray-400 leading-relaxed">
                                            Credibility is the foundation of everything we do, ensuring trust and reliability.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="mb-4">
                        <p className="text-[#0ea5e9] text-sm font-semibold tracking-wide">Team</p>
                    </div>

                    <h2 className="text-4xl font-light mb-16">Executives</h2>

                    {/* Executives Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                                    alt="Silend Hagai"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Silend Hagai</h3>
                            <p className="text-sm text-gray-600">Managing Director, CEO</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200 overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                                    alt="Johanna Lübeck"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Johanna Lübeck</h3>
                            <p className="text-sm text-gray-600">Managing Director, COO</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                                    alt="Marc Gaines"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Marc Gaines</h3>
                            <p className="text-sm text-gray-600">CTO</p>
                        </div>
                    </div>

                    {/* Senior Leadership */}
                    <h2 className="text-4xl font-light mb-16">Senior Leadership</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                                    alt="Katia Marcovici"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Katia Marcovici</h3>
                            <p className="text-sm text-gray-600">VP of Finance</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                                    alt="Raphael Hüber"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Raphael Hüber</h3>
                            <p className="text-sm text-gray-600">Head of Engineering</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
                                    alt="Petra Pavlović"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Petra Pavlović</h3>
                            <p className="text-sm text-gray-600">Marketing and Communications Director</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
                                    alt="Andreea Chirillov"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Andreea Chirillov</h3>
                            <p className="text-sm text-gray-600">Head of Talent Acquisition & Culture</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
                                    alt="Maximilian Dietz"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Maximilian Dietz</h3>
                            <p className="text-sm text-gray-600">Head of Staff</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop"
                                    alt="Imma Barahjeva"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Imma Barahjeva</h3>
                            <p className="text-sm text-gray-600">Director of Strategic Development</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200  overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                                    alt="Team member"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">John Anderson</h3>
                            <p className="text-sm text-gray-600">Head of Operations</p>
                        </div>

                        <div className="group">
                            <div className="aspect-square bg-gray-200 overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
                                    alt="Team member"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0ea5e9] mb-1">Sarah Mitchell</h3>
                            <p className="text-sm text-gray-600">VP of Product</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaborations Section */}
            <section className="bg-[#0a0f1a] text-white py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-4xl font-light text-center mb-6">Collaborations</h2>
                    <p className="text-center text-gray-400 mb-12">
                        We actively contribute to the future of mobility through trusted global partnerships.
                    </p>

                    <div className="flex justify-center mb-12">
                        <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line text-2xl text-[#0ea5e9]"></i>
                        </div>
                    </div>

                    {/* Partner Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center justify-items-center mb-16">
                        {/* Row 1 */}
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-2xl font-bold">Siemens Mobility</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-3xl font-bold">Citi</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-xl font-semibold">DB ENGINEERING</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-2xl font-bold">RENFE</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-sm font-semibold text-center">
                                HONG KONG<br />RAILWAY SOCIETY
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-xl font-bold">KNRR</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-2xl font-bold">unife</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-sm font-semibold">DB BAHNBAU GRUPPE</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-sm font-semibold text-center">
                                NETWORK<br />RAIL CONSULTING
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-xs font-semibold text-center">
                                TECHNISCHE<br />UNIVERSITÄT MÜNCHEN
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - Centered */}
                    <div className="flex justify-center gap-16 items-center">
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-2xl font-bold">SALIX</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-xl font-semibold">FUTURE RAILWAYS</div>
                        </div>
                        <div className="flex items-center justify-center h-16">
                            <div className="text-white text-xl font-bold">GreatCircle</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to top button */}
            <div className="fixed bottom-8 left-8">
                <button className="w-12 h-12 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center shadow-lg hover:bg-[#38bdf8] transition-colors">
                    <i className="ri-arrow-up-s-line text-2xl"></i>
                </button>
            </div>

            <Footer />
        </div>
    );
}
