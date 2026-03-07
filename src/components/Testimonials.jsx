import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const testimonials = [
    {
        name: "Gadang Mahiswara",
        role: "Founder, Minos",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Leo&backgroundColor=fecaca",
        quote: "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I've had."
    },
    {
        name: "Gadang Mahiswara",
        role: "Head of Product, Haptik",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Luna&backgroundColor=ccfbf1",
        quote: "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth."
    },
    {
        name: "Gadang Mahiswara",
        role: "Creative Director, Octave",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=f3e8ff",
        quote: "The quality of design is top-tier and the process is frictionless. motionly feels like cheating in the best way."
    },
    {
        name: "Gadang Mahiswara",
        role: "CEO, Vertex",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Zoe&backgroundColor=d9f99d",
        quote: "We've scaled our marketing output 3x since partnering with motionly. The consistency and speed are unmatched."
    },
    {
        name: "Gadang Mahiswara",
        role: "Marketing Director, Bloom",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0",
        quote: "Finally a subscription service that actually delivers high-end agency quality. The ROI has been incredible."
    }
];

export default function Testimonials() {
    const [width, setWidth] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef();
    const x = useMotionValue(0);

    const updateWidth = () => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        const unsubscribe = x.on("change", (latestX) => {
            if (width > 0) {
                // Determine active index based on drag progress
                const progress = -latestX / width;
                const newIndex = Math.min(
                    Math.max(Math.round(progress * (testimonials.length - 1)), 0),
                    testimonials.length - 1
                );
                setActiveIndex(newIndex);
            }
        });
        return () => unsubscribe();
    }, [x, width]);

    const handleDotClick = (index) => {
        if (width > 0) {
            const newX = -index * (width / (testimonials.length - 1));
            animate(x, newX, {
                type: "spring",
                stiffness: 300,
                damping: 30
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-24 md:py-32 bg-[#F5F5F7] overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 mb-16 flex flex-col items-center justify-center text-center">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-black/5 text-sm font-medium mb-8">
                    Testimonials
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#111] max-w-3xl leading-[1.1]">
                    Turns out, people like getting things <span className="font-serif italic font-normal tracking-wide">done.</span>
                </h2>
            </div>

            <div className="relative max-w-[1400px] mx-auto pb-16">
                {/* Horizontal draggable carousel */}
                <motion.div
                    ref={carouselRef}
                    whileTap={{ cursor: "grabbing" }}
                    className="cursor-grab overflow-hidden px-4 md:px-12 pt-4"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6 w-max items-stretch"
                        style={{ x }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="w-[320px] md:w-[380px] bg-white rounded-3xl p-8 shadow-sm border border-black/5 shrink-0 flex flex-col relative"
                            >
                                {/* Quote Icon background */}
                                <div className="absolute top-8 right-8 text-[#F5F5F7] opacity-60 pointer-events-none">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </svg>
                                </div>

                                <div className="flex items-center gap-4 mb-6 z-10 pointer-events-none">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        draggable="false"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-[#111]">{testimonial.name}</h4>
                                        <p className="text-xs text-[#888888]">{testimonial.role}</p>
                                    </div>
                                </div>

                                <p className="text-[#666666] leading-relaxed text-sm z-10 pointer-events-none">
                                    {testimonial.quote}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-12">
                    <div className="bg-[#E5E5E7] rounded-full px-4 py-2 flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${index === activeIndex ? 'bg-white' : 'bg-black/20'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
