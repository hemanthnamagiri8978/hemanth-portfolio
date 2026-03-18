"use client";

import { motion } from "framer-motion";
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

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Featured <span className="text-secondary">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative rounded-2xl overflow-hidden glass border-border hover:border-secondary/50 transition-colors p-8 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                                    <span className="text-xs font-mono text-muted">{project.date}</span>
                                </div>
                                <a href={project.github} className="text-muted hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                                    <Github size={20} />
                                </a>
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
