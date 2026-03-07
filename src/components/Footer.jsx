import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-[#111] pt-24 md:pt-32 pb-8 px-4 md:px-12 flex flex-col items-center justify-between min-h-[500px] relative overflow-hidden">

            {/* Background subtle elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            {/* CTA Section */}
            <div className="container mx-auto max-w-4xl flex flex-col justify-center items-center text-center z-10 flex-1 mb-24 md:mb-32">

                {/* Brand Logo Large */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start mb-8 cursor-pointer group"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-bold text-white tracking-widest leading-none group-hover:opacity-80 transition-opacity">
                        motionly
                    </h2>
                    <span className="text-white/50 text-sm md:text-lg font-sans ml-2 mt-2 border border-white/20 rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                        R
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mb-6"
                >
                    Animation doesn't need to be complicated.
                </motion.h3>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#888888] text-lg md:text-xl max-w-xl mx-auto mb-10"
                >
                    Stop spending hours trying to find the right freelancer. Get all your motion design needs handled in one place.
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:scale-105 hover:bg-gray-100 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    Get Started
                </motion.button>
            </div>

            {/* Footer Bottom Bar */}
            <div className="container mx-auto w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 z-10 text-[#888888] text-sm">
                <p>© {new Date().getFullYear()} motionly. All rights reserved.</p>

                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-white transition-colors tracking-wide">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors tracking-wide">Terms</a>
                </div>
            </div>
        </footer>
    );
}
