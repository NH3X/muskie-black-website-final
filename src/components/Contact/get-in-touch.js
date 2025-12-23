import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { send } from '@emailjs/browser';
import SectionTitle from "../common/section-title";
import FeatherIcon from 'feather-icons-react';

function GetInTouch() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [msgSendSuccess, setMsgSendSuccess] = useState(false);
    const [msgSending, setMsgSending] = useState(false);
    const [submittedName, setSubmittedName] = useState("");

    const onSubmit = async (data) => {
        setMsgSending(true);

        try {
            const templateParams = {
                name: data.firstname,
                email: data.email,
                subject: data.subject,
                message: data.message
            };

            await send(
                process.env.REACT_APP_CONTACT_EMAIL_SERVICE_ID,
                process.env.REACT_APP_CONTACT_EMAIL_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_CONTACT_EMAIL_USER_ID
            );

            setSubmittedName(data.firstname);
            setMsgSendSuccess(true);
            setMsgSending(false);
            reset();
            console.log("Success!");
        } catch (e) {
            setMsgSendSuccess(false);
            setMsgSending(false);
            console.log("Failed!", e);
        }
    };

    const contactInfo = [
        {
            icon: "mail",
            label: "Email",
            value: "info@muskieblack.co.za",
            href: "mailto:info@muskieblack.co.za"
        },
        {
            icon: "phone",
            label: "Phone",
            value: "+27 78 893 6479",
            href: "tel:+27788936479"
        },
        {
            icon: "instagram",
            label: "Instagram",
            value: "@muskie_black",
            href: "https://www.instagram.com/muskie_black"
        }
    ];

    return (
        <section className="section-padding bg-cream-dark relative overflow-hidden" id="contact">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 hidden lg:block"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full translate-y-1/2 -translate-x-1/2 hidden lg:block"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <SectionTitle
                    subtitle="Contact Us"
                    title="Get In Touch"
                    desc="Ready to elevate your business? Tell us about your project and we'll get back to you within 24 hours."
                />

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Contact Info Column */}
                    <div className="lg:col-span-4">
                        <div className="bg-navy p-8 lg:p-10 h-full relative overflow-hidden">
                            {/* Background image for card */}
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover opacity-10"
                            />

                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="relative z-10 text-white text-2xl font-semibold mb-8">Contact Information</h3>

                            <div className="space-y-8 relative z-10">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.href}
                                        target={info.icon === 'instagram' ? '_blank' : undefined}
                                        rel={info.icon === 'instagram' ? 'noopener noreferrer' : undefined}
                                        className="group flex items-start gap-4 text-white/70 hover:text-white transition-colors"
                                    >
                                        <span className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                                            <FeatherIcon icon={info.icon} className="w-5 h-5" />
                                        </span>
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-white/50 mb-1">{info.label}</span>
                                            <span className="text-white">{info.value}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social links */}
                            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                                <span className="text-xs uppercase tracking-wider text-white/50 mb-4 block">Follow Us</span>
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
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-8">
                        {msgSendSuccess ? (
                            <div className="bg-white p-8 lg:p-12 border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-charcoal mb-3">Message Sent Successfully!</h3>
                                <p className="text-charcoal-muted">
                                    Thank you <span className="font-semibold text-accent">{submittedName}</span>,
                                    your message has been submitted. We'll be in touch shortly.
                                </p>
                                <button
                                    onClick={() => setMsgSendSuccess(false)}
                                    className="mt-8 btn-outline"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : msgSending ? (
                            <div className="bg-white p-8 lg:p-12 border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
                                <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin mb-4"></div>
                                <p className="text-charcoal-muted">Sending your message...</p>
                            </div>
                        ) : (
                            <form
                                name="contact-form"
                                id="contact-form"
                                onSubmit={handleSubmit(onSubmit)}
                                className="bg-white p-8 lg:p-12 border border-gray-100"
                            >
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">
                                            Name
                                        </label>
                                        <input
                                            {...register("firstname", { required: "Name is required" })}
                                            placeholder="Your name"
                                            type="text"
                                            className="input-field"
                                        />
                                        {errors.firstname && (
                                            <p className="mt-2 text-sm text-red-500">{errors.firstname.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">
                                            Email
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Enter a valid email address"
                                                }
                                            })}
                                            placeholder="Your email"
                                            type="email"
                                            className="input-field"
                                        />
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="subject" className="block text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">
                                        Subject
                                    </label>
                                    <input
                                        {...register("subject", { required: "Subject is required" })}
                                        placeholder="How can we help?"
                                        type="text"
                                        className="input-field"
                                    />
                                    {errors.subject && (
                                        <p className="mt-2 text-sm text-red-500">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">
                                        Message
                                    </label>
                                    <textarea
                                        {...register("message", { required: "Message is required" })}
                                        id="message"
                                        rows="5"
                                        className="input-field resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                    {errors.message && (
                                        <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full sm:w-auto"
                                >
                                    Send Message
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetInTouch;
