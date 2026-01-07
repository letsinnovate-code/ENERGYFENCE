'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DigitalTwinPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=800&fit=crop"
                        alt="IoT Devices"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-light mb-4">
                        IoT Devices for Rail
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                        From idea to impact, in months not years.
                    </p>
                    <button className="group flex items-center gap-2 mx-auto text-gray-300 hover:text-white transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="text-sm">Learn more</span>
                    </button>
                </div>
            </section>

            <section className="py-20 px-6 h-screen bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6 leading-tight">
                                The future of rail infrastructure depends on more than insight, it requires the ability to act on it.
                            </h2>
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Rapid IoT Prototyping is KONUX's unique capability to quickly create, test, and deploy custom sensor solutions that solve real railway problems, faster than traditional hardware cycles allow. We've reimagined the IoT development process: instead of designing devices from scratch for every new use case, we build from a flexible library of proven sensor modules tailored to rail environments or reuse. This modular approach allows us (and our partners) to validate ideas, deliver value, and scale quickly across rail domains.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop"
                                alt="Sensor development"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-blue-500 font-medium mb-4 text-sm tracking-wide">Why it Matters</p>
                            <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-6 leading-tight">
                                Most sensor solutions in rail take years to develop and often struggle to adapt across asset types, track configurations, or use cases.
                            </h3>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    KONUX turns that model on its head.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 px-6 bg-[#E0E6EC]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6">
                        Built for Collaboration
                    </h2>
                    <p className="text-gray-700 text-base mb-12">
                        Our IoT ecosystem is designed to scale alongside our partners. We offer:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="bg-white p-8 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">
                                Reusable, interoperable components
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Sensors built once, reused often across domains like switches, track, and overhead lines
                            </p>
                        </div>

                        <div className="bg-white p-8 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">
                                Fast field readiness
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Industrial-grade hardware with long-battery life, built for rail, and ready to install
                            </p>
                        </div>

                        <div className="bg-white p-8 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">
                                Partner-ready toolkits
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Open protocols and references designs so external partners can integrate or co-develop quickly
                            </p>
                        </div>

                        <div className="bg-white p-8 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">
                                Flexible data integration
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                All sensors connect directly to KONUX CoBrix, enabling real-time data flow and AI analysis
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 h-screen px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop"
                                alt="IoT Prototyping device"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-blue-500 font-medium mb-4 text-sm tracking-wide">From Prototype to Portfolio</p>
                            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6 leading-tight">
                                Whether you're addressing known challenges or exploring new ones, our Rapid IoT Prototyping turns concepts into deployable devices – fast.
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                As each new domain is deployed, we add to a growing portfolio of interoperable, domain-specific solutions. It's now we scale innovation – one building block at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-0 h-screen px-0 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="bg-blue-900 p-16 flex flex-col justify-center">
                            <p className="text-blue-300 text-xs font-medium mb-6 tracking-wider uppercase">01</p>
                            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
                                Rapid IoT Prototyping
                            </h2>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                The future of rail infrastructure depends on more than insight, it requires the ability to act on it. Rapid IoT Prototyping is KONUX's unique capability to quickly create, test, and deploy custom sensor solutions that solve real railway problems, faster than traditional hardware cycles allow.
                            </p>
                        </div>

                        <div className="relative h-[400px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop"
                                alt="Rail infrastructure"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-24 px-6 bg-gradient-to-b from-black to-blue-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Proven Impact in the Field
                    </h2>
                    <p className="text-blue-100 text-base mb-10 max-w-2xl mx-auto">
                        See how leading rail operators are using KONUX to boost reliability, efficiency, and performance.
                    </p>
                    <button className="px-8 py-4 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        View all case studies
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
