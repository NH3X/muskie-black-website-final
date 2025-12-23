import React from 'react';

// Service images - elegant professional imagery
const serviceImages = {
    "Company Registration & Compliance": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    "Bookkeeping": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    "Report Writing": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    "Graphic Design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    "Web Development": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
};

function ServiceCard({ service, index, onLearnMore, variant = 'default' }) {
    const number = String(index + 1).padStart(2, '0');
    const image = serviceImages[service.title] || serviceImages["Graphic Design"];

    // Different layouts based on variant
    const isFeature = variant === 'feature';
    const isVertical = variant === 'vertical';

    return (
        <div
            className={`group relative overflow-hidden cursor-pointer
                ${isFeature ? 'md:col-span-2 md:row-span-1' : ''}
                ${isVertical ? 'md:row-span-2' : ''}
            `}
            onClick={() => onLearnMore && onLearnMore(service)}
        >
            {/* Main card container */}
            <div className={`relative h-full bg-white
                ${isFeature ? 'min-h-[400px] md:min-h-[450px]' : ''}
                ${isVertical ? 'min-h-[500px] md:min-h-[600px]' : 'min-h-[400px]'}
            `}>
                {/* Image container with overlay */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>

                {/* Gold accent line - top */}
                <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-gold to-gold/50 group-hover:w-full transition-all duration-700 ease-out"></div>

                {/* Gold accent line - left */}
                <div className="absolute top-0 left-0 h-0 w-px bg-gradient-to-b from-gold to-gold/50 group-hover:h-full transition-all duration-700 ease-out delay-100"></div>

                {/* Number badge */}
                <div className="absolute top-6 right-6 z-10">
                    <span className="font-display text-5xl md:text-6xl font-light text-white/10 group-hover:text-gold/30 transition-colors duration-500">
                        {number}
                    </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    {/* Category label */}
                    <div className="flex items-center gap-3 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <div className="w-8 h-px bg-gold"></div>
                        <span className="text-gold text-xs uppercase tracking-[0.25em] font-sans">Service</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-4 leading-tight group-hover:text-white transition-colors duration-300">
                        {service.title}
                    </h3>

                    {/* Description - reveals on hover */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                        {service.desc}
                    </p>

                    {/* Service items - minimal list */}
                    <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {service.items.slice(0, 3).map((item, idx) => (
                            <span
                                key={idx}
                                className="text-xs text-white/50 border border-white/20 px-3 py-1"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 text-gold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold">Explore</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-gold/50"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-gold/50"></div>
                </div>
            </div>
        </div>
    );
}

function ServiceBox({ services, onLearnMore }) {
    // Define layout variants for each service
    const variants = ['feature', 'vertical', 'default', 'default', 'default'];

    return (
        <>
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    service={service}
                    index={index}
                    onLearnMore={onLearnMore}
                    variant={variants[index] || 'default'}
                />
            ))}
        </>
    );
}

export default ServiceBox;
