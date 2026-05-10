// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Headphones, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-16 flex items-center justify-between transition-all duration-300
            ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 py-3" // Slimmer scrolled state
                    : "bg-transparent py-4" // Slimmer default state
                }`}
        >
            {/* Logo */}
            <Link to="/" className="text-4xl lg:text-5xl font-black text-indigo-600 tracking-tight z-50 hover:opacity-80 transition-opacity">
                Orbit
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10 text-base font-semibold text-gray-700">
                <a href="#" className="hover:text-indigo-600 transition-colors">Become a Partner</a>
                <a href="#" className="hover:text-indigo-600 transition-colors">Careers</a>

                <a href="#" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                    <MessageCircle size={20} className="text-indigo-500" />
                    Contact Sales
                </a>
            </div>

            {/* Desktop Right Side Buttons */}
            <div className="hidden lg:flex items-center gap-4">
                <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-indigo-600 transition-colors mr-2">
                    <Headphones size={20} className="text-indigo-500" />
                    Support
                </button>

                {/* Login Link */}
                <Link
                    to="/login"
                    className="inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-2 rounded-full font-semibold transition-all active:scale-95"
                >
                    Login
                </Link>

                {/* Sign Up Link */}
                <Link
                    to="/signup"
                    className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow-[0_4px_15px_rgba(79,70,229,0.3)] hover:shadow-[0_4px_15px_rgba(79,70,229,0.45)] transition-all active:scale-95"
                >
                    Sign Up
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="lg:hidden text-gray-800 z-50 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200 flex flex-col p-6 gap-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-4 text-lg font-medium text-gray-800">
                            <a href="#" className="hover:text-indigo-600">Become a Partner</a>
                            <a href="#" className="hover:text-indigo-600">Careers</a>
                            <a href="#" className="flex items-center gap-2 hover:text-indigo-600">
                                <MessageCircle size={20} className="text-indigo-500" />
                                Contact Sales
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-indigo-600">
                                <Headphones size={20} className="text-indigo-500" />
                                Support
                            </a>
                        </div>

                        <div className="flex flex-col gap-3 mt-4 border-t border-gray-100 pt-6">
                            {/* Mobile Login Link */}
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold transition-all active:scale-95"
                            >
                                Login
                            </Link>

                            {/* Mobile Sign Up Link */}
                            <Link
                                to="/signup"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-[0_4px_15px_rgba(79,70,229,0.3)] active:scale-95"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
