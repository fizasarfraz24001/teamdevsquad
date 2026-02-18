import Image from 'next/image'

export default function TeamMembers() {
    const teamMembers = [
        {
            name: 'Rohan Majeed',
            role: 'Frontend Developer',
            expertise: 'React, Next.js, TypeScript',
            description: 'Specializes in building modern, responsive user interfaces with a focus on performance and user experience.',
            image: '/team/rohan.png',
        },
        {
            name: 'Fiza Sarfraz',
            role: 'Backend Developer',
            expertise: 'Node.js, Python, Database Design',
            description: 'Expert in server-side architecture, API development, and database optimization for scalable applications.',
            image: '/team/fiza.png',
        },
        {
            name: 'Maryam Riaz',
            role: 'UI/UX Designer',
            expertise: 'Figma, Adobe XD, User Research',
            description: 'Creates intuitive and beautiful designs that enhance user engagement and drive business results.',
            image: null,
        },
        {
            name: 'Farhat Sattar',
            role: 'Full Stack Developer',
            expertise: 'React, Node.js, Cloud Services',
            description: 'Versatile developer capable of handling both frontend and backend development with expertise in cloud deployment.',
            image: null,
        },
        {
            name: 'Haider Hussain',
            role: 'DevOps Engineer',
            expertise: 'Docker, Kubernetes, CI/CD',
            description: 'Ensures smooth deployment pipelines and maintains infrastructure for high availability and scalability.',
            image: null,
        },
        {
            name: 'Muhammad Naveed',
            role: 'Project Manager',
            expertise: 'Agile, Scrum, Team Leadership',
            description: 'Coordinates projects effectively, ensuring timely delivery and maintaining clear communication with clients.',
            image: '/team/naveed.jpeg',
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
                                            className="object-cover"
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
                            <p className="text-primary font-semibold mb-3 text-center">
                                {member.role}
                            </p>

                            {/* Expertise */}
                            <div className="mb-4">
                                <p className="text-gray-300 text-sm font-medium mb-2">Expertise:</p>
                                <p className="text-gray-400 text-sm">{member.expertise}</p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

