import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    { id: 1, title: "Brand Identity", category: "3D Animation", color: "from-purple-500/40 to-blue-600/40" },
    { id: 2, title: "Product Launch", category: "Motion Graphics", color: "from-emerald-500/40 to-teal-600/40" },
    { id: 3, title: "Explainer Video", category: "2D Animation", color: "from-orange-500/40 to-red-600/40" },
    { id: 4, title: "Social Campaign", category: "Mixed Media", color: "from-pink-500/40 to-rose-600/40" }
];

export default function Portfolio() {
    const targetRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const calculateScroll = () => {
            if (containerRef.current) {
                // scrollWidth sudah otomatis menghitung total lebar kartu + gap + padding kanan (px-24)
                const fullWidth = containerRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;

                // Dengan mengurangi fullWidth dengan viewportWidth, 
                // pergeseran akan berhenti tepat saat sisi kanan container menyentuh ujung kanan layar.
                setScrollWidth(fullWidth - viewportWidth);
            }
        };

        calculateScroll();
        const timeoutId = setTimeout(calculateScroll, 100);

        window.addEventListener('resize', calculateScroll);
        return () => {
            window.removeEventListener('resize', calculateScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Rentang [0, 0.85] memastikan animasi geser selesai sebelum user keluar dari section ini,
    // memberikan waktu "pause" agar kartu terakhir bisa dinikmati sejenak.
    const x = useTransform(scrollYProgress, [0, 0.85], [0, -scrollWidth]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#0A0A0F] overscroll-none">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Section Header */}
                <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-10 text-white pointer-events-none w-full max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-medium tracking-wide uppercase text-white/90"
                    >
                        Selected Works
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
                    >
                        Turning ideas into <span className="font-serif italic font-normal text-white/90">visual</span> masterpieces.
                    </motion.h2>
                </div>

                {/* Horizontal Scrolling Cards */}
                <motion.div
                    ref={containerRef}
                    style={{ x }}
                    // Class px-24 di sini memberikan padding kiri awal, sekaligus padding kanan akhir
                    className="flex gap-8 px-6 md:px-12 lg:px-24 pt-48 items-center w-max"
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative h-[55vh] md:h-[65vh] w-[85vw] md:w-[60vw] lg:w-[45vw] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 shrink-0 cursor-pointer"
                        >
                            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20 flex flex-col justify-end bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent h-2/3">
                                <motion.span className="text-white/70 font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
                                    {project.category}
                                </motion.span>
                                <motion.h3 className="text-white text-3xl md:text-5xl font-semibold transition-transform duration-500 group-hover:-translate-y-2">
                                    {project.title}
                                </motion.h3>
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-screen group-hover:scale-110 transition-transform duration-[1.5s] ease-out`} />
                            <div className="absolute inset-0 aurora-bg opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                            <div className="absolute inset-4 md:inset-8 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 backdrop-blur-[2px] pointer-events-none" />
                        </div>
                    ))}

                    {/* PASTIKAN TIDAK ADA DIV TAMBAHAN (SPACER) DI BAWAH SINI */}
                </motion.div>
            </div>
        </section>
    );
}