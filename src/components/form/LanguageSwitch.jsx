import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {useTranslation} from "react-i18next";

export const LanguageSwitch = () => {
    const { i18n,t } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    const toggleLang = () => {
        const nextLang = currentLang === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(nextLang).then();
    };

    return (
        <div className="flex items-center gap-3 pl-4 border-l border-white/20 ml-2">
            <span className={`text-[14px] ${currentLang === 'zh' ? 'text-cyan-400' : 'text-slate-500'} transition-colors`}>
                中
            </span>

            {/* Switch 外殼 */}
            <button
                onClick={toggleLang}
                className="relative w-10 h-5 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/20"
            >
                {/* 滑動圓點 */}
                <motion.div
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{x: currentLang === 'zh' ? 0 : 20}}
                    transition={{type: "spring", stiffness: 500, damping: 30}}
                />
            </button>

            <span className={`text-[14px] ${currentLang === 'en' ? 'text-cyan-400' : 'text-slate-500'} transition-colors`}>
                EN
            </span>
        </div>
    );
};