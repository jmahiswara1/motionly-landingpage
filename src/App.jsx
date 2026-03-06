import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function App() {
    return (
        <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Welcome to <span className="font-serif italic font-medium">motionly</span>
                </h1>
                <p className="text-xl text-[#888888] mb-8">Setup successful. Waiting for sections implementation.</p>
                <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#" className="bg-black text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2">
                        Get Started <ArrowUpRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </main>
    )
}

export default App
