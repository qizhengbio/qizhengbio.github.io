"use strict";

const translations = {
  en: {
    "meta.description": "Qizheng He, undergraduate researcher at Jilin University working on computational biology, molecular prediction, and AI for life science.",
    "brand.aria": "Qizheng He homepage",
    "nav.aria": "Primary navigation",
    "nav.publications": "Publications",
    "nav.education": "Education",
    "nav.awards": "Awards",
    "nav.experience": "Experience",
    "language.aria": "Language switcher",
    "hero.eyebrow": "Jilin University · Life Sciences · Tang Aoqing Honors Program",
    "hero.lead": "Undergraduate researcher interested in computational biology, molecular property prediction, toxicity modeling, and AI-assisted discovery in the life sciences.",
    "contact.aria": "Academic links",
    "contact.email": "Email",
    "contact.cv": "CV PDF",
    "portrait.alt": "Portrait of Qizheng He",
    "overview.aria": "Research snapshot",
    "overview.publications": "Publications in JPCB, JCIM, IJMS, Computational Biology and Medicine, and related venues.",
    "overview.firstAuthor": "First-author or co-first-author representative publications.",
    "overview.average": "Weighted average score in undergraduate study.",
    "publications.eyebrow": "Research Output",
    "publications.title": "Publications",
    "publications.note": "* indicates equal contribution.",
    "publication.badge.first": "First author",
    "publication.badge.cofirst": "Co-first author",
    "education.eyebrow": "Training",
    "education.title": "Education",
    "education.school": "Jilin University",
    "education.degree": "Tang Aoqing Honors Program, Biological Sciences track, B.S.",
    "date.presentRange": "2023.09 - Present",
    "education.weightedAverage": "Weighted Average",
    "education.english": "English",
    "education.courseworkTitle": "Selected Coursework",
    "education.coursework": "Python Programming 93.6, Innovation and Entrepreneurship Practice in Biology 92, Synthetic Biology 91, Chemical Biology 91, Neurobiology 97, Genetics A 91.3, Biochemistry Lab 94, Analytical Chemistry Lab 92, Cell Biology Lab 94, Microbiology Lab 92, Calculus A3 86.5.",
    "education.serviceTitle": "Campus Service",
    "education.serviceLeague": "League Branch Secretary, Tang Aoqing Honors Program, 2024 - Present.",
    "education.serviceCongress": "Member, Committee Office of Jilin University Student Congress, 2025 - Present.",
    "awards.eyebrow": "Recognition",
    "awards.title": "Awards",
    "awards.innovation": "Provincial Excellent Conclusion, College Students' Innovation and Entrepreneurship Training Program",
    "awards.researchScholarship": "Second Prize, Tang Aoqing Class Research Practice Scholarship, Jilin University",
    "awards.thirdScholarship": "Third-class Scholarship, Jilin University",
    "awards.freshman": "Top Freshman Scholarship, Jilin University",
    "awards.cnbo": "Bronze Medal, China National Biology Olympiad",
    "awards.usaco": "Gold Division, USA Computing Olympiad",
    "experience.eyebrow": "Practice",
    "experience.title": "Experience",
    "experience.biomod": "BIOMOD World Final, organizing team, main competition venue lead",
    "experience.manchester": "Life Sciences Summer School, University of Manchester",
    "experience.changbai": "Field practice in Changbai Mountain",
    "experience.yunnan": "Yunnan plateau plant survey field practice, Yunnan University",
    "experience.exchange": "Exchange courses: Neurobiology at Oxford University, Synthetic Biology at Imperial College London",
    "footer.copyright": "© 2026 Qizheng He. Built for GitHub Pages.",
    "footer.backTop": "Back to top"
  },
  zh: {
    "meta.description": "何奇正，吉林大学本科生，研究方向包括计算生物学、分子性质预测、毒性建模与生命科学人工智能。",
    "brand.aria": "何奇正个人主页",
    "nav.aria": "主导航",
    "nav.publications": "论文",
    "nav.education": "教育背景",
    "nav.awards": "荣誉奖项",
    "nav.experience": "实践经历",
    "language.aria": "语言切换",
    "hero.eyebrow": "吉林大学 · 生命科学学院 · 唐敖庆理科试验班",
    "hero.lead": "吉林大学生命科学学院本科生，关注计算生物学、分子性质预测、毒性建模与生命科学中的人工智能辅助发现。",
    "contact.aria": "学术链接",
    "contact.email": "邮箱",
    "contact.cv": "简历 PDF",
    "portrait.alt": "何奇正头像",
    "overview.aria": "科研概览",
    "overview.publications": "在 JPCB、JCIM、IJMS、Computational Biology and Medicine 等期刊发表论文 6 篇。",
    "overview.firstAuthor": "第一作者或共同第一作者代表性论文。",
    "overview.average": "本科阶段加权平均分。",
    "publications.eyebrow": "科研成果",
    "publications.title": "论文",
    "publications.note": "* 表示共同第一作者。",
    "publication.badge.first": "第一作者",
    "publication.badge.cofirst": "共同第一作者",
    "education.eyebrow": "培养经历",
    "education.title": "教育背景",
    "education.school": "吉林大学",
    "education.degree": "唐敖庆理科试验班（生物方向），本科",
    "date.presentRange": "2023.09 - 至今",
    "education.weightedAverage": "加权均分",
    "education.english": "英语水平",
    "education.courseworkTitle": "核心课程",
    "education.coursework": "Python 程序设计基础 93.6，生物学创新创业实践 92，合成生物学 91，化学生物学 91，神经生物学 97，遗传学 A 91.3，生物化学实验 94，分析化学实验 92，细胞生物学实验 94，微生物学实验 92，微积分 A3 86.5。",
    "education.serviceTitle": "学生工作",
    "education.serviceLeague": "唐敖庆理科试验班团支部书记，2024 - 至今。",
    "education.serviceCongress": "吉林大学学生代表大会委员处委员，2025 - 至今。",
    "awards.eyebrow": "荣誉",
    "awards.title": "荣誉奖项",
    "awards.innovation": "大学生创新创业训练计划省级优秀结题",
    "awards.researchScholarship": "吉林大学唐敖庆班科研实践奖学金二等奖",
    "awards.thirdScholarship": "吉林大学三等奖学金",
    "awards.freshman": "吉林大学拔尖新生奖学金",
    "awards.cnbo": "全国中学生生物学竞赛铜牌",
    "awards.usaco": "美国信息学奥林匹克竞赛 Gold 组",
    "experience.eyebrow": "实践",
    "experience.title": "实践经历",
    "experience.biomod": "BIOMOD 世界总决赛主办方筹备工作，主管竞赛主会场",
    "experience.manchester": "曼彻斯特大学生命科学暑期学校",
    "experience.changbai": "长白山野外实习",
    "experience.yunnan": "全国生物学拔尖基地云南高原植物勘察野外实习（云南大学）",
    "experience.exchange": "名校交流课程：牛津大学《神经生物学》、帝国理工学院《合成生物学》",
    "footer.copyright": "© 2026 何奇正。基于 GitHub Pages 构建。",
    "footer.backTop": "返回顶部"
  }
};

const STORAGE_KEY = "qizheng-he-language";
const DEFAULT_LANGUAGE = "en";

function readSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function detectPreferredLanguage() {
  const savedLanguage = readSavedLanguage();
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language || "";
  return browserLanguage.toLowerCase().startsWith("zh") ? "zh" : DEFAULT_LANGUAGE;
}

function saveLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // The page still works when storage is unavailable.
  }
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];
  const resolvedLanguage = translations[language] ? language : DEFAULT_LANGUAGE;

  document.documentElement.lang = resolvedLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const mappings = element.dataset.i18nAttr.split(";");
    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(":");
      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute, dictionary[key]);
      }
    });
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const isActive = button.dataset.langSwitch === resolvedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  saveLanguage(resolvedLanguage);
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

applyLanguage(detectPreferredLanguage());
