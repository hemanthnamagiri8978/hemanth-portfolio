"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section id="about" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col items-center">

                {/* Placeholder for Professional Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-surface shadow-2xl overflow-hidden mb-8 relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    {/* Replace src with actual image path or URL */}
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400">
                        [Picture]
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                >
                    <h2 className="text-secondary font-mono tracking-widest text-sm uppercase mb-3">Software Engineer</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white font-space">
                        Namagiri <span className="text-gradient">Hemanth Kumar</span>
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        I build intelligent, scalable solutions. Specialized in machine learning integrations, full-stack development, and creating seamless digital experiences.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors border border-white/10">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-12 text-muted">
                        <a href="https://github.com/githubhemanthnamagiri8978" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/namagirihemanth51" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:hemanthnamagiri@gmail.com" className="hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
