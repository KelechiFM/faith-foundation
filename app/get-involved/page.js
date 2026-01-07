"use client";

import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { HandHeart, Users, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import FloatingBubbles from "@/components/ui/FloatingBubbles";
import { motion } from "framer-motion";

export default function GetInvolved() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-primary text-white py-24 overflow-hidden">
                <FloatingBubbles />
                <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
                        <p className="text-blue-100 text-lg md:text-xl leading-relaxed font-medium">
                            You don't have to be a billionaire to make a difference. Your time, voice, and support matter more than you know.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Volunteer */}
                    <Link href="/get-involved/volunteer" className="cursor-pointer h-full block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="h-full"
                        >
                            <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none shadow-md group cursor-pointer">
                                <CardHeader>
                                    <div className="w-20 h-20 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-full flex items-center justify-center mx-auto mb-4">
                                        <HandHeart className="w-10 h-10 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl text-primary group-hover:text-secondary transition-colors">Volunteer</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        Join our team of dedicated volunteers in the field. From teaching kids to helping with medical outreach programs.
                                    </p>
                                    <Button className="w-full bg-primary hover:bg-primary/90 cursor-pointer pointer-events-none">
                                        Join Force <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Link>

                    {/* Partner */}
                    <Link href="/get-involved/partner" className="cursor-pointer h-full block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="h-full"
                        >
                            <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none shadow-md group cursor-pointer">
                                <CardHeader>
                                    <div className="w-20 h-20 bg-secondary/10 group-hover:bg-secondary/20 transition-colors rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-10 h-10 text-secondary" />
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900 group-hover:text-secondary transition-colors">Partner With Us</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        Corporate bodies and NGO's can partner with us to scale impact and reach more communities.
                                    </p>
                                    <Button variant="outline" className="w-full border-secondary text-secondary group-hover:bg-secondary group-hover:text-white transition-colors cursor-pointer pointer-events-none">
                                        Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Link>

                    {/* Advocate */}
                    <Link href="/get-involved/advocate" className="cursor-pointer h-full block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-full"
                        >
                            <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none shadow-md group cursor-pointer">
                                <CardHeader>
                                    <div className="w-20 h-20 bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Share2 className="w-10 h-10 text-accent" />
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900 group-hover:text-accent transition-colors">Spread the Word</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        Become a social media ambassador. Share our stories and help us amplify our message of hope.
                                    </p>
                                    <Button variant="secondary" className="w-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors cursor-pointer pointer-events-none">
                                        Start Sharing <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Link>
                </div>
            </Section>

            {/* Call to Action */}
            <Section className="bg-white text-center border-t border-gray-100">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Ready to take the next step?</h2>
                    <p className="text-gray-600 mb-8">
                        Whether you want to volunteer your time, partner with us, or just verify our work, we are open and transparent.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="px-8 h-12 text-lg bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 cursor-pointer">
                            Contact Us Today
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
