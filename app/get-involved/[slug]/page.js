import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle, ArrowLeft, Mail, HandHeart, Users, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const involvedData = {
    volunteer: {
        title: "Become a Volunteer",
        subtitle: "Join our hands-on team and make a direct impact.",
        description: "Volunteers are the backbone of our organization. Whether you're a medical professional, a teacher, or simply someone with a heart for service, we have a place for you.",
        icon: HandHeart,
        benefits: [
            "Make a tangible difference in people's lives",
            "Gain field experience and new skills",
            "Join a passionate community of changemakers",
            "Certificate of Service upon completion"
        ],
        roles: [
            "Field Coordinators",
            "Medical Personnel (Doctors, Nurses)",
            "Teachers & Mentors",
            "Logistics Support"
        ],
        ctaText: "Apply to Volunteer",
        ctaLink: "/contact"
    },
    partner: {
        title: "Partner With Us",
        subtitle: "Collaborate for greater impact.",
        description: "We believe in the power of partnership. By joining forces with corporate bodies, foundations, and other NGOs, we can scale our impact and reach communities that need us most.",
        icon: Users,
        benefits: [
            "CSR (Corporate Social Responsibility) fulfillment",
            "Brand visibility and positive public relations",
            "Measurable impact reports for stakeholders",
            "Tax-deductible donation options"
        ],
        roles: [
            "Corporate Sponsorships",
            "Grant Funding",
            "In-kind Donations (Medical supplies, Computers)",
            "Strategic Alliances"
        ],
        ctaText: "Contact Partnership Team",
        ctaLink: "/contact"
    },
    advocate: {
        title: "Spread the Word",
        subtitle: "Amplify our voice and inspire others.",
        description: "You have a powerful voice. Use it to raise awareness about the challenges our communities face and the hope we are bringing. Advocacy moves mountains.",
        icon: Share2,
        benefits: [
            "Raise awareness for critical causes",
            "Inspire your network to give",
            "Influence policy and public opinion",
            "Be a digital changemaker"
        ],
        roles: [
            "Social Media Ambassadorship",
            "Fundraising Campaigns",
            "Community Organizing",
            "Content Creation"
        ],
        ctaText: "Start Sharing",
        ctaLink: "/contact"
    }
};

export function generateStaticParams() {
    return Object.keys(involvedData).map((slug) => ({
        slug: slug,
    }));
}

export default async function GetInvolvedDetail(props) {
    const params = await props.params;
    const { slug } = params;
    const data = involvedData[slug];

    if (!data) {
        notFound();
    }

    const Icon = data.icon;

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-primary text-white py-20 overflow-hidden">
                <FloatingBubbles />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <Link href="/get-involved" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Get Involved
                    </Link>
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <Icon className="w-10 h-10 text-secondary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
                    <p className="text-xl text-blue-100 font-medium">{data.subtitle}</p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-4">About This Role</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {data.description}
                            </p>
                        </div>

                        <Card className="border-none shadow-lg">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                                    Why Join Us?
                                </h3>
                                <ul className="space-y-4">
                                    {data.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <span className="w-2 h-2 mt-2 bg-secondary rounded-full mr-3 shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar / Requirements */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-primary mb-4">Opportunities Available</h3>
                            <div className="space-y-3">
                                {data.roles.map((role, idx) => (
                                    <div key={idx} className="p-3 bg-slate-50 rounded-lg text-gray-700 font-medium border border-slate-100">
                                        {role}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center">
                            <h3 className="text-xl font-bold text-primary mb-2">Ready to Start?</h3>
                            <p className="text-gray-600 mb-6">Take the first step today.</p>
                            <Link href={data.ctaLink}>
                                <Button className="w-full text-lg h-12 bg-primary hover:bg-primary/90 text-white shadow-lg cursor-pointer">
                                    {data.ctaText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
