// src/components/Footer.jsx

import { Globe, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-6 md:px-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">

                {/* Brand & Description */}
                <div className="lg:col-span-2">
                    <a href="#" className="text-4xl font-black text-indigo-600 tracking-tight">
                        Orbit
                    </a>
                    <p className="mt-6 text-gray-500 leading-relaxed max-w-sm font-medium">
                        Replace your chaotic software stack with a single, intelligent workspace. Automate your business without the technical headache.
                    </p>

                    {/* Contact/Social Icons */}
                    <div className="flex items-center gap-5 mt-8 text-gray-400">
                        <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Website">
                            <Globe size={22} />
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Email">
                            <Mail size={22} />
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Phone">
                            <Phone size={22} />
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Chat">
                            <MessageCircle size={22} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-gray-900 mb-6 text-lg">Product</h3>
                    <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="font-bold text-gray-900 mb-6 text-lg">Company</h3>
                    <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Partners</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Sales</a></li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 className="font-bold text-gray-900 mb-6 text-lg">Legal</h3>
                    <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
                    </ul>
                </div>

            </div>

            {/* Bottom Copyright Banner */}
            <div className="container mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 font-medium text-sm text-center md:text-left">
                    &copy; {currentYear} Orbit Inc. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-gray-400 font-medium">
                    <span className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                        All systems operational
                    </span>
                </div>
            </div>
        </footer>
    );
}