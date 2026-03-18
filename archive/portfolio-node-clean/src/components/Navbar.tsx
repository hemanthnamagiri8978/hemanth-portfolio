"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Academic Journey", href: "#academic-journey" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 rounded-b-2xl mx-auto max-w-7xl mt-4 px-6 py-4 transition-all duration-300">
            <div className="flex items-center justify-between">
                <a href="#" className="text-2xl font-bold font-space text-white flex items-center gap-2">
                    <span className="text-primary">N</span>HK<span className="text-secondary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:glow-text relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2"
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
