// src/components/HeroVideo.jsx

import { motion } from "framer-motion";

export default function HeroVideo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
                delay: 0.4,
                ease: "easeOut"
            }}
            className="relative w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-400/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Floating Animation Wrapper */}
            <motion.div
                animate={{
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-full max-w-2xl z-10"
            >
                {/* SaaS App/Browser Frame Wrapper */}
                <div className="relative rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden">

                    {/* Mock Browser Top Bar */}
                    <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2 w-full">
                        <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-red-400 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-yellow-400 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-green-400 transition-colors" />

                        {/* Mock URL Bar (Optional, adds to the software feel) */}
                        <div className="ml-4 h-5 flex-1 bg-white border border-gray-200 rounded-md max-w-[200px]" />
                    </div>

                    {/* Video Element */}
                    <div className="relative w-full bg-gray-100 aspect-video">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/videos/hero-video.mp4" type="video/mp4" />
                            {/* Fallback text if video fails */}
                            Your browser does not support the video tag.
                        </video>

                        {/* Subtle Inner Overlay to soften harsh video edges */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-transparent pointer-events-none" />
                    </div>

                </div>

                {/* Decorative floating element (Optional extra polish) */}
                <div className="absolute -bottom-6 -left-6 bg-white py-3 px-6 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
                    <span className="flex h-3 w-3 rounded-full bg-indigo-500 animate-pulse"></span>
                    <span className="text-sm font-bold text-gray-800">Live Dashboard</span>
                </div>

            </motion.div>
        </motion.div>
    );
}