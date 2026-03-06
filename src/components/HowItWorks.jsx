import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HowItWorks() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const skillsRow1 = ["UI Animation", "Logo Intro", "Explainer Video"];
    const skillsRow2 = ["Social Ads", "Character Design", "3D Render", "VFX"];
    const skillsRow3 = ["Lottie", "App Animation", "App Promo", "Product Video"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-[#F5F5F7] text-[#1A1A1A]">
            <div className="w-full max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    ref={containerRef}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col items-center text-center mb-16 md:mb-24"
                >
                    <motion.div variants={itemVariants} className="inline-block px-5 py-2.5 bg-white rounded-full text-sm font-medium mb-6 shadow-sm border border-black/5">
                        How it works
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-balance max-w-4xl leading-[1.1]">
                        Welcome to the <span className="font-serif italic font-medium pr-1">better</span> way of getting animation done.
                    </motion.h2>
                </motion.div>

                {/* 3 Tall Cards Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Card 1: Subscribe */}
                    <motion.div variants={itemVariants} className="bg-white rounded-[32px] p-6 flex flex-col h-full shadow-sm border border-black/[0.04]">
                        {/* Grey inner box - Pricing */}
                        <div className="bg-[#FAFAFA] rounded-[24px] p-8 mb-8 relative flex flex-col items-center justify-center min-h-[300px] border border-black/[0.03]">
                            <div className="absolute top-4 right-4">
                                <div className="bg-white text-[#1A1A1A] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm border border-black/5">
                                    Popular
                                </div>
                            </div>

                            <div className="w-full flex flex-col items-center text-center mt-4">
                                <span className="font-serif italic font-bold text-xl tracking-tight mb-8">motionly<sup className="text-[10px]">&reg;</sup></span>

                                <div className="mb-10">
                                    <span className="text-[40px] font-bold tracking-tight">$3,495</span>
                                    <span className="text-gray-500 text-sm font-medium"> /month</span>
                                </div>

                                <a href="#pricing" className="w-full bg-[#0A0A0F] text-white py-4 rounded-full font-semibold flex items-center justify-center hover:bg-black hover:scale-[1.02] transition-all">
                                    Join today
                                </a>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="px-2 pb-4">
                            <h3 className="text-[22px] font-bold tracking-tight mb-3">Subscribe</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed">Pick a plan and get started right away. No calls, no setup, just animation on demand.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Request */}
                    <motion.div variants={itemVariants} className="bg-white rounded-[32px] p-6 flex flex-col h-full shadow-sm border border-black/[0.04]">
                        {/* Grey inner box - Tags */}
                        <div className="bg-[#FAFAFA] rounded-[24px] p-6 mb-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] border border-black/[0.03]">

                            {/* Faded Tags Background */}
                            <div className="absolute inset-0 flex flex-col justify-center gap-3 opacity-60">
                                <div className="flex gap-3 whitespace-nowrap -ml-12">
                                    {skillsRow1.map((s, i) => <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-700 shadow-sm border border-black/[0.03]">{s}</span>)}
                                </div>
                                <div className="flex gap-3 whitespace-nowrap -ml-28">
                                    {skillsRow2.map((s, i) => <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-700 shadow-sm border border-black/[0.03]">{s}</span>)}
                                </div>
                                <div className="flex gap-3 whitespace-nowrap -ml-8">
                                    {skillsRow3.map((s, i) => <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-700 shadow-sm border border-black/[0.03]">{s}</span>)}
                                </div>
                            </div>

                            {/* Gradient Overlay for blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/40 to-[#FAFAFA]/10 pointer-events-none" />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none" />

                            {/* Floating Logo Center */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-16 h-16 bg-[#0A0A0F] rounded-2xl flex items-center justify-center z-10 shadow-xl border border-white/10"
                            >
                                <span className="font-serif italic text-white text-3xl font-bold pr-1">m</span>
                            </motion.div>

                        </div>

                        {/* Text */}
                        <div className="px-2 pb-4">
                            <h3 className="text-[22px] font-bold tracking-tight mb-3">Request</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed">Submit any animation task you need. Explainer videos, Lottie files, UI motion, and more.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Receive */}
                    <motion.div variants={itemVariants} className="bg-white rounded-[32px] p-6 flex flex-col h-full shadow-sm border border-black/[0.04]">
                        {/* Grey inner box - Graphic */}
                        <div className="bg-[#FAFAFA] rounded-[24px] p-8 mb-8 relative flex flex-col items-center justify-end min-h-[300px] border border-black/[0.03]">

                            {/* Stylish minimal folder icon */}
                            <motion.div
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                className="relative w-[180px] h-[120px] mb-4 origin-bottom flex justify-center cursor-pointer"
                            >
                                {/* Back folder plane and flap */}
                                <div className="absolute inset-0 top-6 left-0 right-0 bg-[#EAEAEC] rounded-xl z-0" />
                                <div className="absolute top-2 left-0 w-24 h-6 bg-[#EAEAEC] rounded-tl-xl rounded-tr-lg z-0" />

                                {/* 3 Image Cards that pop out */}
                                {/* Card 1 (Left) */}
                                <motion.div
                                    variants={{
                                        rest: { y: -5, x: -10, rotate: -2, scale: 0.85, opacity: 1 },
                                        hover: { y: -70, x: -60, rotate: -15, scale: 1, opacity: 1 }
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute bottom-6 w-[140px] h-[90px] bg-gradient-to-br from-blue-400 to-blue-200 rounded-lg shadow-lg border-[3px] border-white z-10 overflow-hidden"
                                >
                                    <div className="w-full h-full flex flex-col pt-2 px-2">
                                        <div className="w-full h-1/2 bg-white/20 rounded" />
                                        <div className="w-2/3 h-1 bg-white/40 mt-2 rounded" />
                                        <div className="w-1/2 h-1 bg-white/40 mt-1 rounded" />
                                    </div>
                                </motion.div>

                                {/* Card 2 (Right) */}
                                <motion.div
                                    variants={{
                                        rest: { y: 0, x: 10, rotate: 2, scale: 0.85, opacity: 1 },
                                        hover: { y: -65, x: 60, rotate: 15, scale: 1, opacity: 1 }
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
                                    className="absolute bottom-6 w-[140px] h-[90px] bg-gradient-to-br from-indigo-900 to-black rounded-lg shadow-lg border-[3px] border-white z-10 overflow-hidden"
                                >
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 blur-sm" />
                                    </div>
                                </motion.div>

                                {/* Card 3 (Center - Highest) */}
                                <motion.div
                                    variants={{
                                        rest: { y: -15, x: 0, rotate: 0, scale: 0.9, opacity: 1 },
                                        hover: { y: -90, x: 0, rotate: -5, scale: 1.1, opacity: 1 }
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                                    className="absolute bottom-6 w-[140px] h-[90px] bg-gradient-to-br from-teal-400 to-teal-200 rounded-lg shadow-lg border-[3px] border-white z-20 flex items-center justify-center"
                                >
                                    <span className="text-white font-bold text-2xl tracking-tighter">AUG</span>
                                </motion.div>

                                {/* Front folder flap (Animated to open) */}
                                <motion.div
                                    variants={{
                                        rest: { rotateX: 0 },
                                        hover: { rotateX: -30 }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    style={{ transformOrigin: "bottom" }}
                                    className="absolute inset-0 top-10 bg-[#FFFFFF] rounded-xl shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center z-30"
                                >
                                    <span className="font-serif italic text-gray-300 text-5xl font-bold opacity-30 select-none pb-2">m</span>
                                </motion.div>
                            </motion.div>

                        </div>

                        {/* Text */}
                        <div className="px-2 pb-4">
                            <h3 className="text-[22px] font-bold tracking-tight mb-3">Receive</h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed">Your animation is delivered in a few business days. Simple, fast, and ready to use.</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
