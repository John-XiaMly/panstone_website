import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves } from '@/components/reactbits/Waves';
import { ScrollToTopButton } from "@/components/button/ScrollToTopButton.jsx";
import SplashCursor from "@/components/SplashCursor.jsx";
import banner1 from '@/assets/image/banner_1.png';
import banner2 from '@/assets/image/banner_2.png';
import banner3 from '@/assets/image/banner_3.png';
import mobileBanner1 from '@/assets/image/mobile_banner_1.png';
import mobileBanner2 from '@/assets/image/mobile_banner_2.png';
import mobileBanner3 from '@/assets/image/mobile_banner_3.png';

import './App.css';

// ── 新增：方案詳細資料 ──
const BUSINESS_SOLUTIONS = [
    {
        id: '01',
        title: '入口：品牌形象與通路接觸點',
        subtitle: 'Brand Identity & Web Presence',
        desc: '我們協助您建立統一的官方網站形象，打造具備品牌辨識度的數位門面。透過深度的 SEO 關鍵字優化與 SEM 廣告策略，結合社群媒體多元流量入口，我們不只為您架設網站，更在數位世界建立精準引導顧客的導航系統，為品牌長遠發展奠定厚實根基。',
        // 穩定連結 1：科技辦公/網頁設計感
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
        tags: ['SEO 優化', '品牌官網', '多端適應'],
        color: 'from-cyan-500/20 to-transparent'
    },
    {
        id: '02',
        title: '內部管理：CRM 系統與數據優化',
        subtitle: 'Efficiency & CRM Solutions',
        desc: '將繁瑣的商業邏輯轉化為高效能管理工具。我們開發的客製化 CRM 系統能深入剖析客戶行為數據，實現精準行銷與高效的客戶關係維護。透過優化內部業務流程、提升團隊協作效率與訂單處理速度，利用自動化工作流輔助決策，讓您的企業營運徹底數位化與高產能化。',
        // 穩定連結 2：數據圖表/管理感
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        tags: ['數據分析', '流程自動化', '高效協作'],
        color: 'from-blue-500/20 to-transparent'
    },
    {
        id: '03',
        title: '外部曝光：行銷服務與全域推廣',
        subtitle: 'Market Exposure & Growth',
        desc: '透過多元化的數位行銷策略，全面提升品牌的市場能見度與客流量。從精準的數據化廣告投遞、內容行銷策略到 KOL 與媒體資源媒合，我們協助您在合適的通路發聲。結合實體或線上活動企劃，極大化品牌聲量，將流量轉化為實際業績，創造持續且可觀的商業成長與價值。',
        // 穩定連結 3：行銷/成長/團隊感
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
        tags: ['廣告投遞', '內容行銷', '市場拓展'],
        color: 'from-purple-500/20 to-transparent'
    }
];

const fadeInVariant = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}}
};

const SLIDES = [
    { title: "幫企業建立", highlight: "可持續成長的數位基礎", desc: "Panstone 您的可靠技術夥伴。", image: banner1, mobileImage:mobileBanner1 },
    { title: "客製化系統", highlight: "深度的商業邏輯數位化", desc: "提供穩定且高擴展性的解決方案。", image: banner2, mobileImage:mobileBanner2 },
    { title: "一站式服務", highlight: "從品牌官網到 CRM 管理", desc: "專注業務擴張，技術交給我們。", image: banner3, mobileImage:mobileBanner3 }
];

