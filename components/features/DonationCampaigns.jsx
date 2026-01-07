"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Section from "@/components/ui/Section";
import FloatingBubbles from "@/components/ui/FloatingBubbles";
import Modal from "@/components/ui/Modal";
import DonationForm from "@/components/features/DonationForm";

const campaigns = [
    {
        category: "Water Delivery",
        title: "Water Delivery in Africa",
        description: "Providing clean and accessible water to remote villages in Africa to combat waterborne diseases.",
        goal: 25000,
        pledged: 21400,
    },
    {
        category: "Medicine",
        title: "Health in other Countries",
        description: "Delivering essential medical supplies and support to under-resourced healthcare facilities globally.",
        goal: 14000,
        pledged: 6498,
    },
    {
        category: "Education",
        title: "We Build and Create",
        description: "Constructing schools and learning centers to create safe environments for children to learn.",
        goal: 50000,
        pledged: 12350,
    },
    {
        category: "Food",
        title: "Healthy Food",
        description: "Combating malnutrition by supplying nutritious meals and sustainable farming resources to families.",
        goal: 8000,
        pledged: 7200,
    }
];

export default function DonationCampaigns() {
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    return (
        <div className="relative bg-primary py-24 overflow-hidden">
            {/* Floating Bubbles Background */}
            <FloatingBubbles />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {campaigns.map((campaign, index) => {
                        const percentage = Math.min((campaign.pledged / campaign.goal) * 100, 100);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-primary/40 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="bg-white text-primary px-4 py-1 rounded text-sm font-semibold shadow-sm">
                                        {campaign.category}
                                    </span>
                                    <Button
                                        onClick={() => setSelectedCampaign(campaign)}
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors text-xs uppercase tracking-wider font-bold px-6 cursor-pointer"
                                    >
                                        + Donate
                                    </Button>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{campaign.title}</h3>
                                <p className="text-blue-100/70 mb-8 leading-relaxed h-14 overflow-hidden text-ellipsis line-clamp-2">
                                    {campaign.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="space-y-4">
                                    <div className="h-4 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                                        <motion.div
                                            className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(42,157,143,0.5)]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${percentage}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <span className="text-white">Goal: <span className="text-blue-200">${campaign.goal.toLocaleString()}</span></span>
                                        <span className="text-white">Pledged: <span className="text-secondary">${campaign.pledged.toLocaleString()}</span></span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={!!selectedCampaign}
                onClose={() => setSelectedCampaign(null)}
                title={selectedCampaign ? `Donate to ${selectedCampaign.title}` : "Donate"}
            >
                <div className="p-4">
                    <DonationForm />
                </div>
            </Modal>
        </div>
    );
}
