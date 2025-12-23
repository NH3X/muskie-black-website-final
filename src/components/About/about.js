import React from 'react';
import SectionTitle from '../common/section-title';
import Mission from '../Mission/Mission';
import aboutImage from '../../assets/images/muskie_bg4.jpg';

const About = () => {
    return (
        <>
            <section className="section-padding bg-cream relative overflow-hidden" id="about">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 hidden lg:block"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full translate-y-1/2 -translate-x-1/2 hidden lg:block"></div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left column - Image with frame */}
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 hidden md:block"></div>

                            {/* Main image container */}
                            <div className="relative bg-navy overflow-hidden">
                                <img
                                    src={aboutImage}
                                    alt="Muskie Black Team"
                                    className="w-full h-80 md:h-[500px] object-cover opacity-80"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>

                                {/* Stats overlay */}
                                <div className="absolute bottom-6 left-6 right-6 flex gap-6">
                                    <div className="bg-white/95 backdrop-blur-sm px-6 py-4">
                                        <span className="block text-3xl font-bold text-accent">100%</span>
                                        <span className="text-sm text-charcoal-muted">Female Owned</span>
                                    </div>
                                    <div className="bg-white/95 backdrop-blur-sm px-6 py-4">
                                        <span className="block text-3xl font-bold text-navy">5+</span>
                                        <span className="text-sm text-charcoal-muted">Years Experience</span>
                                    </div>
                                </div>
                            </div>

                            {/* Accent corner */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent hidden md:block"></div>
                        </div>

                        {/* Right column - Content */}
                        <div className="lg:pl-8">
                            <SectionTitle
                                subtitle="Excellence in Every Detail"
                                title="Who we are"
                                align="left"
                            />

                            <div className="space-y-6 text-charcoal-light leading-relaxed">
                                <p className="text-lg">
                                    We are a reputable, <span className="text-accent font-semibold">100% female black owned company</span>, providing Consulting, Administrative and Graphic design services.
                                </p>
                                <p>
                                    We strive to deliver a seamless customer experience while providing the highest quality out-of-office services. We provide these services according to each clients' specific needs, and tailor make solutions; simplifying office management tasks.
                                </p>
                                <p>
                                    The outsourcing of these tasks allows our clients to better focus on their core business, while remaining compliant and attractive to their target markets.
                                </p>
                            </div>

                            {/* Features list */}
                            <div className="mt-10 grid sm:grid-cols-2 gap-4">
                                {[
                                    'Tailored Solutions',
                                    'Professional Service',
                                    'Client-Focused',
                                    'B-BBEE Compliant'
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-charcoal">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-10">
                                <a
                                    href="#services"
                                    className="group inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                                >
                                    Explore Our Services
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Mission />
        </>
    );
};

export default About;
