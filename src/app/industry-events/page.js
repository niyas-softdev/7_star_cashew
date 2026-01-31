"use client";
import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { Truck, CheckCircle, Globe, Users, Calendar, MapPin, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";



const EVENTS = [
    {
        id: "mewa-2025",
        title: "MEWA 2025 – Mumbai",
        type: "exhibition",
        date: "2025",
        location: "Mumbai, India",
        description: "MEWA 2025 marked a major milestone in our journey. Participating in one of India’s most influential trade exhibitions helped us strengthen relationships with suppliers, traders, and industry leaders.",
        highlights: [
            "Showcased product vision",
            "Market trend analysis",
            "Positioned as a growing player"
        ],
        image: "/images/events/mewa_2025.png"
    },
    {
        id: "dubai-meeting",
        title: "Strategic Discussion – Dubai",
        type: "meeting",
        date: "2025",
        location: "Dubai, UAE",
        description: "A key discussion took place in Dubai regarding the launch and expansion of our new company operations, focusing on compliance, international trade opportunities, and scalability in the Middle East.",
        image: "/images/events/dubai_discussion1.png"
    },
    {
        id: "bola-rahul",
        title: "Meeting with Bola Rahul Kamath",
        subtitle: "All India Cashew Association",
        type: "profile",
        date: "2025",
        description: "We had the opportunity to meet Mr. Bola Rahul Kamath. The discussion revolved around cashew sourcing, quality standards, industry challenges, and future collaboration opportunities.",
        image: "/images/events/bola_kamath1.png"
    },
    {
        id: "mewa-2026",
        title: "MEWA 2026 – Delhi (Berry Suppliers Meet)",
        type: "grid",
        date: "2026",
        location: "Delhi, India",
        description: "At MEWA 2026, our focus expanded toward berry suppliers and premium sourcing networks, enabling direct interaction with trusted suppliers to strengthen procurement strategies.",
        image: "/images/events/mewa_20261.png"
    },
    {
        id: "chair-meet",
        title: "Meeting with Chairman",
        subtitle: "Dry Fruits Association of India",
        type: "authority",
        date: "2026",
        description: "A significant meeting reinforcing our commitment to ethical sourcing, quality assurance, and aligning our business practices with national industry standards.",
        image: "/images/events/chairman_meeting2.png"
    }
];

const JOURNEY_Milestones = [
    { year: "Inception", title: "Vision & Foundation", desc: "Started with a vision to bring premium Panruti cashews to the world." },
    { year: "Growth", title: "Establishing Standards", desc: "Invested in processing technology to ensure consistent export quality." },
    { year: "Expansion", title: "Global Reach", desc: "Expanded operations to export to key international markets." },
    { year: "Future", title: "Industry Leadership", desc: "Participating in global trade events and setting new benchmarks." }
];

export default function IndustryEventsPage() {
    return (
        <div>



            {/* Industry Events & Trade Meets Section */}
            <Section dark className="pb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Industry Events & Trade Meets</h2>
                    <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full mb-6" />
                    <p className="text-brand-light/70 max-w-2xl mx-auto">
                        Building connections and showcasing our vision on the global stage.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Event 1: MEWA 2025 - Mumbai */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={EVENTS[0].image}
                                alt={EVENTS[0].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="relative z-20 p-8 md:p-16 text-center md:text-left h-full flex flex-col justify-end min-h-[500px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-4 py-1 rounded-full font-bold text-xs mb-4">
                                    <MapPin size={14} /> {EVENTS[0].location}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                                    {EVENTS[0].title}
                                </h3>
                                <p className="text-white/90 text-lg max-w-3xl mb-8 leading-relaxed">
                                    {EVENTS[0].description}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {EVENTS[0].highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors">
                                            <CheckCircle size={16} className="text-brand-gold" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Event 2: Strategic Discussion - Dubai */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 md:order-1"
                        >
                            <div className="flex items-center gap-2 text-brand-gold font-bold text-sm mb-2">
                                <Briefcase size={16} /> STRATEGY & GROWTH
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-white mb-6">
                                {EVENTS[1].title}
                            </h3>
                            <p className="text-brand-light/80 leading-relaxed mb-6">
                                {EVENTS[1].description}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                                    <Globe className="text-brand-gold mx-auto mb-2" size={24} />
                                    <span className="text-white text-sm font-bold">Global Expansion</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                                    <TrendingUp className="text-brand-gold mx-auto mb-2" size={24} />
                                    <span className="text-white text-sm font-bold">Market Scalability</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-brand-gold/20"
                        >
                            <Image
                                src={EVENTS[1].image}
                                alt={EVENTS[1].title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* Event 3: Bola Rahul Kamath */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-1">
                                <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-brand-gold/20 shadow-2xl">
                                    <Image
                                        src={EVENTS[2].image}
                                        alt={EVENTS[2].title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <h4 className="text-brand-gold font-bold tracking-wider text-sm mb-2 uppercase">Industry Connections</h4>
                                <h3 className="text-3xl font-heading font-bold text-white mb-2">{EVENTS[2].title}</h3>
                                <p className="text-white/60 mb-6 italic">{EVENTS[2].subtitle}</p>
                                <p className="text-brand-light/80 leading-relaxed text-lg mb-8">
                                    "{EVENTS[2].description}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-px bg-white/10 flex-grow" />
                                    <span className="text-brand-light/40 text-sm">Key Meeting 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event 4: MEWA 2026 - Delhi */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-white">{EVENTS[3].title}</h3>
                                <p className="text-brand-light/60">Exploring new horizons in berry sourcing</p>
                            </div>
                            <span className="hidden md:inline-block px-4 py-1 border border-brand-gold/30 text-brand-gold rounded-full text-sm">
                                {EVENTS[3].date}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* IMAGE CARD */}
                            <div className="relative rounded-xl overflow-hidden border border-white/10 group 
                  aspect-[4/3] md:aspect-auto md:h-[400px]">
                                <Image
                                    src={EVENTS[3].image}
                                    alt={EVENTS[3].title}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                                {/* Caption */}
                                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                                    <p className="text-white text-base md:text-lg font-medium drop-shadow-lg">
                                        Strengthening procurement strategies with trusted berry suppliers.
                                    </p>
                                </div>
                            </div>

                            {/* CONTENT CARD */}
                            <div className="bg-brand-primary rounded-xl p-6 md:p-8 flex flex-col justify-center border border-white/5">
                                <div className="mb-auto">
                                    <Calendar className="text-brand-gold mb-4" size={32} />
                                    <h4 className="text-white font-bold text-xl mb-2">Future Ready</h4>
                                    <p className="text-brand-light/70 text-sm leading-relaxed">
                                        Ensuring consistent quality across our expanding product range through
                                        direct supplier interaction.
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-sm text-brand-light/50">
                                    <span>New Delhi</span>
                                    <span>Feb 2026</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Event 5: Chairman Meeting */}
                    <div className="relative rounded-3xl bg-[#0f2138] border border-white/10 p-6 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 items-center">

                            {/* LEFT – CONTENT */}
                            <div className="flex flex-col justify-center text-left">

                                <span className="text-brand-gold uppercase tracking-widest text-sm mb-3">
                                    Industry Connections
                                </span>

                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                                    {EVENTS[4].title}
                                </h3>

                                <h4 className="text-brand-light/70 text-lg italic mb-6">
                                    {EVENTS[4].subtitle}
                                </h4>

                                <p className="text-brand-light/80 text-lg leading-relaxed max-w-3xl mb-10">
                                    “{EVENTS[4].description}”
                                </p>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/10 mb-6" />

                                {/* Footer */}
                                <div className="text-right text-brand-light/50 text-sm">
                                    Key Meeting 2025
                                </div>
                            </div>

                            {/* RIGHT – VERTICAL IMAGE */}
                            <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-brand-gold/30">
                                <Image
                                    src={EVENTS[4].image}
                                    alt={EVENTS[4].title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </div>


                </div>
            </Section>
            {/* Pan India Logistics Partner */}
            <Section dark>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[380px] md:h-[460px] rounded-2xl overflow-hidden border border-brand-gold/20"
                    >
                        <Image
                            src="/images/events/pan_india_partner.jpg"
                            alt="Pan India Logistics Partner Meeting"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>

                    {/* CONTENT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-gold uppercase tracking-widest text-sm">
                            Logistics Network
                        </span>

                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-6">
                            Pan India Logistics Partner
                        </h3>

                        <p className="text-brand-light/80 text-lg leading-relaxed mb-8">
                            We work closely with trusted Pan-India logistics partners to ensure
                            safe, fast, and reliable movement of goods across all major cities
                            and trade hubs. Our distribution strength supports bulk supply,
                            export handling, and time-bound delivery commitments.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <Globe className="text-brand-gold mb-2" size={22} />
                                <p className="text-white font-semibold text-sm">
                                    Nationwide Coverage
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <Truck className="text-brand-gold mb-2" size={22} />
                                <p className="text-white font-semibold text-sm">
                                    Bulk Transport Support
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Section>


            {/* Mission & Vision - Moved to end */}
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

