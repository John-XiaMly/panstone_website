import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

export const LanguageSwitch = ({ isMobile = false }) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    const toggleLang = () => {
        const nextLang = currentLang === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(nextLang).then();
    };

    return (
        // 如果是手機版，我們移除左側邊框與左邊距
        <div className={`flex items-center gap-3 ${!isMobile ? 'pl-4 border-l border-white/20 ml-2' : ''}`}>
            <span className={`text-xs font-bold transition-colors ${currentLang === 'zh' ? 'text-cyan-400' : 'text-slate-500'}`}>
                中
            </span>
            <button
                onClick={toggleLang}
                className="relative w-12 h-6 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/20"
            >
                <motion.div
                    className="w-4 h-4 bg-white rounded-full shadow-lg"
                    animate={{ x: currentLang === 'zh' ? 0 : 24 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </button>
            <span className={`text-xs font-bold transition-colors ${currentLang === 'en' ? 'text-cyan-400' : 'text-slate-500'}`}>
                EN
            </span>
        </div>
    );
};