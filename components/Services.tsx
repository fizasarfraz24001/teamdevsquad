'use client'

import { useState } from 'react'

export default function Services() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)

    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Product Design',
            description: 'We create exceptional product designs that combine aesthetics with functionality. Our design process focuses on user-centered approaches.',
            features: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            title: 'Web Development',
            description: 'We build modern, scalable web applications using cutting-edge technologies. From responsive websites to complex web platforms.',
            features: ['React/Next.js', 'Node.js', 'Full Stack', 'API Development'],
        },
        
        
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Cloud & DevOps',
            description: 'We provide cloud infrastructure and DevOps solutions to ensure your applications are scalable, secure, and performant.',
            features: ['AWS/Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure'],
        },
        
    ]

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-lighter"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className="text-primary font-semibold text-sm">Our Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        What We Do
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    We build powerful digital experiences for businesses around the world. As developers, we create high-performance websites, intelligent chatbot systems, and custom GPT solutions designed to elevate brands and streamline operations.
                    </p>
                    <p className="text-lg text-gray-4 00 max-w-3xl mx-auto mt-4 leading-relaxed">
                    Every project we take on is grounded in transparency, clear communication, structured project management, and meticulous attention to detail. We don’t just deliver products; we build long-term partnerships focused on growth, scalability, and measurable impact.
                    From custom business websites to AI-powered chatbots and tailored GPT assistants, we transform complex ideas into smart, scalable digital solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                            className="group relative bg-dark-lighter/50 backdrop-blur-sm p-8 rounded-2xl border border-dark-lighter hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                        >
                            {/* Gradient Overlay on Hover */}
                            {hoveredService === index && (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"></div>
                            )}

                            {/* Icon */}
                            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Arrow Icon */}
                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-400 mb-6 text-lg">
                        From the moment our company was founded, we have helped our clients find exceptional solutions
                        for their businesses, creating memorable brands and digital products.
                    </p>
                    <p className="text-white font-semibold mb-8">
                        We offer comprehensive services to aid you in the entire product development process.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark font-bold rounded-lg text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30"
                    >
                        Get Started
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
