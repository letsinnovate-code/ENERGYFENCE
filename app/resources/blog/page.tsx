"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
const CATEGORIES: Category[] = ["Product Innovation", "Company News", "Partnerships", "Press Release"];

const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        category: "Product Innovation",
        title: "Unlocking Track Access Windows",
        date: "22 Dec 2025",
        imageSrc: "https://images.unsplash.com/photo-1596568288599-28c464205566?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "2",
        category: "Company News",
        title: "Start-up to Scale-up: Our Path to Maturity in the Rail Industry",
        date: "17 Dec 2025",
        imageSrc: "https://images.unsplash.com/photo-1558231940-bf7f654aa305?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "3",
        category: "Partnerships",
        title: "KONUX and Rail Power Systems join forces to drive innovation in predictive infrastructure maintenance",
        date: "09 Dec 2025",
        imageSrc: "https://images.unsplash.com/photo-1474487548417-781cb714c2f0?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "4",
        category: "Product Innovation",
        title: "How Rapid IoT Prototyping Is Shaping the Future of Rail Connectivity",
        date: "01 Dec 2025",
        imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "5",
        category: "Company News",
        title: "KONUX Reaches 500 Million Train Traces – A Strategic Step for Data Driven Rail",
        date: "27 Nov 2025",
        imageSrc: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "6",
        category: "Press Release",
        title: "KONUX launches data intelligence platform designed to help partners co-create rail infrastructure solutions – faster, smarter and at scale",
        date: "26 Oct 2025",
        imageSrc: "https://images.unsplash.com/photo-1495521939206-a217db919d3e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "7",
        category: "Product Innovation",
        title: "Smarter Frog Health for Clearer, Faster Decisions",
        date: "10 Sep 2025",
        imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "8",
        category: "Partnerships",
        title: "KONUX and Smart Motors: Advancing Point Machine Reliability with Data and AI",
        date: "26 Aug 2025",
        imageSrc: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "9",
        category: "Press Release",
        title: "KONUX and FGC begin switch monitoring project on one of Spain's busiest Railway lines",
        date: "21 Aug 2025",
        imageSrc: "https://images.unsplash.com/photo-1583344665421-4f1b803625f3?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "10",
        category: "Partnerships",
        title: "KONUX expands into Australia & New Zealand, partnering with rail specialist Salix",
        date: "12 Aug 2025",
        imageSrc: "https://images.unsplash.com/photo-1473876637954-4b49330d3c5e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "11",
        category: "Product Innovation",
        title: "A smart bridge between ground truth and intelligent decision-making with KONUX Asset Notes",
        date: "07 Aug 2025",
        imageSrc: "https://images.unsplash.com/photo-1596568288599-28c464205566?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "12",
        category: "Partnerships",
        title: "Beyond the Data: Why Integration and Collaboration are the Future of Intelligent Rail Infrastructure",
        date: "15 Jul 2025",
        imageSrc: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    },
];

// Initial posts to show
const INITIAL_POSTS_COUNT = 6;
const POSTS_PER_LOAD = 6;

// --- Components ---

export default function BlogPage() {
    const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visiblePostsCount, setVisiblePostsCount] = useState(INITIAL_POSTS_COUNT);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filter posts by category
    const filteredPosts = selectedCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === selectedCategory);

    // Get visible posts (for Load More functionality)
    const visiblePosts = filteredPosts.slice(0, visiblePostsCount);

    // Check if there are more posts to load
    const hasMorePosts = visiblePostsCount < filteredPosts.length;

    // Handle Load More
    const handleLoadMore = () => {
        setVisiblePostsCount(prev => Math.min(prev + POSTS_PER_LOAD, filteredPosts.length));
    };

    // Handle category selection
    const handleCategorySelect = (category: Category | "All") => {
        setSelectedCategory(category);
        setVisiblePostsCount(INITIAL_POSTS_COUNT); // Reset visible posts when changing category
        setIsDropdownOpen(false);
    };

    // Get category count
    const getCategoryCount = (category: Category | "All") => {
        if (category === "All") return BLOG_POSTS.length;
        return BLOG_POSTS.filter(post => post.category === category).length;
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
            <Navbar />

            <main className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
                {/* Hero Section */}
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
                            <i className="ri-arrow-right-s-line text-lg text-[#00B2FF]"></i>
                        </div>
                        Learn more
                    </Link>
                </div>

                {/* Filter Section - Category Dropdown */}
                <div className="flex justify-center mb-16 relative z-30" ref={dropdownRef}>
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 px-6 py-3 bg-[#Eef2f6] hover:bg-[#E3E8ED] rounded-full text-slate-700 text-sm font-bold transition-colors"
                        >
                            {selectedCategory === "All" ? "All Categories" : selectedCategory} ({getCategoryCount(selectedCategory)})
                            <i className={`ri-arrow-down-s-line text-lg text-slate-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}></i>
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                                >
                                    <div className="py-2">
                                        {/* All Categories Option */}
                                        <button
                                            onClick={() => handleCategorySelect("All")}
                                            className={`w-full px-6 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between ${selectedCategory === "All"
                                                ? "bg-[#E0F4FF] text-[#0092D8]"
                                                : "hover:bg-slate-50 text-slate-700"
                                                }`}
                                        >
                                            <span>All Categories</span>
                                            <span className={`text-xs ${selectedCategory === "All" ? "text-[#0092D8]" : "text-slate-400"}`}>
                                                ({getCategoryCount("All")})
                                            </span>
                                        </button>

                                        {/* Individual Categories */}
                                        {CATEGORIES.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => handleCategorySelect(category)}
                                                className={`w-full px-6 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between ${selectedCategory === category
                                                    ? "bg-[#E0F4FF] text-[#0092D8]"
                                                    : "hover:bg-slate-50 text-slate-700"
                                                    }`}
                                            >
                                                <span>{category}</span>
                                                <span className={`text-xs ${selectedCategory === category ? "text-[#0092D8]" : "text-slate-400"}`}>
                                                    ({getCategoryCount(category)})
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                    <AnimatePresence mode="popLayout">
                        {visiblePosts.map((post) => (
                            <motion.div
                                key={post.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    href={`/resources/blog/${post.id}`}
                                    className="group flex flex-col h-full cursor-pointer"
                                    onMouseEnter={() => setHoveredCardId(post.id)}
                                    onMouseLeave={() => setHoveredCardId(null)}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 mb-6">
                                        <Image
                                            src={post.imageSrc}
                                            alt={post.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow px-2">
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
                                                <i className={`ri-arrow-right-s-line text-lg transition-colors duration-300 ${hoveredCardId === post.id ? "text-white" : "text-slate-500"
                                                    }`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* No Results Message */}
                {visiblePosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No blog posts found in this category.</p>
                    </div>
                )}

                {/* Footer / Load More */}
                <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between relative">
                    {/* Spacer to center the button visually */}
                    <div className="hidden md:block w-24"></div>

                    {hasMorePosts ? (
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 bg-[#0092D8] cursor-pointer hover:bg-[#007AB8] text-white text-sm font-bold rounded-full transition-colors shadow-sm"
                        >
                            Load more ({filteredPosts.length - visiblePostsCount} remaining)
                        </button>
                    ) : (
                        <div className="px-8 py-3 text-slate-400 text-sm font-medium">
                            All posts loaded
                        </div>
                    )}

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase hover:text-slate-800 transition-colors mt-8 md:mt-0"
                    >
                        Back to top
                        <div className="w-6 h-6 rounded-full bg-[#Eef2f6] flex items-center justify-center">
                            <i className="ri-arrow-up-s-line text-sm text-slate-500"></i>
                        </div>
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
