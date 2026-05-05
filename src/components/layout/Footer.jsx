import React from 'react';

export const Footer = () => {
    return (
        <footer id="contact" className="relative py-10 border-t border-white/10 overflow-hidden text-center">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h3 className="text-4xl md:text-6xl font-bold mb-8">準備好開始賺錢了嗎？</h3>
                <p className="text-white mb-12 text-lg opacity-80">免費諮詢，讓我們一起定義您的數位未來</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="mailto:contact@panstone.com"
                       className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-xl">立即聯絡我們</a>
                    <a href="https://line.me"
                       className="px-12 py-5 border border-white/20 hover:border-cyan-400 hover:text-cyan-400 font-black rounded-2xl transition-all">Line
                        快速諮詢</a>
                </div>
                <div className="mt-24 pt-12 border-t border-white/10 text-slate-500 text-xs">
                    <div className="mb-4">
                        <p className="text-white text-2xl font-bold mb-1">磐石科技</p>
                        <p className="text-white/80 text-sm">連絡電話：02-1234-5678</p>
                        <p className="text-white/80 text-sm">電子郵件：admin@panstonetw.com</p>
                        <p className="text-white/80 text-sm">地址：台中市</p>
                    </div>
                    <p className="opacity-60 tracking-widest">© 2026 PANSTONE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};