"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import CustomCursor from "../components/CustomCursor";
import { motion } from "framer-motion";


export default function Home() {
    return (
        <main className="min-h-screen selection:bg-primary/30 selection:text-white cursor-none bg-background">
            <CustomCursor />
            <Navbar />

            <Hero />
            <Skills />
            <Projects />
            <Experience />

            {/* Contact Terminal Footer */}
            <footer id="contact" className="pb-16 pt-32 border-t border-border relative z-10 bg-[#09090b] font-mono">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <div className="text-syntax-comment text-sm mb-2">// initiate_contact.sh</div>
                    <h2 className="text-3xl font-bold font-mono mb-6 text-foreground flex items-center justify-center gap-2">
                        <span className="text-syntax-function">connect</span>()
                    </h2>
                    <p className="text-muted max-w-xl mx-auto mb-10 text-sm leading-relaxed border-l border-border pl-4 text-left">
                        <span className="text-syntax-comment">// Status: ONLINE &amp; OPEN TO OPPORTUNITIES</span><br />
                        <span className="text-syntax-comment">// Fields: SDE, ML Engineering, Open Source</span><br />
                        <span className="text-syntax-comment">// Response time: &lt; 24h</span>
                    </p>
                    <motion.a
                        href="mailto:hemanthnamagiri@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-block px-10 py-4 bg-primary text-background font-bold hover:bg-primaryDark hover:shadow-xl transition-all duration-300 tracking-wider text-sm rounded-md"
                    >
                        send_packet()
                    </motion.a>

                    <div className="mt-20 text-xs text-muted font-mono space-y-2 opacity-50">
                        <p>/* Designed and Built by Namagiri Hemanth Kumar */</p>
                        <p>/* &copy; {new Date().getFullYear()} All Rights Reserved */</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
