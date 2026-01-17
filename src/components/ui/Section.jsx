"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Section({
    children,
    className = "",
    id = "",
    dark = false
}) {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 relative overflow-hidden ${dark ? "bg-brand-primary" : "bg-brand-primary/95"
                } ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