const devFlow = [
    {
        step: "01",
        title: "了解需求",
        desc: "深入剖析您的業務目標與痛點，透過專業諮詢定義最具效益的數位解決方案。",
        icon: "🎯"
    },
    {
        step: "02",
        title: "架構規劃",
        desc: "嚴選技術棧，設計符合未來維護性與高效能的模組化架構，拒絕一次性代碼。",
        icon: "🏗️"
    },
    {
        step: "03",
        title: "階段交付",
        desc: "採用敏捷開發思維，確保開發進度透明化，讓您在每個階段都能看到實質成果。",
        icon: "🚀"
    },
    {
        step: "04",
        title: "上線支援",
        desc: "經過嚴密的全功能測試與雲端部署，並提供持續的效能監控與優化支援。",
        icon: "🛡️"
    }
];

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length), 5000);
        return () => clearInterval(timer);
    }, []);

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
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/40 backdrop-blur-xl border-b border-white/10' : 'py-5 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div
                        className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent cursor-pointer">
                        Panstone <span className="text-cyan-400">.</span>
                    </div>
                    <div
                        className="hidden md:flex gap-8 text-sm font-semibold tracking-wide items-center text-slate-200">
                        {['企業數位化', '系統開發', '開發流程', '關於我們'].map((item, idx) => (
                            <a key={idx} href={`#${['business', 'tech', 'process', 'trust'][idx]}`}
                               className="hover:text-cyan-400 transition-colors">{item}</a>
                        ))}
                        <a href="#contact"
                           className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-cyan-400 hover:scale-105 transition-all active:scale-95">預約諮詢</a>
                    </div>
                    <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="flex flex-col gap-1.5 w-6">
                            <span
                                className={`h-0.5 w-full bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
                            <span className={`h-0.5 w-full bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}/>
                            <span
                                className={`h-0.5 w-full bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
                        </div>
                    </button>
                </div>

                {/* 手機版：向下展開選單 */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[400px] border-b border-white/10' : 'max-h-0'}`}>
                    <div className="bg-black/90 backdrop-blur-2xl px-6 py-8 flex flex-col gap-6">
                        {['企業數位化', '系統開發', '開發流程', '關於我們'].map((item, idx) => (
                            <a
                                key={idx}
                                href={`#${['business', 'tech', 'process', 'trust'][idx]}`}
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-medium text-slate-200 hover:text-cyan-400 transition-colors border-b border-white/5 pb-2"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="w-full py-4 bg-cyan-500 text-white rounded-xl font-bold text-center active:scale-95 transition-all"
                        >
                            預約諮詢
                        </a>
                    </div>
                </div>
            </nav>

            {/* ── 2. HERO ── */}
            <section className="relative h-[100dvh] flex flex-col overflow-hidden bg-[#030712]">

                {/* 1. 這裡補一個跟 Navbar 一樣高的空間，把後面的內容往下推 */}
                <div className="h-[72px] md:h-[88px] w-full flex-shrink-0" />

                {/* 2. 圖片與文字的容器 */}
                <div className="relative flex-1 w-full overflow-hidden">

                    {/* 背景圖片：現在它會從 Navbar 下方開始顯示 */}
                    <div className='absolute inset-0 z-0'>
                        <AnimatePresence initial={false}>
                            <motion.div key={currentSlide} className="absolute inset-0">
                                <picture className="absolute inset-0">
                                    <source media="(max-width: 767px)" srcSet={SLIDES[currentSlide].mobileImage} />
                                    <img
                                        src={SLIDES[currentSlide].image}
                                        className="w-full h-full object-cover object-top"
                                        alt="bg"
                                    />
                                </picture>
                                <div className="absolute inset-0 bg-black/40" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* 3. 文字內容：現在相對於圖片容器置中 */}
                    {/*<div className="relative z-10 h-full flex items-center justify-center">*/}
                    {/*    <motion.div*/}
                    {/*        initial={{ opacity: 0, y: 20 }}*/}
                    {/*        animate={{ opacity: 1, y: 0 }}*/}
                    {/*        className="text-left px-8 w-full max-w-5xl md:text-center"*/}
                    {/*    >*/}
                    {/*        <h1 className="text-3xl md:text-7xl font-black mb-4 leading-tight">*/}
                    {/*            <span className="block text-white">{SLIDES[currentSlide].title}</span>*/}
                    {/*            <span className="text-cyan-400">{SLIDES[currentSlide].highlight}</span>*/}
                    {/*        </h1>*/}
                    {/*        <div className="w-12 h-1 bg-cyan-500 mb-6 md:mx-auto"></div>*/}
                    {/*        <p className="text-slate-300 text-base md:text-lg max-w-sm md:mx-auto leading-relaxed">*/}
                    {/*            {SLIDES[currentSlide].desc}*/}
                    {/*        </p>*/}
                    {/*    </motion.div>*/}
                    {/*</div>*/}
                </div>
            </section>

            {/* ── 3. 客群分流 ── */}
            <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            id: 'business',
                            emoji: '🏢',
                            title: '我是企業主',
                            desc: '想建立官網、導入 CRM、開始數位行銷，但不知道從哪裡開始？我們提供一站式整合服務，全程陪跑。'
                        },
                        {
                            id: 'tech',
                            emoji: '⚙️',
                            title: '我有技術需求',
                            desc: '需要客製化系統、複雜商業邏輯開發、或第三方 API 串接？我們的工程師團隊提供高品質、可擴展的技術解決方案。'
                        }
                    ].map((card, idx) => (
                        <motion.a key={idx} href={`#${card.id}`} whileHover={{y: -5}}
                                  className="group block p-10 border border-white/10 rounded-[2rem] bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
                            <div className="text-4xl mb-6">{card.emoji}</div>
                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-slate-300 leading-relaxed mb-6 opacity-80">{card.desc}</p>
                            <span
                                className="flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-4 transition-all">查看方案 <span
                                className="text-xl">→</span></span>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* ── 4. 企業數位整合方案 (修改：左圖右文詳細版) ── */}
            <section id="business" className="max-w-7xl mx-auto px-6 py-32 relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, margin: "-100px"}}
                            variants={fadeInVariant} className="text-center mb-32">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">企業數位整合方案</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        針對成長型企業設計，我們串聯品牌門面、數據管理到市場增長，<br
                        className="hidden md:block"/> 提供全方位的數位轉型支撐。
                    </p>
                </motion.div>

                {/* 詳細方案清單 - 左圖右文 */}
                <div className="space-y-40">
                    {BUSINESS_SOLUTIONS.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, delay: idx * 0.1}}
                            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                        >
                            {/* 左側：精緻圖片容器 */}
                            <div className="w-full md:w-1/2 relative group">
                                <div
                                    className={`absolute -inset-4 bg-gradient-to-tr ${solution.color} blur-2xl opacity-40 group-hover:opacity-60 transition duration-500`}></div>
                                <div
                                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    {/* 圖片疊層裝飾 */}
                                    <div
                                        className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500"></div>
                                </div>
                            </div>

                            {/* 右側：詳細文字介紹 */}
                            <div className="w-full md:w-1/2 space-y-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-cyan-500 font-mono text-lg font-bold">{solution.id}</span>
                                        <div className="h-px w-10 bg-cyan-500/50"></div>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                        {solution.title}
                                    </h3>
                                    <p className="text-cyan-400/80 font-bold uppercase tracking-[0.2em] text-xs">
                                        {solution.subtitle}
                                    </p>
                                </div>

                                <p className="text-slate-300 text-lg leading-relaxed opacity-90">
                                    {solution.desc}
                                </p>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {solution.tags.map(tag => (
                                        <span key={tag}
                                              className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <a href="#contact"
                                       className="inline-flex items-center gap-2 text-white font-bold group">
                                        了解更多建置細節 <span
                                        className="text-cyan-500 group-hover:translate-x-2 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── 6. 開發流程 ── */}
            <section id="process" className="relative py-32 overflow-hidden z-10">
                {/* 背景裝飾光暈 */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">嚴謹的服務流程</h2>
                        <div className="h-1 w-20 bg-cyan-500 mx-auto mb-6 rounded-full"></div>
                        <p className="text-white text-lg max-w-2xl mx-auto opacity-80">
                            從第一次對話開始，我們就為您的技術架構做長遠規劃，確保系統具備高擴展性。
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {devFlow.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: idx * 0.1}}
                                className="group relative p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all duration-500"
                            >
                                {/* 步驟編號背景 */}
                                <span className="absolute top-6 right-8 text-7xl font-black text-white/[0.03] group-hover:text-cyan-500/[0.05] transition-colors duration-500">
                                    {item.step}
                                </span>

                                <div className="relative z-10">
                                    <div
                                        className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 origin-left">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 text-black group-hover:text-cyan-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <div className="w-8 h-[2px] bg-white/20 mb-6 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500" />
                                    <p className="text-white leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* 底部裝飾線條 */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/40 transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. 信任背書 ── */}
            <section id="trust" className="max-w-6xl mx-auto px-6 py-32 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-6">為什麼選擇磐石？</h2>
                    <p className="text-white text-lg opacity-80">站在深耕市場 17 年的基礎上，我們更懂企業痛點</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    {[{num: '17', unit: '年', label: '深耕台灣中小企業市場'}, {
                        num: '200+',
                        unit: '家',
                        label: '累積的企業客戶信任基礎'
                    }, {num: '165', unit: '萬+', label: '中小企業轉型潛力'}].map((item, idx) => (
                        <div key={idx} className="text-center p-12 border border-white/10 rounded-[2.5rem] bg-black/20">
                            <p className="text-6xl font-black text-black mb-2">{item.num}<span
                                className="text-2xl text-cyan-500 ml-1">{item.unit}</span></p>
                            <p className="text-sm text-white font-semibold uppercase tracking-widest">{item.label}</p>
                        </div>
                    ))}
                </div>
                <div
                    className="p-10 border border-cyan-500/20 rounded-[2rem] bg-cyan-500/5 flex flex-col md:flex-row items-center gap-8">
                    <div className="text-center md:text-left"><p
                        className="text-cyan-400 text-xs font-black mb-2 uppercase">策略合作夥伴</p><h3
                        className="text-3xl font-bold">富視網科技</h3></div>
                    <div className="h-px w-full md:h-12 md:w-px bg-white/10"/>
                    <p className="text-slate-300 text-sm leading-relaxed flex-1 opacity-80">Panstone
                        結合其業務洞察與我們的技術深度，為您提供最務實的數位轉型建議。</p>
                </div>
            </section>

            {/* ── 8. FOOTER / CTA ── */}
            <footer id="contact" className="relative py-32 border-t border-white/10 overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h3 className="text-4xl md:text-6xl font-bold mb-8">準備好開始了嗎？</h3>
                    <p className="text-white mb-12 text-lg opacity-80">免費初次諮詢，讓我們一起定義您的數位未來</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="mailto:contact@panstone.com"
                           className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-xl">立即聯絡我們</a>
                        <a href="https://line.me"
                           className="px-12 py-5 border border-white/20 hover:border-cyan-400 hover:text-cyan-400 font-black rounded-2xl transition-all">Line
                            快速諮詢</a>
                    </div>
                    <div className="mt-24 pt-12 border-t border-white/10 text-slate-500 text-xs">© 2026 Panstone. All
                        rights reserved.
                    </div>
                </div>
            </footer>

            <ScrollToTopButton/>
        </div>
    );
}

export default App;