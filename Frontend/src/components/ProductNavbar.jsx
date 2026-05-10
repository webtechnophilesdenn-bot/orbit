// src/components/ProductNavbar.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
    { id: "sales", label: "Sales" },
    { id: "marketing", label: "Marketing" },
    { id: "lead", label: "Lead & Engagement" },
    { id: "service", label: "Customer Service" },
    { id: "team", label: "Team Productivity" },
    { id: "tools", label: "Tools" },
];

export default function ProductNavbar() {
    const [active, setActive] = useState("sales");

    useEffect(() => {
        const handleScroll = () => {
            let current = active;
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 250 && rect.bottom >= 250) {
                        current = section.id;
                    }
                }
            });
            if (current !== active) {
                setActive(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [active]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -160;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActive(id);
        }
    };

    return (
        <div className="sticky top-[80px] lg:top-[88px] z-40 flex justify-center w-full px-4 pt-4 pb-6 pointer-events-none">
            <div className="pointer-events-auto bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-1.5 flex items-center gap-1 overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {sections.map((section) => {
                    const isActive = active === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`relative px-6 py-3 rounded-full whitespace-nowrap text-sm md:text-base font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeProductTab"
                                    className="absolute inset-0 bg-indigo-600 rounded-full shadow-md"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{section.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}