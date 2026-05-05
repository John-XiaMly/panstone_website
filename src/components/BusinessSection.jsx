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
            title: '第一章：從寂靜到綻放，建立您的數位門戶',
            subtitle: 'The First Impression',
            desc: '在浩瀚的數位海域中，優秀的品牌不應被埋沒。我們專注於為企業打造最具溫度的「第一接觸點」，不僅是美觀的視覺呈現，更是一場關於品牌價值的深度對話。透過精準的搜尋佈局，讓您的潛在客戶在最需要的時刻，第一眼就與您的品牌相遇，開啟無限可能的對話窗。',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
            tags: ['品牌辨識', '精準導入', '全平台適配'],
            color: 'from-cyan-500/20 to-transparent'
        },
        {
            id: '02',
            title: '第二章：轉化繁瑣為純粹，賦能企業運轉核心',
            subtitle: 'The Heart of Operation',
            desc: '真正的成長來自於內部的從容。我們將混亂的數據碎片轉化為清晰的決策指引，把重複的行政庶務交付給智能自動化。透過深度梳理您的核心業務，我們為您構建一套會思考的管理系統，讓您的團隊能從日常雜事中解放，將精力聚焦在最具創造力的客戶關係與戰略決策上。',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
            tags: ['營運自動化', '決策智慧化', '內部賦能'],
            color: 'from-blue-500/20 to-transparent'
        },
        {
            id: '03',
            title: '第三章：突破侷限，共創持續生長的價值',
            subtitle: 'Sustainable Growth',
            desc: '商業的終點從不是成交，而是長遠的共鳴。我們協助品牌突破既有的市場邊界，利用全域行銷策略將短暫的流量沈澱為誠摯的品牌追隨者。這是一場動態的增長實驗，我們與您並肩作戰，在多變的市場趨勢中尋找最穩定的成長曲線，確保品牌在數位浪潮中始終保持旺盛的生命力。',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
            tags: ['全域增長', '價值傳遞', '市場突圍'],
            color: 'from-purple-500/20 to-transparent'
        }
    ];

    return (
        <section id="business" className="max-w-7xl mx-auto px-6 py-32 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true, margin: "-100px"}}
                        variants={fadeInVariant} className="text-center mb-32">
                <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">企業數位整合方案</h2>
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

                            {/*<div className="pt-6">*/}
                            {/*    <a href="#contact"*/}
                            {/*       className="inline-flex items-center gap-2 text-white font-bold group">*/}
                            {/*        了解更多建置細節 <span*/}
                            {/*        className="text-cyan-500 group-hover:translate-x-2 transition-transform">→</span>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};