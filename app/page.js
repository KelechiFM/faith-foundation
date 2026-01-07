import Hero from "@/components/features/Hero";
import ImpactCounter from "@/components/features/ImpactCounter";
import TestimonialCarousel from "@/components/features/TestimonialCarousel";
import ProgramCard from "@/components/features/ProgramCard";
import DonationCampaigns from "@/components/features/DonationCampaigns";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function Home() {
    const featuredPrograms = [
        {
            title: "Education for All",
            description: "Providing scholarships, school supplies, and digital literacy training to underprivileged children in rural communities.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
            link: "/programs/education"
        },
        {
            title: "Healthcare Outreach",
            description: "Organizing free medical camps, distributing essential medicines, and conducting health awareness workshops.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
            link: "/programs/healthcare"
        },
        {
            title: "Community Development",
            description: "Empowering women and youth through vocational training, micro-finance support, and clean water initiatives.",
            image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2670&auto=format&fit=crop",
            link: "/programs/community"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <Hero />



            {/* Faith / About Section */}
            <Section fullWidth className="bg-primary py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Column */}
                        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden group">
                            <div className="absolute inset-0 bg-slate-900/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
                                alt="Mother and child"
                                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Column */}
                        <div className="space-y-6 text-white">
                            <span className="text-secondary font-medium tracking-wider uppercase text-sm">About Us</span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                                Help is Our <span className="font-bold">Main Goal</span>
                            </h2>

                            <p className="text-blue-100/90 text-lg leading-relaxed">
                                Faith Mmesomachukwu Kelechi Foundation is driven by a deep commitment to uplift the downtrodden. Like the ripple effect of a single drop, we believe one act of kindness can transform a community.
                            </p>

                            <div className="space-y-4 text-blue-200/70 text-sm leading-relaxed">
                                <p>
                                    We bridge the gap between despair and hope through dedicated programs in education, healthcare, and sustainable development.
                                </p>
                                <p>
                                    Our approach is holistic, addressing not just immediate needs but building long-term resilience for valid transformational change.
                                </p>
                            </div>

                            <div className="pt-6">
                                <Link href="/about">
                                    <Button variant="outline" className="rounded-full border-blue-200/30 text-white hover:bg-white hover:text-primary px-8 py-6 uppercase cursor-pointer tracking-widest text-xs font-semibold backdrop-blur-sm bg-white/5 transition-all duration-300">
                                        More About
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Mission Summary */}
            <Section className="bg-white text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-primary font-bold text-3xl md:text-4xl">Our Mission</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        "To be a catalyst for positive change by restoring hope, dignified living, and sustainable development through faith-driven actions and compassionate service to humanity."
                    </p>
                    <Link href="/about">
                        <Button variant="link" className="text-secondary text-lg">
                            Read our full story <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </Section>


            {/* Donation Campaigns */}
            <DonationCampaigns />

            {/* Impact Statistics */}
            <Section className="bg-slate-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Our Impact So Far</h2>
                    <p className="text-gray-600 mt-2">Measuring the change we bring to the world.</p>
                </div>
                <ImpactCounter />
            </Section>

            {/* Featured Programs */}
            <Section>
                <div className="flex justify-between items-end mb-12 px-2">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Programs</h2>
                        <p className="text-gray-600 max-w-xl">
                            Discover how we are making a tangible difference in various sectors.
                        </p>
                    </div>
                    <Link href="/programs" className="hidden md:block">
                        <Button variant="outline">View All Programs</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPrograms.map((program, index) => (
                        <ProgramCard key={index} {...program} />
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/programs">
                        <Button variant="outline" className="w-full">View All Programs</Button>
                    </Link>
                </div>
            </Section>

            {/* Call to Action Bar */}
            <Section fullWidth className="bg-primary py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Heart className="w-12 h-12 mx-auto text-secondary mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Your support can provide education, healthcare, and hope to those who need it most. Join our mission today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/donate">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none min-w-[200px] h-14 text-lg">
                                Donate Now
                            </Button>
                        </Link>
                        <Link href="/get-involved">
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary min-w-[200px] h-14 text-lg bg-transparent">
                                Become a Volunteer
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Voices of Change</h2>
                    <p className="text-gray-600 mt-2">Hear from our beneficiaries and partners.</p>
                </div>
                <TestimonialCarousel />
            </Section>
        </div>
    );
}
