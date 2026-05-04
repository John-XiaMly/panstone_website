import React from 'react';

export const TrustSection = () => {
    return (
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
    );
};