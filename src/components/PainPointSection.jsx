import React from 'react';
import { motion } from "framer-motion";

export const PainPointSection = () => {
    const painPoints = [
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
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {painPoints.map((item, idx) => (
                    <motion.a key={idx} href={`#${item.id}`} whileHover={{y: -5}}
                              className="group block p-10 border border-white/10 rounded-[2rem] bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
                        <div className="text-4xl mb-6">{item.emoji}</div>
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-slate-300 leading-relaxed mb-6 opacity-80">{item.desc}</p>
                        <span
                            className="flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-4 transition-all">查看方案 <span
                            className="text-xl">→</span></span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};