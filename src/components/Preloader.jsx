import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0F]"
        >
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                    className="text-4xl md:text-6xl font-serif italic text-white tracking-tight"
                >
                    motionly®
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Preloader;
