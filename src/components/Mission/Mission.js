import React from 'react';

const Mission = () => {
    return (
        <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
            {/* Background image */}
            <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />

            {/* Background decorations */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

            {/* Geometric accents */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-accent/20 rotate-45 hidden lg:block"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 hidden lg:block"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left column - Title */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-12 h-0.5 bg-accent"></span>
                            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Our Purpose</span>
                        </div>
                        <h2 className="brand-text text-white text-4xl md:text-5xl lg:text-6xl">
                            Our Mission
                        </h2>
                    </div>

                    {/* Right column - Quote */}
                    <div className="lg:col-span-8 lg:border-l border-white/10 lg:pl-12">
                        <div className="relative">
                            {/* Quote mark */}
                            <span className="absolute -top-8 -left-4 text-8xl text-accent/20 font-serif leading-none hidden md:block">"</span>

                            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                                To virtually provide clients with the highest quality{' '}
                                <span className="text-accent font-medium">office administration</span> and{' '}
                                <span className="text-accent font-medium">creative services</span>—with the care and attention of a dedicated in-house team, allowing them to focus entirely on their core passion.
                            </p>

                            {/* Closing quote */}
                            <span className="absolute -bottom-8 right-0 text-8xl text-accent/20 font-serif leading-none hidden md:block">"</span>
                        </div>

                        {/* Signature line */}
                        <div className="mt-10 flex items-center gap-4">
                            <div className="w-16 h-0.5 bg-accent/50"></div>
                            <span className="text-white/50 text-sm uppercase tracking-wider">Muskie Black Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
