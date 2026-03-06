import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Preloader from './components/Preloader';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen relative selection:bg-black selection:text-white">
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Navbar />
            <Hero />
            <LogoTicker />
        </div>
    )
}

export default App
