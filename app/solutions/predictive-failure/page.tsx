'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Case Studies Data
const caseStudies = [
    {
        id: 1,
        title: 'Point Machine Maintenance',
        description: 'From compliance-driven visits to reliability-based decisions',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=500&fit=crop',
        logo: 'KONUX',
        logoType: 'text'
    },
    {
        id: 2,
        title: 'Network Rail – Wales Route',
        description: 'Learn about how KONUX detects critical wheel-rail contact loss.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
        logo: 'Network Rail',
        logoType: 'badge'
    },
    {
        id: 3,
        title: "Oc'Via Maintenance",
        description: "Learn about how Oc'Via Maintenance optimizes geometry monitoring with the help of AI and IIoT.",
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop',
        logo: "Oc'Via",
        logoType: 'text'
    },
    {
        id: 4,
        title: 'Network Rail – Sussex Route',
        description: 'Learn how KONUX and Network Rail achieved a step change for S&C maintenance on key route',
        image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&h=500&fit=crop',
        logo: 'Network Rail',
        logoType: 'badge'
    },
    {
        id: 5,
        title: 'Infrabel',
        description: 'Learn about how Infrabel was able to adopt data-driven decisions on trackbed maintenance with the potential to save 66% of tamping costs.',
        image: 'https://images.unsplash.com/photo-1518173946687-a4c036bc3c96?w=800&h=500&fit=crop',
        logo: 'INFRABEL',
        logoType: 'text'
    },
    {
        id: 6,
        title: 'Deutsche Bahn',
        description: 'How is Deutsche Bahn using industrial internet of things (IIoT) technology and analytics to avoid infrastructure failure? Whitepaper originally published by Railway Innovation.',
        image: 'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=800&h=500&fit=crop',
        logo: 'DB',
        logoType: 'circle'
    },
    {
        id: 7,
        title: 'Network Rail – East Coast',
        description: 'Learn about the outcome of the KONUX trials in Luton North & Doncaster.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop',
        logo: 'Network Rail',
        logoType: 'badge'
    },
    {
        id: 8,
        title: 'Deutsche Bahn – Predictive Analytics for Switches',
        description: 'Using industrial internet of things and artificial intelligence to monitor switch health (German). Article by our Chief Data Scientist, originally published by Eisenbahntechnische Rundschau.',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop',
        logo: 'DB',
        logoType: 'circle'
    }
];

// Logo Component
const LogoIcon = ({ logo, logoType }: { logo: string; logoType: string }) => {
    if (logoType === 'circle') {
        return (
            <div className="w-10 h-10 rounded-full bg-[#1a2a3a] border border-gray-600 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-300 text-xs font-bold">{logo}</span>
            </div>
        );
    }
    if (logoType === 'badge') {
        return (
            <div className="w-10 h-10 rounded-full bg-[#1a2a3a] border border-gray-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            </div>
        );
    }
    return (
        <div className="w-10 h-10 rounded-full bg-[#1a2a3a] border border-gray-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        </div>
    );
};

