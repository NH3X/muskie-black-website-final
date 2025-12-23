import React from 'react';

const CTABanner = ({ scrollToContact }) => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                {/* Main navy background */}
                <div className="absolute inset-0 bg-navy"></div>

                {/* Subtle diagonal pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 1px,
                            rgba(201, 169, 98, 0.5) 1px,
                            rgba(201, 169, 98, 0.5) 2px
                        )`,
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>

                {/* Gradient accent on right */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-light/20 to-transparent hidden lg:block"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-gold/50"></div>

            {/* Corner brackets */}
            <div className="absolute top-8 left-8 w-16 h-16 hidden md:block">
                <div className="absolute top-0 left-0 w-full h-px bg-gold/40"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gold/40"></div>
            </div>
            <div className="absolute bottom-8 right-8 w-16 h-16 hidden md:block lg:hidden">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gold/40"></div>
                <div className="absolute bottom-0 right-0 h-full w-px bg-gold/40"></div>
            </div>

            {/* Floating diamond accents */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rotate-45 bg-gold/30 hidden lg:block"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rotate-45 bg-accent/40 hidden lg:block"></div>

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Left - Main content */}
                    <div className="lg:col-span-7 xl:col-span-6">
                        {/* Pre-title with line */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-gold"></div>
                            <span className="text-gold text-xs uppercase tracking-[0.3em]">Ready to Begin?</span>
                        </div>

                        {/* Main headline - editorial style */}
                        <h2 className="mb-6">
                            <span className="brand-text text-white text-4xl md:text-5xl lg:text-6xl block leading-[1.1]">
                                Let's Build
                            </span>
                            <span className="brand-text text-white text-4xl md:text-5xl lg:text-6xl block leading-[1.1]">
                                Something
                            </span>
                            <span className="brand-text-italic text-gold/80 text-3xl md:text-4xl lg:text-5xl block mt-2">
                                Remarkable
                            </span>
                        </h2>

                        {/* Supporting text */}
                        <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed" style={{ fontWeight: 300 }}>
                            From compliance to creativity, we're here to support your vision.
                            <span className="text-white/90"> Every great partnership starts with a conversation.</span>
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={scrollToContact}
                                className="group relative inline-flex items-center justify-center px-10 py-4
                                           bg-accent text-white text-xs uppercase
                                           border border-accent overflow-hidden
                                           transition-all duration-500 ease-out
                                           hover:shadow-lg hover:shadow-accent/20"
                                style={{ letterSpacing: '0.2em', fontWeight: 400 }}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start a Conversation
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                            <a
                                href="tel:+27788936479"
                                className="inline-flex items-center justify-center px-10 py-4
                                           bg-transparent text-white/80 text-xs uppercase
                                           border border-white/20
                                           transition-all duration-500 ease-out
                                           hover:bg-white/5 hover:border-white/40 hover:text-white"
                                style={{ letterSpacing: '0.2em', fontWeight: 400 }}
                            >
                                <svg className="w-4 h-4 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                Call Us
                            </a>
                        </div>
                    </div>

                    {/* Right - Stats/Trust indicators */}
                    <div className="lg:col-span-5 xl:col-span-6 lg:pl-8">
                        <div className="grid grid-cols-2 gap-6 lg:gap-8">
                            {/* Stat cards with editorial styling */}
                            {[
                                { number: '50+', label: 'Happy Clients', sublabel: 'And growing' },
                                { number: '5+', label: 'Years Experience', sublabel: 'Trusted expertise' },
                                { number: '100%', label: 'Black Owned', sublabel: 'Female-led' },
                                { number: '100%', label: 'Dedicated', sublabel: 'To your success' },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className={`relative p-6 lg:p-8 border border-gold/20 bg-navy-dark/80
                                               hover:border-gold/40 hover:bg-navy-dark transition-all duration-500
                                               ${index === 0 ? 'lg:-mt-4' : ''}
                                               ${index === 3 ? 'lg:mt-4' : ''}`}
                                >
                                    {/* Number indicator */}
                                    <span className="absolute -top-3 -left-3 w-6 h-6 bg-accent text-white text-[10px] flex items-center justify-center font-semibold">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <div className="text-3xl lg:text-4xl font-bold text-gold mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-white text-sm font-medium mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-white/50 text-xs uppercase tracking-wider">
                                        {stat.sublabel}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-gold/50 to-transparent"></div>
        </section>
    );
};

export default CTABanner;
