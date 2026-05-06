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
            },
            business: {
                baseTitle: 'Enterprise Digital Integration Solutions',
                baseDesc: 'Designed for growing businesses, we integrate brand presence, data management, and market growth\n to provide comprehensive support for digital transformation.',
                1: {
                    title: 'Chapter 1: From Silence to Bloom: Building Your Digital Gateway',
                    desc: 'In the vast digital landscape, outstanding brands should not be overlooked. We specialize in creating the most engaging “first point of contact” for businesses—one that goes beyond mere visual appeal to foster a meaningful dialogue about your brand’s values. Through strategic search optimization, we ensure your potential customers encounter your brand at first glance exactly when they need it most, opening a window of endless possibilities.',
                    tags: {
                        1: 'Brand Identity',
                        2: 'Precise Import',
                        3: 'Compatible with all platforms'
                    }
                },
                2: {
                    title: 'Chapter 2: Transforming Complexity into Simplicity, Empowering the Core of Business Operations',
                    desc: 'True growth stems from inner calm. We transform chaotic data fragments into clear decision-making guidance and entrust repetitive administrative tasks to intelligent automation. By thoroughly analyzing your core business operations, we build a thinking management system that frees your team from day-to-day tasks, allowing them to focus their energy on the most creative aspects of client relationships and strategic decision-making.',
                    tags: {
                        1: 'Operational Automation',
                        2: 'Intelligent Decision-Making',
                        3: 'Internal Empowerment'
                    }
                },
                3: {
                    title: 'Chapter 3: Breaking Through Limitations to Create Sustainable Value Together',
                    desc: 'The ultimate goal of business is never just a sale, but a lasting connection. We help brands break through existing market boundaries and use omnichannel marketing strategies to transform fleeting traffic into loyal brand advocates. This is a dynamic growth experiment—we stand shoulder-to-shoulder with you to identify the most stable growth trajectory amid shifting market trends, ensuring your brand remains vibrant and resilient in the digital age.',
                    tags: {
                        1: 'Holistic Growth',
                        2: 'Value Delivery',
                        3: 'Breaking into the Market'
                    }
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
            },
            business: {
                baseTitle: '企業數位整合方案',
                baseDesc: '針對成長型企業設計，我們串聯品牌門面、數據管理到市場增長，\n提供全方位的數位轉型支撐。',
                1: {
                    title: '第一章：從寂靜到綻放，建立您的數位門戶',
                    desc: '在浩瀚的數位海域中，優秀的品牌不應被埋沒。我們專注於為企業打造最具溫度的「第一接觸點」，不僅是美觀的視覺呈現，更是一場關於品牌價值的深度對話。透過精準的搜尋佈局，讓您的潛在客戶在最需要的時刻，第一眼就與您的品牌相遇，開啟無限可能的對話窗。',
                    tags: {
                        1: '品牌辨識',
                        2: '精準導入',
                        3: '全平台適配'
                    }
                },
                2: {
                    title: '第二章：轉化繁瑣為純粹，賦能企業運轉核心',
                    desc: '真正的成長來自於內部的從容。我們將混亂的數據碎片轉化為清晰的決策指引，把重複的行政庶務交付給智能自動化。透過深度梳理您的核心業務，我們為您構建一套會思考的管理系統，讓您的團隊能從日常雜事中解放，將精力聚焦在最具創造力的客戶關係與戰略決策上。',
                    tags: {
                        1: '營運自動化',
                        2: '決策智慧化',
                        3: '內部賦能'
                    }
                },
                3: {
                    title: '第三章：突破侷限，共創持續生長的價值',
                    desc: '商業的終點從不是成交，而是長遠的共鳴。我們協助品牌突破既有的市場邊界，利用全域行銷策略將短暫的流量沈澱為誠摯的品牌追隨者。這是一場動態的增長實驗，我們與您並肩作戰，在多變的市場趨勢中尋找最穩定的成長曲線，確保品牌在數位浪潮中始終保持旺盛的生命力。',
                    tags: {
                        1: '全域增長',
                        2: '價值傳遞',
                        3: '市場突圍'
                    }
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