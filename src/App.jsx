import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';

function App() {
    return (
        <div className="min-h-screen relative selection:bg-black selection:text-white">
            <Navbar />
            <Hero />
            <LogoTicker />
        </div>
    )
}

export default App
