"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const testimonials = [
    {
        id: 1,
        content: "The Faith Mmesomachukwu Kelechi Foundation gave me hope when I had none. Their scholarship program allowed me to finish my education and dream big again.",
        author: "Chidinma O.",
        role: "Beneficiary",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        content: "Partnering with this foundation has been one of the most rewarding experiences. They are truly transparent and committed to making a real difference.",
        author: "Mr. Adebayo",
        role: "Donor Partner",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        content: "Seeing the joy in the children's eyes during the outreach programs is priceless. This organization is a beacon of light in our community.",
        author: "Sarah J.",
        role: "Volunteer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&auto=format&fit=crop&q=60"
    }
];

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative max-w-4xl mx-auto px-4">
            <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 opacity-10">
                <Quote className="w-24 h-24 text-primary" />
            </div>

            <div className="relative overflow-hidden min-h-[300px] bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].author}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="text-xl md:text-2xl text-gray-700 font-medium italic mb-8 leading-relaxed">
                            "{testimonials[current].content}"
                        </p>

                        <div>
                            <h4 className="font-bold text-primary text-lg">{testimonials[current].author}</h4>
                            <p className="text-secondary text-sm font-semibold uppercase">{testimonials[current].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
                <Button variant="outline" size="icon" onClick={prev} className="rounded-full hover:bg-secondary hover:text-white hover:border-secondary transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex space-x-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${current === idx ? "bg-primary" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
                <Button variant="outline" size="icon" onClick={next} className="rounded-full hover:bg-secondary hover:text-white hover:border-secondary transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
}
