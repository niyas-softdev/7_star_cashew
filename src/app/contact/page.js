"use client";
import React from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div>
            <div className="bg-brand-primary pb-12 pt-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                    Contact Us
                </h1>
                <p className="text-brand-light/70 max-w-2xl mx-auto">
                    Get in touch for bulk orders, export inquiries, or any questions. We are here to serve you.
                </p>
            </div>

            <Section dark>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">Get In Touch</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Visit Us</h4>
                                    <p className="text-brand-light/70 text-sm leading-relaxed">
                                        No.528, Gandhi Road,<br />
                                        Panruti, Cuddalore District,<br />
                                        Tamil Nadu – 607106
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Call Us</h4>
                                    <p className="text-brand-light/70 text-sm mb-1">+91 94423 33785</p>
                                    <p className="text-brand-light/50 text-xs">Mon - Sat, 9am - 8pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                                    <p className="text-brand-light/70 text-sm">7StarCashew@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-8 h-64 w-full rounded-2xl overflow-hidden border border-brand-gold/20">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.086364020973!2d79.544!3d11.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a5f000000001%3A0x0!2sPanruti!5e0!3m2!1sen!2sin!4v1614141414141!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Office Location"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-brand-gold/10">
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">Send Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-brand-light/70">Your Name</label>
                                    <input type="text" className="w-full bg-brand-primary border border-brand-light/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-brand-light/70">Your Phone</label>
                                    <input type="tel" className="w-full bg-brand-primary border border-brand-light/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="+91 ..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-brand-light/70">Email Address</label>
                                <input type="email" className="w-full bg-brand-primary border border-brand-light/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-brand-light/70">Message</label>
                                <textarea rows="4" className="w-full bg-brand-primary border border-brand-light/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="I am interested in bulk purchase of..." />
                            </div>

                            <Button variant="primary" className="w-full">Send Message</Button>
                        </form>
                    </div>

                </div>
            </Section>
        </div>
    );
}
