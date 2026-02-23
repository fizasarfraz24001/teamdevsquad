'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Work() {
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with cart, checkout, and admin dashboard. Built for scalability and performance.',
            image: '/work/project-1.jpg',
            tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
            link: '#',
            category: 'Web App',
        },
        {
            title: 'Mobile Banking App',
            description: 'Secure mobile banking application with biometric login, transactions, and real-time notifications.',
            image: '/work/project-2.jpg',
            tech: ['React Native', 'Node.js', 'PostgreSQL'],
            link: '#',
            category: 'Mobile App',
        },
        {
            title: 'SaaS Dashboard',
            description: 'Analytics and management dashboard for SaaS businesses with charts, reports, and team collaboration.',
            image: '/work/project-3.jpg',
            tech: ['React', 'TypeScript', 'Firebase'],
            link: '#',
            category: 'Web App',
        },
        {
            title: 'Restaurant Booking System',
            description: 'Online reservation system with table management, menu display, and payment integration.',
            image: '/work/project-4.jpg',
            tech: ['Next.js', 'Stripe', 'Prisma'],
            link: '#',
            category: 'Web App',
        },
        {
            title: 'Fitness Tracking App',
            description: 'Workout and nutrition tracking app with progress charts and personalized recommendations.',
            image: '/work/project-5.jpg',
            tech: ['Flutter', 'Node.js', 'MongoDB'],
            link: '#',
            category: 'Mobile App',
        },
        {
            title: 'Portfolio Website',
            description: 'Modern portfolio and agency website with smooth animations and contact integration.',
            image: '/work/project-6.jpg',
            tech: ['Next.js', 'Tailwind', 'Framer Motion'],
            link: '#',
            category: 'Website',
        },
    ]

    return (
        <section id="work" className="py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 wave-pattern opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Explore the projects we have delivered. From web apps to mobile solutions, we build digital products that drive results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-dark-lighter rounded-xl border border-dark-lighter overflow-hidden hover:border-primary/30 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-dark overflow-hidden">
                                {!imageErrors[index] ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                                    />
                                ) : null}
                                {imageErrors[index] && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-dark-lighter">
                                        <span className="text-5xl font-bold text-primary/40">{project.title.charAt(0)}</span>
                                    </div>
                                )}
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-primary/90 text-dark text-xs font-semibold rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-dark text-gray-400 text-xs rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                                    >
                                        View Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
