import Section from "@/components/ui/Section";
import ProgramCard from "@/components/features/ProgramCard";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

export default function Programs() {
    const programs = [
        {
            title: "Scholarship Scheme",
            description: "Supporting bright but indigent students with full tuition scholarships, textbooks, and mentoring from primary to tertiary levels.",
            image: "/images/scholarships.png",
            link: "/programs/scholarships"
        },
        {
            title: "Medical Missions",
            description: "Providing free surgeries, eye screenings, and malaria treatments to remote villages with limited access to healthcare.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
            link: "/programs/medical"
        },
        {
            title: "Women Empowerment",
            description: "Skill acquisition programs in tailoring, baking, and soap making, coupled with micro-grants to start small businesses.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop",
            link: "/programs/women"
        },
        {
            title: "Food Relief Bank",
            description: "Monthly distribution of food items to widows and elderly in our host communities to ensure zero hunger.",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
            link: "/programs/food-relief"
        },
        {
            title: "Clean Water Project",
            description: "Drilling boreholes and installing water treatment plants in communities suffering from water-borne diseases.",
            image: "/images/water.png",
            link: "/programs/water"
        },
        {
            title: "Digital Literacy",
            description: "Setting up computer centers and coding bootcamps for youths to equip them with skills for the future of work.",
            image: "/images/digital.png",
            link: "/programs/digital"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="relative bg-primary text-white py-24 text-center overflow-hidden">
                <FloatingBubbles />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto px-4">
                        From education to healthcare, explore how we are restoring dignity and hope across communities.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, idx) => (
                        <ProgramCard key={idx} {...program} />
                    ))}
                </div>
            </Section>
        </div>
    );
}
