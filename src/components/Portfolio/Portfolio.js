import React, { useState } from 'react';
import SectionTitle from '../common/section-title';

const portfolioItems = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop",
        description: "Modern online store with seamless checkout experience",
        tags: ["React", "E-commerce", "Responsive"]
    },
    {
        id: 2,
        title: "Corporate Identity",
        category: "design",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
        description: "Complete brand identity package for financial firm",
        tags: ["Branding", "Logo", "Stationery"]
    },
    {
        id: 3,
        title: "Business Dashboard",
        category: "web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        description: "Analytics dashboard for tracking business metrics",
        tags: ["Dashboard", "Analytics", "UI/UX"]
    },
    {
        id: 4,
        title: "Marketing Collateral",
        category: "design",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
        description: "Print materials for product launch campaign",
        tags: ["Print", "Marketing", "Brochures"]
    },
    {
        id: 5,
        title: "Restaurant Website",
        category: "web",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        description: "Elegant website with online reservations",
        tags: ["Restaurant", "Booking", "Responsive"]
    },
    {
        id: 6,
        title: "Social Media Package",
        category: "design",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
        description: "Cohesive social media templates and graphics",
        tags: ["Social Media", "Templates", "Digital"]
    },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [hoveredItem, setHoveredItem] = useState(null);

    const filteredItems = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <section className="section-padding bg-white relative overflow-hidden" id="portfolio">
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full translate-x-1/2 hidden lg:block"></div>
            <div className="absolute bottom-20 left-0 w-48 h-48 bg-navy/5 rounded-full -translate-x-1/2 hidden lg:block"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <SectionTitle
                    subtitle="Our Work"
                    title="Portfolio"
                    desc="Explore our recent projects showcasing our expertise in web development and graphic design"
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
                                    : 'bg-cream text-charcoal hover:bg-accent/10'
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
                            className="group relative bg-white overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {/* Image container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className={`absolute inset-0 bg-navy/80 flex items-center justify-center transition-opacity duration-300
                                    ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <button className="px-6 py-3 border-2 border-white text-white font-semibold text-sm uppercase tracking-wider
                                        hover:bg-white hover:text-navy transition-all duration-300">
                                        View Project
                                    </button>
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
        </section>
    );
};

export default Portfolio;
