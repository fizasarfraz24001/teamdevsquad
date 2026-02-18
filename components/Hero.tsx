'use client'

import { useState } from 'react'

export default function Hero() {
    const [activeFilter, setActiveFilter] = useState('For Startups')

    const filters = ['For Startups', 'Enterprise leaders', 'Media & Publishers', 'Social Good']

    return (
        <section id="home" className="pt-32 pb-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 wave-pattern opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        A Digital Product Studio
                        <br />
                        <span className="text-primary">that will Work</span>
                    </h1>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-full ${activeFilter === filter
                                ? 'bg-primary text-dark font-semibold'
                                : 'bg-dark-lighter text-white'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                    <button className="px-8 py-4 bg-dark-lighter text-white rounded-lg font-semibold">
                        Our Works
                    </button>
                    <button className="px-8 py-4 bg-primary text-dark rounded-lg font-semibold">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}

