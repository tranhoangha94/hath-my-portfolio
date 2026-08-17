import type { Locale } from "@/i18n/config";

export const profileShared = {
  name: "Trần Hoàng Hà",
  phone: "0362 044 038",
  phoneRaw: "0362044038",
  email: "tranhoangha94@gmail.com",
};

type ProfileCopy = {
  role: string;
  address: string;
  locationShort: string;
  objective: string;
  heroRole: string;
  heroLede: string;
  summary: string[];
  stats: { number: string; label: string }[];
  skills: { title: string; wide?: boolean; tags: string[] }[];
  experience: { title: string; company: string; period: string; bullets: string[] }[];
  education: { school: string; sub: string; date: string; bullets: string[] }[];
  certificates: string[];
};

const vi: ProfileCopy = {
  role: "AI Engineer · Fullstack Developer",
  address: "CT4A Mễ Trì Thượng, Nam Từ Liêm, Hà Nội",
  locationShort: "Nam Từ Liêm, Hà Nội",
  objective:
    "Fullstack Developer đang chuyển dịch định hướng sang AI Engineer, mong muốn ứng dụng nền tảng vững chắc về Frontend/Backend để xây dựng các sản phẩm AI thực tế (LLM, RAG, hệ thống trợ lý thông minh). Mục tiêu dài hạn là phát triển thành AI Engineer / Technical Lead, đóng góp bằng chuyên môn kỹ thuật, tư duy sản phẩm, khả năng mentoring và đưa giải pháp AI vào vận hành thực tế.",
  heroRole:
    "Hơn 5 năm kinh nghiệm Frontend/Fullstack, đang chuyển dịch chuyên sâu sang AI Engineer với các sản phẩm LLM & RAG thực chiến.",
  heroLede:
    "Xây dựng sản phẩm AI ứng dụng thực tế — chatbot LLM có RAG & streaming realtime, nền tảng đào tạo sinh khoá học từ tài liệu, và trợ lý học vụ AI Academic Advisor. Nền tảng vững về kiến trúc Frontend/Backend, leadership và mentoring.",
  summary: [
    "Hơn 5 năm kinh nghiệm phát triển phần mềm, chuyên sâu Frontend cho các ứng dụng quy mô lớn và kiến trúc microservice.",
    "Thành thạo các framework Frontend hiện đại: ReactJS, NextJS, VueJS, Angular.",
    "Có kinh nghiệm Backend với NodeJS (ExpressJS, NestJS) và Prisma, phối hợp hiệu quả giữa Frontend và Backend.",
    "Kinh nghiệm thực chiến xây dựng sản phẩm AI: chatbot LLM có RAG và streaming realtime (LLM Chat), nền tảng đào tạo AI sinh khoá học/đề thi từ tài liệu (AI Mentor), và trợ lý học vụ AI Academic Advisor hỗ trợ sinh viên lập kế hoạch học tập.",
    "Có khả năng tích hợp Frontend với các dịch vụ AI/LLM: streaming response (SSE, ReadableStream), quản lý trạng thái phức tạp (redux-saga, EventChannel).",
    "Kinh nghiệm về kiến trúc ứng dụng, thiết kế RESTful API, tích hợp dữ liệu đa nguồn và tối ưu hiệu năng hệ thống (K6 performance testing).",
    "Năng lực Leadership và Project Management đã được chứng minh, chủ động từ khâu lấy yêu cầu đến triển khai cho dự án freelance và nội bộ.",
    "Kỹ năng mentor thành viên, review code, định hình kiến trúc source code.",
    "Thành thạo Automation Testing (Selenium, CodeceptJS) và DevOps cơ bản (Docker, GitLab CI/CD).",
  ],
  stats: [
    { number: "5+", label: "Năm kinh nghiệm phát triển phần mềm" },
    { number: "21", label: "Dự án đã tham gia triển khai" },
    { number: "4", label: "Sản phẩm AI/LLM thực chiến" },
  ],
  skills: [
    {
      title: "AI / LLM",
      wide: true,
      tags: [
        "LLM Streaming (SSE)",
        "RAG Pipeline",
        "Prompt / Context Engineering",
        "Vector DB — Supabase pgvector",
        "Tool-calling & Guardrails",
        "Langfuse Observability",
        "OR-Tools CP-SAT Planner",
      ],
    },
    { title: "Frontend — Frameworks", tags: ["ReactJS", "NextJS", "VueJS", "Angular"] },
    {
      title: "Frontend — Languages",
      tags: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "jQuery", "TanStack Query"],
    },
    { title: "State Management", tags: ["Redux", "Redux Saga", "Pinia"] },
    {
      title: "UI & Styling",
      tags: ["Tailwind CSS", "Ant Design", "Material UI", "Bootstrap", "Styled Components"],
    },
    { title: "Design System", tags: ["Atomic Design", "Storybook"] },
    { title: "Backend", tags: ["NodeJS", "ExpressJS", "NestJS", "RESTful API", "Java (cơ bản)"] },
    {
      title: "Testing & DevOps",
      tags: ["Jest", "CodeceptJS", "Python Selenium", "Docker", "GitLab CI/CD"],
    },
    {
      title: "Data Structures & Algorithms",
      tags: ["Array", "String", "Stack", "Queue", "Sorting", "DFS", "BFS"],
    },
    { title: "VibeCode Tools", tags: ["Claude", "Cursor AI"] },
    { title: "Design Tools", tags: ["Stitch (Google)", "Google AI Studio"] },
    { title: "Tools & Ngoại ngữ", tags: ["Figma", "Postman", "Jira", "GitHub Copilot", "Tiếng Anh B1"] },
  ],
  experience: [
    {
      title: "Lab Coach (Thực tập)",
      company: "VinUni · Chương trình AI Thực chiến VinGroup",
      period: "14/07/2026 – nay",
      bullets: [
        "Làm công việc trợ giảng: hỗ trợ giảng viên giảng dạy và setup trước khi lên lớp.",
        "Đề xuất ý tưởng cập nhật hoặc thiết kế lại bài Lab; điều hành buổi Lab và hướng dẫn học viên thực hành.",
        "Tham gia dự án nghiên cứu và các dự án phục vụ chương trình AI Thực chiến.",
      ],
    },
    {
      title: "AI Engineering Trainee",
      company: "Vingroup Applied AI Talent Program — AI Thực chiến",
      period: "28/05/2026 – nay",
      bullets: [
        "Tham gia chương trình đào tạo AI thực chiến của Vingroup, tập trung xây dựng sản phẩm AI ứng dụng từ ý tưởng đến triển khai production.",
        "Học chuyên sâu về LLM, RAG, tool-calling/guardrails, MLOps/observability cơ bản và triển khai cloud.",
      ],
    },
    {
      title: "Front-end Developer",
      company: "FPT Software",
      period: "10/2023 – 01/2026",
      bullets: [
        "Dev Frontend cho các dự án Outsource và nội bộ; làm việc độc lập, chủ động ước lượng & bám deadline.",
        "Đọc Basic Design Document, tuân thủ coding convention, sử dụng UI Library khách hàng cung cấp.",
        "Chịu trách nhiệm toàn bộ vấn đề Frontend; định hướng trở thành Frontend leader; phỏng vấn khách hàng nhận dự án mới.",
      ],
    },
    {
      title: "Front-end Developer",
      company: "KIAI Soft",
      period: "06/2023 – 09/2023",
      bullets: [
        "Họp PM/Tester/BRSE lấy yêu cầu, chia task; fix bug và trace code khi thiếu tài liệu.",
        "Viết công cụ auto test bằng Python Selenium & CodeceptJS; dựng local server bằng Docker Network.",
      ],
    },
    {
      title: "Front-end Developer",
      company: "VMO Holding",
      period: "05/2021 – 04/2023",
      bullets: [
        "Dev dự án Outsource với ReactJS, NextJS; áp dụng Tailwind CSS, Ant Design.",
        "Tham gia code review, phát triển theo SRS/Figma, hỗ trợ đồng đội xử lý logic khó, làm Agile Scrum.",
      ],
    },
    {
      title: "Front-end Developer (Fresher → Junior)",
      company: "Samsung Vietnam Mobile R&D Center",
      period: "04/2017 – 08/2020",
      bullets: [
        "Dev dự án nội bộ tập đoàn theo Agile Scrum; thực chiến HTML5, CSS3, JavaScript, ReactJS.",
        "Responsive design cùng UX/UI designer; hỗ trợ Backend fetch API và hiển thị dữ liệu.",
      ],
    },
  ],
  education: [
    {
      school: "Vingroup Applied AI Talent Program — VinUni AI20K",
      sub: "Build Phase · Đào tạo AI thực chiến · Team 163",
      date: "2026",
      bullets: [
        "Thiết kế hệ thống AI ứng dụng LLM, RAG, tool-calling/guardrails, planner/rule-based engine.",
        "MLOps/observability cơ bản (Langfuse) và triển khai cloud (Vercel, Railway, Docker).",
        "Team 163: xây dựng V University Portal tích hợp AI Academic Advisor.",
      ],
    },
    {
      school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
      sub: "Công nghệ thông tin · Chuyên ngành Kỹ thuật phần mềm",
      date: "2012 – 2017",
      bullets: [
        "Ngôn ngữ lập trình: C, C++, Java.",
        "Web Services, phát triển ứng dụng di động Android.",
        "Thuật toán & Cấu trúc dữ liệu; Phân tích thiết kế hệ thống; Quản lý dự án.",
      ],
    },
  ],
  certificates: [
    "12/2021 — Freecodecamp: JavaScript Algorithms and Data Structures",
    "12/2021 — Freecodecamp: Frontend Development Libraries",
    "12/2021 — Chứng chỉ tiếng Anh trình độ Pre-Intermediate",
  ],
};

