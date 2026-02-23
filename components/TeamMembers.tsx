import Image from 'next/image'

export default function TeamMembers() {
    const teamMembers = [
        {
            name: 'Rohan Majeed',
            role: 'Mern Stack Developer',
            image: '/team/rohan.png',
        },
        {
            name: 'Fiza Sarfraz',
            role: 'Front-End Developer',
            image: '/team/fiza.png',
        },
        {
            name: 'Maryam Riaz',
            role: 'Frront-End Developer',
            image: '/team/maryam.png',
        },
        {
            name: 'Farhat Sattar',
            role: 'Full Stack Developer',
            image: '/team/farhat.jpeg',
        },
        {
            name: 'Haider Hussain',
            role: 'Marketing Manager',
            image: '/team/haider.jpeg',
        },
        {
            name: 'Muhammad Naveed',
            role: 'Frront-End Developer (intern)',
            image: '/team/naveed.jpg',
        },
        {
            name: 'Sumayya Hareem',
            role: 'Full-stack Developer',
            image: '/team/sumayya.jpeg',
        },
        {
            name: 'Waleed Majeed',
            role: 'Front-end Developer',
            image: '/team/waleed.png',
        },
    ]

    return (
        <section id="team" className="py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 wave-pattern opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Team Members
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Meet the talented individuals who make DevSquad a leading digital product studio. Each member brings unique skills and expertise to deliver exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-dark-lighter p-8 rounded-lg border border-dark-lighter"
                        >
                            {/* Avatar/Image */}
                            <div className="mb-6 flex justify-center">
                                {member.image ? (
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes="(max-width: 768px) 128px, 128px"
                                            className="object-cover object-center"
                                            priority={index < 3}
                                        />
                                    </div>
                                ) : (
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 bg-dark-lighter flex items-center justify-center">
                                        <span className="text-4xl text-primary font-bold">
                                            {member.name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Name */}
                            <h3 className="text-2xl font-bold text-white mb-2 text-center">
                                {member.name}
                            </h3>

                            {/* Role */}
                            <p className="text-primary font-semibold text-center">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

