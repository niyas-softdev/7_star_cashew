"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, Truck, Award, Star } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/products/ProductCard";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Premium Cashew W180",
      category: "Cashew Nuts",
      image: null, // Placeholder will apply
    },
    {
      id: 2,
      name: "Salted Pistachios",
      category: "Cashew & Nuts",
      image: null,
    },
    {
      id: 3,
      name: "California Almonds",
      category: "Cashew & Nuts",
      image: null,
    },
    {
      id: 4,
      name: "Dried Figs (Anjeer)",
      category: "Dry Fruits",
      image: null,
    },
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      description: "Hand-picked, graded, and processed to meet international export standards.",
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Trusted supplier delivering to B2B clients and wholesalers worldwide.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Efficient logistics network ensuring fresh products reach you on time.",
    },
    {
      icon: Award,
      title: "Certified Hygiene",
      description: "Processed in state-of-the-art facilities maintaining highest hygiene levels.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Premium Cashew Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Star className="text-brand-gold fill-brand-gold" size={20} />
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">
                Export Quality Guarantee
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Premium Quality <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
                Cashews & Dry Fruits
              </span>
            </h1>

            <p className="text-lg md:text-xl text-brand-light/90 mb-8 leading-relaxed font-light">
              Your trusted global partner for high-grade cashews, dry fruits, and seeds.
              Sourced from the finest farms in Tamil Nadu and exported worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/products" variant="primary">
                View Products
              </Button>
              <Button href="/contact" variant="outline">
                Contact for Bulk Orders
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <Section className="bg-brand-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 p-8 rounded-2xl border border-brand-gold/10 hover:border-brand-gold/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-brand-gold" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-brand-light/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section dark>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Featured Products
            </h2>
            <div className="h-1 w-20 bg-brand-gold rounded-full" />
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-brand-gold hover:text-white transition-colors"
          >
            View All Products <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </div>
      </Section>

      {/* Why Choose Us / Presence */}
      <Section className="bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Why 7 Star Cashews?
            </h2>
            <p className="text-brand-light/80 mb-8 leading-relaxed text-lg">
              We take pride in our heritage of delivering the finest quality cashews and dry fruits.
              Our commitment to excellence ensures that every shipment meets the rigorous standards required for international trade.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Direct sourcing from farmers",
                "Advanced processing technology",
                "Strict quality control checks",
                "Flexible bulk packaging options",
                "Competitive export pricing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-light/90">
                  <span className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center text-brand-primary text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Button href="/about">Learn More About Us</Button>
          </div>

          <div className="relative">
            <div className="bg-white/5 rounded-2xl p-8 border border-brand-gold/20 aspect-video flex items-center justify-center relative overflow-hidden group">
              {/* World Map Placeholder Effect */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center" />
              <div className="relative z-10 text-center">
                <Globe className="text-brand-gold w-24 h-24 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-white">Global Presence</h3>
                <p className="text-brand-light/70">Exporting to 20+ Countries</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
