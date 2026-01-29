"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import Section from "./ui/Section";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        location: "Mumbai, India",
        review: "The quality of W180 cashews is exceptional. We've been sourcing for our premium sweet shop for 6 months now, and the consistency is unmatched.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        location: "London, UK",
        review: "Imported their organic spices and dry fruits. The packaging was international standard, and the shipment arrived right on schedule. Highly recommended for B2B.",
        rating: 5,
    },
    {
        id: 3,
        name: "Ahmed Al-Fayed",
        location: "Dubai, UAE",
        review: "Best supplier for bulk almonds and pistachios. The grading is very accurate, and customer support is always responsive.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <Section className="bg-brand-primary relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                    Trusted by Clients Worldwide
                </h2>
                <div className="h-1 w-20 bg-brand-gold rounded-full mx-auto mb-6" />
                <p className="text-brand-light/80 text-lg">
                    Don't just take our word for it. Here is what our partners and bulk buyers have to say about our quality and service.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm border border-brand-gold/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors duration-300"
                    >
                        <Quote className="absolute top-6 right-6 text-brand-gold/20 w-10 h-10" />

                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className={`${i < item.rating ? "text-brand-gold fill-brand-gold" : "text-gray-600"
                                        }`}
                                />
                            ))}
                        </div>

                        <p className="text-brand-light/90 italic mb-6 leading-relaxed">
                            "{item.review}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 flex items-center justify-center text-brand-gold font-bold text-lg">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-heading">{item.name}</h4>
                                <div className="flex items-center gap-1 text-xs text-brand-light/60">
                                    <MapPin size={12} />
                                    {item.location}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
