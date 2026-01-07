"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingBubbles() {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        // Generate random bubbles
        const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 60 + 20,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 10,
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/5"
                    style={{
                        left: `${bubble.x}%`,
                        width: bubble.size,
                        height: bubble.size,
                    }}
                    initial={{ top: "110%" }}
                    animate={{ top: "-10%" }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: bubble.delay,
                    }}
                />
            ))}
        </div>
    );
}
