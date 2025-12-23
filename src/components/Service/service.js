import React, { useState } from 'react';
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";
import Modal from "../common/Modal";

const services = [
    {
        icon: "edit",
        title: "Company Registration & Compliance",
        desc: "We provide services to help your company stay legal by ensuring that all your business documents and procedures comply with the Companies Act.",
        items: [
            "Company Registration Certificates",
            "Income Tax Numbers",
            "B-BBEE Certificates",
        ],
        modalContent: {
            fullDescription: "Starting and maintaining a compliant business in South Africa requires navigating complex regulatory requirements. Our team of experts will guide you through every step of the process, ensuring your business meets all legal obligations from day one.",
            benefits: [
                "Peace of mind knowing your business is fully compliant",
                "Avoid costly penalties and legal issues",
                "Professional handling of all paperwork",
                "Ongoing compliance monitoring and updates",
            ],
            process: [
                "Initial consultation to understand your business needs",
                "Document preparation and submission",
                "Liaison with relevant government bodies",
                "Certificate delivery and record keeping",
            ],
        },
    },
    {
        icon: "dollar-sign",
        title: "Bookkeeping",
        desc: "Your accounts in safe hands. We offer credible, precise and diligent bookkeeping services making it easy for you to keep track of your financial transactions.",
        items: [
            "Management of accounts",
            "Bank account reconciliations",
            "Financial transaction recording",
        ],
        modalContent: {
            fullDescription: "Accurate bookkeeping is the foundation of a healthy business. Our experienced bookkeepers use industry-leading practices to maintain your financial records with precision and care, giving you clear visibility into your business performance.",
            benefits: [
                "Always know your financial position",
                "Tax-ready records year-round",
                "Identify cost-saving opportunities",
                "Make informed business decisions",
            ],
            process: [
                "Review of your current financial setup",
                "Implementation of efficient systems",
                "Regular processing and reconciliation",
                "Monthly reporting and insights",
            ],
        },
    },
    {
        icon: "book-open",
        title: "Report Writing",
        desc: "We create surveys and analyse information compiled by clients for reports such as; yearly, quarterly, annual, investor meetings and projects etc.",
        items: [
            "Minutes of Meeting",
            "Proof Reading and Editing of Documents",
            "Academic Thesis",
        ],
        modalContent: {
            fullDescription: "Clear, professional documentation is essential for effective communication with stakeholders. Our report writing services transform complex information into compelling, well-structured documents that achieve your objectives.",
            benefits: [
                "Professional, polished documents",
                "Clear communication of key insights",
                "Time savings for your team",
                "Consistent brand voice and style",
            ],
            process: [
                "Brief and requirements gathering",
                "Research and data analysis",
                "Drafting and revision cycles",
                "Final review and delivery",
            ],
        },
    },
    {
        icon: "image",
        title: "Graphic Design",
        desc: "Creating a good impression is vital, so we make use of optic compositions to communicate with potential and current clients, and solve problems for your business.",
        items: [
            "Visual designs",
            "Publication designing",
            "Marketing & Advertising",
        ],
        modalContent: {
            fullDescription: "Great design tells your brand story and connects with your audience on an emotional level. Our creative team produces stunning visual assets that elevate your brand and drive engagement across all channels.",
            benefits: [
                "Stand out from competitors",
                "Consistent brand identity",
                "Increase engagement and conversions",
                "Professional marketing materials",
            ],
            process: [
                "Creative brief and brand discovery",
                "Concept development and presentation",
                "Design refinement and feedback",
                "Final file delivery in all formats",
            ],
        },
    },
    {
        icon: "code",
        title: "Web Development",
        desc: "We build modern, responsive websites and web applications that help your business establish a strong online presence and engage with customers effectively.",
        items: [
            "Custom Website Development",
            "E-commerce Solutions",
            "Website Maintenance & Support",
        ],
        modalContent: {
            fullDescription: "Your website is often the first impression customers have of your business. We create fast, beautiful, and functional websites that not only look great but also drive results for your business.",
            benefits: [
                "24/7 online presence for your business",
                "Mobile-responsive design for all devices",
                "SEO-optimized for better visibility",
                "Easy content management",
            ],
            process: [
                "Discovery and requirements analysis",
                "Design mockups and approval",
                "Development and testing",
                "Launch and ongoing support",
            ],
        },
    },
];

function Process() {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
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
                    desc="We offer a comprehensive range of business support services tailored to your specific needs"
                />

                {/* Editorial grid layout - asymmetric and magazine-style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                    {/* Row 1: Feature (2 cols) + Vertical (1 col, spans 2 rows) */}
                    <ServiceBox services={services.slice(0, 2)} onLearnMore={openModal} />

                    {/* Row 2: Three equal cards */}
                    <ServiceBox services={services.slice(2, 5)} onLearnMore={openModal} />
                </div>
            </div>

            {/* Service Detail Modal */}
            <Modal isOpen={selectedService !== null} onClose={closeModal}>
                {selectedService && (
                    <div className="p-8 md:p-10">
                        {/* Header */}
                        <div className="mb-8 pr-8">
                            {/* Gold accent line */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-px bg-gold"></div>
                                <span className="text-gold text-xs uppercase tracking-[0.25em]">Service Details</span>
                            </div>
                            <h3 className="brand-text text-3xl md:text-4xl text-charcoal mb-4">
                                {selectedService.title}
                            </h3>
                            <p className="text-charcoal-muted text-lg leading-relaxed">
                                {selectedService.modalContent.fullDescription}
                            </p>
                        </div>

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
                                        <span className="text-charcoal-light">{benefit}</span>
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
                                        <span className="flex-shrink-0 w-10 h-10 border border-gold/30 text-gold text-sm font-display flex items-center justify-center">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-charcoal-light pt-2">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* CTA */}
                        <div className="pt-6 border-t border-gold/20">
                            <a
                                href="#contact"
                                onClick={closeModal}
                                className="group inline-flex items-center justify-center w-full sm:w-auto px-10 py-4
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
                )}
            </Modal>
        </section>
    );
}

export default Process;
