import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import banner1 from "@/assets/image/banner_1.png";
import mobileBanner1 from "@/assets/image/mobile_banner_1.png";
import banner2 from "@/assets/image/banner_2.png";
import mobileBanner2 from "@/assets/image/mobile_banner_2.png";
import banner3 from "@/assets/image/banner_3.png";
import mobileBanner3 from "@/assets/image/mobile_banner_3.png";

export const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length), 5000);
        return () => clearInterval(timer);
    }, []);

    const SLIDES = [
        { title: "幫企業建立", highlight: "可持續成長的數位基礎", desc: "Panstone 您的可靠技術夥伴。", image: banner1, mobileImage:mobileBanner1 },
        { title: "客製化系統", highlight: "深度的商業邏輯數位化", desc: "提供穩定且高擴展性的解決方案。", image: banner2, mobileImage:mobileBanner2 },
        { title: "一站式服務", highlight: "從品牌官網到 CRM 管理", desc: "專注業務擴張，技術交給我們。", image: banner3, mobileImage:mobileBanner3 }
    ];

    return (
        <section className="relative h-[100dvh] flex flex-col overflow-hidden bg-[#030712]">

            {/* 1. 這裡補一個跟 Navbar 一樣高的空間，把後面的內容往下推 */}
            <div className="h-[72px] md:h-[88px] w-full flex-shrink-0" />

            {/* 2. 圖片與文字的容器 */}
            <div className="relative flex-1 w-full overflow-hidden">

                {/* 背景圖片：現在它會從 Navbar 下方開始顯示 */}
                <div className='absolute inset-0 z-0'>
                    <AnimatePresence initial={false}>
                        <motion.div key={currentSlide} className="absolute inset-0">
                            <picture className="absolute inset-0">
                                <source media="(max-width: 767px)" srcSet={SLIDES[currentSlide].mobileImage} />
                                <img
                                    src={SLIDES[currentSlide].image}
                                    className="w-full h-full object-cover object-top"
                                    alt="bg"
                                />
                            </picture>
                            <div className="absolute inset-0 bg-black/40" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 3. 文字內容：現在相對於圖片容器置中 */}
                {/*<div className="relative z-10 h-full flex items-center justify-center">*/}
                {/*    <motion.div*/}
                {/*        initial={{ opacity: 0, y: 20 }}*/}
                {/*        animate={{ opacity: 1, y: 0 }}*/}
                {/*        className="text-left px-8 w-full max-w-5xl md:text-center"*/}
                {/*    >*/}
                {/*        <h1 className="text-3xl md:text-7xl font-black mb-4 leading-tight">*/}
                {/*            <span className="block text-white">{SLIDES[currentSlide].title}</span>*/}
                {/*            <span className="text-cyan-400">{SLIDES[currentSlide].highlight}</span>*/}
                {/*        </h1>*/}
                {/*        <div className="w-12 h-1 bg-cyan-500 mb-6 md:mx-auto"></div>*/}
                {/*        <p className="text-slate-300 text-base md:text-lg max-w-sm md:mx-auto leading-relaxed">*/}
                {/*            {SLIDES[currentSlide].desc}*/}
                {/*        </p>*/}
                {/*    </motion.div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};