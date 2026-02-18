'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactReasons: [] as string[],
        budget: '2500',
        message: '',
    })

    const contactReasons = ['Web Design', 'Collaboration', 'Mobile App Design', 'Others']

    const handleCheckboxChange = (reason: string) => {
        setFormData((prev) => ({
            ...prev,
            contactReasons: prev.contactReasons.includes(reason)
                ? prev.contactReasons.filter((r) => r !== reason)
                : [...prev.contactReasons, reason],
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-white font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                placeholder="Type here"
                                className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-200"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-white font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Type here"
                                className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-200"
                                required
                            />
                        </div>

                        {/* Why are you contacting us? */}
                        <div>
                            <label className="block text-white font-semibold mb-3">Why are you contacting us?</label>
                            <div className="grid grid-cols-2 gap-4">
                                {contactReasons.map((reason) => (
                                    <label
                                        key={reason}
                                        className="flex items-center space-x-3 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.contactReasons.includes(reason)}
                                            onChange={() => handleCheckboxChange(reason)}
                                            className="w-5 h-5 text-primary bg-dark-lighter border-dark-lighter rounded focus:ring-primary focus:ring-2"
                                        />
                                        <span className="text-gray-300">{reason}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Your Budget */}
                        <div>
                            <label className="block text-white font-semibold mb-3">
                                Your Budget: ${formData.budget}
                            </label>
                            <input
                                type="range"
                                min="1000"
                                max="5000"
                                step="500"
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                className="w-full h-2 bg-dark-lighter rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-gray-400 text-sm mt-2">
                                <span>$1000</span>
                                <span>$5000+</span>
                            </div>
                        </div>

                        {/* Your Message */}
                        <div>
                            <label className="block text-white font-semibold mb-2">Your Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Type here"
                                rows={6}
                                className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-primary text-dark rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold text-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