const en: ProfileCopy = {
  role: "AI Engineer · Fullstack Developer",
  address: "CT4A Me Tri Thuong, Nam Tu Liem, Hanoi",
  locationShort: "Nam Tu Liem, Hanoi",
  objective:
    "A Fullstack Developer pivoting toward AI Engineer, applying a solid Frontend/Backend foundation to ship real AI products (LLMs, RAG, intelligent assistants). Long-term goal: grow into an AI Engineer / Technical Lead — contributing through technical depth, product thinking, mentoring, and putting AI into production.",
  heroRole:
    "5+ years in Frontend/Fullstack, now going deep as an AI Engineer with production LLM & RAG products.",
  heroLede:
    "I build applied AI products — an LLM chatbot with RAG and realtime streaming, a training platform that generates courses from documents, and an AI Academic Advisor for study planning. Strong in Frontend/Backend architecture, leadership, and mentoring.",
  summary: [
    "5+ years in software development, with deep Frontend experience on large-scale apps and microservice architectures.",
    "Fluent in modern Frontend frameworks: ReactJS, NextJS, VueJS, Angular.",
    "Backend experience with NodeJS (ExpressJS, NestJS) and Prisma, collaborating effectively across the stack.",
    "Hands-on AI products: an LLM chatbot with RAG and realtime streaming (LLM Chat), an AI training platform that generates courses/exams from documents (AI Mentor), and an AI Academic Advisor that helps students plan their studies.",
    "Integrating Frontend with AI/LLM services: streaming responses (SSE, ReadableStream) and complex state (redux-saga, EventChannel).",
    "Experience in application architecture, RESTful API design, multi-source data integration, and performance work (K6).",
    "Proven leadership and project management — owning freelance and internal work from requirements through delivery.",
    "Mentoring teammates, reviewing code, and shaping source architecture.",
    "Comfortable with automation testing (Selenium, CodeceptJS) and basic DevOps (Docker, GitLab CI/CD).",
  ],
  stats: [
    { number: "5+", label: "Years of software experience" },
    { number: "21", label: "Projects delivered" },
    { number: "4", label: "Production AI/LLM products" },
  ],
  skills: [
    {
      title: "AI / LLM",
      wide: true,
      tags: [
        "LLM Streaming (SSE)",
        "RAG Pipeline",
        "Prompt / Context Engineering",
        "Vector DB — Supabase pgvector",
        "Tool-calling & Guardrails",
        "Langfuse Observability",
        "OR-Tools CP-SAT Planner",
      ],
    },
    { title: "Frontend — Frameworks", tags: ["ReactJS", "NextJS", "VueJS", "Angular"] },
    {
      title: "Frontend — Languages",
      tags: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "jQuery", "TanStack Query"],
    },
    { title: "State Management", tags: ["Redux", "Redux Saga", "Pinia"] },
    {
      title: "UI & Styling",
      tags: ["Tailwind CSS", "Ant Design", "Material UI", "Bootstrap", "Styled Components"],
    },
    { title: "Design System", tags: ["Atomic Design", "Storybook"] },
    { title: "Backend", tags: ["NodeJS", "ExpressJS", "NestJS", "RESTful API", "Java (basics)"] },
    {
      title: "Testing & DevOps",
      tags: ["Jest", "CodeceptJS", "Python Selenium", "Docker", "GitLab CI/CD"],
    },
    {
      title: "Data Structures & Algorithms",
      tags: ["Array", "String", "Stack", "Queue", "Sorting", "DFS", "BFS"],
    },
    { title: "VibeCode Tools", tags: ["Claude", "Cursor AI"] },
    { title: "Design Tools", tags: ["Stitch (Google)", "Google AI Studio"] },
    { title: "Tools & Languages", tags: ["Figma", "Postman", "Jira", "GitHub Copilot", "English B1"] },
  ],
  experience: [
    {
      title: "Lab Coach (Internship)",
      company: "VinUni · Vingroup Applied AI Program",
      period: "14/07/2026 – Present",
      bullets: [
        "Teaching assistant: supporting instructors and setting up before class.",
        "Propose updates or redesigns for lab sessions; run the labs and guide students through hands-on practice.",
        "Contribute to research and projects that support the Applied AI program.",
      ],
    },
    {
      title: "AI Engineering Trainee",
      company: "Vingroup Applied AI Talent Program",
      period: "28/05/2026 – Present",
      bullets: [
        "Joined Vingroup’s applied AI program, building AI products from idea through production.",
        "Deep dive into LLMs, RAG, tool-calling/guardrails, basic MLOps/observability, and cloud deployment.",
      ],
    },
    {
      title: "Front-end Developer",
      company: "FPT Software",
      period: "10/2023 – 01/2026",
      bullets: [
        "Frontend development for outsourced and internal projects; worked independently, estimated effort, and hit deadlines.",
        "Read Basic Design Documents, followed coding conventions, and used client-provided UI libraries.",
        "Owned Frontend end-to-end; growing toward Frontend lead; interviewed clients to take on new work.",
      ],
    },
    {
      title: "Front-end Developer",
      company: "KIAI Soft",
      period: "06/2023 – 09/2023",
      bullets: [
        "Worked with PM/Tester/BRSE to gather requirements and split tasks; fixed bugs and traced code when docs were missing.",
        "Built auto-test tools with Python Selenium & CodeceptJS; set up local servers with Docker Network.",
      ],
    },
    {
      title: "Front-end Developer",
      company: "VMO Holding",
      period: "05/2021 – 04/2023",
      bullets: [
        "Outsourced projects with ReactJS and NextJS; Tailwind CSS and Ant Design.",
        "Code review, built from SRS/Figma, helped teammates with hard logic, worked in Agile Scrum.",
      ],
    },
    {
      title: "Front-end Developer (Fresher → Junior)",
      company: "Samsung Vietnam Mobile R&D Center",
      period: "04/2017 – 08/2020",
      bullets: [
        "Internal products in Agile Scrum; hands-on HTML5, CSS3, JavaScript, ReactJS.",
        "Responsive design with UX/UI designers; supported Backend API fetching and data display.",
      ],
    },
  ],
  education: [
    {
      school: "Vingroup Applied AI Talent Program — VinUni AI20K",
      sub: "Build Phase · Applied AI training · Team 163",
      date: "2026",
      bullets: [
        "Designed applied AI systems with LLMs, RAG, tool-calling/guardrails, and a planner/rule-based engine.",
        "Basic MLOps/observability (Langfuse) and cloud deploy (Vercel, Railway, Docker).",
        "Team 163: built V University Portal with an integrated AI Academic Advisor.",
      ],
    },
    {
      school: "Posts and Telecommunications Institute of Technology (PTIT)",
      sub: "Information Technology · Software Engineering",
      date: "2012 – 2017",
      bullets: [
        "Programming languages: C, C++, Java.",
        "Web services and Android mobile development.",
        "Algorithms & data structures; system analysis and design; project management.",
      ],
    },
  ],
  certificates: [
    "12/2021 — freeCodeCamp: JavaScript Algorithms and Data Structures",
    "12/2021 — freeCodeCamp: Frontend Development Libraries",
    "12/2021 — English certificate — Pre-Intermediate",
  ],
};

const byLocale: Record<Locale, ProfileCopy> = { vi, en };

export function getProfile(locale: Locale) {
  return { ...profileShared, ...byLocale[locale] };
}

/** @deprecated use getProfile(locale) */
export const profile = getProfile("vi");
