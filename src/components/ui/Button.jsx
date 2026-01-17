"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Button = ({ 
  children, 
  variant = "primary", 
  href, 
  className = "", 
  onClick, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base tracking-wide uppercase";
  
  const variants = {
    primary: "bg-brand-gold text-brand-primary hover:bg-white hover:text-brand-primary hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] border border-brand-gold",
    outline: "bg-transparent text-brand-gold border border-brand-gold hover:bg-brand-gold hover:text-brand-primary",
    text: "bg-transparent text-brand-gold hover:text-white padding-0"
  };

  const Component = href ? Link : motion.button;
  const content = children;

  if (href) {
    return (
      <Link 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
