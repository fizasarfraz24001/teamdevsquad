'use client'

import { useState } from 'react'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'What services does DevSquad provide?',
            answer: 'DevSquad offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
        },
        {
            question: 'How can DevSquad help my business?',
            answer: 'DevSquad helps businesses by creating innovative digital products that drive growth, enhance user experiences, and provide competitive advantages. We work closely with clients to understand their goals and deliver solutions tailored to their specific needs.',
        },
        {
            question: 'What industries does DevSquad work with?',
            answer: 'DevSquad works with a wide range of industries including startups, enterprise companies, media & publishers, and social good organizations. We have experience across various sectors and can adapt our services to meet industry-specific requirements.',
        },
        {
            question: 'How long does it take to complete a project with DevSquad?',
            answer: 'Project timelines vary depending on the scope and complexity of the project. We provide detailed timelines during the initial consultation and keep clients informed throughout the development process. Most projects range from a few weeks to several months.',
        },
        {
            question: 'Do you offer ongoing support and maintenance after the project is completed?',
            answer: 'Yes, we believe in building long-term partnerships with our clients. We offer ongoing support, maintenance, and updates to ensure your digital products continue to thrive and remain up-to-date with the latest technologies.',
        },
        {
            question: 'How involved will I be in the project development process?',
            answer: 'We believe in collaborative partnerships. You will be involved in key decision-making processes, regular updates, and feedback sessions. We maintain clear communication throughout the project to ensure your vision is realized.',
        },
        {
            question: 'How do you ensure the security and confidentiality of my project?',
            answer: 'We take security and confidentiality seriously. We use industry-standard security practices, sign NDAs when required, and follow strict data protection protocols to ensure your project information remains secure and confidential.',
        },
        {
            question: 'Can you help with website or app maintenance and updates?',
            answer: 'Absolutely! We offer comprehensive maintenance and update services to keep your digital products running smoothly. This includes bug fixes, feature updates, security patches, and performance optimizations.',
        },
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="process" className="py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 wave-pattern opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Still have questions? Contact us! Open your mind to DevSquad.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-dark-lighter mb-4 rounded-lg border border-dark-lighter"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="text-white font-semibold text-lg">
                                    <span className="text-primary mr-3">{String(index + 1).padStart(2, '0')}.</span>
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-6 h-6 text-primary ${openIndex === index ? 'rotate-45' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-5">
                                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

