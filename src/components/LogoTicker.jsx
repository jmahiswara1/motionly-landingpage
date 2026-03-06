import { motion } from 'framer-motion';

export default function LogoTicker() {
    // Stylized text to simulate brand logos
    const brands = [
        { name: 'gojek', style: 'font-sans font-bold lowercase tracking-tighter text-2xl' },
        { name: 'tokopedia', style: 'font-sans font-bold lowercase tracking-tight text-2xl' },
        { name: 'traveloka', style: 'font-sans font-semibold lowercase tracking-wide text-2xl' },
        { name: 'BCA', style: 'font-serif font-black italic tracking-widest text-3xl' },
        { name: 'Indofood', style: 'font-serif font-bold tracking-tight text-2xl' },
        { name: 'TELKOMSEL', style: 'font-sans font-black uppercase tracking-tighter text-xl' },
        { name: 'Kopiko', style: 'font-serif font-black italic tracking-tighter text-3xl' },
    ];

    // Menggabungkan array menjadi dua kali lipat untuk animasi looping yang mulus
    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="py-12 bg-[#F5F5F7] w-full overflow-hidden">
            {/* Wrapper utama menggunakan max-w-7xl agar margin kiri-kanan sejajar dengan Hero */}
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center relative">

                    {/* Intro Text */}
                    {/* Z-index tinggi dan background agar menutupi logo yang mengalir di belakangnya */}
                    <div className="w-full md:w-auto shrink-0 text-center md:text-left z-20 bg-[#F5F5F7] md:pr-8 py-4">
                        <p className="text-sm font-medium text-[#888888] max-w-[200px] leading-snug">
                            Trusted by the biggest brands in Indonesia
                        </p>
                    </div>

                    {/* Marquee Container */}
                    <div className="flex-1 overflow-hidden relative flex">
                        {/* Gradient masks untuk efek memudar di ujung kiri dan kanan */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10 pointer-events-none" />

                        {/* Animasi pergerakan presisi menggunakan Framer Motion */}
                        <motion.div
                            className="flex items-center w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                        >
                            {duplicatedBrands.map((brand, idx) => (
                                <div
                                    key={idx}
                                    className={`pr-12 md:pr-20 shrink-0 text-[#1A1A1A] cursor-default select-none whitespace-nowrap ${brand.style}`}
                                >
                                    {brand.name}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div >
        </section >
    );
}