import { motion } from 'framer-motion';
import { ListTodo, CreditCard, Zap, Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { FocusCards } from './ui/focus-cards';

const features = [
    {
        title: "Simple task queue",
        description: "Track tasks easily in our dashboard. Prioritize what's important.",
        icon: <ListTodo className="w-6 h-6 text-[#1A1A1A]" />
    },
    {
        title: "One price, always",
        description: "Flat monthly rate, no surprises. Pause or cancel anytime.",
        icon: <CreditCard className="w-6 h-6 text-[#1A1A1A]" />
    },
    {
        title: "Quick turnaround",
        description: "Most requests done in a few days. We move fast.",
        icon: <Zap className="w-6 h-6 text-[#1A1A1A]" />
    },
    {
        title: "High-quality every time",
        description: "Senior animators, nothing less. Your brand is in good hands.",
        icon: <Sparkles className="w-6 h-6 text-[#1A1A1A]" />
    },
    {
        title: "You're in control",
        description: "Change or pause your plan anytime. No long-term contracts.",
        icon: <SlidersHorizontal className="w-6 h-6 text-[#1A1A1A]" />
    },
    {
        title: "100% yours",
        description: "Custom work, fully owned by you. Ready to use anywhere.",
        icon: <ShieldCheck className="w-6 h-6 text-[#1A1A1A]" />
    }
];

const services = [
    "Explainer Videos", "Lottie Animations", "UI/UX Motion",
    "Logo Animation", "Social Media Ads", "3D Renders",
    "Character Animation", "Pitch Deck Motion", "Webflow Sites"
];

export default function Features() {
    return (
        <section className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-black/5 border border-black/10 text-xs md:text-sm font-medium tracking-wide uppercase text-black/70"
                    >
                        Features
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] max-w-3xl"
                    >
                        Everything you need and <span className="font-serif italic font-medium pr-1">nothing</span> you don't.
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="mb-24 md:mb-32">
                    <FocusCards cards={features} />
                </div>
            </div>
        </section>
    );
}
