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
            painPoint: {
                1: {
                    title: 'Digital transformation has hit a roadblock ?',
                    desc: 'Want to boost your brand awareness but don’t know where to start? Digital marketing, CRM implementation, website optimization... With so many initiatives, how can you integrate your resources to maximize results and break through growth barriers?'
                },
                2: {
                    title: 'Are you stuck on a technical challenge, causing your development to fall seriously behind schedule ?',
                    desc: 'Is your team facing insurmountable challenges with custom features? Are complex business logic requirements proving difficult to implement? Are you stuck on integrating third-party systems? Are these technical challenges delaying your time-to-market and causing you to miss out on business opportunities ?'
                }
            }
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
            painPoint: {
                1: {
                    title: '數位轉型遇到瓶頸 ?',
                    desc: '想提升品牌知名度，卻不知道從何開始 ? 數位行銷、CRM導入、官網優化...這麼多項目，這麼多項目該如何整合資源才能發揮最大效益，突破成長瓶頸 ?'
                },
                2: {
                    title: '被技術難題卡住，開發進度嚴重落後嗎 ?',
                    desc: '您的團隊是否遇到無法克服的客製化功能 ? 複雜的商業邏輯難以實現 ? 第三方系統串接卡關 ? 這些技術難題是否拖慢了產品上市，導致商機流失 ?'
                }
            }
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