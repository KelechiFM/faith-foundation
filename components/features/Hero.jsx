"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
        title: "Restoring Hope,",
        highlight: "Transforming Lives.",
        description: "Faith Mmesomachukwu Kelechi Foundation is dedicated to empowering communities through faith-based initiatives, educational support, and compassionate outreach."
    },
    {
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2670&auto=format&fit=crop",
        title: "Education for",
        highlight: "Every Child.",
        description: "We believe that education is the key to unlocking potential. Our scholarship programs ensure that no child is left behind due to financial constraints."
    },
    {
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop",
        title: "Compassion in",
        highlight: "Action.",
        description: "Our medical missions and community outreach programs bring healing and sustenance to the most vulnerable members of society."
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image Carousel */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[5000ms] ease-in-out transform scale-105"
                        style={{
                            backgroundImage: `url('${slides[currentSlide].image}')`,
                        }}
                    />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Floating Bubbles Overlay */}
            <FloatingBubbles />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                            {slides[currentSlide].title}<br />
                            <span className="text-secondary">{slides[currentSlide].highlight}</span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
                            {slides[currentSlide].description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link href="/donate">
                                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white min-w-[160px] text-lg">
                                    Donate Now
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary min-w-[160px] text-lg bg-transparent">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-secondary w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
