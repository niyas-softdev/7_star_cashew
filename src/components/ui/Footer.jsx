"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Globe } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-primary border-t border-brand-gold/10 text-brand-light pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="mb-6">
                            <span className="text-2xl font-heading font-bold text-white tracking-wider">
                                7 STAR <span className="text-brand-gold">CASHEWS</span>
                            </span>
                            <p className="text-xs text-brand-light/60 mt-1 uppercase tracking-widest">
                                Premium Import & Export
                            </p>
                        </div>
                        <p className="text-sm text-brand-light/70 leading-relaxed mb-6">
                            Trust 7 Star Cashews for premium quality nuts and dry fruits. We are a leading global supplier committed to hygiene, quality, and timely delivery worldwide.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Linkedin, Globe].map((Icon, i) => (
                                <a key={i} href="#" className="text-brand-light/60 hover:text-brand-gold transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-heading font-semibold text-white mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Products", href: "/products" },
                                { name: "Import & Export", href: "/import-export" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-brand-light/70 hover:text-brand-gold transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-heading font-semibold text-white mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                                <span className="text-brand-light/70 text-sm leading-relaxed">
                                    No.528, Gandhi Road,<br />
                                    Panruti, Cuddalore District,<br />
                                    Tamil Nadu – 607106, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-brand-gold shrink-0" size={18} />
                                <a href="tel:+919442333785" className="text-brand-light/70 hover:text-brand-gold transition-colors text-sm">
                                    +91 94423 33785
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-brand-gold shrink-0" size={18} />
                                <a href="mailto:7StarCashew@gmail.com" className="text-brand-light/70 hover:text-brand-gold transition-colors text-sm">
                                    7StarCashew@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Map */}
                    <div>
                        <h3 className="text-lg font-heading font-semibold text-white mb-6 relative inline-block">
                            Location
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
                        </h3>
                        <div className="rounded-lg overflow-hidden border border-brand-gold/20 h-40 bg-brand-primary/50 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.086364020973!2d79.544!3d11.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a5f000000001%3A0x0!2sPanruti!5e0!3m2!1sen!2sin!4v1614141414141!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-brand-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-light/40 text-xs">
                        © {currentYear} 7 Star Cashews. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-brand-light/40 hover:text-brand-gold text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-brand-light/40 hover:text-brand-gold text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
