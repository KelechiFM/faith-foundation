"use client";

import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

export default function Contact() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-primary text-white py-24 overflow-hidden">
                <FloatingBubbles />
                <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
                            We'd love to hear from you. Whether you have a question about our programs, volunteers, or just want to say hello.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Section className="-mt-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        {[
                            { icon: MapPin, title: "Visit Us", content: ["123 Faith Avenue", "Victoria Island, Lagos, Nigeria"] },
                            { icon: Mail, title: "Email Us", content: ["info@faithfoundation.org", "support@faithfoundation.org"] },
                            { icon: Phone, title: "Call Us", content: ["+234 800 123 4567", "+234 800 987 6543"] },
                            { icon: Clock, title: "Working Hours", content: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat - Sun: Closed"] },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="flex items-center p-6 space-x-6">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                                            {item.content.map((line, i) => (
                                                <p key={i} className="text-gray-600">{line}</p>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold mb-2 text-primary">Send a Message</h2>
                        <p className="text-gray-500 mb-8">Fill the form below and we will get back to you shortly.</p>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">First Name</label>
                                    <Input placeholder="John" className="h-12 bg-gray-50 focus:bg-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Last Name</label>
                                    <Input placeholder="Doe" className="h-12 bg-gray-50 focus:bg-white transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Email Address</label>
                                <Input type="email" placeholder="john@example.com" className="h-12 bg-gray-50 focus:bg-white transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Subject</label>
                                <Input placeholder="How can I help?" className="h-12 bg-gray-50 focus:bg-white transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Message</label>
                                <textarea
                                    className="flex min-h-[150px] w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-colors focus:bg-white"
                                    placeholder="Type your message here..."
                                />
                            </div>

                            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg font-medium shadow-lg shadow-secondary/25">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </Section>

            {/* Map Integration Placeholder */}
            <div className="h-96 w-full bg-gray-200 grayscale relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 flex-col gap-2">
                    <Globe className="w-12 h-12 opacity-50" />
                    <span className="font-medium">Map Integration</span>
                </div>
                {/* 
                   In a real app, embed Google Maps iframe here:
                   <iframe src="..." width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                 */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126841.03816487561!2d3.3105786482121633!3d6.529853900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bfb63a236!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1709848000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
