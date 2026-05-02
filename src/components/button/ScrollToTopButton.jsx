import React, {useEffect, useState} from 'react';
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 right-8 z-[60]
                p-4 rounded-full
                backdrop-blur-md bg-white/10 border border-white/20
                text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]
                transition-all duration-500 ease-in-out
                hover:bg-cyan-500 hover:text-black hover:scale-110
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
        >
            <ArrowUp size={24} strokeWidth={3} />
        </button>
    );
};