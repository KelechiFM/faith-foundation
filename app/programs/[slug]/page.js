"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import FloatingBubbles from "@/components/ui/FloatingBubbles";
import { motion } from "framer-motion";

// Mock Data for Programs
const programsData = {
    // Original Keys (from Home Page)
    education: {
        title: "Education for All",
        category: "Education",
        description: "We are committed to providing quality education to underprivileged children in rural communities. Our program includes scholarship grants, school supplies distribution, and after-school tutoring.",
        longDescription: `
            <p>Education is the most powerful weapon which you can use to change the world. Our "Education for All" initiative ensures that every child, regardless of their background, has access to quality learning opportunities.</p>
            <p>We focus on reducing the dropout rate in rural areas by providing financial assistance, uniforms, and learning materials. Furthermore, we train teachers to adopt modern pedagogical methods to enhance the learning experience.</p>
        `,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
        stats: [
            { label: "Students Enrolled", value: "1,200+" },
            { label: "Schools Built", value: "5" },
            { label: "Teachers Trained", value: "50+" },
        ],
        location: "Rural Communities in Nigeria",
        duration: "Ongoing",
    },
    healthcare: {
        title: "Healthcare Outreach",
        category: "Health",
        description: "Our healthcare outreach program brings medical professionals to remote areas to provide free checkups, treatments, and medicines to those who cannot afford them.",
        longDescription: `
            <p>Access to basic healthcare is a fundamental human right. Unfortunately, many communities lack proximity to hospitals or the funds for treatment. Our mobile clinics bridge this gap.</p>
            <p>We conduct quartherly medical camps focusing on malaria prevention, maternal health, and chronic disease management. We also distribute mosquito nets and hygiene kits to prevent disease outbreaks.</p>
        `,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        stats: [
            { label: "Patients Treated", value: "5,000+" },
            { label: "Surgeries Funded", value: "120" },
            { label: "Medical Kits", value: "3,000+" },
        ],
        location: "Semi-urban & Rural Zones",
        duration: "Quarterly",
    },
    community: {
        title: "Community Development",
        category: "Empowerment",
        description: "Empowering women and youth through vocational training, micro-finance support, and infrastructure development like clean water projects.",
        longDescription: `
            <p>Sustainable development starts with empowering the people. Our community development projects focus on skill acquisition for youth and women, enabling them to become self-reliant.</p>
            <p>We also invest in infrastructure, such as drilling boreholes for clean water and installing solar street lights to improve safety and quality of life in these communities.</p>
        `,
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2670&auto=format&fit=crop",
        stats: [
            { label: "Youth Trained", value: "800+" },
            { label: "Small Businesses", value: "350" },
            { label: "Clean Water Units", value: "15" },
        ],
        location: "Underserved Districts",
        duration: "Year-round",
    },
    "water-delivery": {
        title: "Water Delivery in Africa",
        category: "Water Delivery",
        description: "Providing clean and accessible water to remote villages in Africa to combat waterborne diseases.",
        longDescription: `
            <p>Water is life. Yet, millions of people in Africa still lack access to safe drinking water. Our Water Delivery initiative aims to drill boreholes and install water filtration systems in the most affected regions.</p>
            <p>This project not only fights waterborne diseases but also reduces the burden on women and children who walk miles daily to fetch water.</p>
        `,
        image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=2574&auto=format&fit=crop",
        stats: [
            { label: "Villages Served", value: "20+" },
            { label: "Liters Daily", value: "10,000" },
        ],
        location: "Sub-Saharan Africa",
        duration: "Project-based",
    },

    // New Specific Keys (from Programs Page)
    scholarships: {
        title: "Scholarship Scheme",
        category: "Education",
        description: "Supporting bright but indigent students with full tuition scholarships, textbooks, and mentoring from primary to tertiary levels.",
        longDescription: `
            <p>Quality education should not be a luxury. Our Scholarship Scheme identifies academically gifted but financially disadvantaged students and supports them through their educational journey.</p>
            <p>Beyond tuition, we provide mentorship and career guidance to ensure our scholars succeed not just in school, but in life.</p>
        `,
        image: "/images/scholarships.png",
        stats: [
            { label: "Scholars Supported", value: "450" },
            { label: "Graduates", value: "120" },
        ],
        location: "Nationwide",
        duration: "Annual",
    },
    medical: {
        title: "Medical Missions",
        category: "Health",
        description: "Providing free surgeries, eye screenings, and malaria treatments to remote villages with limited access to healthcare.",
        longDescription: `
            <p>Our Medical Missions bring hospital-grade care to the doorsteps of those who need it most. We deploy teams of volunteer doctors and nurses to perform life-changing surgeries and treatments.</p>
            <p>Key focus areas include cataract surgeries, hernia repairs, and comprehensive pediatric care.</p>
        `,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
        stats: [
            { label: "Surgeries Performed", value: "500+" },
            { label: "Beneficiaries", value: "15,000" },
        ],
        location: "Rural Outposts",
        duration: "Monthly",
    },
    women: {
        title: "Women Empowerment",
        category: "Livelihood",
        description: "Skill acquisition programs in tailoring, baking, and soap making, coupled with micro-grants to start small businesses.",
        longDescription: `
            <p>When you empower a woman, you empower a nation. Our initiative focuses on giving women the tools they need to break the cycle of poverty.</p>
            <p>Participants receive hands-on training in vocational skills and seed capital to launch their own enterprises.</p>
        `,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop",
        stats: [
            { label: "Women Trained", value: "2,000+" },
            { label: "Businesses Started", value: "850" },
        ],
        location: "Urban Slums & Villages",
        duration: "6-Month Cycles",
    },
    "food-relief": {
        title: "Food Relief Bank",
        category: "Humanitarian Aid",
        description: "Monthly distribution of food items to widows and elderly in our host communities to ensure zero hunger.",
        longDescription: `
            <p>Hunger is an immediate crisis that cannot wait. Our Food Relief Bank ensures that the most vulnerable members of society—widows, the elderly, and orphans—have food on their table.</p>
            <p>We distribute staple foods like rice, beans, and cooking oil, sourced from local farmers to support the local economy.</p>
        `,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
        stats: [
            { label: "Households Fed", value: "10,000+" },
            { label: "Meals Provided", value: "1M+" },
        ],
        location: "Various Communities",
        duration: "Monthly",
    },
    water: {
        title: "Clean Water Project",
        category: "Infrastructure",
        description: "Drilling boreholes and installing water treatment plants in communities suffering from water-borne diseases.",
        longDescription: `
            <p>Access to clean water is a basic necessity. Our Clean Water Project targets communities that rely on contaminated stream water.</p>
            <p>We install solar-powered boreholes that provide a reliable, year-round source of safe drinking water.</p>
        `,
        image: "/images/water.png",
        stats: [
            { label: "Boreholes Drilled", value: "45" },
            { label: "People Served", value: "50,000+" },
        ],
        location: "Drought-prone Areas",
        duration: "Project-based",
    },
    digital: {
        title: "Digital Literacy",
        category: "Tech Education",
        description: "Setting up computer centers and coding bootcamps for youths to equip them with skills for the future of work.",
        longDescription: `
            <p>The future is digital. We are bridging the digital divide by establishing computer labs in under-resourced schools.</p>
            <p>Our coding bootcamps teach skills in web development, graphic design, and data analysis, preparing youth for the global job market.</p>
        `,
        image: "/images/digital.png",
        stats: [
            { label: "Labs Built", value: "10" },
            { label: "Students Trained", value: "1,500+" },
        ],
        location: "Public Schools",
        duration: "Termly",
    }
};

