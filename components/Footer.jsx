import Link from "next/link";
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Organization Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <Heart className="w-6 h-6 text-secondary" />
                            </div>
                            <span className="font-bold text-xl">FMK Foundation</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering communities through faith, hope, and compassionate action. Join us in making a lasting difference in the lives of those who need it most.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/programs" className="text-gray-400 hover:text-secondary transition-colors">Our Programs</Link></li>
                            <li><Link href="/get-involved" className="text-gray-400 hover:text-secondary transition-colors">Get Involved</Link></li>
                            <li><Link href="/news" className="text-gray-400 hover:text-secondary transition-colors">Latest News</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                                <span>123 Faith Avenue,<br />Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+234 800 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>contact@fmkfoundation.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest impact stories and updates.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                            />
                            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Faith Mmesomachukwu Kelechi Foundation. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}