import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-primary/30 selection:text-white">
            <Navbar />

            <Hero />

            <div className="relative">
                <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none"></div>
                <Skills />
            </div>

            <div className="relative">
                <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[128px] pointer-events-none"></div>
                <Projects />
            </div>

            <div className="relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[128px] pointer-events-none"></div>
                <Experience />
            </div>

            {/* Contact Section Footer */}
            <footer id="contact" className="py-12 border-t border-white/10 mt-20 relative z-10 bg-black/50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold font-space mb-8">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8">
                        I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
                    </p>
                    <a href="mailto:hemanthnamagiri@gmail.com" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                        Say Hello
                    </a>

                    <div className="mt-16 text-sm text-slate-500 font-mono">
                        <p>Designed and Built by Namagiri Hemanth Kumar</p>
                        <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
