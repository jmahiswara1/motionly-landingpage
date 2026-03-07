import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Clients() {
    const containerRef = useRef(null);

    // Melacak pergerakan scroll untuk memutar lengkungan
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Putaran halus saat user scroll (-15 derajat ke 15 derajat)
    const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

    // Putaran balik agar wajah avatar selalu menghadap atas (tidak terbalik)
    const counterRotate = useTransform(rotate, r => -r);

    const avatars = [
        "https://api.dicebear.com/7.x/notionists/svg?seed=Leo&backgroundColor=fecaca",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Luna&backgroundColor=ccfbf1",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=f3e8ff",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Zoe&backgroundColor=d9f99d",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=fef08a",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Mimi&backgroundColor=bbf7d0",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Jack&backgroundColor=bfdbfe",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Jude&backgroundColor=fbcfe8",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Avery&backgroundColor=e9d5ff",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Riley&backgroundColor=fed7aa",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Leo&backgroundColor=fecaca",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Luna&backgroundColor=ccfbf1",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=f3e8ff",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Zoe&backgroundColor=d9f99d",
    ];

    return (
        <section
            id="clients"
            ref={containerRef}
            // overflow-hidden dikembalikan agar layar tidak bisa geser kiri-kanan
            className="relative w-full overflow-hidden bg-[#F8F9FA] pt-32 md:pt-48 pb-10 min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center"
        >
            {/* 1. WRAPPER MASKING: Kotak ini sengaja dibuat lebih besar (1100px) untuk menampung tonjolan avatar */}
            <div
                style={{
                    maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)'
                }}
                className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] md:w-[1200px] md:h-[1200px] pointer-events-none z-0 flex items-center justify-center"
            >
                {/* 2. LINGKARAN PUTAR: Ukuran aslinya (900px), diletakkan di tengah wrapper masking */}
                <motion.div
                    style={{ rotate }}
                    className="relative w-[900px] h-[900px] md:w-[900px] md:h-[900px] rounded-full"
                >
                    {avatars.map((src, index) => {
                        const totalAvatars = avatars.length;
                        const angleRange = 240; // Total bentangan 180 derajat (setengah lingkaran sempurna)
                        const startAngle = -(angleRange / 2);
                        const angleDeg = startAngle + (index * (angleRange / (totalAvatars - 1)));

                        // Menghitung jarak avatar dari titik puncak atas (0 derajat)
                        const distanceFromCenter = Math.abs(angleDeg);

                        // Avatar akan mulai blur jika posisinya melebihi 40 derajat dari titik atas
                        const blurAmount = distanceFromCenter > 70 ? (distanceFromCenter - 70) * 0.15 : 0;

                        return (
                            <div
                                key={index}
                                className="absolute inset-0 pointer-events-none"
                                style={{ transform: `rotate(${angleDeg}deg)` }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                    <motion.div style={{ rotate: counterRotate }}>
                                        <div
                                            style={{
                                                transform: `rotate(${-angleDeg}deg)`,
                                                filter: `blur(${blurAmount}px)`,
                                                WebkitFilter: `blur(${blurAmount}px)`
                                            }}
                                            className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden border-[4px] border-[#F8F9FA] shadow-xl bg-white relative flex items-center justify-center transition-all"
                                        >
                                            <img
                                                src={src}
                                                alt={`Client ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>


            {/* 3. Teks Utama & Tombol di Tengah */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto mt-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-[#1A1A1A] leading-[1.05] mb-8"
                >
                    100+ clients getting <br />
                    <span className="font-serif italic font-medium pr-1">better</span> design, faster.
                </motion.h2>
            </div>

            {/* Fade Overlay Tambahan di Bawah */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent z-20 pointer-events-none" />
        </section>
    );
}