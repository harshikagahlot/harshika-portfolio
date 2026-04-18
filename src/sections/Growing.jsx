export default function Growing() {
    const tags = [
        "Frontend Architecture",
        "Interaction Design",
        "Product Thinking",
        "AI-Assisted Prototyping",
        "UX Decision Making"
    ];

    return (
        <section className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-stretch">
                    {/* Left Column: Title and Skills */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <p className="text-sage-dark font-bold text-[10px] uppercase tracking-[0.4em] mb-6">Active Evolution</p>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 tracking-tighter text-primary">Currently Growing Through</h2>
                        <div className="flex flex-wrap gap-3">
                            {tags.map(t => (
                                <span key={t} className="px-5 py-2.5 rounded-full border border-sage/20 bg-white text-primary text-xs font-semibold hover:border-sage-dark transition-colors cursor-default shadow-sm">{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Writing & Thoughts Card */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="p-10 md:p-12 bg-white border border-sage/40 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="text-sage-dark font-bold text-[10px] tracking-widest uppercase mb-6">WRITING & THOUGHTS</p>
                            <h4 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4 leading-tight">Documenting product, design, and building decisions.</h4>
                            <p className="text-secondary text-sm md:text-base leading-relaxed mb-8">I write about product thinking, design choices, learning through projects, and building more intentionally.</p>
                            <a href="https://productandperspective.blogspot.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest hover:text-sage-dark transition-colors group">
                                <span className="border-b-2 border-primary/20 group-hover:border-sage-dark pb-1">Read the Blog</span>
                                <span className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}