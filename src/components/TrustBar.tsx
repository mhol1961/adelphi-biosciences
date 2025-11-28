import React from 'react';

const TrustBar = () => {
    const therapeuticAreas = [
        { name: 'Oncology', icon: '🧬' },
        { name: 'Neurology', icon: '🧠' },
        { name: 'Cardiology', icon: '❤️' },
        { name: 'Rare Diseases', icon: '🔬' },
        { name: 'Medical Devices', icon: '⚙️' },
        { name: 'Immunology', icon: '🛡️' },
    ];

    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-semibold tracking-wider text-gray-500 uppercase mb-8">
                    Therapeutic Areas of Expertise
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
                    {therapeuticAreas.map((area) => (
                        <div
                            key={area.name}
                            className="flex flex-col items-center group transition-all duration-300 hover:opacity-100 hover:transform hover:-translate-y-1"
                        >
                            <span className="text-3xl mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                                {area.icon}
                            </span>
                            <span className="text-sm font-medium text-gray-600 group-hover:text-[var(--color-primary-navy)] transition-colors">
                                {area.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
