"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Types ---
type Category = "Product Innovation" | "Company News" | "Partnerships" | "Press Release";

interface BlogPost {
    id: string;
    category: Category;
    title: string;
    date: string;
    imageSrc: string;
}

// --- Data ---
const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        category: "Product Innovation",
        title: "Unlocking Track Access Windows",
        date: "22 Dec 2025",
        imageSrc: "https://images.unsplash.com/photo-1596568288599-28c464205566?q=80&w=800&auto=format&fit=crop", // Worker/Rail generic
    },
    {
        id: "2",
        category: "Company News",
        title: "Start-up to Scale-up: Our Path to Maturity in the Rail Industry",
        date: "17 Dec 2025",
        imageSrc: "https://images.unsplash.com/photo-1558231940-bf7f654aa305?q=80&w=800&auto=format&fit=crop", // Abstract map/tech
    },
    {
        id: "3",
        category: "Partnerships",
        title: "KONUX and Rail Power Systems join forces to drive innovation in predictive infrastructure maintenance",
        date: "09 Dec 2025",
        imageSrc: "https://images.unsplash.com/photo-1474487548417-781cb714c2f0?q=80&w=800&auto=format&fit=crop", // Overhead wires
    },
    {
        id: "4",
        category: "Product Innovation",
        title: "How Rapid IoT Prototyping Is Shaping the Future of Rail Connectivity",
        date: "01 Dec 2025",
        imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop", // Microscope/Lab
    },
    {
        id: "5",
        category: "Company News",
        title: "KONUX Reaches 500 Million Train Traces – A Strategic Step for Data Driven Rail",
        date: "27 Nov 2025",
        imageSrc: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=800&auto=format&fit=crop", // Forest/Train aerial
    },
    {
        id: "6",
        category: "Press Release",
        title: "KONUX launches data intelligence platform designed to help partners co-create rail infrastructure solutions – faster, smarter and at scale",
        date: "26 Oct 2025",
        imageSrc: "https://images.unsplash.com/photo-1495521939206-a217db919d3e?q=80&w=800&auto=format&fit=crop", // City motion blur
    },
    {
        id: "7",
        category: "Product Innovation",
        title: "Smarter Frog Health for Clearer, Faster Decisions",
        date: "10 Sep 2025",
        imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop", // Rail tracks close up
    },
    {
        id: "8",
        category: "Partnerships",
        title: "KONUX and Smart Motors: Advancing Point Machine Reliability with Data and AI",
        date: "26 Aug 2025",
        imageSrc: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=800&auto=format&fit=crop", // Switch/Tracks
    },
    {
        id: "9",
        category: "Press Release",
        title: "KONUX and FGC begin switch monitoring project on one of Spain’s busiest Railway lines",
        date: "21 Aug 2025",
        imageSrc: "https://images.unsplash.com/photo-1583344665421-4f1b803625f3?q=80&w=800&auto=format&fit=crop", // Train curve
    },
    {
        id: "10",
        category: "Partnerships",
        title: "KONUX expands into Australia & New Zealand, partnering with rail specialist Salix",
        date: "12 Aug 2025",
        imageSrc: "https://images.unsplash.com/photo-1473876637954-4b49330d3c5e?q=80&w=800&auto=format&fit=crop", // Green scenery train
    },
    {
        id: "11",
        category: "Product Innovation",
        title: "A smart bridge between ground truth and intelligent decision-making with KONUX Asset Notes",
        date: "07 Aug 2025",
        imageSrc: "https://images.unsplash.com/photo-1596568288599-28c464205566?q=80&w=800&auto=format&fit=crop", // Workers
    },
    {
        id: "12",
        category: "Partnerships",
        title: "Beyond the Data: Why Integration and Collaboration are the Future of Intelligent Rail Infrastructure",
        date: "15 Jul 2025",
        imageSrc: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop", // Tracks overhead
    },
];

// --- Components ---

const ArrowIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
);

const UpArrowIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
    </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

export default function BlogPage() {
    const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
            <Navbar />
            {/* 
        1. Sub-Header 
        Sticks below main nav. "Blog" Left, "Media Kit" + "Contact us" Right.
      */}
            <div className="sticky top-[60px] z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <h1 className="text-lg font-medium text-slate-800 tracking-tight">Blog</h1>
                    <div className="flex items-center gap-6 md:gap-8">
                        <Link
                            href="/media-kit"
                            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block"
                        >
                            Media Kit
                        </Link>
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 bg-[#0092D8] hover:bg-[#007AB8] text-white text-sm font-bold rounded-full transition-colors"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>

            <main className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
                {/* 
          2. Hero Section 
          Centered Title, Subtitle, Learn more link.
        */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
                    <h2 className="text-4xl md:text-6xl font-normal text-slate-900 mb-6 tracking-tight">
                        Blog
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                        Explore perspectives on AI, rail infrastructure, and digital transformation from KONUX experts and industry
                        leaders driving the next wave of innovation in mobility.
                    </p>
                    <Link
                        href="/learn-more"
                        className="inline-flex items-center gap-2 text-[#00B2FF] font-bold text-base hover:opacity-80 transition-opacity"
                    >
                        <div className="w-8 h-8 rounded-full bg-[#E0F4FF] flex items-center justify-center">
                            <ArrowIcon className="w-4 h-4 text-[#00B2FF]" />
                        </div>
                        Learn more
                    </Link>
                </div>

                {/* 
          3. Filter Section 
          Dropdown centered.
        */}
                <div className="flex justify-center mb-16 relative z-30">
                    <button className="flex items-center gap-3 px-6 py-3 bg-[#Eef2f6] hover:bg-[#E3E8ED] rounded-full text-slate-700 text-sm font-bold transition-colors">
                        All Categories (5)
                        <ChevronDownIcon className="w-4 h-4 text-slate-500" />
                    </button>
                </div>

                {/* 
          4. Blog Grid 
          3 Columns.
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-16">
                    {BLOG_POSTS.map((post) => (
                        <Link
                            key={post.id}
                            href={`/resources/blog/${post.id}`}
                            className="group flex flex-col h-full cursor-pointer"
                            onMouseEnter={() => setHoveredCardId(post.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square w-full overflow-hidden bg-slate-100 mb-8">
                                <Image
                                    src={post.imageSrc}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <span className="text-[#0092D8] text-xs font-bold uppercase tracking-wider mb-3">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-auto pr-4">
                                    {post.title}
                                </h3>

                                <div className="flex items-center justify-between mt-8 pt-4 border-t border-transparent group-hover:border-slate-200 transition-colors">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                        {post.date}
                                    </span>

                                    {/* Arrow Button */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${hoveredCardId === post.id ? "bg-[#0092D8]" : "bg-[#Eef2f6]"
                                        }`}>
                                        <ArrowIcon className={`w-4 h-4 transition-colors duration-300 ${hoveredCardId === post.id ? "text-white" : "text-slate-500"
                                            }`} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* 
          5. Footer / Load More 
        */}
                <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between relative">
                    {/* Spacer to center the button visually in the flex container, balancing the 'Back to top' */}
                    <div className="hidden md:block w-24"></div>

                    <button className="px-8 py-3 bg-[#0092D8] hover:bg-[#007AB8] text-white text-sm font-bold rounded-full transition-colors shadow-sm">
                        Load more
                    </button>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase hover:text-slate-800 transition-colors mt-8 md:mt-0"
                    >
                        Back to top
                        <div className="w-6 h-6 rounded-full bg-[#Eef2f6] flex items-center justify-center">
                            <UpArrowIcon className="w-3 h-3 text-slate-500" />
                        </div>
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
