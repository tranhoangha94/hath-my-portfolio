import type { Locale } from "@/i18n/config";

export type ProjectCategory = "ai" | "work" | "vibecode";

export type Project = {
  slug: string;
  category: ProjectCategory;
  title: string;
  period: string;
  role: string;
  team?: string;
  badge: string;
  summary: string;
  description: string[];
  features: string[];
  tech: string[];
  link?: string;
  status?: string;
  image?: string;
  images?: string[];
  alsoIn?: ProjectCategory[];
};

type ProjectMeta = {
  slug: string;
  category: ProjectCategory;
  title: string;
  period: string;
  tech: string[];
  link?: string;
  image?: string;
  images?: string[];
  alsoIn?: ProjectCategory[];
};

type ProjectCopy = {
  role: string;
  team?: string;
  badge: string;
  summary: string;
  description: string[];
  features: string[];
  status?: string;
};

const meta: ProjectMeta[] = [
  {
    slug: "ai-academic-advisor",
    category: "ai",
    title: "AI Academic Advisor — V University Portal",
    period: "2026 · VinUni AI20K Build Phase",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Supabase (Auth + pgvector)",
      "OpenAI gpt-4o-mini",
      "OR-Tools CP-SAT",
      "Docker",
      "Vercel",
      "Railway",
      "Langfuse",
    ],
    link: "https://c2-app-163.vercel.app/",
    image: "/projects/ai-academic-advisor.jpg",
    images: [
      "/projects/ai-academic-advisor.jpg",
      "/projects/ai-academic-advisor-2.jpg",
    ],
  },
  {
    slug: "ai-mentor",
    category: "work",
    title: "AI Mentor — FPT Smart Cloud",
    period: "09/2025 – 11/2025",
    tech: ["NextJs", "NestJs", "Prisma", "Material UI", "Lexical editor", "Axios"],
  },
  {
    slug: "llm-chat",
    category: "work",
    title: "LLM Chat",
    period: "05/2025 – 08/2025",
    tech: [
      "ReactJs 18",
      "Vite",
      "Antd",
      "Tailwind CSS",
      "ReadableStream",
      "redux-saga",
      "EventChannel",
      "Docker",
      "GitLab CI/CD",
    ],
  },
  {
    slug: "kdv-project",
    category: "work",
    title: "KDV Project (Freelancer)",
    period: "04/2025 – 05/2025",
    tech: ["NextJs", "TailwindCSS", "ExpressJs", "Antd", "Zalo (plugin)", "Vercel", "Trello"],
  },
  {
    slug: "map-oss-generation",
    category: "work",
    title: "Map OSS Generation",
    period: "12/2024 – 03/2025",
    tech: ["VueJs3", "OpenLayer", "Turf", "Pinia", "Geoserver", "K6 performance testing", "AWS"],
  },
  {
    slug: "oss1-generation",
    category: "work",
    title: "OSS1 Generation",
    period: "09/2024 – 12/2024",
    tech: ["Html5", "CSS3", "VueJs3", "Tailwind CSS", "AGGrid"],
  },
  {
    slug: "customer-care",
    category: "work",
    title: "Customer Care",
    period: "06/2024 – 08/2024",
    tech: ["Angular 4", "Tailwind CSS"],
  },
  {
    slug: "won-app",
    category: "work",
    title: "Won App",
    period: "04/2024 – 05/2024",
    tech: ["Html5", "CSS3", "NextJs", "ReactJs", "TypeScript", "Ant Design", "Storybook"],
  },
  {
    slug: "genius",
    category: "work",
    title: "Genius",
    period: "10/2023 – 03/2024",
    tech: [
      "HTML",
      "CSS",
      "Tailwind",
      "Antd",
      "Styled Components",
      "React Hook Form",
      "Material UI",
      "React TypeScript",
      "Redux (Saga)",
      "Atomic Design",
      "NextJs",
    ],
  },
  {
    slug: "training-service",
    category: "work",
    title: "Training Service",
    period: "06/2023 – 09/2023",
    tech: [
      "HTML",
      "CSS",
      "Tailwind",
      "Antd",
      "Styled Components",
      "React Hook Form",
      "Material UI",
      "React TypeScript",
      "Redux (Saga)",
      "NextJs",
    ],
  },
  {
    slug: "igv",
    category: "work",
    title: "IGV",
    period: "09/2022 – 04/2023",
    tech: [
      "HTML",
      "CSS",
      "Tailwind",
      "Antd",
      "Styled Components",
      "Easy Dev (UI Framework)",
      "React TypeScript",
      "Redux (Saga)",
      "NextJs",
    ],
  },
  {
    slug: "icook",
    category: "work",
    title: "Icook",
    period: "04/2022 – 07/2022",
    tech: ["HTML", "CSS", "Tailwind", "Antd", "Styled Components", "ReactJs", "TypeScript", "Redux Saga"],
  },
  {
    slug: "logistic-portal",
    category: "work",
    title: "Logistic Portal",
    period: "08/2019 – 08/2020",
    tech: ["HTML", "CSS", "Material UI", "ReactJs", "TypeScript", "Redux"],
  },
  {
    slug: "bixby-utterance-tool",
    category: "work",
    title: "Bixby Utterance Tool",
    period: "04/2017 – 06/2019",
    tech: ["HTML", "CSS", "Material UI", "ReactJs", "TypeScript", "Redux"],
  },
  {
    slug: "chord-detection",
    category: "vibecode",
    title: "Chord Detection",
    period: "VibeCode Project",
    tech: ["AI Audio Processing", "Web App", "Vercel"],
    link: "https://chord-detection-iota.vercel.app/",
    image: "/projects/chord-detection.jpg",
    alsoIn: ["ai"],
  },
  {
    slug: "ride-together",
    category: "vibecode",
    title: "Ride Together",
    period: "VibeCode Project",
    tech: ["Maps / Geolocation", "Realtime", "Web App", "Vercel"],
    link: "https://ride-together-web.vercel.app/",
    image: "/projects/ride-together.jpg",
  },
  {
    slug: "world-cup-live-2026",
    category: "vibecode",
    title: "World Cup Live 2026",
    period: "VibeCode Project",
    tech: ["Web App", "Realtime Data", "Vercel"],
    link: "https://world-cup-live-2026.vercel.app/",
    image: "/projects/world-cup-live-2026.jpg",
  },
  {
    slug: "tft-best-suggestion",
    category: "vibecode",
    title: "TFT Best Suggestion",
    period: "VibeCode Project",
    tech: ["Web App", "Game Data", "Vercel"],
    link: "https://tft-best-suggestion.vercel.app/",
    image: "/projects/tft-best-suggestion.jpg",
  },
  {
    slug: "o-an-quan",
    category: "vibecode",
    title: "Ô ăn quan",
    period: "VibeCode Project",
    tech: ["Web Game", "Vercel"],
    link: "https://o-an-quan-classic.vercel.app/",
    image: "/projects/o-an-quan.jpg",
  },
  {
    slug: "hahoot",
    category: "vibecode",
    title: "Hahoot",
    period: "VibeCode Project",
    tech: ["Web App", "Realtime", "Vercel"],
    link: "https://hahoot.vercel.app/",
    image: "/projects/hahoot.jpg",
  },
  {
    slug: "xe-tang-390",
    category: "vibecode",
    title: "Xe tăng 390",
    period: "VibeCode Project",
    tech: ["Web Game", "Vercel"],
    link: "https://xe-tang-390.vercel.app/",
    image: "/projects/xe-tang-390.jpg",
  },
];

