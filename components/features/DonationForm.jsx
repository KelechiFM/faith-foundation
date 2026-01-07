"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Heart, Check, CreditCard, Landmark, Phone, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const AMOUNTS = [1000, 5000, 10000, 50000];

export default function DonationForm({ campaignName }) {
    const [step, setStep] = useState(1);
    const [frequency, setFrequency] = useState("one-time");
    const [selectedAmount, setSelectedAmount] = useState(5000);
    const [customAmount, setCustomAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cardNumber: "",
        expiry: "",
        cvc: ""
    });

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount("");
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const finalAmount = selectedAmount || Number(customAmount) || 0;

    const handleDonate = async () => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <Card className="w-full max-w-lg mx-auto border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Thank You!</h2>
                    <p className="text-gray-600 text-lg">
                        Your donation of <span className="font-bold text-secondary">₦{finalAmount.toLocaleString()}</span> has been received.
                        {campaignName && <span> You've successfully supported <span className="font-semibold text-primary">{campaignName}</span>.</span>}
                    </p>
                    <p className="text-sm text-gray-500">A receipt has been sent to {formData.email}</p>
                    <Button onClick={() => { setIsSuccess(false); setStep(1); }} variant="outline" className="mt-6">
                        Make Another Donation
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-lg mx-auto border-none shadow-none bg-transparent">
            {step === 1 && (
                <div className="animate-in slide-in-from-left-4 duration-300">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto bg-primary/5 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                            <Heart className="w-8 h-8 text-secondary fill-secondary" />
                        </div>
                        <CardTitle className="text-2xl text-primary">Choose Donation</CardTitle>
                        <CardDescription>How much would you like to give?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                        {/* Frequency */}
                        <div className="flex p-1 bg-gray-100 rounded-lg">
                            {["one-time", "monthly"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFrequency(type)}
                                    className={cn(
                                        "flex-1 py-2 text-sm font-medium rounded-md transition-all capitalize",
                                        frequency === type
                                            ? "bg-white text-primary shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    )}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Amount Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {AMOUNTS.map((amount) => (
                                <button
                                    key={amount}
                                    onClick={() => handleAmountSelect(amount)}
                                    className={cn(
                                        "py-3 px-4 border rounded-lg text-lg font-semibold transition-all relative",
                                        selectedAmount === amount
                                            ? "border-secondary bg-secondary/5 text-primary"
                                            : "border-gray-200 hover:border-secondary/50 text-gray-600"
                                    )}
                                >
                                    ₦{amount.toLocaleString()}
                                    {selectedAmount === amount && (
                                        <div className="absolute top-1 right-1 text-secondary">
                                            <Check className="w-4 h-4" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Custom Input */}
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">₦</span>
                            <Input
                                type="number"
                                placeholder="Enter custom amount"
                                className="pl-8 h-12 text-lg"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                            />
                        </div>

                        <Button
                            onClick={() => setStep(2)}
                            disabled={!finalAmount}
                            className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white group"
                        >
                            Next Step <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </CardContent>
                </div>
            )}

            {step === 2 && (
                <div className="animate-in slide-in-from-right-4 duration-300">
                    <CardHeader className="pb-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-fit -ml-2 mb-2 text-gray-500 hover:text-primary"
                            onClick={() => setStep(1)}
                        >
                            <ArrowLeft className="w-4 h-4 mr-1" /> Back
                        </Button>
                        <CardTitle className="text-xl text-primary">Payment Details</CardTitle>
                        <CardDescription>Donating <span className="font-bold text-secondary">₦{finalAmount.toLocaleString()}</span> {frequency}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6 pt-4">
                        {/* Donor Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase">First Name</label>
                                <Input
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase">Email Address</label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Payment Tabs */}
                        <div>
                            <label className="text-xs font-semibold text-gray-500 uppercase mb-3 block">Select Payment Method</label>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {[
                                    { id: 'card', icon: CreditCard, label: 'Card' },
                                    { id: 'bank', icon: Landmark, label: 'Bank' },
                                    { id: 'ussd', icon: Phone, label: 'USSD' },
                                ].map((method) => (
                                    <button
                                        key={method.id}
                                        onClick={() => setPaymentMethod(method.id)}
                                        className={cn(
                                            "flex flex-col items-center justify-center py-3 px-2 rounded-lg border transition-all",
                                            paymentMethod === method.id
                                                ? "border-secondary bg-secondary/5 text-primary ring-1 ring-secondary"
                                                : "border-gray-200 hover:bg-gray-50 text-gray-500"
                                        )}
                                    >
                                        <method.icon className={cn("w-5 h-5 mb-1", paymentMethod === method.id ? "text-secondary" : "text-gray-400")} />
                                        <span className="text-xs font-medium">{method.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Card Inputs */}
                        {paymentMethod === 'card' && (
                            <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-500">Card Number</label>
                                    <div className="relative">
                                        <Input
                                            name="cardNumber"
                                            placeholder="0000 0000 0000 0000"
                                            className="bg-white pl-10 font-mono"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                        />
                                        <CreditCard className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500">Expiry Date</label>
                                        <Input
                                            name="expiry"
                                            placeholder="MM/YY"
                                            className="bg-white font-mono"
                                            value={formData.expiry}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500">CVC</label>
                                        <Input
                                            name="cvc"
                                            type="password"
                                            placeholder="123"
                                            className="bg-white font-mono"
                                            maxLength={3}
                                            value={formData.cvc}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {paymentMethod === 'bank' && (
                            <div className="p-6 bg-gray-50 rounded-lg text-center border dashed border-gray-300">
                                <p className="text-sm text-gray-600 mb-2">Transfer to:</p>
                                <p className="font-bold text-lg text-primary">0123456789</p>
                                <p className="text-sm font-medium text-gray-800">GTBank</p>
                                <p className="text-xs text-gray-500 mt-2">Use your phone number as reference</p>
                            </div>
                        )}

                        {paymentMethod === 'ussd' && (
                            <div className="p-6 bg-gray-50 rounded-lg text-center border dashed border-gray-300">
                                <p className="text-sm text-gray-600 mb-2">Dial code:</p>
                                <p className="font-bold text-xl text-primary">*737*1*5000#</p>
                                <p className="text-xs text-gray-500 mt-2">Follow prompts to complete payment</p>
                            </div>
                        )}

                        <Button
                            onClick={handleDonate}
                            disabled={isLoading}
                            className="w-full h-12 text-lg bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...
                                </>
                            ) : (
                                `Pay ₦${finalAmount.toLocaleString()}`
                            )}
                        </Button>
                        <div className="flex justify-center items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center"><Check className="w-3 h-3 mr-1" /> SSL Secure</span>
                            <span>•</span>
                            <span>Paystack</span>
                        </div>
                    </CardContent>
                </div>
            )}
        </Card>
    );
}
