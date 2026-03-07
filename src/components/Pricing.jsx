import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function Pricing() {
    const [isAddonActive, setIsAddonActive] = useState(false);

    const basePrice = 2995;
    const addonPrice = 995;
    const activePrice = isAddonActive ? basePrice + addonPrice : basePrice;

    const features = [
        "Unlimited design requests",
        "One active task at a time",
        "Delivered in a few business days",
        "Source files included",
        "Cancel or pause anytime"
    ];

    return (
        <section className="py-24 md:py-32 bg-[#F5F5F7] px-4 md:px-12 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full max-w-[1100px] rounded-[2rem] bg-[#111111] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative"
            >
                {/* Left Side: Mockup Area */}
                <div className="lg:w-1/2 p-8 md:p-12 relative flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-white/5">
                    {/* Dark gradient background with color splash */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] z-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[80px] rounded-full z-0" />
                    <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-emerald-500/10 blur-[60px] rounded-full z-0" />

                    <p className="text-[#888888] text-[11px] font-medium tracking-wide z-10 w-full text-center mt-2">
                        Example content for demo purposes only.
                    </p>

                    {/* Framer Mockup Window */}
                    <div className="relative w-full aspect-[4/3] max-w-[400px] my-12 z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                        {/* Background Image inside mockup */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />

                        {/* Mockup UI layers */}
                        <div className="absolute bottom-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 w-[45%]">
                            <h4 className="text-white text-xs font-semibold mb-1">Publish it with<br />Framer Studio</h4>
                            <p className="text-white/50 text-[8px] mb-3 leading-tight">Create stunning designs, pressing forward without the wait.</p>
                            <div className="w-16 h-4 bg-white/20 rounded-full" />
                        </div>

                        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2">
                            <div className="w-24 h-24 bg-[#111] rounded-lg border border-white/10 transform -rotate-12 shadow-xl p-2 flex flex-col gap-1">
                                <div className="w-full h-8 bg-blue-600 rounded" />
                                <div className="w-3/4 h-3 bg-white/10 rounded" />
                                <div className="w-1/2 h-3 bg-white/10 rounded" />
                            </div>
                            <div className="w-20 h-20 bg-[#1A1A1A] rounded-lg border border-white/10 transform rotate-6 shadow-xl -mt-8 ml-4 p-2">
                                <div className="w-full h-4 bg-emerald-500 rounded mb-1" />
                                <div className="w-full h-10 bg-white/5 rounded" />
                            </div>
                        </div>
                    </div>

                    <p className="text-[#888888] text-[11px] font-medium tracking-wide z-10 w-full text-center mb-2">
                        Example content for demo purposes only.
                    </p>
                </div>

                {/* Right Side: Pricing Plan */}
                <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#151515] relative z-10">

                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-6 w-full">
                        <div className="flex items-center">
                            <h3 className="text-3xl font-serif italic text-white tracking-widest font-semibold">motionly</h3>
                            <span className="text-[10px] ml-1 align-top font-sans text-white/50 font-normal mt-1 border border-white/20 rounded-full w-3 h-3 flex items-center justify-center">R</span>
                        </div>

                        {/* Toggle Add-on */}
                        <div className="flex flex-col items-end text-right">
                            <span className="text-[#888888] text-xs font-medium mb-1">
                                Additional Active Task
                            </span>
                            <span className="text-[#888888] text-xs font-semibold mb-3">
                                +${addonPrice.toLocaleString()}
                            </span>

                            <button
                                onClick={() => setIsAddonActive(!isAddonActive)}
                                className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${isAddonActive ? 'bg-white' : 'bg-[#333]'}`}
                                aria-label="Toggle Additional Task"
                            >
                                <motion.div
                                    animate={{ x: isAddonActive ? 24 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className={`w-4 h-4 rounded-full shadow-sm ${isAddonActive ? 'bg-black' : 'bg-white'}`}
                                />
                            </button>
                        </div>
                    </div>

                    <p className="text-[#888888] text-sm md:text-base mb-10 leading-relaxed max-w-[90%]">
                        Submit any design task you need. Landing pages, product visuals, brand assets, and more.
                    </p>

                    {/* Price */}
                    <div className="flex items-end mb-8 border-b border-white/5 pb-8">
                        <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            ${activePrice.toLocaleString()}
                        </span>
                        <span className="text-[#888888] text-sm md:text-base mb-1 ml-1 font-medium">
                            /month
                        </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4 mb-12 flex-1">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-white/90 text-sm md:text-base font-medium">
                                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-4 shrink-0">
                                    <Plus className="w-3.5 h-3.5 text-black" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <button className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-base hover:scale-[1.02] transition-transform duration-300 active:scale-[0.98]">
                        Join today
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
