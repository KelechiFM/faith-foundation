import DonationForm from "@/components/features/DonationForm";
import Section from "@/components/ui/Section";
import FloatingBubbles from "@/components/ui/FloatingBubbles";
import { CheckCircle2 } from "lucide-react";

export default function Donate() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="relative bg-primary text-white py-20 text-center overflow-hidden">
                <FloatingBubbles />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate Now</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto px-4">
                        Make a secure donation and help us transform lives today.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-primary">
                            Your Giving Changes Everything
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Every Naira you donate goes directly towards fueling our mission to restoring hope and dignity. We are committed to transparency and accountability.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-xl">Where your money goes:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Providing scholarships to indigent students",
                                    "Funding life-saving medical surgeries",
                                    "Empowering widows with small business grants",
                                    "Emergency food relief for families",
                                    "Building clean water sources"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-lg mb-2">Bank Transfer Details</h4>
                            <p className="text-gray-600 mb-1">Bank Name: <span className="font-medium text-black">Zenith Bank</span></p>
                            <p className="text-gray-600 mb-1">Account Name: <span className="font-medium text-black">Faith Mmesomachukwu Kelechi Foundation</span></p>
                            <p className="text-gray-600">Account Number: <span className="font-medium text-black">1010101010</span></p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:mt-0">
                        <DonationForm />
                    </div>

                </div>
            </Section>
        </div>
    );
}
