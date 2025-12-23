import React from 'react';
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import FooterLinks from "./footer-links";

function Footer() {
    return (
        <>
            <footer className="bg-navy-dark text-white/70 pt-16 pb-8">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <h3 className="brand-text text-white text-3xl mb-6">
                                Muskie Black
                            </h3>
                            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                                Boutique business support with a personal touch. We partner with businesses of all sizes to deliver administrative, consulting, and creative services that make a difference.
                            </p>

                            {/* Social links */}
                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/MuskieBlack"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors"
                                >
                                    <FeatherIcon icon="facebook" className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://www.instagram.com/muskie_black"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors"
                                >
                                    <FeatherIcon icon="instagram" className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Home', href: '#home' },
                                    { label: 'About Us', href: '#about' },
                                    { label: 'Services', href: '#services' },
                                    { label: 'Contact', href: '#contact' },
                                ].map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-accent transition-colors inline-flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full"></span>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        to="/privacy"
                                        className="text-white/60 hover:text-accent transition-colors inline-flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-accent/50 rounded-full"></span>
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="mailto:info@muskieblack.co.za"
                                        className="flex items-start gap-3 text-white/60 hover:text-white transition-colors"
                                    >
                                        <FeatherIcon icon="mail" className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                                        <span>info@muskieblack.co.za</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+27788936479"
                                        className="flex items-start gap-3 text-white/60 hover:text-white transition-colors"
                                    >
                                        <FeatherIcon icon="phone" className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                                        <span>+27 78 893 6479</span>
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 text-white/60">
                                    <FeatherIcon icon="map-pin" className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                                    <span>South Africa</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <FooterLinks />
        </>
    );
}

export default Footer;
