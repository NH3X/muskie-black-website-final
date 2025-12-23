import React from 'react';

function Section({ scrollToContact }) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
            {/* Background with elegant overlay */}
            <div className="absolute inset-0 bg-navy-dark">
                {/* Hero background image */}
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90"></div>

                {/* Elegant pattern overlay */}
                <div className="absolute inset-0 bg-pattern-diagonal opacity-30"></div>
            </div>

            {/* Refined geometric decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Top left corner bracket */}
                <div className="absolute top-12 left-12 w-24 h-24 hidden lg:block">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/40 to-transparent"></div>
                    <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold/40 to-transparent"></div>
                </div>

                {/* Bottom right corner bracket */}
                <div className="absolute bottom-12 right-12 w-24 h-24 hidden lg:block">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/40 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold/40 to-transparent"></div>
                </div>

                {/* Elegant vertical accent line */}
                <div className="absolute top-1/4 right-16 w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block"></div>

                {/* Horizontal accent line */}
                <div className="absolute bottom-1/4 left-16 w-32 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent hidden lg:block"></div>

                {/* Floating diamond accents */}
                <div className="absolute top-1/3 right-1/4 w-2 h-2 rotate-45 bg-gold/30 hidden lg:block"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rotate-45 bg-accent/40 hidden lg:block"></div>

                {/* Large decorative frame */}
                <div className="absolute top-1/2 right-20 -translate-y-1/2 w-48 h-64 border border-white/5 hidden xl:block"></div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">

                    {/* Elegant pre-title with diamond */}
                    <div className="flex items-center gap-4 justify-center lg:justify-start mb-8 animate-fade-in">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold/60"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-gold"></div>
                        <span className="label-elegant text-gold">Est. 2020</span>
                        <div className="w-1.5 h-1.5 rotate-45 bg-gold"></div>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-gold/60"></div>
                    </div>

                    {/* Main heading with refined typography */}
                    <h1 className="mb-1 animate-fade-in-up stagger-1">
                        <span className="brand-text text-white block text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
                            Muskie Black
                        </span>
                    </h1>

                    {/* Elegant subtitle with styled ampersand */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 animate-fade-in-up stagger-2">
                        <span className="text-accent font-semibold tracking-wide">Management</span>
                        <span className="mx-4 brand-text-italic text-gold/60 text-2xl md:text-4xl">&</span>
                        <span className="text-accent font-semibold tracking-wide">Consulting</span>
                    </h2>

                    {/* Refined divider */}
                    <div className="flex items-center gap-4 justify-center lg:justify-start mb-10 animate-fade-in stagger-3">
                        <div className="w-16 h-px bg-gradient-to-r from-gold/50 to-transparent"></div>
                        <div className="w-1 h-1 rotate-45 bg-gold/50"></div>
                    </div>

                    {/* Description with refined typography */}
                    <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in-up stagger-3" style={{ fontWeight: 300 }}>
                        Boutique business support, tailored to you.
                        <span className="text-white/90 font-normal"> Your success is our business.</span>
                    </p>

                    {/* CTA Buttons with refined styling */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-in-up stagger-4">
                        <button
                            onClick={() => scrollToContact()}
                            className="group relative inline-flex items-center justify-center px-10 py-4
                                       bg-accent text-white text-xs uppercase
                                       border border-accent overflow-hidden
                                       transition-all duration-500 ease-out
                                       hover:shadow-lg hover:shadow-accent/20"
                            style={{ letterSpacing: '0.2em', fontWeight: 400 }}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Enquire Now
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                        <a
                            href="#about"
                            className="inline-flex items-center justify-center px-10 py-4
                                       bg-transparent text-white/80 text-xs uppercase
                                       border border-white/20
                                       transition-all duration-500 ease-out
                                       hover:bg-white/5 hover:border-white/40 hover:text-white"
                            style={{ letterSpacing: '0.2em', fontWeight: 400 }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            {/* Elegant scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 animate-fade-in stagger-5">
                <span className="label-elegant text-white/40 text-[10px]">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-4 bg-gold/60 animate-bounce"></div>
                </div>
            </div>

        </section>
    );
}

export default Section;
