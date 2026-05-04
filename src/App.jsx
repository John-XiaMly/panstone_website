import { useState, useEffect } from 'react';
import { ScrollToTopButton } from "@/components/button/ScrollToTopButton.jsx";
import SplashCursor from "@/components/reactbits/SplashCursor/SplashCursor.jsx";
import { Navbar } from "@/components/layout/Navbar.jsx";
import { BusinessSection } from "@/components/BusinessSection.jsx";
import { ServiceSection } from "@/components/ServiceSection.jsx";
import { Footer } from "@/components/layout/Footer.jsx";
import { TrustSection } from "@/components/TrustSection.jsx";
import { HeroSection } from "@/components/HeroSection.jsx";
import { PainPointSection } from "@/components/PainPointSection.jsx";

import './App.css';

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen mesh-gradient-bg text-white selection:bg-cyan-500/30 overflow-x-hidden">
            <SplashCursor DENSITY_DISSIPATION={3.5} VELOCITY_DISSIPATION={2} PRESSURE={0.1} CURL={3} SPLAT_RADIUS={0.2}
                          SPLAT_FORCE={6000} COLOR_UPDATE_SPEED={10} SHADING RAINBOW_MODE={false} COLOR="#A855F7"/>

            {/* ── 1. NAV ── */}
            <Navbar scrolled={scrolled} />

            {/* ── 2. HERO ── */}
            <HeroSection />

            {/* ── 3. 公司痛點 ── */}
            <PainPointSection />

            {/* ── 4. 企業數位整合方案 (修改：左圖右文詳細版) ── */}
            <BusinessSection />

            {/* ── 6. 開發流程 ── */}
            <ServiceSection />

            {/* ── 7. 信任背書 ── */}
            <TrustSection />

            {/* ── 8. FOOTER / CTA ── */}
            <Footer />

            <ScrollToTopButton/>
        </div>
    );
}

export default App;