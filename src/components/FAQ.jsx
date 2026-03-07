import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How many animation requests can I submit?",
        answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
    },
    {
        question: "What kind of animation work is included?",
        answer: "We cover a wide range of needs including explainer videos, Lottie animations for UI, 3D product renders, and social media motion graphics."
    },
    {
        question: "How fast will I receive my animations?",
        answer: "On average, most requests are completed in just two days or less. However, more complex requests such as 3D animation can take longer."
    },
    {
        question: "Can I pause my subscription?",
        answer: "Absolutely. You can pause your subscription at any time and return when you have additional design needs."
    },
    {
        question: "What if I need custom work too?",
        answer: "We handle custom requests as well. You can discuss your specific needs with us during the onboarding call."
    }
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-black/5 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="text-lg md:text-xl font-medium text-[#1A1A1A] pr-8">
                    {faq.question}
                </span>
                <span className="text-black/40 shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-[#888888] leading-relaxed pr-8 md:pr-12">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

    return (
        <section className="py-24 md:py-32 bg-[#F5F5F7]">
            <div className="container mx-auto px-4 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-sm border border-black/5 flex flex-col lg:flex-row gap-12 lg:gap-24"
                >
                    {/* Left Side: Contact Info */}
                    <div className="lg:w-1/3 flex flex-col justify-between">
                        <div>
                            <h3 className="text-sm font-semibold text-[#888888] tracking-wider uppercase mb-4">
                                Email
                            </h3>
                            <a
                                href="mailto:hello@motionly.co"
                                className="text-2xl md:text-3xl font-medium text-[#1A1A1A] hover:text-[#0A0A0A] transition-colors"
                            >
                                hello@motionly.co
                            </a>
                        </div>

                        <div className="mt-12 lg:mt-auto">
                            <button className="px-8 py-4 bg-[#111] text-white rounded-full font-medium hover:bg-black transition-colors duration-300">
                                Get in touch
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Accordion FAQ */}
                    <div className="lg:w-2/3">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                faq={faq}
                                isOpen={index === openIndex}
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