const vi: Record<string, ProjectCopy> = {
  "ai-academic-advisor": {
    role: "Fullstack Developer",
    team: "Team 163",
    badge: "AI · LLM · RAG",
    summary:
      "Cổng thông tin học vụ tích hợp AI Academic Advisor: kiểm tra điều kiện tiên quyết, Study Planner (OR-Tools CP-SAT), Advisor Chat dùng RAG tài liệu quy chế.",
    description: [
      "Xây dựng cổng thông tin học vụ (V University Portal) tích hợp AI Academic Advisor giúp sinh viên kiểm tra điều kiện tiên quyết, chọn môn học và lập kế hoạch học tập hợp lệ; hỗ trợ cố vấn duyệt kế hoạch nhanh hơn và admin quản lý dữ liệu học vụ (môn học, chương trình đào tạo, career track, người dùng).",
    ],
    features: [
      "Phát triển Web Portal bằng Next.js 16: luồng đăng nhập phân quyền 3 vai trò (sinh viên / cố vấn / quản trị), Study Planner, Advisor Chat, trang quản trị và cố vấn.",
      "Tích hợp API với Backend FastAPI cho sinh kế hoạch học tập (planner OR-Tools CP-SAT), chat session với AI Academic Advisor và Quick Help dùng RAG tài liệu quy chế.",
      "Xây dựng giao diện Advisor Chat gắn theo từng study plan (quản lý session theo planId, render markdown, xoá session kèm thông báo).",
      "Phối hợp triển khai production: Frontend trên Vercel, Backend trên Railway; theo dõi chất lượng qua guardrails đầu vào/đầu ra và metrics quan sát (Langfuse).",
    ],
  },
  "ai-mentor": {
    role: "Frontend Developer",
    team: "Team size 14",
    badge: "AI · Đào tạo doanh nghiệp",
    summary:
      "Hệ thống đào tạo dùng AI tại FPT Smart Cloud: sinh khoá học/đề thi từ tài liệu, theo dõi tiến độ học tập.",
    description: [
      "Xây dựng hệ thống đào tạo dùng AI tại FPT Smart Cloud, giúp doanh nghiệp thiết kế chương trình học, sinh khoá học/đề thi từ tài liệu và theo dõi tiến độ học tập của nhân viên; đánh giá hiệu quả đào tạo.",
    ],
    features: [
      "Tham gia phân tích nghiệp vụ, đề xuất giải pháp kỹ thuật cho các tính năng hệ thống.",
      "Xây dựng UI layout dùng chung và thư viện chung, đưa ra chuẩn và hướng dẫn sử dụng cho cả dự án.",
      "Dev và fix bug các tính năng Frontend.",
      "Thực hiện code review đảm bảo chất lượng và tuân thủ chuẩn dự án.",
    ],
  },
  "llm-chat": {
    role: "Frontend Developer (1 FE dev)",
    team: "Team size 6",
    badge: "AI · Chatbot · Streaming",
    summary:
      "Chatbot AI nội bộ doanh nghiệp: đọc/phân tích tài liệu, trả lời câu hỏi tra cứu tri thức, streaming realtime.",
    description: [
      "Xây dựng Chatbot AI dùng LLM cho hỗ trợ nội bộ doanh nghiệp: đọc/phân tích tài liệu, thu thập dữ liệu ngữ cảnh, trả lời câu hỏi giúp nhân viên tra cứu tri thức.",
    ],
    features: [
      "Thiết kế UI/UX cho chatbot; tham gia phân tích yêu cầu và định nghĩa tính năng dựa trên nền tảng ChatGPT/LLM.",
      "Xây dựng base project và kiến trúc Frontend đảm bảo khả năng mở rộng và bảo trì.",
      "Phát triển UI và tính năng Frontend, tích hợp API từ Backend và dịch vụ AI.",
      "Chủ động xử lý sự cố Frontend để đảm bảo trải nghiệm ổn định (streaming response).",
    ],
  },
  "kdv-project": {
    role: "Leader, Developer, PM",
    team: "Team size 3",
    badge: "Freelance · Website doanh nghiệp",
    summary:
      "Website marketing doanh nghiệp cho công ty kiểm định chất lượng công nghiệp, đang vận hành và liên tục cập nhật.",
    description: [
      "Thiết kế và phát triển website marketing doanh nghiệp cho công ty kiểm định chất lượng công nghiệp. Dự án đang vận hành và liên tục cập nhật theo yêu cầu thực tế.",
    ],
    features: [
      "Chịu trách nhiệm chính của dự án, đảm nhận toàn bộ từ lấy yêu cầu đến triển khai.",
      "Làm việc trực tiếp với khách hàng để phân tích yêu cầu, đề xuất giải pháp, xây dựng nội dung website.",
      "Thiết kế cấu trúc dự án, định hình kiến trúc source code, chuẩn hoá quy trình phát triển.",
      "Lên kế hoạch, phân công, theo dõi tiến độ; review code; trực tiếp phát triển UI và tính năng chính.",
      "Triển khai hệ thống lên production, cấu hình domain, vận hành môi trường live.",
    ],
  },
  "map-oss-generation": {
    role: "Frontend Developer",
    team: "FPT Software · Team size 4",
    badge: "GIS · Bản đồ số",
    summary:
      "Hệ thống bản đồ số tương tự Google Maps để giám sát và quản lý dịch vụ viễn thông, hiển thị đa lớp dữ liệu địa lý quy mô lớn.",
    description: [
      "Phát triển hệ thống bản đồ số tương tự Google Maps để giám sát và quản lý dịch vụ viễn thông; hỗ trợ hiển thị đa lớp và tối ưu hiệu năng dữ liệu địa lý quy mô lớn.",
    ],
    features: [
      "Tham gia giai đoạn thiết kế, đề xuất ý tưởng và giải pháp.",
      "Phát triển tính năng bản đồ, hiển thị Layer, Marker, Cluster...",
      "Nghiên cứu công cụ testing K6; fix lỗi hiển thị Polygon, Hexagon trên bản đồ.",
    ],
  },
  "oss1-generation": {
    role: "Frontend Developer",
    team: "FPT Software · Team size 8",
    badge: "Publishing UI · Banking",
    summary:
      "Publishing UI cho ứng dụng ngân hàng, chuyển đổi thiết kế Figma thành giao diện web với độ chính xác và nhất quán cao.",
    description: [
      "Publishing UI cho ứng dụng ngân hàng, chuyển đổi thiết kế Figma thành giao diện web với độ chính xác và nhất quán cao.",
    ],
    features: [
      "Chuyển đổi thiết kế UI từ Figma sang code Frontend.",
      "Đảm bảo UI chính xác, responsive và nhất quán trên các màn hình; tốc độ ~5 màn hình/ngày.",
      "Phối hợp tinh chỉnh UI theo phản hồi QA và khách hàng.",
    ],
  },
  "customer-care": {
    role: "Frontend Developer",
    team: "FPT Software · Team size 8",
    badge: "ERP · Internal Tool",
    summary: "Nâng cấp hệ thống ERP nội bộ, tập trung vào module Customer Care quản lý thông tin khách hàng.",
    description: [
      "Nâng cấp hệ thống ERP nội bộ, tập trung vào module Customer Care quản lý thông tin khách hàng.",
    ],
    features: [
      "Phát triển UI theo thiết kế mới, đảm bảo nhất quán và dễ dùng cho người dùng nội bộ.",
      "Phân tích vấn đề cùng team, đề xuất giải pháp UI và logic nghiệp vụ; fix lỗi đảm bảo ổn định hệ thống.",
    ],
  },
  "won-app": {
    role: "Frontend Developer",
    team: "FPT Software · Team size 5",
    badge: "Mobile-first",
    summary: "Ứng dụng mobile-first, tập trung triển khai UI và tối ưu trải nghiệm người dùng trên thiết bị di động.",
    description: [
      "Ứng dụng mobile-first, tập trung triển khai UI và tối ưu trải nghiệm người dùng trên thiết bị di động.",
    ],
    features: [
      "Chuyển đổi thiết kế Figma sang code Frontend theo hướng mobile-first.",
      "Đảm bảo UI responsive, tương thích nhiều kích thước màn hình; năng suất ~7 màn hình/ngày.",
    ],
  },
  genius: {
    role: "Frontend Developer",
    team: "FPT Software · Team size 14",
    badge: "Kế toán · Microservice",
    summary:
      "Hệ thống kế toán doanh nghiệp kiến trúc microservice, tích hợp dữ liệu đa nguồn và xử lý quy trình nghiệp vụ phức tạp.",
    description: [
      "Hệ thống kế toán doanh nghiệp kiến trúc microservice, tích hợp dữ liệu đa nguồn và xử lý quy trình nghiệp vụ phức tạp.",
    ],
    features: [
      "Làm việc với hệ thống microservice và tích hợp dữ liệu đa nguồn phía Frontend.",
      "Tham gia daily meeting, phân tích yêu cầu, ước lượng effort; phân tích Basic Design để hiểu logic nghiệp vụ.",
      "Phối hợp tester debug, fix lỗi logic thông thường và phức tạp; phát triển tính năng và viết unit test.",
    ],
  },
  "training-service": {
    role: "Frontend Developer",
    team: "KiaiSoft · Team size 5",
    badge: "HR System · Bảo trì",
    summary:
      "Bảo trì và nâng cấp hệ thống đào tạo HR không có tài liệu ban đầu; phân tích source code, tạo tài liệu kỹ thuật/nghiệp vụ.",
    description: [
      "Bảo trì và nâng cấp hệ thống đào tạo HR không có tài liệu ban đầu; team phân tích source code, tạo tài liệu kỹ thuật/nghiệp vụ, fix lỗi và phát triển tính năng mới.",
    ],
    features: [
      "Làm việc với hệ thống microservice, tích hợp dữ liệu đa nguồn; trace code để hiểu logic nghiệp vụ.",
      "Chịu trách nhiệm toàn bộ vấn đề Frontend; phát triển tính năng mới gồm hỗ trợ đa ngôn ngữ.",
      "Viết automation test bằng Python Selenium và CodeceptJS; tạo và cập nhật tài liệu kỹ thuật.",
    ],
  },
  igv: {
    role: "Frontend Developer",
    team: "VMO · Team size 12",
    badge: "Edtech · Từ đầu dự án",
    summary: "Xây dựng nền tảng học tiếng Anh cho IIG English từ đầu, gồm website học cho sinh viên và hệ thống Admin.",
    description: [
      "Xây dựng nền tảng học tiếng Anh cho IIG English từ đầu, gồm website học cho sinh viên và hệ thống Admin. Tham gia toàn bộ vòng đời dự án.",
    ],
    features: [
      "Tham gia từ khởi tạo đến hoàn thiện dự án, hiểu toàn bộ luồng nghiệp vụ và kiến trúc Frontend.",
      "Tích hợp dịch vụ bên thứ ba: Facebook, Google, Elsa English.",
      "Phối hợp chặt với PM, Tech Lead, BA; debug và fix lỗi UI/logic phức tạp cùng tester.",
    ],
  },
  icook: {
    role: "Frontend Developer",
    team: "VMO · Team size 8",
    badge: "E-commerce",
    summary: "Website thương mại điện tử và dịch vụ ngành thực phẩm, hỗ trợ hiển thị sản phẩm, đặt hàng và quản lý nội dung.",
    description: [
      "Website thương mại điện tử và dịch vụ ngành thực phẩm, hỗ trợ hiển thị sản phẩm, đặt hàng và quản lý nội dung.",
    ],
    features: [
      "Tham gia daily meeting và ước lượng effort cùng PM; làm việc trực tiếp với khách hàng để hiểu yêu cầu.",
      "Phát triển tính năng mới, bảo trì code cho thành viên mới; đóng vai trò Frontend lead trong module phụ trách.",
    ],
  },
  "logistic-portal": {
    role: "Frontend Developer",
    team: "SVMC · Team size 4",
    badge: "Logistics · Samsung",
    summary: "Hệ thống quản lý logistics nội bộ cho nhà máy sản xuất Samsung, hỗ trợ giám sát và quản lý quy trình logistics.",
    description: [
      "Hệ thống quản lý logistics nội bộ cho nhà máy sản xuất Samsung, hỗ trợ giám sát và quản lý quy trình logistics.",
    ],
    features: [
      "Làm việc với stakeholder để hiểu quy trình nghiệp vụ nhà máy, đề xuất giải pháp UI phù hợp.",
      "Phát triển tính năng Frontend mới và bảo trì code hiện có; hỗ trợ thành viên mới.",
    ],
  },
  "bixby-utterance-tool": {
    role: "Frontend Developer",
    team: "SVMC · Team size 3",
    badge: "Internal Tool · Samsung",
    summary: "Công cụ nội bộ quản lý và huấn luyện ngữ liệu ngôn ngữ cho trợ lý ảo Bixby của Samsung Galaxy.",
    description: [
      "Công cụ nội bộ quản lý và huấn luyện ngữ liệu ngôn ngữ cho trợ lý ảo Bixby của Samsung Galaxy.",
    ],
    features: [
      "Triển khai và cải tiến tính năng UI cho công cụ quản lý utterance.",
      "Fix lỗi UI và logic để cải thiện độ ổn định; cập nhật logic Frontend theo yêu cầu.",
    ],
  },
  "chord-detection": {
    role: "Solo Developer",
    badge: "AI Tool",
    status: "Đang phát triển",
    summary: "Ứng dụng AI soạn hợp âm bài hát từ file video, audio, hoặc link bài hát có sẵn trên Internet.",
    description: [
      "Chord Detection là công cụ giúp người dùng nhanh chóng có được bản hợp âm của một bài hát mà không cần nghe và dò tay từng đoạn. Người dùng chỉ cần cung cấp đầu vào là file video, file audio, hoặc dán link một bài hát có sẵn trên Internet, hệ thống sẽ phân tích và soạn ra hợp âm tương ứng.",
      "Dự án vẫn đang trong quá trình phát triển và tiếp tục cải thiện độ chính xác nhận diện hợp âm.",
    ],
    features: [
      "Nhận nhiều loại đầu vào: upload video, upload audio, hoặc dán link bài hát.",
      "Tự động phân tích và soạn hợp âm cho toàn bộ bài hát.",
      "Hướng tới trải nghiệm nhanh gọn cho người chơi nhạc, giáo viên dạy đàn, người tự học.",
    ],
  },
  "ride-together": {
    role: "Solo Developer",
    badge: "Map / Tracking",
    summary:
      "Ứng dụng cho nhóm phượt hoặc đi xe cùng nhau theo dõi vị trí trên bản đồ theo thời gian thực, tránh thất lạc khi di chuyển.",
    description: [
      "Ride Together phục vụ cho các team phượt hoặc đơn giản là một nhóm đi xe trên đường, cho phép cả nhóm nhìn thấy vị trí của nhau trên bản đồ theo thời gian thực.",
      "Mục tiêu là giúp người dùng di chuyển thuận tiện hơn, đỡ phải ngoái đầu nhìn lại khi đi đường, và quan trọng nhất là tránh thất lạc nhau giữa hành trình.",
    ],
    features: [
      "Hiển thị vị trí các thành viên trong nhóm trên cùng một bản đồ.",
      "Cập nhật vị trí theo thời gian thực trong suốt chuyến đi.",
      "Phù hợp cho nhóm phượt, đi phượt đường dài hoặc di chuyển đông người.",
    ],
  },
  "world-cup-live-2026": {
    role: "Solo Developer",
    badge: "Live Score",
    summary: "Theo dõi tỷ số và diễn biến các trận đấu World Cup 2026 theo thời gian thực.",
    description: [
      "World Cup Live 2026 là trang web giúp người hâm mộ bóng đá theo dõi tỷ số các trận đấu World Cup 2026 một cách nhanh chóng, không cần bỏ lỡ diễn biến trận đấu quan trọng.",
    ],
    features: [
      "Cập nhật tỷ số các trận đấu theo thời gian thực.",
      "Giao diện đơn giản, dễ theo dõi trên nhiều thiết bị.",
    ],
  },
  "tft-best-suggestion": {
    role: "Solo Developer",
    badge: "Game Guide",
    summary: "Web guideline cho game TFT, gợi ý đội hình và cách build đang mạnh nhất theo meta ở thời điểm hiện tại.",
    description: [
      "TFT Best Suggestion là một web guideline dành cho người chơi Teamfight Tactics (TFT), giúp người chơi nhanh chóng tìm thấy những đội hình (comps) và cách build đang hot, đang mạnh nhất theo meta hiện tại thay vì phải tự mày mò.",
    ],
    features: [
      "Gợi ý đội hình mạnh theo meta cập nhật.",
      "Tham khảo cách build item, lên đồ cho từng đội hình.",
      "Giao diện tra cứu nhanh, tập trung vào trải nghiệm người chơi.",
    ],
  },
  "o-an-quan": {
    role: "Solo Developer",
    badge: "Game dân gian",
    summary: "Phiên bản web của trò chơi dân gian cổ điển Việt Nam — Ô ăn quan.",
    description: [
      "Ô ăn quan là dự án tái hiện lại trò chơi dân gian, cổ điển của Việt Nam trên nền tảng web, giúp người chơi có thể trải nghiệm lại trò chơi tuổi thơ mọi lúc mọi nơi.",
    ],
    features: [
      "Tái hiện luật chơi cổ điển của Ô ăn quan.",
      "Giao diện bàn cờ trực quan, dễ chơi ngay trên trình duyệt.",
    ],
  },
  hahoot: {
    role: "Solo Developer",
    badge: "Quiz Platform",
    summary: "Nền tảng tạo và tham gia quiz tương tác trực tuyến, tương tự Kahoot.",
    description: [
      "Hahoot là nền tảng quiz tương tác trực tuyến, lấy cảm hứng từ Kahoot, cho phép tạo các bộ câu hỏi và tổ chức trò chơi trả lời câu hỏi trực tiếp cho nhóm/lớp học/sự kiện.",
    ],
    features: [
      "Tạo bộ câu hỏi trắc nghiệm tuỳ chỉnh.",
      "Tổ chức phiên chơi tương tác trực tuyến cho nhiều người tham gia.",
    ],
  },
  "xe-tang-390": {
    role: "Solo Developer",
    badge: "Game lịch sử",
    summary: "Game mang chủ đề lịch sử, tái hiện lại khoảnh khắc lịch sử hào hùng của dân tộc.",
    description: [
      "Xe tăng 390 là game yêu nước lấy chủ đề lịch sử, tái hiện lại khoảnh khắc lịch sử của dân tộc Việt Nam gắn liền với hình ảnh chiếc xe tăng 390 mang tính biểu tượng.",
    ],
    features: [
      "Tái hiện bối cảnh lịch sử qua trải nghiệm game tương tác.",
      "Hướng tới lan toả tinh thần lịch sử, yêu nước qua hình thức giải trí.",
    ],
  },
};

