import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal content */}
            <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-soft-xl animate-scale-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
                               text-charcoal-muted hover:text-charcoal hover:bg-cream
                               transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
