import React, { useState, useEffect } from 'react';
import ScrollspyNav from "./scrollSpy";
import FeatherIcon from 'feather-icons-react';

function NavbarPage({ navItems, navClass, imglight }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggle = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const targetId = navItems.map((item) => item.idnm);

    const isScrolled = scrolled || navClass.includes('nav-sticky');

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-white shadow-soft py-3'
                : 'bg-transparent py-5'
        }`}>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a className="flex items-center gap-3" href="/">
                        <span
                            className={`brand-text text-2xl transition-colors duration-300 ${
                                isScrolled ? 'text-navy' : 'text-white'
                            }`}
                        >
                            Muskie Black
                        </span>
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${
                            isScrolled ? 'text-navy' : 'text-white'
                        }`}
                        onClick={toggle}
                        aria-label="Toggle navigation"
                    >
                        <FeatherIcon icon={isOpenMenu ? "x" : "menu"} className="w-6 h-6" />
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden lg:block">
                        <ScrollspyNav
                            scrollTargetIds={targetId}
                            scrollDuration="200"
                            headerBackground="true"
                            activeNavClass="active"
                            className="navbar-collapse"
                        >
                            <ul className="flex items-center space-x-1">
                                {navItems.map((item, key) => (
                                    <li key={key}>
                                        <a
                                            href={"#" + item.idnm}
                                            className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300
                                                ${isScrolled
                                                    ? 'text-charcoal hover:text-accent'
                                                    : 'text-white/80 hover:text-white'
                                                }
                                                before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                                                before:w-0 before:h-0.5 before:bg-accent before:transition-all before:duration-300
                                                hover:before:w-4
                                            `}
                                        >
                                            {item.navheading}
                                        </a>
                                    </li>
                                ))}
                                <li className="ml-4">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center px-6 py-2.5
                                                   bg-accent text-white text-sm font-semibold uppercase tracking-wider
                                                   border-2 border-accent
                                                   transition-all duration-300
                                                   hover:bg-accent-dark hover:border-accent-dark"
                                    >
                                        Get Started
                                    </a>
                                </li>
                            </ul>
                        </ScrollspyNav>
                    </div>

                    {/* Mobile navigation */}
                    <div className={`
                        lg:hidden fixed inset-0 top-[60px] bg-white transform transition-transform duration-300 ease-in-out
                        ${isOpenMenu ? 'translate-x-0' : 'translate-x-full'}
                    `}>
                        <div className="container mx-auto px-6 py-8">
                            <ul className="space-y-4">
                                {navItems.map((item, key) => (
                                    <li key={key}>
                                        <a
                                            href={"#" + item.idnm}
                                            onClick={() => setIsOpenMenu(false)}
                                            className="block py-3 text-lg text-charcoal hover:text-accent transition-colors border-b border-gray-100"
                                        >
                                            {item.navheading}
                                        </a>
                                    </li>
                                ))}
                                <li className="pt-4">
                                    <a
                                        href="#contact"
                                        onClick={() => setIsOpenMenu(false)}
                                        className="btn-primary w-full text-center"
                                    >
                                        Get Started
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarPage;
