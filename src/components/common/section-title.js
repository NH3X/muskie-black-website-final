import React from 'react';

function SectionTitle({ title, subtitle, desc, light = false, align = 'center' }) {
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const marginClass = align === 'center' ? 'mx-auto' : '';
    const justifyClass = align === 'center' ? 'justify-center' : align === 'left' ? 'justify-start' : 'justify-end';

    return (
        <div className={`max-w-3xl ${marginClass} mb-20`}>
            <div className={alignClass}>
                {/* Elegant subtitle with diamond accents */}
                <div className={`flex items-center gap-4 mb-6 ${justifyClass}`}>
                    <div className={`w-12 h-px ${light ? 'bg-gold/40' : 'bg-gold/60'}`}></div>
                    <div className={`w-1.5 h-1.5 rotate-45 ${light ? 'bg-gold/60' : 'bg-gold'}`}></div>
                    <span className={`label-elegant ${light ? 'text-gold/80' : 'text-accent'}`}>
                        {subtitle}
                    </span>
                    <div className={`w-1.5 h-1.5 rotate-45 ${light ? 'bg-gold/60' : 'bg-gold'}`}></div>
                    <div className={`w-12 h-px ${light ? 'bg-gold/40' : 'bg-gold/60'}`}></div>
                </div>

                {/* Main title with refined typography */}
                <h2 className={`brand-text text-4xl sm:text-5xl md:text-6xl mb-6 ${light ? 'text-white' : 'text-charcoal'}`}>
                    {title}
                </h2>

                {/* Description */}
                {desc && (
                    <p className={`text-lg leading-relaxed mt-6 max-w-2xl ${marginClass} ${light ? 'text-white/60' : 'text-charcoal/60'}`} style={{ fontWeight: 300 }}>
                        {desc}
                    </p>
                )}
            </div>
        </div>
    );
}

export default SectionTitle;
