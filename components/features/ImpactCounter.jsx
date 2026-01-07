"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CounterItem = ({ end, label, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, end]);

    return (
        <div ref={ref} className="text-center p-6 bg-white rounded-2xl shadow-xl border-b-4 border-secondary transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {count.toLocaleString()}{suffix}
            </div>
            <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">{label}</p>
        </div>
    );
};

export default function ImpactCounter() {
    const stats = [
        { label: "Lives Touched", value: 5000, suffix: "+" },
        { label: "Projects Completed", value: 45, suffix: "" },
        { label: "Volunteers", value: 120, suffix: "+" },
        { label: "Communities Served", value: 12, suffix: "" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
                <CounterItem
                    key={index}
                    end={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                />
            ))}
        </div>
    );
}
