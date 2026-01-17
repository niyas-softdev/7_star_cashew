"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ProductCard({ product }) {
    return (
        <motion.div
            className="group relative bg-brand-primary border border-brand-gold/20 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col h-full"
            whileHover={{ y: -5 }}
        >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-white/5">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-brand-light/20 font-heading text-2xl uppercase tracking-widest bg-gradient-to-br from-brand-primary to-black">
                        {product.name}
                    </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-primary to-transparent opacity-80" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-brand-gold text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {product.name}
                </h3>
                <p className="text-brand-light/70 text-sm mb-6 flex-grow line-clamp-2">
                    Premium export quality {product.name.toLowerCase()}, processed with care to ensure freshness and taste.
                </p>
                <Button
                    variant="outline"
                    href={`/products?enquire=${encodeURIComponent(product.name)}`}
                    className="w-full"
                >
                    Enquire Now
                </Button>
            </div>
        </motion.div>
    );
}
