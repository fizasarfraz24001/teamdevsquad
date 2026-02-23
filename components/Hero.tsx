'use client'

import Link from 'next/link'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}></div>

            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                   

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-tight">
                        Building Digital
                        <br />
                        <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                            Experiences
                        </span>
                        <br />
                        That Matter
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        We transform ideas into powerful digital products. From concept to launch,
                        we craft solutions that drive business growth and delight users.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-primary text-dark font-bold rounded-lg text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href="#services"
                            className="px-8 py-4 bg-dark-lighter text-white font-semibold rounded-lg text-lg border border-dark-lighter hover:border-primary/50 transition-all duration-300"
                        >
                            View Our Work
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                            <div className="text-sm text-gray-400">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                            <div className="text-sm text-gray-400">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1+</div>
                            <div className="text-sm text-gray-400">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">7+</div>
                            <div className="text-sm text-gray-400">Team Members</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}
