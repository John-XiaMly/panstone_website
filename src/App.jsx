import { Waves } from '@/components/reactbits/Waves';
import { TiltedCard } from "@/components/reactbits/TiltedCard/index.jsx";
import './App.css'

function App() {

    return (
        <div className="relative min-h-screen mesh-gradient-bg overflow-hidden">

            {/* 1. 頂部導航欄 (毛玻璃效果) */}
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/20 backdrop-blur-xl bg-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white">
                    <div className="text-xl font-black tracking-tighter">Panstone</div>
                    <div className="hidden md:flex gap-8 text-sm font-bold">
                        <a href="#" className="hover:opacity-70 transition-opacity">服務項目</a>
                        <a href="#" className="hover:opacity-70 transition-opacity">案例作品</a>
                        <a href="#" className="hover:opacity-70 transition-opacity">預約諮詢</a>
                    </div>
                </div>
            </nav>

            {/* 2. Hero Section (Waves 背景) */}
            <section className="relative h-screen flex items-center justify-center">
                {/* 背景層：Waves 建議調低透明度，才不會蓋過漸層的美感 */}
                <div className="absolute inset-0 z-0 w-full h-full">
                    <Waves
                        lineColor="rgba(255, 255, 255, 0.3)" // 提高透明度到 0.3
                        backgroundColor="transparent"
                        waveSpeedX={0.01}
                        waveAmpX={50}
                    />
                </div>

                {/* 內容層 */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                        設計未來<br />驅動創新
                    </h1>
                    <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        突破視覺邊界，為數位品牌注入流動的生命力。
                    </p>
                </div>
            </section>

            {/* 3. 服務展示 (3D 傾斜卡片) */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold mb-12 text-white">我們的專業</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TiltedCard
                        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
                        altText="網頁開發"
                        captionText="高性能 React 應用開發"
                        containerHeight="300px"
                        containerWidth="100%"
                    />
                    <TiltedCard
                        imageSrc="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=500"
                        altText="UI/UX"
                        captionText="以使用者為核心的介面設計"
                        containerHeight="300px"
                        containerWidth="100%"
                    />
                    <TiltedCard
                        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"
                        altText="數據分析"
                        captionText="精準的流量分析與轉化優化"
                        containerHeight="300px"
                        containerWidth="100%"
                    />
                </div>
            </section>
        </div>
    )
}

export default App
