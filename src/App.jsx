import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Preloader from './components/Preloader';
import HowItWorks from './components/HowItWorks';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Features from "./components/Features";
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initialize Preloader timer
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            clearTimeout(timer);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen relative selection:bg-black selection:text-white overflow-clip">
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Navbar />
            <Hero />
            <LogoTicker />
            <HowItWorks />
            <Clients />
            <Portfolio />
            <Features />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    )
}

export default App
