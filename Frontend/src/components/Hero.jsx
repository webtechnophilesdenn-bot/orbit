// src/components/Hero.jsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slideshow from "./HeroVideo";

// Array of words to cycle through
const dynamicWords = ["Automatic!", "Seamless!", "Intelligent!", "Powerful!"];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    // Cycle through the words every 3.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % dynamicWords.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen px-6 md:px-16 pt-12 pb-16 lg:pt-12 lg:pb-22 bg-white overflow-hidden flex items-center">

            {/* Optional: Subtle Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-200/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-sky-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-10 relative z-10">

                {/* LEFT SECTION */}
                <div className="flex flex-col justify-center">

                    {/* Pre-heading Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm w-fit shadow-sm border border-indigo-100"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        The Future of Business Automation
                    </motion.div>

                    {/* Animated Heading */}
                    <div className="overflow-hidden pb-2">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 flex items-center">
                            
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={wordIndex}
                                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeOut",
                                    }}
                                    className="inline-block"
                                >
                                    {dynamicWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>

                            {/* Blinking Cursor */}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.8,
                                    ease: "circInOut",
                                }}
                                className="ml-2 text-indigo-500 font-light"
                            >
                                |
                            </motion.span>
                        </h1>
                    </div>

                    {/* Accent Line - gradient to match auth pages */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: "circOut",
                        }}
                        style={{ originX: 0 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 rounded-full mt-6 w-3/4 max-w-[300px]"
                    />

                    {/* Description Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1.2,
                            duration: 0.8,
                        }}
                        className="mt-8"
                    >
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-800 max-w-xl font-semibold">
                            Elevate your Sales, Marketing, Social Media,
                            Communication and Productivity on One Seamless Platform.
                        </p>
                        <p className="mt-4 text-gray-500 text-lg max-w-lg leading-relaxed">
                            Replace your chaotic software stack with a single, intelligent workspace.
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 0.8,
                        }}
                        className="flex flex-wrap items-center gap-5 mt-10"
                    >
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_10px_20px_rgba(79,70,229,0.45)] transition-all active:scale-95">
                            Book a Demo
                        </button>

                        <button className="flex items-center gap-3 border border-gray-300 px-6 py-4 rounded-full font-semibold bg-white text-gray-800 hover:shadow-lg hover:border-gray-400 transition-all active:scale-95">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500 text-sm">
                                ▶
                            </span>
                            Watch a Demo
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="mt-6 text-sm text-gray-500 font-medium"
                    >
                        ✓ No credit card required &nbsp; • &nbsp; ✓ 14-day free trial
                    </motion.p>
                </div>

                {/* RIGHT SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <Slideshow />
                </motion.div>

            </div>
        </section>
    );
}