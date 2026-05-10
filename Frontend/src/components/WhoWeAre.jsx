// src/components/WhoWeAre.jsx

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function WhoWeAre() {
    return (
        <section className="w-full bg-white py-24 lg:py-32 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* LEFT: VISUAL/IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full max-w-[500px] mx-auto lg:mx-0"
                >
                    {/* Clean Offset Background Shape */}
                    <div className="absolute -bottom-6 -left-6 w-full h-full bg-indigo-50 rounded-[48px] rounded-br-[16px] -z-10 border border-indigo-100/50" />

                    {/* Decorative Dot Grid */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:16px_16px] opacity-60 -z-20" />

                    {/* Main Image */}
                    <div className="relative rounded-[48px] rounded-br-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                            alt="Our professional team collaborating"
                            className="w-full h-auto object-cover aspect-[4/5] transform hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.03)] pointer-events-none" />
                    </div>

                    {/* Floating Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute bottom-10 -right-8 bg-white py-4 px-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                            <Award className="text-indigo-600 w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-slate-900 leading-none">10<span className="text-indigo-500">+</span></p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Years of Trust</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* RIGHT: CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col justify-center"
                >
                    {/* Pre-heading Tag */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-8 bg-indigo-500 rounded-full"></div>
                        <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
                            Who We Are
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                        Empowering Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Automation</span>
                    </h2>

                    <div className="mt-8 space-y-5 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                        <p>
                            We help organizations automate sales, marketing, customer engagement, and productivity workflows using powerful, intelligent cloud-based tools.
                        </p>
                        <p className="text-slate-500">
                            Our mission is to simplify complex business operations, replacing chaotic software stacks with single, scalable digital solutions that allow your team to focus on what truly matters.
                        </p>
                    </div>

                    {/* Stats Block */}
                    <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-gray-100">
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                                500<span className="text-indigo-500">+</span>
                            </h3>
                            <p className="text-xs lg:text-sm font-bold text-slate-400 uppercase tracking-wider mt-2">
                                Active Clients
                            </p>
                        </div>
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                                20<span className="text-indigo-500">+</span>
                            </h3>
                            <p className="text-xs lg:text-sm font-bold text-slate-400 uppercase tracking-wider mt-2">
                                Industries
                            </p>
                        </div>
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                                99<span className="text-indigo-500">%</span>
                            </h3>
                            <p className="text-xs lg:text-sm font-bold text-slate-400 uppercase tracking-wider mt-2">
                                Satisfaction
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}