import { createI18n } from "vue-i18n";

const messages = {
  zh: {
    nav: {
      profile: "關於",
      projects: "專案",
      experience: "經歷",
      skills: "能力",
      goal: "方向",
    },
    hero: {
      role: "Product Manager",
      name: "林蔓萱 Mandy Lin",
      lead: "專注於 B2B SaaS、Enterprise 產品規劃與產品化設計，擅長從需求探索、產品規劃到跨部門協作推動產品落地。",
      summary1:
        "曾參與 Enterprise 客製化專案、產品功能開發與產品化專案，具備從 0 到 1 的產品規劃經驗，並負責多家大型企業客戶導入與維運。",
      summary2:
        "我喜歡將複雜需求拆解成可執行的方案，在使用者需求、商業目標與技術限制之間找到平衡，打造兼具價值與可擴展性的產品。",
    },
    contact: {
      title: "Mandy Lin",
      role: "Product Manager",
      email: "電子信箱",
      phone: "電話",
      location: "所在地",
      gender: "性別",
      education: "學歷",
      locationValue: "台灣",
      genderValue: "女性",
      educationValue: "東吳大學資訊管理學系",
      copied: "已複製 Email",
      copyFallback: "請手動複製 Email",
    },
    impact: [
      {
        value: "1 mo.",
        label: "完成 OTP 驗證產品 0 到 1 上線",
        title: "OTP 驗證 Add-on 從 0 到 1 上線",
        description: "從企業客戶身份驗證需求出發，完成產品需求定義、流程設計、API 串接規劃、後台能力與上線驗收。",
        details: ["規劃 SMS OTP 驗證、重送、冷卻與頻率限制等核心流程", "串接 Every8D SMS API，並設計用量、餘額與扣點管理", "協調工程、QA、客服與業務，在一個月內完成正式上線"],
      },
      {
        value: "30+",
        label: "Enterprise 客戶專案參與與維運",
        title: "30+ Enterprise 客戶專案規劃與維運",
        description: "參與 SurveyCake Enterprise 客戶專案需求管理、功能優化、問題排查與上線測試。",
        details: ["服務情境包含金融、電信、教育、科技與汽車產業", "負責將客戶需求轉換為可執行規格與交付計畫", "代表客戶包含玉山銀行、國泰世華銀行、台灣大哥大、聯發科、和泰汽車等"],
      },
      {
        value: "9+",
        label: "企業客戶導入 Add-on 模組",
        title: "Add-on 模組導入 9+ 家企業客戶",
        description: "將白名單驗證、活動報名與報到等高頻客製需求整理為可複用模組，降低重複開發成本。",
        details: ["參與 Add-on 模組需求整理、PRD、Spec 與 User Flow 設計", "協助客戶導入、測試驗證與上線溝通", "建立後續公版銷售與產品化的基礎"],
      },
      {
        value: "3",
        label: "企業客戶升級導入 AIO 平台",
        title: "3 家企業客戶升級使用 AIO 平台",
        description: "推動 Add-on 模組從單點功能走向整合平台，讓企業活動與驗證流程能以更一致的方式交付。",
        details: ["參與 AIO 平台整合規劃與架構討論", "協助梳理客戶升級情境與導入需求", "讓後續專案交付更標準化，也降低客製化維運負擔"],
      },
    ],
    profile: {
      eyebrow: "Profile",
      title: "關於我",
      paragraphs: [
        "畢業於東吳大學資訊管理學系，目前擔任 Product Manager，主要負責 SurveyCake Enterprise 產品規劃與企業客戶專案管理。",
        "工作內容涵蓋需求訪談、產品規劃、PRD 撰寫、User Flow 設計、API 串接規劃、跨部門協作、測試驗收與產品上線。過去曾參與 OTP 驗證服務、企業問卷自動化流程、白名單驗證、活動報名報到系統等產品規劃與落地執行。",
        "我特別喜歡參與產品從無到有的過程，也熱衷於將客製化需求轉化為可規模化複製的產品。",
      ],
      focus: [
        ["01", "找出真正的問題", "透過需求訪談與使用情境分析，釐清客戶真正遇到的痛點。"],
        ["02", "建立可執行方案", "將商業需求轉換為 PRD、User Flow、Functional Spec 與系統流程。"],
        ["03", "推動產品落地", "協調工程、QA、客服、業務與客戶，確保產品順利上線並創造價值。"],
      ],
    },
    projectsTitle: "專案",
    projects: [
      {
        kicker: "SurveyCake Enterprise",
        title: "OTP 驗證 Add-on",
        subtitle: "從 0 到 1 打造企業級身份驗證產品",
        result: "0→1 / 1 mo.",
        summary:
          "企業客戶在問卷調查、活動報名或會員資料蒐集時，經常面臨身份無法驗證、重複填答與資料真實性不足等問題。我獨立規劃並推動 SurveyCake Enterprise OTP 驗證 Add-on，於一個月內完成產品設計、開發協調與正式上線。",
        columns: [
          {
            title: "我的角色",
            items: ["客戶需求訪談與問題定義", "PRD、User Flow、功能規格制定", "後台管理系統與商業模式規劃", "工程、QA、客服跨部門協作"],
          },
          {
            title: "核心功能",
            items: ["SMS OTP 驗證與驗證碼重送機制", "IP 頻率限制、手機號碼冷卻、異常監控", "Slack 告警、儲值扣點、用量與餘額管理", "Every8D SMS API 串接"],
          },
          {
            title: "專案成果",
            items: ["1 個月內完成產品從 0 到 1 上線", "成功導入巨匠教育、安睿科技等企業客戶", "建立 SurveyCake Enterprise 全新加值產品線", "建立後續 Email 與國際驗證產品擴充基礎"],
          },
        ],
      },
      {
        kicker: "SurveyCake Add-on",
        title: "Add-on AIO Platform",
        subtitle: "將客製化專案產品化",
        result: "9+ clients",
        summary:
          "SurveyCake 過去承接大量 Automation 客製化專案，但每次皆需重新開發與交付，難以形成規模化產品。因此公司推動 Add-on 產品策略，將白名單驗證、活動報名與報到等高頻需求標準化並整合為 AIO 平台。",
        columns: [
          {
            title: "我的角色",
            items: ["需求整理與產品規劃", "PRD、Spec、User Flow 設計", "產品化策略制定與跨團隊功能規劃", "測試驗證、上線協作與客戶導入分析"],
          },
          {
            title: "專案成果",
            items: ["Add-on 模組成功導入 9 家以上企業客戶", "3 家客戶升級使用 AIO 平台", "建立可重複銷售的產品模式", "代表客戶：國家教育研究院、國泰人壽、工研院"],
          },
        ],
      },
      {
        kicker: "Enterprise Integration",
        title: "和泰汽車 Toyota｜各部門滿意度問卷串接",
        subtitle: "建立企業級問卷自動化流程",
        result: "3+ depts.",
        summary:
          "和泰汽車 Toyota 希望為各部門建立完整的顧客滿意度問卷發放與資料回收機制。我負責需求訪談、流程設計與專案管理，協調客戶、外包團隊與內部工程團隊共同完成系統建置。",
        columns: [
          {
            title: "我的角色",
            items: ["客戶需求分析、流程規劃與設計", "API 串接需求與資料流設計", "外包團隊管理與專案時程追蹤", "測試驗收與上線協調"],
          },
          {
            title: "專案成果",
            items: ["成功完成滿意度問卷串接專案", "建立問卷自動發放與回收流程", "完成資料自動回寫機制", "正式上線並投入營運"],
          },
        ],
      },
    ],
    experienceTitle: "工作經歷",
    experience: [
      {
        date: "2025.03 — 2026.06",
        role: "Product Manager｜新芽網路股份有限公司",
        body: "負責 SurveyCake Enterprise 產品規劃與企業客戶專案管理。期間參與並維運超過 30 個企業客戶專案，代表客戶包含金融、電信、教育與科技產業。",
        clients: "代表客戶：玉山銀行、新光銀行、國泰世華銀行、台灣大哥大、聯發科、遊戲橘子、和泰汽車等。",
      },
      {
        date: "2024.09 — 2025.02",
        role: "UI/UX & Project Management Intern｜奇策智能雲端股份有限公司",
        body: "參與虛擬貨幣後台管理系統開發，負責 Wireframe 設計、需求整理、功能驗收與開發進度追蹤，並實際參與 Scrum 敏捷開發流程。",
      },
    ],
    skillsTitle: "核心能力",
    skills: [
      ["產品規劃", "Product Discovery, Requirement Analysis, Product Strategy, User Flow Design, Product Roadmap"],
      ["文件撰寫", "PRD, Functional Spec, User Story, Acceptance Criteria"],
      ["專案管理", "Agile / Scrum, Stakeholder Management, Cross-functional Collaboration, Vendor Management"],
      ["技術理解", "API Integration, Webhook, SaaS Product, System Flow Design, Enterprise Solution"],
      ["工具", "Jira, Confluence, Notion, Figma, Miro, Postman"],
    ],
    goal: {
      title: "未來方向",
      body: "我希望持續投入產品管理領域，參與更多從需求探索、產品規劃到產品成長的完整生命週期。未來期待加入重視產品文化與使用者價值的團隊，持續提升產品思維、商業理解與跨部門協作能力，成為能夠獨立推動產品成長與商業成果的產品經理。",
    },
  },
  en: {
    nav: {
      profile: "Profile",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      goal: "Goal",
    },
    hero: {
      role: "Product Manager",
      name: "Mandy Lin",
      lead: "Product Manager focused on B2B SaaS, Enterprise solutions, and productization strategy, with experience turning discovery insights into executable product plans.",
      summary1:
        "Experienced in enterprise customization projects, feature development, and 0-to-1 product planning, with hands-on ownership across requirements, PRDs, user flows, API integration, delivery, and launch.",
      summary2:
        "I enjoy breaking down complex requirements into practical solutions and finding the balance between user needs, business goals, and technical constraints.",
    },
    contact: {
      title: "Mandy Lin",
      role: "Product Manager",
      email: "Email",
      phone: "Phone",
      location: "Location",
      gender: "Gender",
      education: "Education",
      locationValue: "Taiwan",
      genderValue: "Female",
      educationValue: "B.S. in Information Management, Soochow University",
      copied: "Email copied",
      copyFallback: "Please copy the email manually",
    },
    impact: [
      {
        value: "1 mo.",
        label: "Launched OTP Verification from 0 to 1",
        title: "Launched the OTP Verification Add-on from 0 to 1",
        description: "Started from enterprise identity verification needs and completed requirement definition, workflow design, API integration planning, admin capabilities, and launch acceptance.",
        details: ["Planned SMS OTP verification, resend, cooldown, and rate-limit flows", "Integrated the Every8D SMS API and designed usage, balance, and credit deduction management", "Coordinated engineering, QA, support, and sales to launch within one month"],
      },
      {
        value: "30+",
        label: "Enterprise client projects maintained",
        title: "Planned and maintained 30+ enterprise projects",
        description: "Worked on SurveyCake Enterprise client requirement management, feature optimization, issue investigation, and launch testing.",
        details: ["Covered finance, telecom, education, technology, and automotive use cases", "Translated client needs into executable specs and delivery plans", "Representative clients include E.SUN Bank, Cathay United Bank, Taiwan Mobile, MediaTek, and Toyota Taiwan"],
      },
      {
        value: "9+",
        label: "Enterprise clients adopted Add-on modules",
        title: "Add-on modules adopted by 9+ enterprise clients",
        description: "Turned repeated customization needs such as whitelist verification, event registration, and check-in into reusable modules.",
        details: ["Contributed to requirement consolidation, PRDs, specs, and user flows", "Supported client adoption, validation testing, and launch communication", "Built a foundation for repeatable sales and productization"],
      },
      {
        value: "3",
        label: "Clients upgraded to the AIO Platform",
        title: "3 enterprise clients upgraded to the AIO Platform",
        description: "Helped move Add-on capabilities from standalone modules toward an integrated platform for more consistent enterprise delivery.",
        details: ["Participated in AIO platform integration planning and architecture discussions", "Clarified upgrade scenarios and client adoption needs", "Improved project standardization and reduced customization maintenance burden"],
      },
    ],
    profile: {
      eyebrow: "Profile",
      title: "About Me",
      paragraphs: [
        "I graduated from the Department of Information Management at Soochow University and currently work as a Product Manager, focusing on SurveyCake Enterprise product planning and client project management.",
        "My work covers requirement interviews, product planning, PRD writing, user flow design, API integration planning, cross-functional collaboration, QA acceptance, and product launch. I have worked on OTP verification, enterprise survey automation, whitelist verification, event registration, and check-in workflows.",
        "I am especially interested in 0-to-1 product development and turning repeated customization requests into scalable product modules.",
      ],
      focus: [
        ["01", "Problem Framing", "Clarify real customer pain points through interviews and usage scenario analysis."],
        ["02", "Solution Planning", "Translate business requirements into PRDs, user flows, specs, and system flows."],
        ["03", "Delivery Management", "Coordinate engineering, QA, support, sales, and clients to ensure delivery and launch."],
      ],
    },
    projectsTitle: "Selected Projects",
    projects: [
      {
        kicker: "SurveyCake Enterprise",
        title: "OTP Verification Add-on",
        subtitle: "Built an enterprise identity verification product from 0 to 1",
        result: "0→1 / 1 mo.",
        summary:
          "Enterprise clients needed a way to verify respondents in surveys, event registration, and member data collection. I independently planned and drove the SurveyCake Enterprise OTP Verification Add-on, completing product design, development coordination, and launch within one month.",
        columns: [
          {
            title: "Role",
            items: ["Customer interviews and problem definition", "PRD, user flow, and functional spec writing", "Backstage admin and business model planning", "Cross-functional coordination with engineering, QA, and support"],
          },
          {
            title: "Core Features",
            items: ["SMS OTP verification and resend flow", "IP rate limits, phone cooldown, and anomaly monitoring", "Slack alerts, credits, usage, and balance management", "Every8D SMS API integration"],
          },
          {
            title: "Project Outcomes",
            items: ["Launched from 0 to 1 within one month", "Adopted by enterprise clients including Gjun and Onward Security", "Created a new value-added Enterprise product line", "Built the foundation for future email and international verification"],
          },
        ],
      },
      {
        kicker: "SurveyCake Add-on",
        title: "Add-on AIO Platform",
        subtitle: "Productized repeated customization projects",
        result: "9+ clients",
        summary:
          "SurveyCake had many automation customization projects that required repeated development and delivery. The Add-on strategy standardized high-frequency needs such as whitelist verification, event registration, and check-in into a reusable AIO platform.",
        columns: [
          {
            title: "Role",
            items: ["Requirement consolidation and product planning", "PRD, spec, and user flow design", "Productization strategy and cross-team planning", "Testing, launch coordination, and client adoption analysis"],
          },
          {
            title: "Project Outcomes",
            items: ["Add-on modules adopted by 9+ enterprise clients", "3 clients upgraded to the AIO Platform", "Established a repeatable sales model", "Representative clients: NAER, Cathay Life, ITRI"],
          },
        ],
      },
      {
        kicker: "Enterprise Integration",
        title: "Toyota Taiwan｜CS Survey Integration",
        subtitle: "Built an enterprise survey automation workflow",
        result: "3+ depts.",
        summary:
          "Toyota Taiwan needed a complete customer satisfaction survey distribution and data collection workflow across departments. I handled requirement interviews, process design, and project management while coordinating the client, vendor, and internal engineering team.",
        columns: [
          {
            title: "Role",
            items: ["Requirement analysis and workflow design", "API integration requirements and data flow design", "Vendor management and timeline tracking", "Acceptance testing and launch coordination"],
          },
          {
            title: "Project Outcomes",
            items: ["Completed the CS survey integration project", "Built automated survey distribution and collection", "Implemented automated data write-back", "Launched and moved into production operation"],
          },
        ],
      },
    ],
    experienceTitle: "Experience",
    experience: [
      {
        date: "2025.03 — 2026.06",
        role: "Product Manager｜25 Sprout",
        body: "Owned SurveyCake Enterprise product planning and client project management. Participated in and maintained 30+ enterprise projects across finance, telecom, education, and technology industries.",
        clients: "Representative clients: E.SUN Bank, Shin Kong Bank, Cathay United Bank, Taiwan Mobile, MediaTek, Gamania, Toyota Taiwan, and others.",
      },
      {
        date: "2024.09 — 2025.02",
        role: "UI/UX & Project Management Intern｜Chi Ce Cloud Intelligence Co., Ltd.",
        body: "Participated in cryptocurrency admin system development, responsible for wireframe design, requirement consolidation, feature acceptance testing, progress tracking, and Scrum-based collaboration.",
      },
    ],
    skillsTitle: "Core Skills",
    skills: [
      ["Product Planning", "Product Discovery, Requirement Analysis, Product Strategy, User Flow Design, Product Roadmap"],
      ["Documentation", "PRD, Functional Spec, User Story, Acceptance Criteria"],
      ["Project Management", "Agile / Scrum, Stakeholder Management, Cross-functional Collaboration, Vendor Management"],
      ["Technical Understanding", "API Integration, Webhook, SaaS Product, System Flow Design, Enterprise Solution"],
      ["Tools", "Jira, Confluence, Notion, Figma, Miro, Postman"],
    ],
    goal: {
      title: "Future Direction",
      body: "I aim to continue growing in product management and contribute across the full lifecycle from discovery and planning to launch and growth. I hope to join a team that values product culture and user value, while continuing to strengthen product thinking, business understanding, and cross-functional execution.",
    },
  },
};

const savedLocale = localStorage.getItem("portfolio-locale");

export default createI18n({
  legacy: false,
  locale: savedLocale || "zh",
  fallbackLocale: "zh",
  messages,
});
