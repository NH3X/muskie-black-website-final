import React, { useState } from 'react';
import SectionTitle from '../common/section-title';

const portfolioItems = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
        description: "Modern online store that increased sales by 40%",
        fullDescription: "A growing retail business needed to expand their reach online. We delivered a fully-featured e-commerce platform with custom product filtering, secure checkout, and mobile-first design. The result? A 40% increase in sales within three months of launch.",
        tags: ["React", "E-commerce", "Responsive"],
        highlights: [
            "Custom product filtering and search",
            "Secure payment integration",
            "Mobile-first responsive design",
            "Staff training included"
        ],
        client: "Retail Client",
        duration: "3 months"
    },
    {
        id: 2,
        title: "Startup Brand Identity",
        category: "design",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        description: "Complete brand identity that won major clients",
        fullDescription: "This financial services startup needed to look established from day one. We created a complete brand identity including logo, colour palette, stationery, and comprehensive brand guidelines. The polished identity helped them secure their first major enterprise clients.",
        tags: ["Branding", "Logo", "Stationery"],
        highlights: [
            "Logo design with variations",
            "Complete brand style guide",
            "Business stationery suite",
            "Source files included"
        ],
        client: "FinTech Startup",
        duration: "6 weeks"
    },
    {
        id: 3,
        title: "Business Dashboard",
        category: "web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        description: "Custom analytics saving 10+ hours weekly",
        fullDescription: "A growing tech company was drowning in spreadsheets. We built an intuitive dashboard that pulls data from multiple sources, automates reporting, and provides real-time insights. The team now saves over 10 hours weekly on manual reporting.",
        tags: ["Dashboard", "Analytics", "UI/UX"],
        highlights: [
            "Real-time data visualization",
            "Automated weekly reports",
            "User-friendly interface",
            "Easy to maintain and update"
        ],
        client: "Tech Company",
        duration: "2 months"
    },
    {
        id: 4,
        title: "Launch Campaign Materials",
        category: "design",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
        description: "Complete marketing suite for successful product launch",
        fullDescription: "A fast-moving consumer goods company needed comprehensive launch materials on a tight timeline. We delivered brochures, banners, presentation decks, and digital assets—all cohesively branded and delivered on schedule for a successful launch.",
        tags: ["Print", "Marketing", "Brochures"],
        highlights: [
            "Product brochures and catalogues",
            "Event banners and signage",
            "Sales presentation templates",
            "Editable source files"
        ],
        client: "FMCG Company",
        duration: "4 weeks"
    },
    {
        id: 5,
        title: "Restaurant Website",
        category: "web",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        description: "Elegant site that increased bookings by 60%",
        fullDescription: "A restaurant needed more than just a beautiful website—they needed it to drive business. We delivered an elegant site with integrated reservations, menu management, and Google integration. Online bookings increased by 60% in the first month.",
        tags: ["Restaurant", "Booking", "Responsive"],
        highlights: [
            "Online reservation system",
            "Easy menu updates",
            "WhatsApp integration",
            "Staff training provided"
        ],
        client: "Hospitality Client",
        duration: "6 weeks"
    },
    {
        id: 6,
        title: "Social Media Package",
        category: "design",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        description: "Professional templates for consistent brand presence",
        fullDescription: "A fashion brand was struggling to maintain a consistent social media presence. We created an elegant template system that their team can customise easily, ensuring professional, on-brand content month after month without needing a designer on staff.",
        tags: ["Social Media", "Templates", "Digital"],
        highlights: [
            "50+ customisable templates",
            "Canva-compatible files",
            "Story and post formats",
            "Video tutorial included"
        ],
        client: "Fashion Brand",
        duration: "3 weeks"
    },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredItems = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="section-padding bg-cream relative overflow-hidden" id="portfolio">
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full translate-x-1/2 hidden lg:block"></div>
            <div className="absolute bottom-20 left-0 w-48 h-48 bg-navy/5 rounded-full -translate-x-1/2 hidden lg:block"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <SectionTitle
                    subtitle="Our Work"
                    title="Portfolio"
                    desc="Real results for real businesses. Every project delivered on time, on budget, and beyond expectations."
                />

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {[
                        { key: 'all', label: 'All Projects' },
                        { key: 'web', label: 'Web Development' },
                        { key: 'design', label: 'Graphic Design' }
                    ].map((btn) => (
                        <button
                            key={btn.key}
                            onClick={() => setFilter(btn.key)}
                            className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300
                                ${filter === btn.key
                                    ? 'bg-accent text-white'
                                    : 'bg-white text-charcoal hover:bg-accent/10'
                                }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Portfolio grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 cursor-pointer"
                            onClick={() => openModal(item)}
                        >
                            {/* Image container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-navy/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="px-6 py-3 border-2 border-white text-white font-semibold text-sm uppercase tracking-wider">
                                        View Project
                                    </span>
                                </div>
                                {/* Category badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider
                                        ${item.category === 'web' ? 'bg-accent text-white' : 'bg-navy text-white'}`}>
                                        {item.category === 'web' ? 'Web' : 'Design'}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="brand-text text-xl text-charcoal mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-charcoal-muted text-sm mb-4">
                                    {item.description}
                                </p>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-cream text-charcoal-muted text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View more CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                    >
                        Have a project in mind? Let's talk
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>

                    {/* Modal Container */}
                    <div className="relative w-full max-w-4xl max-h-[90vh] bg-white shadow-2xl flex flex-col">
                        {/* Sticky Header */}
                        <div className="sticky top-0 z-10 bg-white border-b border-gold/20 px-8 py-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1 pr-8">
                                    {/* Category badge and label */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider
                                            ${selectedProject.category === 'web' ? 'bg-accent text-white' : 'bg-navy text-white'}`}>
                                            {selectedProject.category === 'web' ? 'Web Development' : 'Graphic Design'}
                                        </span>
                                        <span className="text-charcoal-muted text-xs">•</span>
                                        <span className="text-charcoal-muted text-xs">{selectedProject.client}</span>
                                    </div>
                                    <h3 className="brand-text text-2xl md:text-3xl text-charcoal">
                                        {selectedProject.title}
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
                        <div className="flex-1 overflow-y-auto">
                            {/* Project Image */}
                            <div className="relative h-64 md:h-80">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
                            </div>

                            <div className="px-8 py-6">
                                {/* Description */}
                                <p className="text-charcoal-muted text-base leading-relaxed mb-8">
                                    {selectedProject.fullDescription}
                                </p>

                                {/* Project Details Grid */}
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    {/* Highlights */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-charcoal mb-4 flex items-center gap-3 uppercase tracking-[0.15em]">
                                            <span className="w-8 h-px bg-gold"></span>
                                            Project Highlights
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedProject.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-gold mt-2"></span>
                                                    <span className="text-charcoal-light text-sm">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Project Info */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-charcoal mb-4 flex items-center gap-3 uppercase tracking-[0.15em]">
                                            <span className="w-8 h-px bg-gold"></span>
                                            Project Details
                                        </h4>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 p-4 bg-cream/50 border border-charcoal/5">
                                                <div className="w-10 h-10 flex items-center justify-center border border-gold/30">
                                                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <span className="text-charcoal-muted text-xs uppercase tracking-wider block">Client</span>
                                                    <span className="text-charcoal font-medium">{selectedProject.client}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 p-4 bg-cream/50 border border-charcoal/5">
                                                <div className="w-10 h-10 flex items-center justify-center border border-gold/30">
                                                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <span className="text-charcoal-muted text-xs uppercase tracking-wider block">Duration</span>
                                                    <span className="text-charcoal font-medium">{selectedProject.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies/Tags */}
                                <div>
                                    <h4 className="text-sm font-semibold text-charcoal mb-4 flex items-center gap-3 uppercase tracking-[0.15em]">
                                        <span className="w-8 h-px bg-gold"></span>
                                        Technologies & Skills
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-xs text-charcoal-muted border border-charcoal/10 px-3 py-1.5 bg-cream/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Footer with CTA */}
                        <div className="sticky bottom-0 bg-white border-t border-gold/20 px-8 py-5">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-charcoal-muted text-sm">
                                    Interested in a similar project?
                                </p>
                                <a
                                    href="#contact"
                                    onClick={closeModal}
                                    className="group inline-flex items-center justify-center px-8 py-3
                                               bg-navy text-white text-xs uppercase tracking-[0.2em]
                                               hover:bg-navy-light transition-colors"
                                >
                                    Start Your Project
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
};

export default Portfolio;