export default function ProgramDetail() {
    const params = useParams();
    const slug = params.slug;
    const program = programsData[slug];

    if (!program) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Program Not Found</h1>
                    <p className="text-gray-600 mb-8">The program you are looking for does not exist.</p>
                    <Link href="/">
                        <Button>Go Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Glassmorphism */}
            <div className="relative h-[60vh] bg-primary overflow-hidden flex items-center justify-center">
                <FloatingBubbles />

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/90 text-white text-sm font-semibold mb-6 tracking-wide">
                            {program.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {program.title}
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            {program.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <Section className="relative -mt-20 z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6">About the Program</h2>
                            <div
                                className="prose prose-lg text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: program.longDescription }}
                            />

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Objectives</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {["Sustainability", "Community Impact", "Transparency", "Growth"].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <div className="flex justify-start">
                            <Link href="/programs">
                                <Button variant="outline" className="cursor-pointer group">
                                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                    Back to Programs
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-6">
                        {/* Stats Card */}
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-10 -mt-10" />
                            <h3 className="text-xl font-bold mb-6 relative z-10">Program Impact</h3>
                            <div className="space-y-6 relative z-10">
                                {program.stats.map((stat, idx) => (
                                    <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                        <p className="text-blue-200 text-sm mb-1">{stat.label}</p>
                                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Program Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Location</p>
                                        <p className="text-gray-600">{program.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Calendar className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Duration</p>
                                        <p className="text-gray-600">{program.duration}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Link href="/donate">
                                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white cursor-pointer">
                                        Support This Program
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
