from __future__ import annotations

import unicodedata


def _norm(text: str) -> str:
    text = text.replace("đ", "d").replace("Đ", "d").lower()
    stripped = unicodedata.normalize("NFKD", text)
    return "".join(ch for ch in stripped if unicodedata.category(ch) != "Mn")

FAQS: list[dict] = [
    {
        "id": "intro",
        "min": 1,
        "phrases": [
            "ban la ai", "la ai", "who is", "who are",
            "tran hoang ha", "hoang ha la", "about ha", "about you",
        ],
        "vi": (
            "Trần Hoàng Hà là AI Engineer · Fullstack Developer, hơn 5 năm làm phần mềm, "
            "đang chuyển sâu sang AI (LLM, RAG). Hiện intern Lab Coach tại VinUni (Vingroup Applied AI) "
            "và AI Engineering Trainee từ 05/2026. Có thể xem CV tại trang /cv hoặc email tranhoangha94@gmail.com."
        ),
        "en": (
            "Tran Hoang Ha is an AI Engineer · Fullstack Developer with 5+ years in software, "
            "now focusing on applied AI (LLM, RAG). He is a Lab Coach intern at VinUni (Vingroup Applied AI) "
            "and an AI Engineering Trainee since May 2026. CV is on /cv, or email tranhoangha94@gmail.com."
        ),
    },
    {
        "id": "contact",
        "min": 1,
        "phrases": [
            "lien he", "email", "sdt", "so dien thoai", "phone", "call",
            "dia chi", "address", "cv", "ho so", "contact",
        ],
        "vi": (
            "Liên hệ Hà qua email tranhoangha94@gmail.com hoặc gọi 0362 044 038. "
            "Địa chỉ: CT4A Mễ Trì Thượng, Nam Từ Liêm, Hà Nội. "
            "CV tiếng Việt và English nằm ở trang /cv trên portfolio."
        ),
        "en": (
            "Reach Ha at tranhoangha94@gmail.com or 0362 044 038. "
            "Address: CT4A Me Tri Thuong, Nam Tu Liem, Hanoi. "
            "Vietnamese and English CVs are on the /cv page."
        ),
    },
    {
        "id": "education",
        "min": 1,
        "phrases": [
            "hoc van", "tot nghiep", "ptit", "dai hoc", "truong",
            "vinuni", "ai20k", "chung chi", "education", "university",
            "certificate", "hoc o dau", "hoc o truong",
        ],
        "vi": (
            "Hà tốt nghiệp PTIT (2012–2017), ngành CNTT — Kỹ thuật phần mềm. "
            "Năm 2026 theo chương trình Vingroup Applied AI Talent (VinUni AI20K, Build Phase, Team 163): "
            "LLM, RAG, tool-calling, Langfuse, Docker, Vercel, Railway. "
            "Team 163 làm V University Portal + AI Academic Advisor. "
            "Chứng chỉ 12/2021: freeCodeCamp JS Algorithms, Frontend Libraries, English Pre-Intermediate."
        ),
        "en": (
            "Ha graduated from PTIT (2012–2017), Information Technology — Software Engineering. "
            "In 2026 he joined the Vingroup Applied AI Talent Program (VinUni AI20K, Build Phase, Team 163): "
            "LLM, RAG, tool-calling, Langfuse, Docker, Vercel, Railway. "
            "Team 163 built V University Portal + AI Academic Advisor. "
            "Certificates (12/2021): freeCodeCamp JS Algorithms, Frontend Libraries, English Pre-Intermediate."
        ),
    },
    {
        "id": "experience",
        "min": 1,
        "phrases": [
            "kinh nghiem", "lam viec", "cong ty", "lich su", "work history",
            "experience", "fpt", "samsung", "svmc", "vmo", "kiai", "vinuni",
            "lam o dau", "da lam gi", "employer",
        ],
        "vi": (
            "Hiện tại: Lab Coach intern tại VinUni (từ 14/07/2026) và AI Engineering Trainee "
            "Vingroup Applied AI (từ 28/05/2026). Trước đó Frontend tại FPT Software (10/2023–01/2026), "
            "KIAI Soft (06–09/2023), VMO Holding (05/2021–04/2023), "
            "và Samsung SVMC (Fresher → Junior, 04/2017–08/2020)."
        ),
        "en": (
            "Currently: Lab Coach intern at VinUni (since 14 Jul 2026) and AI Engineering Trainee "
            "in the Vingroup Applied AI program (since 28 May 2026). Previously Frontend at "
            "FPT Software (Oct 2023–Jan 2026), KIAI Soft (Jun–Sep 2023), VMO Holding (May 2021–Apr 2023), "
            "and Samsung SVMC (Fresher → Junior, Apr 2017–Aug 2020)."
        ),
    },
    {
        "id": "skills",
        "min": 1,
        "phrases": [
            "ky nang", "stack", "cong nghe", "skills", "tech stack",
            "react", "nextjs", "frontend", "backend", "llm", "rag",
        ],
        "vi": (
            "AI/LLM: streaming SSE, RAG, prompt/context, pgvector, tool-calling, Langfuse, OR-Tools CP-SAT. "
            "Frontend: React, Next.js, Vue, Angular, TypeScript, Redux/Saga, Tailwind, Ant Design, MUI. "
            "Backend: Node.js, Express, NestJS, Prisma. "
            "Thêm Docker, GitLab CI/CD, Jest/Selenium/CodeceptJS. English B1."
        ),
        "en": (
            "AI/LLM: SSE streaming, RAG, prompt/context, pgvector, tool-calling, Langfuse, OR-Tools CP-SAT. "
            "Frontend: React, Next.js, Vue, Angular, TypeScript, Redux/Saga, Tailwind, Ant Design, MUI. "
            "Backend: Node.js, Express, NestJS, Prisma. Also Docker, GitLab CI/CD, Jest/Selenium/CodeceptJS. English B1."
        ),
    },
    {
        "id": "academic",
        "min": 1,
        "phrases": [
            "academic advisor", "ai academic", "study planner", "c2-app-163",
            "university portal", "hoc vu",
        ],
        "vi": (
            "AI Academic Advisor (V University Portal) là dự án AI flagship hiện tại, Team 163, VinUni AI20K 2026. "
            "Hà làm Fullstack: check tiên quyết, Study Planner (OR-Tools CP-SAT), chat RAG trên tài liệu quy chế. "
            "Stack: Next.js, FastAPI, Supabase pgvector, OpenAI, Docker, Vercel, Railway, Langfuse. "
            "Demo: https://c2-app-163.vercel.app/"
        ),
        "en": (
            "AI Academic Advisor (V University Portal) is his current AI flagship, Team 163, VinUni AI20K 2026. "
            "He was Fullstack: prerequisite checks, Study Planner (OR-Tools CP-SAT), RAG chat over regulation docs. "
            "Stack: Next.js, FastAPI, Supabase pgvector, OpenAI, Docker, Vercel, Railway, Langfuse. "
            "Live: https://c2-app-163.vercel.app/"
        ),
    },
    {
        "id": "mentor",
        "min": 1,
        "phrases": ["ai mentor", "techcombank", "khoa hoc"],
        "vi": (
            "AI Mentor (09/2025–11/2025): hệ thống đào tạo AI, sinh khóa học/đề thi từ tài liệu, "
            "doanh nghiệp lớn dùng (gồm Techcombank). Hà là Frontend Developer (không phải Fullstack) trong team 14, "
            "trước khi học AI chính thức. Tech: Next.js, NestJS, Prisma, Material UI, Lexical."
        ),
        "en": (
            "AI Mentor (Sep–Nov 2025): AI training platform that generates courses/exams from documents, "
            "used by enterprises including Techcombank. Ha was Frontend Developer (not Fullstack) on a team of 14, "
            "before formally studying AI. Tech: Next.js, NestJS, Prisma, Material UI, Lexical."
        ),
    },
    {
        "id": "llmchat",
        "min": 1,
        "phrases": ["llm chat", "chatbot noi bo", "streaming", "readable stream"],
        "vi": (
            "LLM Chat (05/2025–08/2025): chatbot LLM nội bộ doanh nghiệp, hỏi đáp tài liệu, streaming realtime. "
            "Hà là Frontend duy nhất, team 6. React 18, Vite, Antd, Tailwind, ReadableStream, redux-saga, EventChannel, Docker, GitLab CI/CD."
        ),
        "en": (
            "LLM Chat (May–Aug 2025): internal enterprise LLM chatbot for document Q&A with realtime streaming. "
            "Ha was the sole Frontend on a team of 6. React 18, Vite, Antd, Tailwind, ReadableStream, redux-saga, EventChannel, Docker, GitLab CI/CD."
        ),
    },
    {
        "id": "vibecode",
        "min": 1,
        "phrases": [
            "vibecode", "chord", "ride together", "hahoot", "o an quan",
            "xe tang", "tft", "world cup", "ca nhan", "side project",
        ],
        "vi": (
            "VibeCode (làm một mình): Chord Detection (AI nhận chord guitar, đang phát triển), Ride Together, "
            "World Cup Live 2026, TFT Best Suggestion, Ô ăn quan, Hahoot (quiz + AI), Xe tăng 390. "
            "Các app đều lên Vercel; Chord Detection cũng nằm nhóm dự án AI Engineer."
        ),
        "en": (
            "Solo VibeCode apps: Chord Detection (AI guitar chords, in development), Ride Together, "
            "World Cup Live 2026, TFT Best Suggestion, O an quan, Hahoot (quiz + AI), Xe tang 390. "
            "All are on Vercel; Chord Detection is also listed as an AI Engineer project."
        ),
    },
    {
        "id": "projects",
        "min": 1,
        "phrases": ["du an", "project", "portfolio", "san pham", "lam du an gi"],
        "vi": (
            "Nhóm AI: AI Academic Advisor (flagship, https://c2-app-163.vercel.app/), Chord Detection. "
            "Frontend: AI Mentor (Techcombank), LLM Chat streaming, plus dự án FPT/VMO/SVMC "
            "(Map OSS, OSS1, Customer Care, Genius, IGV, Icook, Bixby…). "
            "VibeCode: Ride Together, Hahoot, Ô ăn quan, Xe tăng 390, TFT, World Cup Live. "
            "Chi tiết từng dự án nằm ở tab Projects trên site."
        ),
        "en": (
            "AI: AI Academic Advisor (flagship, https://c2-app-163.vercel.app/) and Chord Detection. "
            "Frontend: AI Mentor (Techcombank), LLM Chat streaming, plus FPT/VMO/SVMC work "
            "(Map OSS, OSS1, Customer Care, Genius, IGV, Icook, Bixby…). "
            "VibeCode: Ride Together, Hahoot, O an quan, Xe tang 390, TFT, World Cup Live. "
            "Each project has its own page under Projects."
        ),
    },
]


def match_faq(question: str, locale: str) -> str | None:
    q = _norm(question)
    best: dict | None = None
    best_hits = 0
    for item in FAQS:
        matched = [_norm(phrase) for phrase in item["phrases"] if _norm(phrase) in q]
        if len(matched) < item["min"]:
            continue
        score = sum(len(phrase) for phrase in matched)
        if score > best_hits:
            best = item
            best_hits = score
    if not best:
        return None
    key = "vi" if locale.startswith("vi") else "en"
    return str(best[key])
