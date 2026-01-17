"use client";
import React from "react";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function GalleryPage() {
    return (
        <div>
            <div className="bg-brand-primary pb-12 pt-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                    Gallery & Certifications
                </h1>
                <p className="text-brand-light/70 max-w-2xl mx-auto">
                    A glimpse into our processing facility, products, and quality certifications.
                </p>
            </div>

            <Section dark>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-square bg-white/5 rounded-2xl overflow-hidden border border-brand-gold/10 hover:border-brand-gold/30 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <div>
                                    <h4 className="text-white font-bold">Facility View {item}</h4>
                                    <p className="text-brand-gold text-sm">Processing Unit</p>
                                </div>
                            </div>
                            <div className="w-full h-full bg-brand-primary/50 flex items-center justify-center text-brand-light/20">
                                <span className="uppercase tracking-widest">Image {item}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
