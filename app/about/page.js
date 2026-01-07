import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Users, Target, Heart } from "lucide-react";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

export default function About() {
    const team = [
        {
            name: "Dr. Faith Kelechi",
            role: "Founder & Executive Director",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            bio: "A visionary leader with over 15 years of experience in community development and philanthropy."
        },
        {
            name: "John Doe",
            role: "Director of Operations",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
            bio: "Expert in logistics and program management, ensuring our initiatives reach those in need efficiently."
        },
        {
            name: "Sarah Smith",
            role: "Head of Advocacy",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
            bio: "Passionate about policy change and amplifying the voices of the marginalized."
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="relative bg-primary text-white py-24 text-center overflow-hidden">
                <FloatingBubbles />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto px-4">
                        Learn about our journey, our mission, and the people driving change at Faith Mmesomachukwu Kelechi Foundation.
                    </p>
                </div>
            </div>

            {/* Story / History */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Founded in 2026, the Faith Mmesomachukwu Kelechi Foundation was born out of a desire to bridge the gap between poverty and opportunity. What started as a small community outreach program in Lagos has grown into a nationwide movement.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our founder, inspired by her personal journey of overcoming adversity through faith and education, vowed to create a platform that would uplift others. Today, we have touched over 5,000 lives through our various programs.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2670&auto=format&fit=crop"
                            alt="Our Story"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Mission Values */}
            <Section className="bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center p-6 border-none shadow-lg">
                        <CardContent className="pt-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p className="text-gray-600">
                                To empower underserved individuals through sustainable initiatives in education, healthcare, and capacity building.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6 border-none shadow-lg">
                        <CardContent className="pt-6">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Our Values</h3>
                            <p className="text-gray-600">
                                Compassion, Integrity, Faith, Excellence, and Transparency are at the core of everything we do.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6 border-none shadow-lg">
                        <CardContent className="pt-6">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                            <p className="text-gray-600">
                                A world where every individual has the opportunity to thrive and live a life of dignity and purpose.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Leadership Team */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
                    <p className="text-gray-600 mt-2">The dedicated individuals behind our impact.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="group text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-100 shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                            <p className="text-primary font-medium mb-2">{member.role}</p>
                            <p className="text-sm text-gray-500 max-w-xs mx-auto">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
