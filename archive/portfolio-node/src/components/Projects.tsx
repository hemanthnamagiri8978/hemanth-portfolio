"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        id: "ml-optimizer",
        title: "ML-Powered Student-Teacher Ratio Optimizer",
        date: "Sep 2025",
        description: "Designed and trained ML models (Random Forest, Gradient Boosting, K-Means) to analyze school data and predict optimal student-teacher ratios. Automated allocation by identifying patterns in student distribution, teacher availability, and resource constraints to improve efficiency.",
        tech: ["Python", "Scikit-[earn]", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
        github: "#"
    },
    {
        id: "injury-advisor",
        title: "AI-Driven Injury Prevention Advisor",
        date: "Apr 2025",
        description: "Built a machine-learning pipeline that analyzes biometric signals, workout patterns, and movement metrics to detect early indicators of injury risk. Created a robust preprocessing module including feature engineering, normalization, and segmentation of activity data.",
        tech: ["Python", "Pandas", "NumPy", "Scikit-[earn]", "Matplotlib", "Seaborn"],
        github: "#"
    }
];

function ProjectCard({ project, idx }: { project: any; idx: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);

        const width = rect.width;
        const height = rect.height;
        const mouseXRel = e.clientX - rect.left;
        const mouseYRel = e.clientY - rect.top;
        const xPct = (mouseXRel / width) - 0.5;
        const yPct = (mouseYRel / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 400, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 400, damping: 30 });

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="perspective-[1000px] h-full"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="group relative tech-panel transition-all duration-500 flex flex-col h-full bg-[#121214] overflow-hidden hover:shadow-2xl hover:border-zinc-700"
            >
                {/* IDE Window Header */}
                <div className="bg-[#18181b] border-b border-border px-4 py-2 flex items-center gap-3">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                    </div>
                    <div className="text-xs text-muted font-mono flex-1 text-center pr-8 opacity-70">{project.id}.ts</div>
                </div>

                {/* Subtle Hover Spotlight Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-screen z-0"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${mouseX}px ${mouseY}px,
                                rgba(255, 255, 255, 0.04),
                                transparent 80%
                            )
                        `,
                    }}
                />

                <div className="relative z-10 flex flex-col h-full transform-gpu p-6 md:p-8" style={{ transform: "translateZ(30px)" }}>
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-mono">
                                <span className="text-syntax-keyword">const</span> {project.title.replace(/\s+/g, '_')} <span className="text-syntax-operator">=</span> <span className="text-syntax-function">async</span> () <span className="text-syntax-operator">=&gt;</span> &#123;
                            </h3>
                            <span className="text-xs font-mono text-syntax-comment">// {project.date}</span>
                        </div>
                        <a href={project.github} className="text-muted hover:text-foreground transition-colors p-2 z-20">
                            <Github size={20} />
                        </a>
                    </div>

                    <div className="text-zinc-400 leading-relaxed mb-8 flex-grow font-mono text-sm border-l border-border pl-4 group-hover:border-primary/30 transition-colors">
                        <span className="text-syntax-string">`</span>
                        {project.description}
                        <span className="text-syntax-string">`</span>;
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border items-center">
                        <span className="text-xs font-mono text-syntax-keyword mr-2">yield</span>
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-xs font-mono text-syntax-string bg-[#18181b] px-3 py-1 border border-border rounded-md">
                                "{t}"
                            </span>
                        ))}
                        <span className="text-xl font-bold font-mono text-foreground mt-4 block w-full">&#125;;</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative bg-background border-t border-border">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 font-mono"
                >
                    <div className="text-syntax-comment text-sm mb-2">// query database: active_projects</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                        <span className="text-syntax-function">fetchProjects</span>()
                        <span className="animate-blink w-4 h-8 bg-primary inline-block translate-y-1"></span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
