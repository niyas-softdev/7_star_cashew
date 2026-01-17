"use client";
import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { Award, CheckCircle, Globe, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div>
            {/* Header */}
            <div className="bg-brand-primary pb-12 pt-20 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-50" />
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 relative z-10">
                    About Us
                </h1>
                <p className="text-brand-light/70 max-w-2xl mx-auto relative z-10">
                    We are 7 Star Cashews - A name synonymous with purity, quality, and trust in the global cashew and dry fruits market.
                </p>
            </div>

            {/* Main Content */}
            <Section dark>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold text-white">
                            Bringing the Finest Naturals to the World
                        </h2>
                        <div className="h-1 w-20 bg-brand-gold rounded-full" />

                        <p className="text-brand-light/80 leading-relaxed">
                            Based in Panruti, the cashew capital of Tamil Nadu, 7 Star Cashews has grown from a local processor to a global exporter.
                            Our journey is defined by an unyielding commitment to quality. We source raw cashew nuts from the best plantations and process them
                            using advanced technology to retain their natural taste and nutritional value.
                        </p>
                        <p className="text-brand-light/80 leading-relaxed">
                            Today, we are proud to supply strictly graded, export-quality cashews, almonds, pistachios, and dry fruits to wholesalers,
                            retailers, and food industries across the globe.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {[
                                { icon: Award, title: "Premium Quality", desc: "100% Graded & Sorted" },
                                { icon: Globe, title: "Global Reach", desc: "Exporting Worldwide" },
                                { icon: CheckCircle, title: "Hygienic Process", desc: "Food Safety Standards" },
                                { icon: Users, title: "Customer Focus", desc: "Trusted by 100+ Clients" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-white text-sm">{item.title}</h4>
                                        <p className="text-xs text-brand-light/60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative h-[500px] bg-white/5 rounded-2xl overflow-hidden border border-brand-gold/20 flex items-center justify-center">
                        {/* Using a gradient placeholder instead of image for now to avoid broken link if generic image fails */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-black to-brand-primary" />
                        <div className="relative z-10 text-center p-8">
                            <h3 className="text-2xl font-heading text-brand-gold mb-2">Purity in Every Pack</h3>
                            <p className="text-brand-light/60">State-of-the-art Processing Facility</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section className="bg-brand-primary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 rounded-2xl border border-brand-gold/10 hover:border-brand-gold/30 transition-all">
                        <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-brand-light/80 leading-relaxed">
                            To provide the healthiest and tastiest nuts and dry fruits to consumers worldwide, maintaining ethical sourcing,
                            hygiene, and customer satisfaction at every step.
                        </p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-brand-gold/10 hover:border-brand-gold/30 transition-all">
                        <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-brand-light/80 leading-relaxed">
                            To be the most trusted global brand for premium cashews and dry fruits, recognized for quality, innovation, and sustainability.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
