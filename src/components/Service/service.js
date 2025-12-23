import React, { useState } from 'react';
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

const services = [
    {
        icon: "edit",
        title: "Company Registration & Compliance",
        desc: "Navigate South Africa's regulatory landscape with confidence. We handle all the paperwork so you can focus on building your business.",
        items: [
            "CIPC Company Registration",
            "Tax Number Applications",
            "B-BBEE Certificates",
            "Annual Returns & Compliance",
        ],
        modalContent: {
            fullDescription: "Starting and maintaining a compliant business in South Africa doesn't have to be overwhelming. Our experienced team guides you through every step—from initial registration to ongoing compliance. Whether you're registering your first company or need help staying current, we ensure your business meets all legal obligations with meticulous attention to detail.",
            benefits: [
                "Expert guidance through complex requirements",
                "Avoid costly penalties and legal issues",
                "Professional handling of all paperwork",
                "Ongoing compliance monitoring available",
            ],
            process: [
                "Initial consultation to understand your needs",
                "Tailored recommendation for your situation",
                "Document preparation and submission",
                "Certificate delivery and secure record keeping",
            ],
        },
    },
    {
        icon: "dollar-sign",
        title: "Bookkeeping",
        desc: "Your finances, handled with precision. Experienced bookkeepers dedicated to keeping your records accurate and your mind at ease.",
        items: [
            "Monthly Bookkeeping",
            "Bank Reconciliations",
            "Financial Statements",
            "Payroll Processing",
        ],
        modalContent: {
            fullDescription: "Good bookkeeping is the backbone of business success. Our experienced bookkeepers use industry-leading practices to give you clear visibility into your financial position. From basic monthly processing to comprehensive financial management, we tailor our services to match your business needs and growth trajectory.",
            benefits: [
                "Services that scale with your business",
                "Tax-ready records year-round",
                "Cloud-based systems for real-time access",
                "Dedicated bookkeeper who knows your business",
            ],
            process: [
                "Assessment of your current setup",
                "Tailored service recommendation",
                "Seamless onboarding and system setup",
                "Regular reporting on your schedule",
            ],
        },
    },
    {
        icon: "book-open",
        title: "Report Writing & Documentation",
        desc: "Professional documentation that communicates clearly. From board meeting minutes to business proposals, we craft compelling content.",
        items: [
            "Business Reports & Proposals",
            "Meeting Minutes",
            "Policy Documents",
            "Editing & Proofreading",
        ],
        modalContent: {
            fullDescription: "Clear, professional documentation is essential for credibility and effective communication. Our report writing services transform complex information into polished, compelling documents that achieve your objectives. Whether you need a single proposal or ongoing documentation support, we deliver work that reflects your professionalism.",
            benefits: [
                "Polished, professional output every time",
                "Quick turnaround when time is tight",
                "Consistent, professional brand voice",
                "Thorough revision process included",
            ],
            process: [
                "Brief discussion and scope confirmation",
                "Timeline and deliverables agreed",
                "Drafting with your feedback incorporated",
                "Final delivery in your preferred formats",
            ],
        },
    },
    {
        icon: "image",
        title: "Graphic Design",
        desc: "Design that makes an impression. From logos to marketing materials, we create visuals that elevate your brand and captivate your audience.",
        items: [
            "Logo & Brand Identity",
            "Marketing Materials",
            "Social Media Graphics",
            "Publication Design",
        ],
        modalContent: {
            fullDescription: "Great design tells your brand story and connects with your audience on an emotional level. Our creative team produces stunning visual assets with the craft and care of a boutique agency. Whether you need a complete brand identity or ongoing design support, we bring your vision to life with creativity and precision.",
            benefits: [
                "Boutique agency quality and attention",
                "Flexible arrangements to suit your needs",
                "Revisions until you're completely satisfied",
                "Full file ownership and source files included",
            ],
            process: [
                "Creative brief to understand your vision",
                "Concept presentation with 2-3 directions",
                "Collaborative refinement process",
                "Final delivery with all file formats",
            ],
        },
    },
    {
        icon: "code",
        title: "Web Development",
        desc: "Modern, responsive websites that work as hard as you do. Beautiful, functional sites built to grow with your business.",
        items: [
            "Business Websites",
            "E-commerce Solutions",
            "Landing Pages",
            "Website Maintenance",
        ],
        modalContent: {
            fullDescription: "Your website is often the first impression customers have of your business. We create fast, beautiful, and functional websites that drive results—from elegant landing pages to comprehensive e-commerce platforms. Every site is mobile-responsive, SEO-optimised, and built with your growth in mind.",
            benefits: [
                "Solutions tailored to your business goals",
                "Mobile-first, SEO-optimised design",
                "Content management training included",
                "Ongoing maintenance and support available",
            ],
            process: [
                "Discovery call to understand your goals",
                "Detailed proposal and timeline",
                "Design approval before development begins",
                "Launch with training and support included",
            ],
        },
    },
];

