"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, Truck, Package, Thermometer } from "lucide-react";
import Button from "@/components/ui/Button";

// Reusable Section Header inside Modal
const ModalHeading = ({ children, icon: Icon }) => (
    <h4 className="text-brand-primary font-bold text-lg mb-4 flex items-center gap-2 border-b border-brand-gold/30 pb-2">
        {Icon && <Icon size={20} className="text-brand-gold" />}
        {children}
    </h4>
);

export default function ProductModal({ product, isOpen, onClose }) {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
                    >
                        {/* Modal Content - Scrollable container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] overflow-hidden w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-black/20 text-white backdrop-blur-md rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* LEFT COLUMN: HERO IMAGE & KEY STATS */}
                            <div className="w-full md:w-2/5 bg-brand-primary relative flex flex-col">
                                <div className="relative h-64 md:h-1/2 w-full">
                                    {product.image ? (
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white/20">No Image</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent" />

                                    {/* Floating Title on Mobile/Tablet over image */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <span className="bg-brand-gold text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                                            {product.category}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">
                                            {product.name}
                                        </h2>
                                        <p className="text-brand-light/70 text-sm md:text-base">
                                            {product.shortDesc || "Premium Export Quality"}
                                        </p>
                                    </div>
                                </div>

                                {/* Dark Stats Section */}
                                <div className="p-8 hidden md:flex flex-col gap-6 text-white/80">
                                    <div className="flex items-start gap-4">
                                        <ShieldCheck className="text-brand-gold shrink-0" size={24} />
                                        <div>
                                            <h5 className="text-white font-bold text-sm">Quality Assured</h5>
                                            <p className="text-xs mt-1 text-white/50">Rigorous quality checks at every stage.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Truck className="text-brand-gold shrink-0" size={24} />
                                        <div>
                                            <h5 className="text-white font-bold text-sm">Global Shipping</h5>
                                            <p className="text-xs mt-1 text-white/50">Efficient logistics network worldwide.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: DETAILED INFO */}
                            <div className="w-full md:w-3/5 overflow-y-auto bg-white p-6 md:p-10 relative">

                                {/* Close button for dark bg (mobile handled above) */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 z-20 p-2 text-gray-400 hover:text-gray-800 hidden md:block"
                                >
                                    <X size={24} />
                                </button>

                                <div className="space-y-8">

                                    {/* Description */}
                                    <div>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Nutrition & Specs Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Nutrition */}
                                        {product.nutritionalInfo && (
                                            <section>
                                                <ModalHeading>Nutrition Overview</ModalHeading>
                                                <ul className="space-y-3">
                                                    {Object.entries(product.nutritionalInfo).map(([key, val]) => (
                                                        <li key={key} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                                                            <span className="text-gray-500 capitalize">{key}</span>
                                                            <span className="text-brand-primary font-bold">{val}</span>
                                                        </li>
                                                    ))}
                                                    <li className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                                                        <span className="text-gray-500 capitalize">Calories</span>
                                                        <span className="text-brand-primary font-bold">350 kcal</span>
                                                    </li>
                                                </ul>
                                            </section>
                                        )}

                                        {/* Specs */}
                                        {product.specs && (
                                            <section>
                                                <ModalHeading icon={Package}>Specifications</ModalHeading>
                                                <ul className="space-y-3">
                                                    <li className="flex justify-between text-sm"> <span className="text-gray-500">Grade:</span> <span className="font-medium">{product.specs.grade}</span> </li>
                                                    <li className="flex justify-between text-sm"> <span className="text-gray-500">Origin:</span> <span className="font-medium">{product.specs.origin}</span> </li>
                                                    <li className="flex justify-between text-sm"> <span className="text-gray-500">Shelf Life:</span> <span className="font-medium">{product.specs.shelfLife}</span> </li>
                                                </ul>
                                            </section>
                                        )}
                                    </div>

                                    {/* Health Benefits */}
                                    {product.healthBenefits && (
                                        <section className="bg-brand-green/5 p-6 rounded-2xl border border-brand-green/10">
                                            <h4 className="text-brand-green font-bold text-lg mb-4">Health Benefits</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {product.healthBenefits.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <CheckCircle2 size={16} className="text-brand-green shrink-0" />
                                                        <span className="text-brand-primary text-sm font-medium">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* Footer Info: Storage & Packaging */}
                                    {product.specs && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-500 bg-gray-50 p-6 rounded-xl">
                                            <div className="flex gap-3">
                                                <Package className="text-brand-gold shrink-0" size={20} />
                                                <div>
                                                    <span className="font-bold text-gray-800 block mb-1">Packaging</span>
                                                    {product.specs.packaging}
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <Thermometer className="text-brand-gold shrink-0" size={20} />
                                                <div>
                                                    <span className="font-bold text-gray-800 block mb-1">Storage</span>
                                                    {product.specs.storage}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* CTA Action */}
                                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                                        <Button
                                            href={`/contact?enquire=${encodeURIComponent(product.name)}`}
                                            className="flex-1 justify-center py-4 text-lg shadow-lg shadow-brand-gold/20"
                                        >
                                            Request Bulk Quote
                                        </Button>
                                        <Button
                                            variant="outline"
                                            href="/contact"
                                            className="flex-1 justify-center py-4 text-brand-primary border-gray-300 hover:border-brand-gold hover:text-brand-gold"
                                        >
                                            Contact Support
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
