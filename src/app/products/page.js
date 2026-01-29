"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/products/ProductCard";
import ProductModal from "@/components/products/ProductModal";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="bg-gray-50">
            {/* 🟢 HERO SECTION: Standard Brand Color */}
            <div className="relative bg-brand-primary overflow-hidden pt-28 pb-16 text-center">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm border border-white/10">
                            World Class Export Quality
                        </span>

                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Premium <span className="text-brand-gold">Collection</span>
                        </h1>

                        <p className="text-brand-light/80 max-w-2xl mx-auto text-lg leading-relaxed">
                            Discover our handpicked selection of the finest cashews, dry fruits, and seeds.
                            Sourced ethically from the best farms globally.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 🟢 MAIN CONTENT AREA */}
            <Section className="-mt-8 relative z-20 pt-0" padding="none">
                <div className="container mx-auto px-4 md:px-6">

                    {/* FILTER TABS */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-white shadow-lg p-1.5 rounded-2xl border border-gray-100 flex-wrap justify-center gap-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                        ? "bg-brand-primary text-white shadow-md transform scale-105"
                                        : "bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PRODUCT GRID */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProductCard
                                        product={product}
                                        onQuickView={(p) => setSelectedProduct(p)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-xl text-gray-400 font-medium">No products found in this category.</h3>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-4 text-brand-gold font-bold hover:underline"
                            >
                                View All Products
                            </button>
                        </div>
                    )}
                </div>
            </Section>

            {/* Product Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
}