function Process() {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="section-padding bg-white relative overflow-hidden" id="services">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-navy/5 rounded-full hidden lg:block"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <SectionTitle
                    subtitle="Services"
                    title="What we do"
                    desc="Comprehensive business support tailored to your unique needs. From startups to established enterprises, we scale with you."
                />

                {/* Row 1: 2 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-4 lg:mb-5">
                    <ServiceBox services={services.slice(0, 2)} onLearnMore={openModal} startIndex={0} />
                </div>

                {/* Row 2: 3 items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                    <ServiceBox services={services.slice(2, 5)} onLearnMore={openModal} startIndex={2} />
                </div>
            </div>

            {/* Service Detail Modal - Redesigned with sticky header and floating CTA */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>

                    {/* Modal Container */}
                    <div className="relative w-full max-w-3xl max-h-[90vh] bg-white shadow-2xl flex flex-col">
                        {/* Sticky Header */}
                        <div className="sticky top-0 z-10 bg-white border-b border-gold/20 px-8 py-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1 pr-8">
                                    {/* Gold accent line */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-px bg-gold"></div>
                                        <span className="text-gold text-xs uppercase tracking-[0.25em]">Service Details</span>
                                    </div>
                                    <h3 className="brand-text text-2xl md:text-3xl text-charcoal">
                                        {selectedService.title}
                                    </h3>
                                </div>
                                {/* Close button */}
                                <button
                                    onClick={closeModal}
                                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-charcoal-muted hover:text-charcoal hover:bg-cream transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto px-8 py-6">
                            {/* Description */}
                            <p className="text-charcoal-muted text-base leading-relaxed mb-8">
                                {selectedService.modalContent.fullDescription}
                            </p>

                            {/* Benefits */}
                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-charcoal mb-4 flex items-center gap-3 uppercase tracking-[0.15em]">
                                    <span className="w-8 h-px bg-gold"></span>
                                    Benefits
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {selectedService.modalContent.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-gold mt-2"></span>
                                            <span className="text-charcoal-light text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Process */}
                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-charcoal mb-4 flex items-center gap-3 uppercase tracking-[0.15em]">
                                    <span className="w-8 h-px bg-gold"></span>
                                    Our Process
                                </h4>
                                <ol className="space-y-4">
                                    {selectedService.modalContent.process.map((step, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 border border-gold/30 text-gold text-xs font-display flex items-center justify-center">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-charcoal-light text-sm pt-1.5">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* What's Included */}
                            <div>
                                <h4 className="text-sm font-semibold text-charcoal mb-4 flex items-center gap-3 uppercase tracking-[0.15em]">
                                    <span className="w-8 h-px bg-gold"></span>
                                    What's Included
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedService.items.map((item, index) => (
                                        <span
                                            key={index}
                                            className="text-xs text-charcoal-muted border border-charcoal/10 px-3 py-1.5 bg-cream/50"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Footer with CTA */}
                        <div className="sticky bottom-0 bg-white border-t border-gold/20 px-8 py-5">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-charcoal-muted text-sm">
                                    Ready to get started with this service?
                                </p>
                                <a
                                    href="#contact"
                                    onClick={closeModal}
                                    className="group inline-flex items-center justify-center px-8 py-3
                                               bg-navy text-white text-xs uppercase tracking-[0.2em]
                                               hover:bg-navy-light transition-colors"
                                >
                                    Get Started
                                    <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Process;
