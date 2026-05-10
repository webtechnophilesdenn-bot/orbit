// src/components/BusinessesSection.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const businesses = [
    {
        title: "Senco Gold",
        description: "Digital Online Services – Senco offers certified hallmarked gold, diamond, platinum, and silver jewellery. One Of The Leading Jewellery Store For Gold, Diamond & Platinum Jewellery.",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop",
        logo: "https://images.unsplash.com/photo-1611080626919-7cf5a969fc8f?q=80&w=200&auto=format&fit=crop",
    },
    {
        title: "Hyundai",
        description: "Hyundai uses modern digital communication systems and automation tools to streamline customer engagement and sales processes efficiently at scale.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
        logo: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&auto=format&fit=crop",
    },
    {
        title: "Godrej",
        description: "Godrej enhances customer interaction and marketing productivity through seamless automation platforms, ensuring every touchpoint is optimized.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    },
];

const partnerLogos = [
    { type: "text", name: "MAHINDRA" },
    { type: "text", name: "KUBOTA" },
    { type: "text", name: "LANCER" },
    { type: "text", name: "RASNA" },
    { type: "text", name: "DURO" },
    { type: "text", name: "PNB" },
    { type: "text", name: "HYUNDAI" },
];

export default function BusinessesSection() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % businesses.length);
    const prevSlide = () => setIndex((prev) => (prev === 0 ? businesses.length - 1 : prev - 1));

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-gray-50 py-24 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Businesses Choose Us
                    </h2>
                    <p className="text-gray-500 mt-4 text-xl font-medium">
                        Trusted by leading brands worldwide.
                    </p>
                </div>

                {/* Static Slideshow Card - Animation removed to stop flashing */}
                <div className="relative mb-12 min-h-[480px]">
                    <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                        {/* Text Side */}
                        <div className="p-8 md:p-16 flex flex-col justify-center">
                            <h3 className="text-4xl font-black text-gray-900 leading-tight">
                                {businesses[index].title}
                            </h3>
                            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed min-h-[140px]">
                                {businesses[index].description}
                            </p>

                            <div className="mt-8 flex items-center gap-4">
                                <button onClick={prevSlide} className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextSlide} className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                                    <ChevronRight size={24} />
                                </button>
                                <div className="ml-4 flex gap-2">
                                    {businesses.map((_, i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-indigo-600" : "w-2 bg-gray-200"}`} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-72 lg:h-auto bg-gray-100">
                            <img
                                src={businesses[index].image}
                                className="absolute inset-0 w-full h-full object-cover"
                                alt={businesses[index].title}
                            />
                            <div className="absolute bottom-6 right-6 bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                                <img src={businesses[index].logo} className="w-14 h-14 object-cover rounded-lg" alt="brand logo" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infinite Logo Marquee */}
                <div className="border-t border-gray-200 pt-12">
                    <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">
                        Global Partners
                    </p>

                    <div className="relative flex overflow-hidden">
                        <motion.div
                            className="flex whitespace-nowrap gap-24 items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 25,
                            }}
                        >
                            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                                <div key={i} className="flex-shrink-0 grayscale opacity-40">
                                    <span className="text-2xl md:text-3xl font-black text-gray-400 tracking-tighter">
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Side Fades */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
                    </div>
                </div>

            </div>
        </section>
    );
}