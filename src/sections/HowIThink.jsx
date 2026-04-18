export default function HowIThink() {
    const principles = [
        {
            title: "Clarity over clutter",
            desc: "Every element must earn its place. Interfaces should be self-evident, not overwhelming."
        },
        {
            title: "Action over decoration",
            desc: "Visuals should serve a purpose. Good design guides the user toward meaningful actions."
        },
        {
            title: "Flow before features",
            desc: "A broken sequence destroys a great feature. I prioritize how a user moves through a system."
        }
    ];

    return (
        <section className="py-32 px-6 bg-[#F1F0EA]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 max-w-2xl">
                    <p className="text-sage-dark font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Core Principles</p>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary tracking-tighter">How I Think</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((p, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-sage/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <span className="text-sage font-heading font-bold text-5xl opacity-40 mb-6 block">0{i + 1}</span>
                            <h3 className="text-2xl font-heading font-bold text-primary mb-4">{p.title}</h3>
                            <p className="text-secondary leading-relaxed text-sm md:text-base">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}