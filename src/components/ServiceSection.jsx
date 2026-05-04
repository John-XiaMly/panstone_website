import React from 'react';
import { motion } from "framer-motion";

export const ServiceSection = () => {
    const services = [
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

    return (
        <section id="process" className="relative py-32 overflow-hidden z-10">
            {/* 背景裝飾光暈 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">美好的服務體驗</h2>
                    <div className="h-1 w-20 bg-cyan-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-white text-lg max-w-2xl mx-auto opacity-80">
                        從第一次對話開始，我們就為您的技術架構做長遠規劃，確保系統具備高擴展性。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((item, idx) => (
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
    );
};