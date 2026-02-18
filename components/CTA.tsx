export default function CTA() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 wave-pattern opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Thank you for your interest in DevSquad.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        We would love to help you achieve your digital ideas. If you have a project in mind, you can get in touch with us.
                    </p>
                    <button className="px-8 py-4 bg-primary text-dark rounded-lg font-semibold text-lg">
                        Start Project
                    </button>
                </div>
            </div>
        </section>
    )
}

