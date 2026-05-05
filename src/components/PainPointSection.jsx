import React from 'react';
import { motion } from "framer-motion";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { RiHammerLine } from "react-icons/ri";

export const PainPointSection = () => {
    const painPoints = [
        {
            id: 'business',
            icon: <HiOutlineChartSquareBar size={48} color='#4A90E2' />,
            title: '數位轉型遇到瓶頸 ?',
            desc: '想提升品牌知名度，卻不知道從何開始 ? 數位行銷、CRM導入、官網優化...這麼多項目，這麼多項目該如何整合資源才能發揮最大效益，突破成長瓶頸 ?'
        },
        {
            id: 'tech',
            icon: <RiHammerLine size={48} color='#4A90E2' />,
            title: '被技術難題卡住，開發進度嚴重落後嗎 ?',
            desc: '您的團隊是否遇到無法克服的客製化功能 ? 複雜的商業邏輯難以實現 ? 第三方系統串接卡關 ? 這些技術難題是否拖慢了產品上市，導致商機流失 ?'
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {painPoints.map(item => (
                    <motion.a key={ item.id } whileHover={{ y: -5 }}
                              className="group block p-10 border border-white/10 rounded-[2rem] bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
                        <div className="text-4xl mb-6 flex justify-center items-center">
                            { item.icon }
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{ item.title }</h3>
                        <p className="text-slate-300 leading-relaxed mb-6 opacity-80">{ item.desc }</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};