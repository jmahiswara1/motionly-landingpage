import { motion } from 'framer-motion';
import { ArrowRight, Video } from 'lucide-react';
import blobImg from '../assets/gradient.png';

export default function Hero() {
    const tags = ["Motion Graphics", "2D Animation", "3D Animation", "Explainer Videos", "Lottie Animations", "UI/UX Motion"];

    return (
        <section className="relative h-screen min-h-[700px] flex flex-col justify-center top-0 overflow-hidden pt-20 w-full">

            {/* Background Gradient Image */}
            <motion.img
                src={blobImg}
                alt="Gradient Background"
                className="absolute inset-y-0 right-0 w-full md:w-[70%] lg:w-[60%] h-full object-cover object-right -z-10 pointer-events-none"
                style={{
                    mixBlendMode: 'multiply',
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10 w-full h-full">
                    {/* Left Content Area */}
                    <div className="flex flex-col items-start justify-center">

                        {/* Marquee Tags */}
                        <div className="flex overflow-hidden relative w-full max-w-[400px] mb-8 mask-linear-fade">
                            {/* Gradient fade masks for edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10" />
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10" />

                            <div className="flex animate-marquee gap-3 pr-3 whitespace-nowrap py-1">
                                {tags.map((tag, idx) => (
                                    <span key={idx} className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border border-black/5 text-[#1A1A1A]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex animate-marquee gap-3 pr-3 whitespace-nowrap py-1" aria-hidden="true">
                                {tags.map((tag, idx) => (
                                    <span key={`copy-${idx}`} className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border border-black/5 text-[#1A1A1A]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6 text-balance"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            World-class <span className="font-serif italic font-medium pr-2">motion</span> <br />
                            whenever <br />
                            you need it.
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-[#888888] max-w-md mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            A monthly motion graphics subscription for startups, creators, and brands who need stunning animations without the wait.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.a
                                href="#pricing"
                                className="relative overflow-hidden group bg-black text-white px-8 py-4 rounded-full font-medium flex items-center justify-center w-full sm:w-auto border border-black"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Reveal Background */}
                                <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full pointer-events-none" />

                                {/* Content */}
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                                    See Pricing <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </motion.a>

                            {/* <motion.a
                                href="#contact"
                                className="bg-white text-[#1A1A1A] px-6 py-4 rounded-full font-medium flex items-center justify-center gap-3 w-full sm:w-auto shadow-sm border border-black/5 hover:bg-gray-50 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden flex items-center justify-center">
                                        <span className="text-[10px]">👩‍🎨</span>
                                    </div>
                                </div>
                            </motion.a> */}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
