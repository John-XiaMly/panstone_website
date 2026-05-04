import React from 'react';
import { motion } from "framer-motion";

export const BusinessSection = () => {

    const fadeInVariant = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}}
    };

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

    return (
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
    );
};