export default function PredictiveFailurePage() {
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + 3, caseStudies.length));
            setIsLoading(false);
        }, 500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const visibleCaseStudies = caseStudies.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-[#0a0a14]" style={{ fontFamily: '"Prime Font", sans-serif' }}>
            <Navbar />

            {/* Case Studies Hero Section */}
            <section className="relative bg-[#0a0a14] pt-40 pb-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-3xl lg:text-[46px] font-normal text-white mb-6 tracking-tight">
                        Case Studies
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                        Explore perspectives on AI, rail infrastructure, and digital transformation from KONUX experts and industry leaders driving the next wave of innovation in mobility.
                    </p>

                    {/* Learn More Button */}
                    <button className="group flex items-center gap-3 mx-auto text-white/90 hover:text-white transition-colors duration-300">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span className="text-base font-medium">Learn more</span>
                    </button>
                </div>

                {/* Bottom Horizontal Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </section>

            {/* Case Studies Grid Section */}
            <section className="bg-[#0a0a14] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleCaseStudies.map((study) => (
                            <div key={study.id} className="group">
                                {/* Image Container */}
                                <div className="relative overflow-hidden mb-5">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-56 md:h-95 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                                        {study.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {study.description}
                                    </p>

                                    {/* Logo and Read Case Study Link */}
                                    <div className="flex items-center gap-3 pt-2">
                                        <LogoIcon logo={study.logo} logoType={study.logoType} />
                                        <button className="flex items-center gap-2 text-[#00a0dc] hover:text-[#00c0ff] transition-colors duration-300">
                                            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#00a0dc] group-hover:border-[#00c0ff]">
                                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                            <span className="text-sm font-medium">Read case study</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Section with Load More and Back to Top */}
                    <div className="mt-16 pt-8 border-t border-gray-700/50">
                        <div className="flex items-center justify-between">
                            {/* Empty space for alignment */}
                            <div className="flex-1"></div>

                            {/* Load More Button - Centered */}
                            <div className="flex-1 flex justify-center">
                                {visibleCount < caseStudies.length && (
                                    <button
                                        onClick={handleLoadMore}
                                        disabled={isLoading}
                                        className="px-8 py-3 bg-[#1a2a3a] text-white text-sm font-medium rounded-sm hover:bg-[#243a4d] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Loading...' : 'Load more'}
                                    </button>
                                )}
                            </div>

                            {/* Back to Top Button - Right */}
                            <div className="flex-1 flex justify-end">
                                <button
                                    onClick={scrollToTop}
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    <span className="text-sm">Back to top</span>
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-600 hover:border-gray-400 transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Bottom Border Line */}
                        <div className="mt-8 h-px bg-gray-700/50"></div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-[#0a0a14] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Testimonial 1 */}
                        <div className="space-y-6">
                            {/* Header with Photo, Logo, and Link */}
                            <div className="flex items-center gap-3">
                                {/* Profile Photo */}
                                <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                                        alt="Stefan Leistner"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Company Logo */}
                                <div className="w-10 h-10 rounded-full bg-[#1a2a3a] border border-gray-600 flex items-center justify-center">
                                    <span className="text-gray-300 text-xs font-bold">DB</span>
                                </div>
                                {/* Read Case Study Link */}
                                <button className="flex items-center gap-2 text-[#00a0dc] hover:text-[#00c0ff] transition-colors duration-300 ml-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#00a0dc]">
                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <span className="text-sm font-medium">Read case study</span>
                                </button>
                            </div>

                            {/* Quote */}
                            <p className="text-white text-base leading-relaxed">
                                With our focus on the systematic digitalization of maintenance in the high-performance network, we are counting on the impact of KONUX Switch.
                            </p>

                            {/* Author Info */}
                            <div>
                                <p className="text-[#00a0dc] font-semibold text-sm">Stefan Leistner</p>
                                <p className="text-gray-400 text-sm">Head of Market, Strategy and Business Models</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="space-y-6">
                            {/* Header with Photo, Logo, and Link */}
                            <div className="flex items-center gap-3">
                                {/* Profile Photo */}
                                <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                                    <img
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                                        alt="Angélique Chaboissier"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Company Logo */}
                                <div className="w-10 h-10 rounded-full bg-[#1a2a3a] border border-gray-600 flex items-center justify-center">
                                    <span className="text-gray-400 text-[8px] font-medium">Oc'Via</span>
                                </div>
                                {/* Read Case Study Link */}
                                <button className="flex items-center gap-2 text-[#00a0dc] hover:text-[#00c0ff] transition-colors duration-300 ml-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#00a0dc]">
                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <span className="text-sm font-medium">Read case study</span>
                                </button>
                            </div>

                            {/* Quote */}
                            <p className="text-white text-base leading-relaxed">
                                The data insights allow us to know the asset evolution in real time and to anticipate as much as possible all the preventative maintenance that we need in the future.
                            </p>

                            {/* Author Info */}
                            <div>
                                <p className="text-[#00a0dc] font-semibold text-sm">Angélique Chaboissier</p>
                                <p className="text-gray-400 text-sm">Maintenance Engineer at Oc'Via Maintenance</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="space-y-6">
                            {/* Header with Photo, Logo, and Link */}
                            <div className="flex items-center gap-3">
                                {/* Profile Photo */}
                                <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                                        alt="Damien Rose"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Company Logo */}
                                <div className="w-10 h-10 rounded-full bg-[#1a2a3a] border border-gray-600 flex items-center justify-center">
                                    <span className="text-gray-400 text-[8px] font-medium">Oc'Via</span>
                                </div>
                                {/* Read Case Study Link */}
                                <button className="flex items-center gap-2 text-[#00a0dc] hover:text-[#00c0ff] transition-colors duration-300 ml-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#00a0dc]">
                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <span className="text-sm font-medium">Read case study</span>
                                </button>
                            </div>

                            {/* Quote */}
                            <p className="text-white text-base leading-relaxed">
                                The more we digitize, the more we can prevent defects, if possible before they even appear, in order to do less corrective work and therefore save money.
                            </p>

                            {/* Author Info */}
                            <div>
                                <p className="text-[#00a0dc] font-semibold text-sm">Damien Rose</p>
                                <p className="text-gray-400 text-sm">President of Oc'Via Maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Leaders Slider Section */}
            <section className="bg-[#0a0a14] py-8 border-t border-gray-700/50 overflow-hidden">
                <style jsx>{`
                    @keyframes scrollLogosRTL {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-scroll-rtl {
                        animation: scrollLogosRTL 20s linear infinite;
                    }
                `}</style>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-400 whitespace-nowrap">Trusted by industry leaders:</span>
                        </div>

                        {/* Logos Slider - Right to Left */}
                        <div className="flex-1 overflow-hidden">
                            <div className="flex animate-scroll-rtl" style={{ width: 'fit-content' }}>
                                {/* First set of logos */}
                                <div className="flex items-center gap-16 px-8">
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">Oc'Via</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">INFRABEL</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">Network Rail</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">BANE NOR</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide border border-gray-600 rounded px-2 py-1">DB</span>
                                </div>
                                {/* Duplicate for seamless loop */}
                                <div className="flex items-center gap-16 px-8">
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">Oc'Via</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">INFRABEL</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">Network Rail</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">BANE NOR</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide border border-gray-600 rounded px-2 py-1">DB</span>
                                </div>
                                {/* Third duplicate for extra smoothness */}
                                <div className="flex items-center gap-16 px-8">
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">Oc'Via</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">INFRABEL</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">Network Rail</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide">BANE NOR</span>
                                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide border border-gray-600 rounded px-2 py-1">DB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
