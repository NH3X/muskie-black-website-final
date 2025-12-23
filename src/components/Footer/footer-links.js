import React from 'react';

function FooterLinks() {
    return (
        <section className="bg-accent py-4">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="brand-text text-white text-xl font-semibold">
                            MB
                        </span>
                        <span className="w-px h-6 bg-white/30"></span>
                        <span className="text-white/80 text-sm">
                            Management & Consulting
                        </span>
                    </div>
                    <p className="text-white/80 text-sm">
                        {new Date().getFullYear()} © Muskie Black Management & Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FooterLinks;
