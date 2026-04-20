import { motion } from 'framer-motion';
import dashboardImg from '../assets/habitmetricdashboard.png';

export default function Projects() {
    const features = [
        "Planner → Execution Flow",
        "Unified Habits + Tasks",
        "Rule-Based Daily Structuring",
        "Local-First Persistent Tracking"
    ];

    return (
        <section className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">

                {/* EXACTLY ONE HEADING */}
                <div className="mb-24">
                    <h2 className="text-5xl md:text-8xl font-heading font-bold text-primary tracking-tighter">
                        Featured Project
                    </h2>
                </div>

                {/* EXACTLY ONE HABITMETRIC SHOWCASE */}
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    <div id="project-visual" className="w-full lg:w-3/5 group rounded-[3rem] overflow-hidden border border-border bg-sage/5 p-4">
                        <div className="rounded-[2rem] overflow-hidden shadow-xl border border-border/50">
                            <img
                                src={dashboardImg}
                                className="w-[101.8%] max-w-[101.8%] h-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left"
                                alt="HabitMetric Interface Dashboard"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 space-y-10">
                        <div>
                            <h3 className="text-5xl font-heading font-bold text-primary mb-6 tracking-tighter leading-none">HabitMetric</h3>
                            <p className="text-xl text-secondary leading-relaxed font-light">
                                A habit and planning system built to turn <span className="inline-block hover:-translate-y-1 hover:scale-105 transition-transform duration-300 cursor-default text-primary font-medium underline decoration-sage/30 underline-offset-4 mx-1">rough intentions</span> into <span className="inline-block hover:-translate-y-1 hover:scale-105 transition-transform duration-300 cursor-default text-primary font-medium mx-1">structured daily execution.</span>
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-sage-dark">Core Focus</p>
                            <div className="grid grid-cols-1 gap-4">
                                {features.map(f => (
                                    <div key={f} className="flex items-center gap-3 text-secondary group">
                                        <span className="text-sage">✦</span>
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 flex gap-8 border-t border-border">
                            <a href="https://github.com/harshikagahlot/HabitMetric" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-sage-dark transition-colors text-xs tracking-widest border-b-2 border-primary/10 hover:border-sage pb-1">
                                VIEW ON GITHUB
                            </a>
                            <a href="https://harshikagahlot.github.io/HabitMetric/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-sage-dark transition-colors text-xs tracking-widest border-b-2 border-primary/10 hover:border-sage pb-1">
                                LIVE DEMO ↗
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}