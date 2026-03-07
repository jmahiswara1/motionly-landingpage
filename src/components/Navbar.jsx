import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll bar handling removed to prevent layout shift and jumping
    // The fullscreen menu will simply overlay on top.

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Works', href: '#works' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
    ];

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6"
            >
                {/* Background blur effect */}
                <div
                    className="absolute inset-0 -z-10 pointer-events-none"
                    style={{
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    }}
                />

                <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-serif italic font-bold tracking-tight relative z-50 text-[#111]">
                            motionly®
                        </a>
                    </div>

                    <motion.button
                        className="relative z-50 flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm border border-black/5 text-[#111]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isMenuOpen ? 'Close' : 'Menu'}
                        <motion.svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            animate={{ rotate: isMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                    </motion.button>
                </div>
            </motion.nav>

            {/* Fullscreen Swipe Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col items-center gap-6 md:gap-8 text-4xl md:text-5xl lg:text-7xl font-bold mt-12">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    className="text-[#111] hover:text-[#888888] transition-colors"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}