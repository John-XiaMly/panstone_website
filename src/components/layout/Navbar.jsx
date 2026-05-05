import React, { useState } from 'react';
import logo from '@/assets/image/logo.png';

export const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/40 backdrop-blur-xl border-b border-white/10' : 'py-2 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent cursor-pointer">
                   <img src={logo} alt='磐石科技' width='160px' />
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
    );
};