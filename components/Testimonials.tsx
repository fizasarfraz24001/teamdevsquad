export default function Testimonials() {
    const testimonials = [
        {
            name: 'John Smith',
            role: 'CEO of Chic Boutique',
            quote: 'DevSquad has been instrumental in transforming our Online Presence.',
            website: 'chicboutique.com',
        },
        {
            name: 'Sarah Johnson',
            role: 'Founder of Funky Bites',
            quote: 'Working with DevSquad was a breeze.',
            website: 'funkybites.com',
        },
        {
            name: 'Mark Thompson',
            role: 'CEO of EventPlanner',
            quote: 'DevSquad developed a comprehensive booking and reservation system for our event management workflow.',
            website: 'eventplanner.com',
        },
        {
            name: 'Laura Adams',
            role: 'CEO of ProTech Solutions',
            quote: 'ProTech Solutions turned to DevSquad to automate our workflow.',
            website: 'protechsolutions.com',
        },
        {
            name: 'Michael Anderson',
            role: 'Founder of Dream Homes Realty',
            quote: 'DevSquad designed and developed a captivating web portal for showcasing our real estate listings.',
            website: 'dreamhomesrealty.com',
        },
        {
            name: 'Emily Turner',
            role: 'CEO of FitLife Tracker',
            quote: 'FitLife Tracker wanted a mobile app that tracked activities and provided personalized workout plans.',
            website: 'fitlifetracker.com',
        },
    ]

    return (
        <section id="work" className="py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 wave-pattern opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What our Clients say About us
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        At DevSquad, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-dark-lighter p-8 rounded-lg border border-dark-lighter"
                        >
                            {/* Avatar */}
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>

                            {/* Quote */}
                            <p className="text-white text-lg mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            {/* Name and Role */}
                            <div className="mb-4">
                                <p className="text-white font-semibold">{testimonial.name}</p>
                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                            </div>

                            {/* Website Button */}
                            <button className="px-6 py-3 bg-dark text-white rounded-lg font-semibold text-sm">
                                Open Website
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

