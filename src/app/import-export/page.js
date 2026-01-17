"use client";
import React from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Package, Truck, FileCheck, Anchor, Globe } from "lucide-react";

export default function ImportExportPage() {
    return (
        <div>
            <div className="bg-brand-primary pb-12 pt-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                    Import & Export Services
                </h1>
                <p className="text-brand-light/70 max-w-2xl mx-auto">
                    Delivering excellence across borders. We specialize in bulk export of premium cashews and dry fruits with top-tier logistics and compliance.
                </p>
            </div>

            <Section dark>
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Feature 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-2xl border border-brand-gold/10">
                        <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
                            <Package className="text-brand-primary" size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-bold text-white mb-2">Premium Packaging</h3>
                            <p className="text-brand-light/70">
                                We use high-grade, food-safe packaging materials including vacuum packs, tins, and cartons to ensure freshness and prevent damage during transit. Custom packaging options available for bulk buyers.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-2xl border border-brand-gold/10">
                        <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shrink-0 md:order-2">
                            <FileCheck className="text-brand-primary" size={32} />
                        </div>
                        <div className="md:order-1 text-right">
                            <h3 className="text-xl font-heading font-bold text-white mb-2">Quality & Compliance</h3>
                            <p className="text-brand-light/70">
                                All our exports meet international food safety standards. We provide necessary certifications (FSSAI, Phytosanitary, Origin, etc.) to ensure smooth customs clearance.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-2xl border border-brand-gold/10">
                        <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
                            <Anchor className="text-brand-primary" size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-bold text-white mb-2">Worldwide Shipping</h3>
                            <p className="text-brand-light/70">
                                With a strong logistics network, we ship via sea and air cargo to major ports worldwide. We ensure timely delivery and real-time tracking for all consignments.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-white mb-6">Ready to Import our Products?</h3>
                    <Button href="/contact" variant="primary" className="px-8 py-4 text-lg">
                        Request an Export Quote
                    </Button>
                </div>
            </Section>
        </div>
    );
}
