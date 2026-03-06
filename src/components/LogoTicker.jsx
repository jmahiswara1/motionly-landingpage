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

    return (
        <section className="py-12 bg-[#F5F5F7] w-full overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                    {/* Intro Text */}
                    <div className="w-full md:w-auto shrink-0 text-center md:text-left">
                        <p className="text-sm font-medium text-[#888888] max-w-[200px] leading-snug">
                            Trusted by the biggest brands in Indonesia
                        </p>
                    </div>

                    {/* Marquee Container */}
                    <div className="flex flex-1 overflow-hidden relative w-full">
                        {/* Gradient masks for smooth fading at edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10 pointer-events-none" />

                        <div className="flex animate-marquee items-center gap-16 md:gap-24 pr-16 md:pr-24">
                            {brands.map((brand, idx) => (
                                <div key={idx} className={`text-[#1A1A1A] cursor-default select-none whitespace-nowrap ${brand.style}`}>
                                    {brand.name}
                                </div>
                            ))}
                        </div>
                        <div className="flex animate-marquee items-center gap-16 md:gap-24 pr-16 md:pr-24" aria-hidden="true">
                            {brands.map((brand, idx) => (
                                <div key={`copy-${idx}`} className={`text-[#1A1A1A] cursor-default select-none whitespace-nowrap ${brand.style}`}>
                                    {brand.name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
