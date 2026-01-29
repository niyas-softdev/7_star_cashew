"use client";
import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import {
    User,
    Factory,
    Globe,
    Award,
    Truck,
    Handshake,
    MapPin,
    Building2,
    ShieldCheck
} from "lucide-react";

/* ---------- Reusable Components ---------- */

const PlaceholderImage = ({ icon: Icon, label }) => (
    <div className="w-full min-h-[320px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur flex flex-col items-center justify-center text-white/30">
        {Icon && <Icon size={48} className="mb-4" />}
        <span className="uppercase tracking-widest text-xs">{label}</span>
    </div>
);

const SectionHeading = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        <span className="text-brand-gold">{children}</span>
    </h2>
);

const SectionText = ({ children }) => (
    <p className="text-white/75 text-lg leading-relaxed">{children}</p>
);

/* ---------- Page ---------- */

export default function WhoWeArePage() {
    return (
        <div className="bg-[#050D09] text-white">

            {/* HERO */}
            <Section className="relative overflow-hidden bg-[#030A07]">
                {/* subtle radial glow */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-900/30 rounded-full blur-[120px]" />

                <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center">

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="uppercase tracking-[0.3em] text-brand-gold text-sm mb-4 block">
                            About Our Company
                        </span>

                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
                            Building Trust in
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-400">
                                Global Cashew Trade
                            </span>
                        </h1>

                        <div className="w-20 h-[2px] bg-brand-gold mb-8" />

                        <p className="text-white/80 text-lg leading-relaxed mb-5 max-w-xl">
                            A globally trusted export partner delivering premium raw and processed
                            cashews to international markets.
                        </p>

                        <p className="text-white/60 text-base leading-relaxed max-w-xl">
                            From ethical sourcing to large-scale exports, we combine consistency,
                            quality, and long-term partnerships.
                        </p>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10"
                    >
                        <Image
                            src="/images/about/hero.png"
                            alt="Cashew Processing"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                </div>
            </Section>


            {/* FOUNDER */}
            <Section>
                <div className="grid md:grid-cols-[380px_1fr] gap-12 items-center">

                    {/* FOUNDER IMAGE */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 
                    aspect-[3/4] md:aspect-auto md:h-[460px]">
                        <Image
                            src="/images/founder.jpeg"
                            alt="Raja MD - Founder of 7 Star Cashews"
                            fill
                            priority
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 380px"
                        />

                        {/* subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div>
                        <span className="text-brand-gold uppercase tracking-widest text-sm">
                            Founder & Visionary
                        </span>

                        <SectionHeading>Raja MD</SectionHeading>

                        <div className="flex flex-wrap gap-3 my-6">
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                                Diploma in Computer Engineering
                            </span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                                Member – TN Cashews Association
                            </span>
                        </div>

                        <SectionText className="mb-4">
                            Raja MD founded 7 Star Cashews with a clear vision to build a scalable,
                            ethical, and globally competitive cashew enterprise.
                        </SectionText>

                        <SectionText>
                            His leadership blends technical expertise with deep industry insight,
                            creating long-term partnerships across international markets.
                        </SectionText>
                    </div>

                </div>
            </Section>


            {/* JOURNEY */}
            <Section>
                <div className="text-center mb-16">
                    <SectionHeading>Our Journey</SectionHeading>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Timeline Content */}
                    <div className="space-y-10 border-l border-brand-gold/30 pl-8">
                        <div>
                            <span className="text-brand-gold text-xl font-bold">2008</span>
                            <h4 className="text-2xl font-semibold mt-2">The Beginning</h4>
                            <p className="text-white/70 mt-2 leading-relaxed">
                                7 Star Cashews was established with a strong commitment to
                                quality sourcing and ethical trade.
                            </p>
                        </div>

                        <div>
                            <span className="text-brand-gold text-xl font-bold">Today</span>
                            <h4 className="text-2xl font-semibold mt-2">Global Expansion</h4>
                            <p className="text-white/70 mt-2 leading-relaxed">
                                Expanded operations, diversified companies, and a growing
                                international footprint.
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image
                            src="/images/reach.png"   // <-- replace with your image path
                            alt="7 Star Cashews Factory & Growth"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Overlay Label */}
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
                            <Factory size={18} className="text-brand-gold" />
                            <span className="text-sm font-semibold text-white">
                                Factory & Growth
                            </span>
                        </div>
                    </div>

                </div>
            </Section>

            {/* COMPANIES */}
            <Section className="bg-[#07140E]">
                <div className="text-center mb-14">
                    <SectionHeading>Expanded Companies</SectionHeading>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            name: "Kerala Woodland",
                            tag: "Import & Export",
                            icon: Truck,
                            desc: "Strong logistics-backed international sourcing & exports."
                        },
                        {
                            name: "Aban Impex",
                            tag: "Export House",
                            icon: Building2,
                            desc: "Quality-focused export house serving global markets."
                        }
                    ].map((c, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
                        >
                            <c.icon size={40} className="mx-auto text-brand-gold mb-4" />
                            <h3 className="text-2xl font-bold">{c.name}</h3>
                            <span className="text-brand-gold uppercase text-sm tracking-wider">
                                {c.tag}
                            </span>
                            <p className="text-white/70 mt-4">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* GLOBAL PRESENCE */}
            <Section className="relative bg-[#020806]">
                <div className="absolute inset-0 opacity-10 flex justify-center items-center">
                    <Globe size={500} />
                </div>

                <div className="relative z-10 text-center">
                    <SectionHeading>Global Presence</SectionHeading>
                    <p className="text-white/70 max-w-2xl mx-auto mt-6 mb-14">
                        Operating across strategic global markets with trusted trade
                        networks.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {["Dubai", "Maldives", "Singapore", "Malaysia", "Saudi Arabia"].map(
                            (c, i) => (
                                <div
                                    key={i}
                                    className="px-6 py-5 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center gap-2"
                                >
                                    <MapPin className="text-brand-gold" />
                                    <span className="font-semibold">{c}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </Section>

            {/* TRUST */}
           <Section className="bg-black">
    <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <Image
                src="/images/trust.png"   // <-- replace with your image path
                alt="Trust & Quality Assurance"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay Label */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
                <ShieldCheck size={18} className="text-brand-gold" />
                <span className="text-sm font-semibold text-white">
                    Trust & Quality
                </span>
            </div>
        </div>

        {/* Content */}
        <div>
            <SectionHeading>Why Partners Trust Us</SectionHeading>

            <p className="text-white/80 text-lg mt-6 mb-8 leading-relaxed">
                Transparent sourcing, strict quality assurance, and long-term
                relationship focus define our reputation.
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 italic text-xl text-white/90 leading-relaxed">
                “Our reputation is built on consistency, trust, and global
                standards.”
            </blockquote>
        </div>

    </div>
</Section>
        </div>
    );
}
