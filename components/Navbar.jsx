"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";


const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className=" text-white p-2 rounded-lg">
                            <Image src="/logo.png" alt="Logo" width={72} height={72} className="" />
                        </div>
                        <span
                            className={cn(
                                "font-bold text-xl tracking-tight transition-colors",
                                scrolled ? "text-primary" : "text-white"
                            )}
                        >
                            FMK Foundation
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-secondary cursor-pointer",
                                    scrolled ? "text-gray-700" : "text-white/90"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/donate">
                            <Button
                                className={cn(
                                    "bg-secondary hover:bg-secondary/90 text-white font-semibold transition-transform hover:scale-105 cursor-pointer",
                                    !scrolled && "shadow-lg"
                                )}
                            >
                                Donate Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-md transition-colors",
                                scrolled ? "text-gray-900" : "text-white"
                            )}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link href="/donate" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white cursor-pointer">
                                        Donate Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}