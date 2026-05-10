// src/components/ContactUs.jsx

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="relative w-full bg-gray-50 py-24 lg:py-32 overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-indigo-200/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] bg-sky-200/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

                {/* LEFT: CONTENT & INFO */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col justify-center"
                >
                    {/* Pre-heading Tag */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-8 bg-indigo-500 rounded-full"></div>
                        <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
                            Contact Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                        Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Amazing</span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mt-6 mb-12 max-w-lg">
                        Reach out to us for product demos, enterprise solutions, or partnership opportunities. Our team is ready to help you scale.
                    </p>

                    {/* Contact Info Rows */}
                    <div className="space-y-8">
                        <div className="group flex items-start gap-5">
                            <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors duration-300">
                                <Mail className="text-indigo-600 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Chat with support</p>
                                <p className="text-xl font-semibold text-slate-800">support@kit19.com</p>
                            </div>
                        </div>

                        <div className="group flex items-start gap-5">
                            <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors duration-300">
                                <Phone className="text-indigo-600 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call us directly</p>
                                <p className="text-xl font-semibold text-slate-800">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="group flex items-start gap-5">
                            <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors duration-300">
                                <MapPin className="text-indigo-600 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Visit our office</p>
                                <p className="text-xl font-semibold text-slate-800">Pune, Maharashtra, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: FORM */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900">Send us a message</h3>
                            <p className="text-slate-500 mt-2 font-medium">We'll get back to you within 24 hours.</p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 font-medium"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 font-medium"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 font-medium"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows="4"
                                    placeholder="How can we help you?"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 font-medium resize-none"
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl text-lg font-bold shadow-[0_10px_20px_rgba(79,70,229,0.25)] hover:shadow-[0_10px_20px_rgba(79,70,229,0.4)] transition-all duration-300 active:scale-[0.98] mt-4"
                            >
                                Send Message
                                <Send size={20} className="mt-0.5" />
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}