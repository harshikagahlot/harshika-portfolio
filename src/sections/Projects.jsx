import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dashboardImg from '../assets/habitmetricdashboard.png';

export default function Projects() {
    const [open, setOpen] = useState(false);

    const features = [
        "Planner → Execution Flow",
        "Unified Habits + Tasks",
        "Rule-Based Daily Structuring",
        "Local-First Persistent Tracking"
    ];

    return (
        <section className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">

                <div className="mb-24">
                    <h2 className="text-5xl md:text-8xl font-heading font-bold text-primary tracking-tighter">
                        Featured Project
                    </h2>
                </div>

                {/* CLOSED STATE */}
                {!open && (
                    <div
                        onClick={() => setOpen(true)}
                        className="cursor-pointer group rounded-[3rem] overflow-hidden border border-border bg-sage/5 p-4 max-w-3xl mx-auto"
                    >
                        <img
                            src={dashboardImg}
                            className="w-full rounded-[2rem] group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <p className="text-center mt-6 text-primary text-xl font-semibold">
                            HabitMetric
                        </p>
                    </div>
                )}

                {/* OPEN STATE */}
                <AnimatePresence>
                    {open && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setOpen(false)}
                            />

                            {/* EXPANDED CARD */}
                            <motion.div
                                className="fixed inset-0 z-50 flex items-center justify-center px-6"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-background rounded-[2rem] max-w-5xl w-full p-8 shadow-2xl border border-border">

                                    {/* CLOSE */}
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="mb-6 text-sm text-secondary hover:text-primary"
                                    >
                                        Close ✕
                                    </button>

                                    <div className="flex flex-col lg:flex-row gap-10">
                                        <img src={dashboardImg} className="w-full lg:w-1/2 rounded-xl" />

                                        <div className="space-y-6">
                                            <h3 className="text-4xl font-bold text-primary">
                                                HabitMetric
                                            </h3>

                                            <p className="text-secondary">
                                                A habit and planning system to convert intentions into structured execution.
                                            </p>

                                            <div className="space-y-2">
                                                {features.map(f => (
                                                    <p key={f} className="text-sm text-secondary">
                                                        ✦ {f}
                                                    </p>
                                                ))}
                                            </div>

                                            <div className="flex gap-6 pt-4">
                                                <a href="https://github.com/harshikagahlot/HabitMetric" target="_blank" className="text-primary text-sm">
                                                    GitHub
                                                </a>
                                                <a href="https://harshikagahlot.github.io/HabitMetric/" target="_blank" className="text-primary text-sm">
                                                    Live Demo ↗
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}