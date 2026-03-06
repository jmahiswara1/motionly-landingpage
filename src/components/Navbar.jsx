import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Mencegah scroll saat menu terbuka 
    // (Catatan: Jika body utama sudah overflow-hidden, efek ini mungkin redundan, 
    // tapi tetap aman dibiarkan untuk berjaga-jaga jika komponen ini dipakai di halaman lain)
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // Pastikan sesuai dengan kebutuhan halaman statis Anda
        }
    }, [isMenuOpen]);

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6"
            >
                {/* Elemen Background Statis dengan Blur Permanen.
                  Nilai blur disetel langsung (misal 8px) karena layar tidak di-scroll.
                */}
                <div
                    className="absolute inset-0 -z-10 pointer-events-none"
                    style={{
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        // Efek fade-out transparan ke bawah tetap dipertahankan
                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    }}
                />

                <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-serif italic font-bold tracking-tight relative z-50">
                            motionly®
                        </a>
                    </div>

                    <motion.button
                        className="relative z-50 flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
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

            {/* Fullscreen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-[#FFFFFF] flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col items-center gap-8 text-3xl md:text-5xl font-bold">
                            <motion.a href="/" className="hover:text-gray-500 transition-colors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} onClick={() => setIsMenuOpen(false)}>Home</motion.a>
                            <motion.a href="#pricing" className="hover:text-gray-500 transition-colors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} onClick={() => setIsMenuOpen(false)}>Pricing</motion.a>
                            <motion.a href="#works" className="hover:text-gray-500 transition-colors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} onClick={() => setIsMenuOpen(false)}>Works</motion.a>
                            <motion.a href="#faq" className="hover:text-gray-500 transition-colors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }} onClick={() => setIsMenuOpen(false)}>FAQ</motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}