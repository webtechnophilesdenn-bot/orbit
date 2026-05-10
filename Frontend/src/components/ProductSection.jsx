// src/components/ProductSection.jsx

import { motion } from "framer-motion";
import { Check, Activity } from "lucide-react";

export default function ProductSection({
    id,
    title,
    image,
    points,
    reverse,
}) {
    return (
        <section
            id={id}
            // Increased scroll-mt to 240px to give a massive buffer below the navbars when clicked
            // Separated pt (padding-top) and pb (padding-bottom) to give more visual breathing room at the top
            className="w-full px-6 md:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24 scroll-mt-[240px] relative"
        >
            <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full`}>

                {/* TEXT / CONTENT SIDE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex flex-col justify-center ${reverse ? "lg:order-2" : "lg:order-1"}`}
                >
                    {/* Subtle Pre-heading Tag */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-[2px] w-8 bg-indigo-500 rounded-full"></div>
                        <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">
                            Platform Feature
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                        {title}
                    </h2>

                    {/* Tightened the gap between list items (space-y-3 instead of space-y-6) */}
                    <div className="mt-8 space-y-3">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                // Reduced padding (p-3.5) to bring items closer together
                                className="group flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                            >
                                {/* Refined Checkmark */}
                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors duration-300">
                                    <Check className="text-indigo-600 w-3.5 h-3.5 stroke-[3] group-hover:text-white transition-colors duration-300" />
                                </div>

                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* VISUAL / IMAGE SIDE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative ${reverse ? "lg:order-1" : "lg:order-2"}`}
                >
                    {/* Tech-inspired Dot Matrix Background */}
                    <div className="absolute -inset-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

                    {/* App/Browser Window Frame */}
                    <div className="relative rounded-2xl bg-white border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden group z-10">

                        {/* Mock Top Bar */}
                        <div className="h-10 bg-slate-50 border-b border-gray-200 flex items-center px-4 gap-2 w-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                        </div>

                        {/* Image Container */}
                        <div className="relative aspect-[4/3] md:aspect-auto md:h-[420px] w-full overflow-hidden bg-slate-100">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.03)] pointer-events-none" />
                        </div>
                    </div>

                    {/* Floating "Live Activity" Badge */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute -bottom-5 ${reverse ? "-left-5" : "-right-5"} z-20 bg-white p-3 pr-5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3`}
                    >
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center relative">
                            <Activity className="text-indigo-500 w-4 h-4" />
                            <div className="absolute inset-0 rounded-full border border-indigo-400 animate-ping opacity-20"></div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 leading-none">System Active</p>
                            <p className="text-[11px] text-slate-500 font-medium mt-1">Real-time sync</p>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}