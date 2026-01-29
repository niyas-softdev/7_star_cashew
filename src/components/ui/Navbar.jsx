"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Who We Are", href: "/who-we-are" },
        { name: "Industry Events", href: "/industry-events" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-brand-primary/95 backdrop-blur-md border-b border-brand-gold/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex flex-col">
                            <span className="text-2xl md:text-3xl font-heading font-bold text-white tracking-wider">
                                7 STAR <span className="text-brand-gold">CASHEWS</span>
                            </span>
                            <span className="text-[10px] md:text-xs text-brand-light/80 tracking-[0.2em] font-medium uppercase">
                                Import & Export
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-300 hover:text-brand-gold uppercase tracking-wider ${pathname === link.href ? "text-brand-gold" : "text-brand-light"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919442333785"
                            className="flex items-center gap-2 bg-brand-gold/10 px-4 py-2 rounded-full border border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-primary transition-all duration-300"
                        >
                            <Phone size={16} />
                            <span className="text-sm font-semibold">+91 94423 33785</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-light hover:text-brand-gold transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-primary border-t border-brand-gold/10 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-medium transition-colors duration-300 hover:text-brand-gold uppercase tracking-wider block py-2 ${pathname === link.href ? "text-brand-gold" : "text-brand-light"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+919442333785"
                                className="mt-4 flex items-center gap-2 bg-brand-gold text-brand-primary px-6 py-3 rounded-full font-semibold hover:bg-white transition-all w-full justify-center"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
