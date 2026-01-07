'use client';

import { useState, useRef } from 'react';
import { Heart, TrendingUp, TreePine, BookOpen, Home, Plane, Users, Gift, Plus, Check } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareersPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedAccordion, setExpandedAccordion] = useState<string | null>('best');
    const [expandedDepartment, setExpandedDepartment] = useState<string | null>(null);
    const [recruitmentSlide, setRecruitmentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const accordionItems = [
        {
            id: 'best',
            title: 'Do what you do best, at your best',
            description: 'Building technology for a sustainable future is not easy, but the hardest challenges are the ones worth solving. This is why we aim to provide the best possible environment for you to have an impact.',
            checklist: ['27 vacation days', 'Subsidized health programs (physical & mental)', 'Flexible work']
        },
        {
            id: 'owner',
            title: 'Be an owner',
            description: 'We believe that ownership drives excellence. Every team member has the opportunity to take ownership of meaningful projects and see their impact firsthand.',
            checklist: ['Stock options', 'Profit sharing', 'Decision-making authority']
        },
        {
            id: 'grow',
            title: 'Grow²',
            description: 'Your growth is our priority. We invest in your development through continuous learning opportunities, mentorship programs, and career advancement paths.',
            checklist: ['Learning & development budget', 'Mentorship programs', 'Career progression framework']
        }
    ];

    const toggleAccordion = (id: string) => {
        setExpandedAccordion(expandedAccordion === id ? null : id);
    };

    const benefits = [
        { icon: Heart, title: 'Subsidised health programs', subtitle: '(physical & mental)' },
        { icon: TrendingUp, title: 'Stock options', subtitle: '' },
        { icon: TreePine, title: 'Free days for volunteering', subtitle: '' },
        { icon: BookOpen, title: 'Learning & development', subtitle: 'budget' },
        { icon: Home, title: 'Flexible working', subtitle: '' },
        { icon: Plane, title: '27 vacation days', subtitle: '' },
        { icon: Users, title: 'Team events', subtitle: '' },
        { icon: Gift, title: 'Employee perks', subtitle: '' },
    ];

    const cardsPerView = 3;
    const maxSlide = benefits.length - cardsPerView; // Maximum slide position

    const slideLeft = () => {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
    };

    const slideRight = () => {
        setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
    };

    // Calculate visible range for indicator
    const startIndex = currentSlide + 1;
    const endIndex = Math.min(currentSlide + cardsPerView, benefits.length);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
                        alt="Team collaboration"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Hero Content - Centered */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
                        Careers at ENERGYFENCE
                    </h1>
                    <p className="text-white/80 text-base sm:text-lg md:text-xl font-light max-w-2xl mb-10">
                        Transform the energy industry with us.
                    </p>

                    {/* Learn More Button */}
                    <Link
                        href="#benefits"
                        className="group inline-flex items-center gap-3 text-white hover:text-white/90 transition-colors"
                    >
                        <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <i className="ri-arrow-right-s-line text-xl sm:text-2xl"></i>
                        </span>
                        <span className="text-[15px] sm:text-base font-medium">Learn more</span>
                    </Link>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="bg-[#0a1628] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Quote Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed max-w-4xl mx-auto mb-6">
                            It's not rare to have people crazy enough to think they can transform an industry. It's rare to have the opportunity to actually do it.
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base mb-8 max-w-3xl mx-auto">
                            Explore what ENERGYFENCE has to offer–from our culture, purpose, perks, and opportunities. Are you up for the challenge?
                        </p>
                        <Link
                            href="#positions"
                            className="inline-flex items-center gap-2 text-[#00b4d8] hover:text-[#48cae4] transition-colors text-sm md:text-base font-medium"
                        >
                            <span className="w-5 h-5 rounded-full border border-[#00b4d8] flex items-center justify-center">
                                <i className="ri-arrow-right-s-line text-sm"></i>
                            </span>
                            See career opportunities
                        </Link>
                    </div>

                    {/* Benefits Slider */}
                    <div className="relative">
                        {/* Benefits Label and Navigation */}
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Benefits</span>

                            {/* Navigation Controls */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={slideLeft}
                                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                                    aria-label="Previous slide"
                                >
                                    <i className="ri-arrow-left-s-line text-xl"></i>
                                </button>
                                <span className="text-gray-400 text-sm min-w-[40px] text-center">
                                    {startIndex}–{endIndex}
                                </span>
                                <button
                                    onClick={slideRight}
                                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                                    aria-label="Next slide"
                                >
                                    <i className="ri-arrow-right-s-line text-xl"></i>
                                </button>
                            </div>
                        </div>

                        {/* Cards Container */}
                        <div className="overflow-hidden" ref={sliderRef}>
                            <div
                                className="flex transition-transform duration-500 ease-in-out gap-2"
                                style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
                            >
                                {benefits.map((benefit, index) => {
                                    const IconComponent = benefit.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex-shrink-0 w-1/3 px-1"
                                        >
                                            <div className="bg-[#0d1d33] border border-[#1a2d4a] p-8 h-[220px] md:h-[240px] flex flex-col items-center justify-center text-center hover:border-[#00b4d8]/50 transition-colors">
                                                <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mb-6" strokeWidth={1.5} />
                                                <p className="text-white text-sm md:text-base font-medium leading-tight">
                                                    {benefit.title}
                                                    {benefit.subtitle && (
                                                        <span className="block text-gray-400 text-xs md:text-sm mt-2">{benefit.subtitle}</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supporting Growth and Impact Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Heading */}
                    <h2 className="text-[#273441] text-3xl sm:text-4xl md:text-5xl font-light text-center mb-16 md:mb-20">
                        Supporting growth and impact
                    </h2>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Left - Image */}
                        <div className="w-full">
                            <div className="aspect-[3/4] w-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=1000&fit=crop"
                                    alt="Scientist looking through microscope"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right - Accordion */}
                        <div className="w-full">
                            {accordionItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`border-t border-gray-200 ${index === accordionItems.length - 1 ? 'border-b' : ''}`}
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full py-6 flex items-center justify-between text-left group"
                                    >
                                        <span className={`text-lg md:text-xl font-medium transition-colors ${expandedAccordion === item.id ? 'text-[#007DCD]' : 'text-[#273441] group-hover:text-[#007DCD]'}`}>
                                            {item.title}
                                        </span>
                                        <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${expandedAccordion === item.id ? 'bg-[#007DCD] text-white rotate-45' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'}`}>
                                            <Plus className="w-5 h-5" />
                                        </span>
                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedAccordion === item.id ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-[#5A6774] text-base leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        {/* Checklist */}
                                        <div className="space-y-4">
                                            {item.checklist.map((checkItem, checkIndex) => (
                                                <div key={checkIndex} className="flex items-center gap-3">
                                                    <span className="w-6 h-6 rounded-full bg-[#007DCD]/10 flex items-center justify-center flex-shrink-0">
                                                        <Check className="w-4 h-4 text-[#007DCD]" />
                                                    </span>
                                                    <span className="text-[#273441] text-base font-medium">{checkItem}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Advance Sustainable Mobility Section */}
            <section className="bg-[#0a1628]">
                {/* Full-width Image with Gradient Overlay */}
                <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&h=1080&fit=crop&q=80"
                        alt="Team member smiling"
                        className="w-full h-full object-cover object-top"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]"></div>
                </div>

                {/* Text Content */}
                <div className="py-16 md:py-24 px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-6 md:mb-8">
                            Advance sustainable mobility
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                            Energy infrastructure is crucial to our sustainable future, and yet in a major need for transformation. This means boldly re-envisioning how we've done things before. We're the first company that takes all of the revolution brought by AI and applies it to this conservative industry.
                        </p>
                        <Link
                            href="/solutions"
                            className="inline-block bg-[#007DCD] text-white text-sm md:text-base font-medium px-8 py-3 rounded-full hover:bg-[#006bb0] transition-colors"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>

            {/* Life at ENERGYFENCE Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Two Column Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-16">
                        {/* Left - Heading */}
                        <div>
                            <h2 className="text-[#273441] text-3xl sm:text-4xl md:text-5xl font-light mb-6">
                                Life at ENERGYFENCE
                            </h2>
                            <Link
                                href="#culture"
                                className="inline-flex items-center gap-2 text-[#007DCD] hover:text-[#006bb0] transition-colors text-sm md:text-base font-medium"
                            >
                                <span className="w-5 h-5 rounded-full border border-[#007DCD] flex items-center justify-center">
                                    <i className="ri-arrow-right-s-line text-sm"></i>
                                </span>
                                Read more
                            </Link>
                        </div>

                        {/* Right - Description */}
                        <div className="lg:pt-2">
                            <p className="text-[#5A6774] text-base md:text-lg leading-relaxed">
                                We get excited by hard challenges and the impact we can have, and we know it's all about the team. That's why we strive to build a culture in which we all love to work and find opportunities for growth. Living up to our values as well as open communication, autonomy, and trust is only the beginning.
                            </p>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="relative w-full aspect-video overflow-hidden">
                        {/* Video/Image Background */}
                        <video
                            className="w-full h-full object-cover"
                            poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/30"></div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-between">
                            {/* Top Left - Vision Text */}
                            <div>
                                <p className="text-[#007DCD] text-xs md:text-sm font-medium uppercase tracking-wider mb-2">
                                    Our vision
                                </p>
                                <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light max-w-lg leading-tight">
                                    Transform energy operations for a sustainable future
                                </h3>
                            </div>

                            {/* Bottom - Watch Video Button and Play Icon */}
                            <div className="flex items-end justify-between">
                                <button className="bg-[#007DCD] text-white text-sm md:text-base font-medium px-6 py-3 rounded-full hover:bg-[#006bb0] transition-colors">
                                    Watch video
                                </button>

                                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Tech Stack Section */}
            <section className="bg-[#e8ecf0] py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                        {/* Left - Heading */}
                        <h2 className="text-[#273441] text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap">
                            Our Tech Stack:
                        </h2>

                        {/* Right - Tech Logos Grid */}
                        <div className="flex-1">
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 md:gap-8 lg:gap-10 items-center">
                                {/* Row 1 */}
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="React"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                        alt="TypeScript"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                        alt="Java"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                        alt="Python"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg"
                                        alt="Apache Spark"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                                        alt="C++"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                                        alt="AWS"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                                        alt="TensorFlow"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex items-center justify-center h-12">
                                    <svg className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" viewBox="0 0 64 64" fill="currentColor">
                                        <path d="M32 8L8 20v24l24 12 24-12V20L32 8zm0 4l20 10v20L32 52 12 42V22l20-10z" fill="#5A6774" />
                                        <path d="M32 16l-16 8v16l16 8 16-8V24l-16-8zm0 4l12 6v12l-12 6-12-6V26l12-6z" fill="#8899A6" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center h-12">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                                        alt="Kubernetes"
                                        className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="positions" className="bg-white py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-[#273441] text-3xl sm:text-4xl md:text-5xl font-light mb-6">
                            Open Positions
                        </h2>
                        <p className="text-[#5A6774] text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                            If you have questions concerning our open positions our career team will be happy to help:
                            <a href="mailto:careers@energyfence.com" className="text-[#007DCD] hover:underline ml-1">
                                careers@energyfence.com
                            </a>.
                            <br />
                            Applications should be submitted through our online system.
                        </p>

                        {/* Down Arrow Button */}
                        <button className="w-12 h-12 rounded-full bg-[#007DCD] text-white flex items-center justify-center mx-auto hover:bg-[#006bb0] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>

                    {/* Department Filter Dropdown */}
                    <div className="mb-8">
                        <select className="px-4 py-3 border border-gray-200 rounded-md text-[#273441] text-sm focus:outline-none focus:border-[#007DCD] bg-white min-w-[180px]">
                            <option value="all">All Department</option>
                            <option value="engineering">Engineering</option>
                            <option value="gna">G&A</option>
                            <option value="operations">Operations</option>
                            <option value="product">Product</option>
                        </select>
                    </div>

                    {/* Department Accordions */}
                    <div className="space-y-0">
                        {[
                            { id: 'engineering', name: 'Engineering', positions: ['Senior Software Engineer', 'DevOps Engineer', 'ML Engineer'] },
                            { id: 'gna', name: 'G&A', positions: ['HR Manager', 'Finance Analyst'] },
                            { id: 'operations', name: 'Operations', positions: ['Operations Manager', 'Field Technician'] },
                            { id: 'product', name: 'Product', positions: ['Product Manager', 'UX Designer'] },
                            { id: 'nodept', name: 'No Department', positions: ['Intern'] },
                        ].map((dept) => (
                            <div key={dept.id} className="border-b border-gray-200">
                                <button
                                    onClick={() => setExpandedDepartment(expandedDepartment === dept.id ? null : dept.id)}
                                    className="w-full py-6 flex items-center justify-between text-left group"
                                >
                                    <span className="text-[#273441] text-base md:text-lg font-medium group-hover:text-[#007DCD] transition-colors">
                                        {dept.name}
                                    </span>
                                    <span className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all ${expandedDepartment === dept.id ? 'bg-[#007DCD] border-[#007DCD] text-white rotate-45' : 'text-gray-400 group-hover:border-gray-400'}`}>
                                        <Plus className="w-5 h-5" />
                                    </span>
                                </button>

                                {/* Expanded Content */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedDepartment === dept.id ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                                    <div className="space-y-3 pl-4">
                                        {dept.positions.map((position, index) => (
                                            <Link
                                                key={index}
                                                href="#"
                                                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-md group"
                                            >
                                                <span className="text-[#273441] text-sm md:text-base font-medium">{position}</span>
                                                <i className="ri-arrow-right-s-line text-xl text-gray-400 group-hover:text-[#007DCD] transition-colors"></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Recruitment Process Section */}
            <section id="recruitment" className="bg-[#0a1628]">
                {/* Full-width Image with Gradient Overlay */}
                <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80"
                        alt="Team members collaborating"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]"></div>
                </div>

                {/* Slider Content */}
                <div className="py-8 md:py-12 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Header with Navigation */}
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Our Recruitment Process</span>

                            {/* Navigation Controls */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setRecruitmentSlide(prev => Math.max(0, prev - 1))}
                                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${recruitmentSlide === 0 ? 'border-gray-700 text-gray-600 cursor-not-allowed' : 'border-gray-600 text-gray-400 hover:text-white hover:border-white'}`}
                                    disabled={recruitmentSlide === 0}
                                    aria-label="Previous slide"
                                >
                                    <i className="ri-arrow-left-s-line text-xl"></i>
                                </button>
                                <span className="text-gray-400 text-sm min-w-[40px] text-center">
                                    {recruitmentSlide + 1}–{Math.min(recruitmentSlide + 3, 10)}
                                </span>
                                <button
                                    onClick={() => setRecruitmentSlide(prev => Math.min(7, prev + 1))}
                                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${recruitmentSlide >= 7 ? 'border-gray-700 text-gray-600 cursor-not-allowed' : 'border-gray-600 text-gray-400 hover:text-white hover:border-white'}`}
                                    disabled={recruitmentSlide >= 7}
                                    aria-label="Next slide"
                                >
                                    <i className="ri-arrow-right-s-line text-xl"></i>
                                </button>
                            </div>
                        </div>

                        {/* Process Cards Container */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out gap-2"
                                style={{ transform: `translateX(-${recruitmentSlide * (100 / 3)}%)` }}
                            >
                                {[
                                    { step: '01', title: 'Chat with talent acquisition', icon: 'phone' },
                                    { step: '02', title: 'Hiring manager interview', icon: 'users' },
                                    { step: '03', title: 'Technical group interview', icon: 'group' },
                                    { step: '04', title: 'Cultural interview', icon: 'chat' },
                                    { step: '05', title: 'Offer', icon: 'handshake', highlight: true },
                                    { step: '01', title: 'Chat with talent acquisition', icon: 'phone' },
                                    { step: '02', title: 'Hiring manager interview', icon: 'users' },
                                    { step: '03', title: 'Technical group interview', icon: 'group' },
                                    { step: '04', title: 'Cultural interview', icon: 'chat' },
                                    { step: '05', title: 'Offer', icon: 'handshake', highlight: true },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-1/3 px-1"
                                    >
                                        <div className={`p-8 h-[220px] md:h-[240px] flex flex-col items-center justify-center text-center border transition-colors ${item.highlight ? 'bg-[#007DCD] border-[#007DCD]' : 'bg-[#0d1d33] border-[#1a2d4a] hover:border-[#007DCD]/50'}`}>
                                            {/* Icon */}
                                            <div className="mb-6">
                                                {item.icon === 'phone' && (
                                                    <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                )}
                                                {item.icon === 'users' && (
                                                    <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                )}
                                                {item.icon === 'group' && (
                                                    <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                )}
                                                {item.icon === 'chat' && (
                                                    <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                    </svg>
                                                )}
                                                {item.icon === 'handshake' && (
                                                    <svg className={`w-10 h-10 md:w-12 md:h-12 ${item.highlight ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                                    </svg>
                                                )}
                                            </div>
                                            {/* Step Number and Title */}
                                            <p className={`text-xs md:text-sm mb-2 ${item.highlight ? 'text-white/70' : 'text-gray-500'}`}>{item.step}</p>
                                            <p className={`text-sm md:text-base font-medium leading-tight ${item.highlight ? 'text-white' : 'text-white'}`}>
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
