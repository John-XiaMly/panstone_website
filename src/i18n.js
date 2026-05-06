import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: {
            nav: {
                solutions: "Business Digitization",
                services: "System Development",
                process: "Development Flow",
                about: "About",
                consultation: "Consultation"
            },
        }
    },
    zh: {
        translation: {
            nav: {
                solutions: "企業數位化",
                services: "系統開發",
                process: "開發流程",
                about: "關於我們",
                consultation: "預約諮詢"
            },
        }
    }
}

i18n
.use(LanguageDetector)  // 自動偵測瀏覽器語言
.use(initReactI18next)
.init({
    resources,
    fallbackLng: 'zh',   // 偵測失敗時的語言
    interpolation: {
        escapeValue: false
    }
})