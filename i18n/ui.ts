import type { Locale } from "./config";

export const ui = {
  vi: {
    meta: {
      title: "TranHoangHa - Portfolio",
      description:
        "Trần Hoàng Hà — AI Engineer · Fullstack Developer. Portfolio cá nhân: kinh nghiệm, kỹ năng, dự án AI/LLM và các sản phẩm VibeCode.",
    },
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      education: "Học vấn",
      contact: "Liên hệ",
      cv: "CV của tôi",
      menu: "Mở menu",
      lang: "Ngôn ngữ",
      scrollTop: "Lên đầu trang",
    },
    hero: {
      readyFor: "Sẵn sàng cho vị trí",
      ctaProjects: "Xem dự án AI",
      ctaContact: "Liên hệ ngay",
      photoBadge: "năm kinh nghiệm phát triển phần mềm",
    },
    about: { kicker: "Giới thiệu", title: "Objective & Professional Summary" },
    skills: { kicker: "Kỹ năng", title: "Technology & Skills" },
    experience: { kicker: "Kinh nghiệm làm việc", title: "Professional Experience" },
    projects: {
      kicker: "Dự án",
      title: "Projects",
      intro:
        "Chọn nhóm dự án theo vai trò để xem chi tiết — mỗi dự án có trang riêng với mô tả, tính năng chính và công nghệ sử dụng.",
      tabAi: "AI Engineer",
      tabWork: "Frontend Developer",
      tabVibecode: "VibeCode Developer",
      seeDetails: "Xem chi tiết",
    },
    education: { kicker: "Học vấn & Chứng chỉ", title: "Education & Certificates", certs: "Certificates" },
    cv: {
      label: "Xem CV",
      vi: "CV tiếng Việt",
      en: "English CV",
      kicker: "Hồ sơ",
      title: "Curriculum Vitae",
      download: "Tải PDF",
      back: "Quay lại trang chủ",
      previewTitle: "Xem trước CV",
    },
    footer: {
      headlineBefore: "Cùng xây dựng sản phẩm",
      headlineAfter: "tiếp theo?",
      sub: "Luôn sẵn sàng trao đổi về các cơ hội AI Engineer / Fullstack Developer.",
      email: "Gửi email",
      call: "Gọi điện",
    },
    detail: {
      back: "Quay lại danh sách dự án",
      notFound: "Không tìm thấy dự án — TranHoangHa Portfolio",
      liveDemo: "Xem demo trực tiếp",
      contact: "Liên hệ trao đổi",
      description: "Mô tả dự án",
      features: "Tính năng & đóng góp chính",
      tech: "Công nghệ sử dụng",
      info: "Thông tin dự án",
      period: "Thời gian",
      role: "Vai trò",
      related: "Dự án liên quan",
      screenshotAlt: "Giao diện",
      category: {
        ai: "AI · LLM Project",
        work: "Fullstack / Frontend Project",
        vibecode: "VibeCode Project",
      },
    },
  },
  en: {
    meta: {
      title: "TranHoangHa - Portfolio",
      description:
        "Tran Hoang Ha — AI Engineer · Fullstack Developer. Personal portfolio: experience, skills, AI/LLM projects, and VibeCode products.",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      cv: "My CV",
      menu: "Open menu",
      lang: "Language",
      scrollTop: "Back to top",
    },
    hero: {
      readyFor: "Open to roles",
      ctaProjects: "View AI projects",
      ctaContact: "Get in touch",
      photoBadge: "years of software experience",
    },
    about: { kicker: "About", title: "Objective & Professional Summary" },
    skills: { kicker: "Skills", title: "Technology & Skills" },
    experience: { kicker: "Work history", title: "Professional Experience" },
    projects: {
      kicker: "Projects",
      title: "Projects",
      intro:
        "Browse projects by role — each one has its own page covering the summary, key contributions, and tech stack.",
      tabAi: "AI Engineer",
      tabWork: "Frontend Developer",
      tabVibecode: "VibeCode Developer",
      seeDetails: "View details",
    },
    education: { kicker: "Education & certificates", title: "Education & Certificates", certs: "Certificates" },
    cv: {
      label: "View CV",
      vi: "Vietnamese CV",
      en: "English CV",
      kicker: "Resume",
      title: "Curriculum Vitae",
      download: "Download PDF",
      back: "Back to home",
      previewTitle: "CV preview",
    },
    footer: {
      headlineBefore: "Shall we build the next",
      headlineAfter: "product together?",
      sub: "Open to conversations about AI Engineer / Fullstack Developer opportunities.",
      email: "Send email",
      call: "Call",
    },
    detail: {
      back: "Back to projects",
      notFound: "Project not found — TranHoangHa Portfolio",
      liveDemo: "View live demo",
      contact: "Get in touch",
      description: "Project overview",
      features: "Key features & contributions",
      tech: "Tech stack",
      info: "Project info",
      period: "Timeline",
      role: "Role",
      related: "Related projects",
      screenshotAlt: "Screenshot of",
      category: {
        ai: "AI · LLM Project",
        work: "Fullstack / Frontend Project",
        vibecode: "VibeCode Project",
      },
    },
  },
} as const;

export type UiDict = (typeof ui)[Locale];

export function getUi(locale: Locale): UiDict {
  return ui[locale];
}