const en: Record<string, ProjectCopy> = {
  "ai-academic-advisor": {
    role: "Fullstack Developer",
    team: "Team 163",
    badge: "AI · LLM · RAG",
    summary:
      "Academic portal with an AI Academic Advisor: prerequisite checks, a Study Planner (OR-Tools CP-SAT), and Advisor Chat over regulation docs via RAG.",
    description: [
      "Built V University Portal with an AI Academic Advisor that helps students check prerequisites, pick courses, and produce a valid study plan; advisors can review plans faster, and admins manage academic data (courses, programs, career tracks, users).",
    ],
    features: [
      "Next.js 16 web portal: login and 3-role access (student / advisor / admin), Study Planner, Advisor Chat, admin and advisor pages.",
      "FastAPI integration for study-plan generation (OR-Tools CP-SAT), AI Academic Advisor chat sessions, and Quick Help RAG over regulation documents.",
      "Advisor Chat UI scoped to each study plan (sessions by planId, markdown rendering, session delete with confirmation).",
      "Production rollout: Frontend on Vercel, Backend on Railway; quality via input/output guardrails and Langfuse observability.",
    ],
  },
  "ai-mentor": {
    role: "Frontend Developer",
    team: "Team of 14",
    badge: "AI · Enterprise training",
    summary:
      "AI training system at FPT Smart Cloud: generate courses/exams from documents and track learning progress.",
    description: [
      "An AI training platform at FPT Smart Cloud for enterprises to design programs, generate courses/exams from documents, and track employee progress.",
    ],
    features: [
      "Joined business analysis and proposed technical solutions for system features.",
      "Built shared UI layouts and a common library, with standards and usage guidance for the whole project.",
      "Developed and fixed Frontend features.",
      "Code review to keep quality and project conventions.",
    ],
  },
  "llm-chat": {
    role: "Frontend Developer (sole FE)",
    team: "Team of 6",
    badge: "AI · Chatbot · Streaming",
    summary:
      "Internal enterprise AI chatbot: read/analyze documents, answer knowledge questions, realtime streaming.",
    description: [
      "Built an LLM chatbot for internal support: reading/analyzing documents, gathering context, and answering questions so employees can look up knowledge.",
    ],
    features: [
      "Chatbot UI/UX; requirements analysis and feature definition on a ChatGPT/LLM foundation.",
      "Project base and Frontend architecture for scale and maintainability.",
      "Frontend UI and features, integrating Backend APIs and AI services.",
      "Owned Frontend incidents to keep streaming responses stable.",
    ],
  },
  "kdv-project": {
    role: "Leader, Developer, PM",
    team: "Team of 3",
    badge: "Freelance · Business website",
    summary:
      "Marketing website for an industrial quality-inspection company — live and continuously updated.",
    description: [
      "Designed and developed a marketing website for an industrial quality-inspection company. The site is in production and still evolving with real requests.",
    ],
    features: [
      "Primary owner — from requirements through delivery.",
      "Worked directly with the client on requirements, solutions, and website content.",
      "Project structure, source architecture, and development process.",
      "Planning, assignment, progress tracking, code review, and hands-on UI/feature work.",
      "Production deploy, domain setup, and live operations.",
    ],
  },
  "map-oss-generation": {
    role: "Frontend Developer",
    team: "FPT Software · Team of 4",
    badge: "GIS · Digital maps",
    summary:
      "Google Maps–like digital map system for telecom monitoring, rendering large multi-layer geographic datasets.",
    description: [
      "Built a digital map system similar to Google Maps for monitoring telecom services, with multi-layer display and performance work on large geographic data.",
    ],
    features: [
      "Joined design, proposed ideas and solutions.",
      "Map features: layers, markers, clusters...",
      "Researched K6 testing; fixed Polygon and Hexagon rendering issues.",
    ],
  },
  "oss1-generation": {
    role: "Frontend Developer",
    team: "FPT Software · Team of 8",
    badge: "Publishing UI · Banking",
    summary:
      "Publishing UI for a banking app — turning Figma into web UI with high fidelity and consistency.",
    description: [
      "Publishing UI for a banking application, converting Figma into web UI with high accuracy and consistency.",
    ],
    features: [
      "Converted Figma UI to Frontend code.",
      "Accurate, responsive, consistent screens — about 5 screens/day.",
      "Iterated UI from QA and client feedback.",
    ],
  },
  "customer-care": {
    role: "Frontend Developer",
    team: "FPT Software · Team of 8",
    badge: "ERP · Internal Tool",
    summary: "Internal ERP upgrade focused on the Customer Care module for customer information.",
    description: [
      "Upgraded an internal ERP, focusing on the Customer Care module for managing customer information.",
    ],
    features: [
      "Built UI from the new design, consistent and easy for internal users.",
      "Analyzed issues with the team, proposed UI and business-logic solutions, and fixed bugs for stability.",
    ],
  },
  "won-app": {
    role: "Frontend Developer",
    team: "FPT Software · Team of 5",
    badge: "Mobile-first",
    summary: "Mobile-first app focused on UI implementation and a strong experience on phones.",
    description: [
      "A mobile-first application, focused on implementing UI and optimizing the experience on mobile devices.",
    ],
    features: [
      "Converted Figma to Frontend with a mobile-first approach.",
      "Responsive UI across screen sizes — about 7 screens/day.",
    ],
  },
  genius: {
    role: "Frontend Developer",
    team: "FPT Software · Team of 14",
    badge: "Accounting · Microservice",
    summary:
      "Enterprise accounting system on a microservice architecture, integrating multiple data sources and complex workflows.",
    description: [
      "Enterprise accounting system on microservices, integrating multiple data sources and handling complex business processes.",
    ],
    features: [
      "Worked with a microservice system and multi-source data on the Frontend.",
      "Daily meetings, requirements analysis, effort estimates; read Basic Design to understand business logic.",
      "Debugged with testers, fixed simple and complex logic bugs; built features and wrote unit tests.",
    ],
  },
  "training-service": {
    role: "Frontend Developer",
    team: "KiaiSoft · Team of 5",
    badge: "HR System · Maintenance",
    summary:
      "Maintained and upgraded an undocumented HR training system; reverse-engineered the code and wrote tech/business docs.",
    description: [
      "Maintained and upgraded an HR training system with no original docs; the team analyzed the source, wrote technical/business documentation, fixed bugs, and shipped new features.",
    ],
    features: [
      "Microservices and multi-source data; traced code to understand business logic.",
      "Owned all Frontend issues; built new features including i18n.",
      "Wrote automation tests with Python Selenium and CodeceptJS; created and updated technical docs.",
    ],
  },
  igv: {
    role: "Frontend Developer",
    team: "VMO · Team of 12",
    badge: "Edtech · Greenfield",
    summary: "English-learning platform for IIG English from scratch — student site and Admin.",
    description: [
      "Built an English-learning platform for IIG English from scratch, including the student website and Admin. Joined the full project lifecycle.",
    ],
    features: [
      "From kickoff to completion — full business flow and Frontend architecture.",
      "Third-party integrations: Facebook, Google, Elsa English.",
      "Worked closely with PM, Tech Lead, BA; debugged complex UI/logic with testers.",
    ],
  },
  icook: {
    role: "Frontend Developer",
    team: "VMO · Team of 8",
    badge: "E-commerce",
    summary: "Food-industry e-commerce site for product display, ordering, and content management.",
    description: [
      "E-commerce and services site for the food industry — product display, ordering, and content management.",
    ],
    features: [
      "Daily meetings and effort estimates with PM; worked directly with the client on requirements.",
      "New features, maintained code for newcomers; Frontend lead on the owned module.",
    ],
  },
  "logistic-portal": {
    role: "Frontend Developer",
    team: "SVMC · Team of 4",
    badge: "Logistics · Samsung",
    summary: "Internal logistics system for a Samsung factory — monitoring and managing logistics workflows.",
    description: [
      "Internal logistics system for a Samsung manufacturing plant, supporting monitoring and management of logistics processes.",
    ],
    features: [
      "Worked with stakeholders to understand factory processes and propose fitting UI.",
      "New Frontend features and maintenance; supported new teammates.",
    ],
  },
  "bixby-utterance-tool": {
    role: "Frontend Developer",
    team: "SVMC · Team of 3",
    badge: "Internal Tool · Samsung",
    summary: "Internal tool for managing and training language data for Samsung Galaxy’s Bixby assistant.",
    description: [
      "Internal tool for managing and training language utterances for Samsung Galaxy’s Bixby virtual assistant.",
    ],
    features: [
      "Shipped and improved UI features for the utterance management tool.",
      "Fixed UI and logic issues for stability; updated Frontend logic as requested.",
    ],
  },
  "chord-detection": {
    role: "Solo Developer",
    badge: "AI Tool",
    status: "In development",
    summary: "AI app that transcribes song chords from video, audio, or an existing track URL.",
    description: [
      "Chord Detection helps you get a song’s chord chart without picking it out by ear. Drop in a video, an audio file, or a link — the system analyzes it and produces the chords.",
      "Still in development, with ongoing work on detection accuracy.",
    ],
    features: [
      "Multiple inputs: video upload, audio upload, or a song link.",
      "Automatically analyzes and writes chords for the full track.",
      "Built for musicians, guitar teachers, and self-learners who want a fast workflow.",
    ],
  },
  "ride-together": {
    role: "Solo Developer",
    badge: "Map / Tracking",
    summary: "Realtime map for riding groups so nobody gets separated on the road.",
    description: [
      "Ride Together is for touring teams or anyone riding together — everyone sees each other on a shared map in realtime.",
      "The goal is easier group travel: less looking back on the road, and no one getting lost mid-ride.",
    ],
    features: [
      "Show every group member on one map.",
      "Realtime location updates throughout the trip.",
      "Fits touring groups, long rides, or traveling with a crowd.",
    ],
  },
  "world-cup-live-2026": {
    role: "Solo Developer",
    badge: "Live Score",
    summary: "Follow World Cup 2026 scores and match events in realtime.",
    description: [
      "World Cup Live 2026 helps fans follow World Cup 2026 scores quickly, without missing key moments.",
    ],
    features: [
      "Realtime match scores.",
      "Simple UI that works well across devices.",
    ],
  },
  "tft-best-suggestion": {
    role: "Solo Developer",
    badge: "Game Guide",
    summary: "TFT guide site suggesting the strongest comps and item builds for the current meta.",
    description: [
      "TFT Best Suggestion is a Teamfight Tactics guide so players can find hot, currently strong comps and builds instead of figuring it out alone.",
    ],
    features: [
      "Meta comps updated for the current patch.",
      "Item builds and loadouts per composition.",
      "Fast lookup UI focused on how players actually use it.",
    ],
  },
  "o-an-quan": {
    role: "Solo Developer",
    badge: "Folk game",
    summary: "Web version of the classic Vietnamese folk game Ô ăn quan.",
    description: [
      "Ô ăn quan brings a classic Vietnamese folk game to the web so you can play a childhood favorite anytime, anywhere.",
    ],
    features: [
      "Classic Ô ăn quan rules.",
      "Clear board UI you can play in the browser.",
    ],
  },
  hahoot: {
    role: "Solo Developer",
    badge: "Quiz Platform",
    summary: "Interactive online quiz platform, in the spirit of Kahoot.",
    description: [
      "Hahoot is a realtime quiz platform inspired by Kahoot — create question sets and run live games for a group, class, or event.",
    ],
    features: [
      "Custom multiple-choice question sets.",
      "Live interactive sessions for many players.",
    ],
  },
  "xe-tang-390": {
    role: "Solo Developer",
    badge: "Historical game",
    summary: "A history-themed game recreating a defining moment of the nation.",
    description: [
      "Xe tang 390 is a patriotic history game recreating a landmark moment of Vietnam, centered on the iconic tank 390.",
    ],
    features: [
      "Historical setting through interactive gameplay.",
      "Meant to share history and patriotism through play.",
    ],
  },
};

const copyByLocale: Record<Locale, Record<string, ProjectCopy>> = { vi, en };

export function projectCategories(p: { category: ProjectCategory; alsoIn?: ProjectCategory[] }): ProjectCategory[] {
  return [p.category, ...(p.alsoIn ?? [])];
}

export function getProjects(locale: Locale): Project[] {
  const copy = copyByLocale[locale];
  return meta.map((item) => ({ ...item, ...copy[item.slug] }));
}

export function getFeaturedProjects(locale: Locale) {
  return getProjects(locale).filter((p) => projectCategories(p).includes("ai"));
}

export function getWorkProjects(locale: Locale) {
  return getProjects(locale).filter((p) => projectCategories(p).includes("work"));
}

export function getVibecodeProjects(locale: Locale) {
  return getProjects(locale).filter((p) => projectCategories(p).includes("vibecode"));
}

export function getProjectBySlug(slug: string, locale: Locale) {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getProjectSlugs() {
  return meta.map((p) => p.slug);
}

/** @deprecated use getProjects(locale) */
export const projects = getProjects("vi");
export const featuredProjects = getFeaturedProjects("vi");
export const workProjects = getWorkProjects("vi");
export const vibecodeProjects = getVibecodeProjects("vi");
