"use client";
import React from "react";
import Image from "next/image";

export default function ProductCard({ product, onQuickView }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative min-h-[420px]">

            {/* Image Area */}
            <div className="relative h-[260px] bg-gray-50 overflow-hidden">
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <button
                        onClick={() => onQuickView(product)}
                        className="bg-white text-brand-primary font-bold px-5 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-gold"
                    >
                        Quick View
                    </button>
                </div>

                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-brand-light/20 font-heading text-xl uppercase tracking-widest bg-gradient-to-br from-gray-100 to-gray-200">
                        {product.name}
                    </div>
                )}

                {/* Badge */}
                {product.tags && product.tags[0] && (
                    <span className="absolute top-3 left-3 bg-brand-gold/90 backdrop-blur text-brand-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                        {product.tags[0]}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Category */}
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">
                    {product.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-brand-primary mb-2 group-hover:text-brand-green transition-colors">
                    {product.name}
                </h3>

                {/* Nutrition Preview */}
                <div className="flex gap-2 mb-3 text-[11px] text-gray-500 flex-wrap">
                    {product.nutritionalInfo?.protein && (
                        <span className="bg-gray-100 px-2 py-0.5 rounded-md">
                            Protein: {product.nutritionalInfo.protein}
                        </span>
                    )}
                    {product.nutritionalInfo?.fiber && (
                        <span className="bg-gray-100 px-2 py-0.5 rounded-md">
                            Fiber: {product.nutritionalInfo.fiber}
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">
                        Bulk Orders Available
                    </span>
                    <button
                        onClick={() => onQuickView(product)}
                        className="text-brand-gold font-bold text-xs uppercase tracking-wide hover:underline"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
