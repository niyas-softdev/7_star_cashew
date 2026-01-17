"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="pt-8">
            {/* Header */}
            <div className="bg-brand-primary pb-12 pt-12 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                    Our Premium Products
                </h1>
                <p className="text-brand-light/70 max-w-2xl mx-auto">
                    Explore our wide range of premium cashews, dry fruits, and seeds.
                    Sourced globally for the best quality.
                </p>
            </div>

            <Section dark className="pt-0">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-brand-gold text-brand-primary border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                    : "bg-transparent text-brand-light border-brand-gold/30 hover:border-brand-gold hover:text-brand-gold"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-brand-light/50">
                        No products found in this category.
                    </div>
                )}
            </Section>
        </div>
    );
}
