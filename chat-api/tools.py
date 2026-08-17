from __future__ import annotations

import json
import unicodedata
from collections.abc import Callable

Locale = str


def _norm(text: str) -> str:
    text = text.replace("đ", "d").replace("Đ", "d").lower()
    stripped = unicodedata.normalize("NFKD", text)
    return "".join(ch for ch in stripped if unicodedata.category(ch) != "Mn")


def _pick(vi: str, en: str, locale: Locale) -> str:
    return vi if locale.startswith("vi") else en


def tool_get_intro(locale: Locale) -> str:
    return _pick(
        "Trần Hoàng Hà là AI Engineer · Fullstack Developer, hơn 5 năm làm phần mềm, "
        "đang chuyển sâu sang AI (LLM, RAG). Hiện intern Lab Coach tại VinUni (Vingroup Applied AI) "
        "và AI Engineering Trainee từ 05/2026. Có thể xem CV tại trang /cv hoặc email tranhoangha94@gmail.com.",
        "Tran Hoang Ha is an AI Engineer · Fullstack Developer with 5+ years in software, "
        "now focusing on applied AI (LLM, RAG). He is a Lab Coach intern at VinUni (Vingroup Applied AI) "
        "and an AI Engineering Trainee since May 2026. CV is on /cv, or email tranhoangha94@gmail.com.",
        locale,
    )


def tool_get_contact(locale: Locale) -> str:
    return _pick(
        "Liên hệ Hà qua email tranhoangha94@gmail.com hoặc gọi 0362 044 038. "
        "Địa chỉ: CT4A Mễ Trì Thượng, Nam Từ Liêm, Hà Nội. "
        "CV tiếng Việt và English nằm ở trang /cv trên portfolio.",
        "Reach Ha at tranhoangha94@gmail.com or 0362 044 038. "
        "Address: CT4A Me Tri Thuong, Nam Tu Liem, Hanoi. "
        "Vietnamese and English CVs are on the /cv page.",
        locale,
    )


def tool_get_education(locale: Locale) -> str:
    return _pick(
        "Hà tốt nghiệp PTIT (2012–2017), ngành CNTT — Kỹ thuật phần mềm. "
        "Năm 2026 theo chương trình Vingroup Applied AI Talent (VinUni AI20K, Build Phase, Team 163): "
        "LLM, RAG, tool-calling, Langfuse, Docker, Vercel, Railway. "
        "Team 163 làm V University Portal + AI Academic Advisor. "
        "Chứng chỉ 12/2021: freeCodeCamp JS Algorithms, Frontend Libraries, English Pre-Intermediate.",
        "Ha graduated from PTIT (2012–2017), Information Technology — Software Engineering. "
        "In 2026 he joined the Vingroup Applied AI Talent Program (VinUni AI20K, Build Phase, Team 163): "
        "LLM, RAG, tool-calling, Langfuse, Docker, Vercel, Railway. "
        "Team 163 built V University Portal + AI Academic Advisor. "
        "Certificates (12/2021): freeCodeCamp JS Algorithms, Frontend Libraries, English Pre-Intermediate.",
        locale,
    )


def tool_get_experience(locale: Locale) -> str:
    return _pick(
        "Hiện tại: Lab Coach intern tại VinUni (từ 14/07/2026) và AI Engineering Trainee "
        "Vingroup Applied AI (từ 28/05/2026). Trước đó Frontend tại FPT Software (10/2023–01/2026), "
        "KIAI Soft (06–09/2023), VMO Holding (05/2021–04/2023), "
        "và Samsung SVMC (Fresher → Junior, 04/2017–08/2020).",
        "Currently: Lab Coach intern at VinUni (since 14 Jul 2026) and AI Engineering Trainee "
        "in the Vingroup Applied AI program (since 28 May 2026). Previously Frontend at "
        "FPT Software (Oct 2023–Jan 2026), KIAI Soft (Jun–Sep 2023), VMO Holding (May 2021–Apr 2023), "
        "and Samsung SVMC (Fresher → Junior, Apr 2017–Aug 2020).",
        locale,
    )


def tool_get_skills(locale: Locale) -> str:
    return _pick(
        "AI/LLM: streaming SSE, RAG, prompt/context, pgvector, tool-calling, Langfuse, OR-Tools CP-SAT. "
        "Frontend: React, Next.js, Vue, Angular, TypeScript, Redux/Saga, Tailwind, Ant Design, MUI. "
        "Backend: Node.js, Express, NestJS, Prisma. "
        "Thêm Docker, GitLab CI/CD, Jest/Selenium/CodeceptJS. English B1.",
        "AI/LLM: SSE streaming, RAG, prompt/context, pgvector, tool-calling, Langfuse, OR-Tools CP-SAT. "
        "Frontend: React, Next.js, Vue, Angular, TypeScript, Redux/Saga, Tailwind, Ant Design, MUI. "
        "Backend: Node.js, Express, NestJS, Prisma. Also Docker, GitLab CI/CD, Jest/Selenium/CodeceptJS. English B1.",
        locale,
    )


def tool_get_academic_advisor(locale: Locale) -> str:
    return _pick(
        "AI Academic Advisor (V University Portal) là dự án AI flagship hiện tại, Team 163, VinUni AI20K 2026. "
        "Hà làm Fullstack: check tiên quyết, Study Planner (OR-Tools CP-SAT), chat RAG trên tài liệu quy chế. "
        "Stack: Next.js, FastAPI, Supabase pgvector, OpenAI, Docker, Vercel, Railway, Langfuse. "
        "Demo: https://c2-app-163.vercel.app/",
        "AI Academic Advisor (V University Portal) is his current AI flagship, Team 163, VinUni AI20K 2026. "
        "He was Fullstack: prerequisite checks, Study Planner (OR-Tools CP-SAT), RAG chat over regulation docs. "
        "Stack: Next.js, FastAPI, Supabase pgvector, OpenAI, Docker, Vercel, Railway, Langfuse. "
        "Live: https://c2-app-163.vercel.app/",
        locale,
    )


def tool_get_ai_mentor(locale: Locale) -> str:
    return _pick(
        "AI Mentor (09/2025–11/2025): hệ thống đào tạo AI, sinh khóa học/đề thi từ tài liệu, "
        "doanh nghiệp lớn dùng (gồm Techcombank). Hà là Frontend Developer (không phải Fullstack) trong team 14, "
        "trước khi học AI chính thức. Tech: Next.js, NestJS, Prisma, Material UI, Lexical.",
        "AI Mentor (Sep–Nov 2025): AI training platform that generates courses/exams from documents, "
        "used by enterprises including Techcombank. Ha was Frontend Developer (not Fullstack) on a team of 14, "
        "before formally studying AI. Tech: Next.js, NestJS, Prisma, Material UI, Lexical.",
        locale,
    )


def tool_get_llm_chat(locale: Locale) -> str:
    return _pick(
        "LLM Chat (05/2025–08/2025): chatbot LLM nội bộ doanh nghiệp, hỏi đáp tài liệu, streaming realtime. "
        "Hà là Frontend duy nhất, team 6. React 18, Vite, Antd, Tailwind, ReadableStream, redux-saga, EventChannel, Docker, GitLab CI/CD.",
        "LLM Chat (May–Aug 2025): internal enterprise LLM chatbot for document Q&A with realtime streaming. "
        "Ha was the sole Frontend on a team of 6. React 18, Vite, Antd, Tailwind, ReadableStream, redux-saga, EventChannel, Docker, GitLab CI/CD.",
        locale,
    )


def tool_get_vibecode(locale: Locale) -> str:
    return _pick(
        "VibeCode (làm một mình): Chord Detection (AI nhận chord guitar, đang phát triển), Ride Together, "
        "World Cup Live 2026, TFT Best Suggestion, Ô ăn quan, Hahoot (quiz + AI), Xe tăng 390. "
        "Các app đều lên Vercel; Chord Detection cũng nằm nhóm dự án AI Engineer.",
        "Solo VibeCode apps: Chord Detection (AI guitar chords, in development), Ride Together, "
        "World Cup Live 2026, TFT Best Suggestion, O an quan, Hahoot (quiz + AI), Xe tang 390. "
        "All are on Vercel; Chord Detection is also listed as an AI Engineer project.",
        locale,
    )


def tool_get_projects(locale: Locale) -> str:
    return _pick(
        "Nhóm AI: AI Academic Advisor (flagship, https://c2-app-163.vercel.app/), Chord Detection. "
        "Frontend: AI Mentor (Techcombank), LLM Chat streaming, plus dự án FPT/VMO/SVMC "
        "(Map OSS, OSS1, Customer Care, Genius, IGV, Icook, Bixby…). "
        "VibeCode: Ride Together, Hahoot, Ô ăn quan, Xe tăng 390, TFT, World Cup Live. "
        "Chi tiết từng dự án nằm ở tab Projects trên site.",
        "AI: AI Academic Advisor (flagship, https://c2-app-163.vercel.app/) and Chord Detection. "
        "Frontend: AI Mentor (Techcombank), LLM Chat streaming, plus FPT/VMO/SVMC work "
        "(Map OSS, OSS1, Customer Care, Genius, IGV, Icook, Bixby…). "
        "VibeCode: Ride Together, Hahoot, O an quan, Xe tang 390, TFT, World Cup Live. "
        "Each project has its own page under Projects.",
        locale,
    )


def tool_refuse_off_topic(locale: Locale) -> str:
    return _pick(
        "Mình chỉ trả lời về Trần Hoàng Hà — học vấn, kinh nghiệm, kỹ năng, dự án và cách liên hệ. "
        "Câu hỏi này nằm ngoài phạm vi đó, nên mình xin phép không trả lời. "
        "Bạn hỏi về Hà giúp mình nhé, hoặc email tranhoangha94@gmail.com.",
        "I only answer questions about Tran Hoang Ha — education, experience, skills, projects, and contact. "
        "This is outside that scope, so I’ll pass. Ask about Ha, or email tranhoangha94@gmail.com.",
        locale,
    )


def tool_greet(locale: Locale) -> str:
    return _pick(
        "Xin chào, tôi là trợ lý của Hà, tôi có thể giúp gì cho bạn ?",
        "Hello, I’m Ha’s assistant. How can I help you?",
        locale,
    )


TOOLS: list[dict] = [
    {
        "name": "greet",
        "description": "Greet the visitor and list what the bot can answer.",
        "phrases": [
            "xin chao", "chao ban", "chao minh", "chao ha", "alo",
            "hello", "hi ", "hey", "good morning", "good afternoon", "good evening",
            "rat vui", "nice to meet", "how are you", "ban khoe khong",
        ],
        "run": tool_greet,
    },
    {
        "name": "get_intro",
        "description": "Who Tran Hoang Ha is: role, summary, current focus.",
        "phrases": ["ban la ai", "la ai", "who is", "who are", "tran hoang ha", "hoang ha la", "about ha", "about you", "gioi thieu"],
        "run": tool_get_intro,
    },
    {
        "name": "get_contact",
        "description": "Email, phone, address, and CV links.",
        "phrases": ["lien he", "email", "sdt", "so dien thoai", "phone", "call", "dia chi", "address", "cv", "ho so", "contact"],
        "run": tool_get_contact,
    },
    {
        "name": "get_education",
        "description": "Education, university, VinUni AI program, certificates.",
        "phrases": ["hoc van", "tot nghiep", "ptit", "dai hoc", "truong", "vinuni", "ai20k", "chung chi", "education", "university", "certificate", "hoc o dau", "hoc o truong"],
        "run": tool_get_education,
    },
    {
        "name": "get_experience",
        "description": "Work history: VinUni, FPT, KIAI, VMO, Samsung.",
        "phrases": ["kinh nghiem", "lam viec", "cong ty", "lich su", "work history", "experience", "fpt", "samsung", "svmc", "vmo", "kiai", "lam o dau", "da lam gi", "employer"],
        "run": tool_get_experience,
    },
    {
        "name": "get_skills",
        "description": "Technical skills and tech stack.",
        "phrases": ["ky nang", "stack", "cong nghe", "skills", "tech stack", "react", "nextjs", "frontend", "backend", "manh nhat", "gioi gi"],
        "run": tool_get_skills,
    },
    {
        "name": "get_academic_advisor",
        "description": "AI Academic Advisor / V University Portal project.",
        "phrases": ["academic advisor", "ai academic", "study planner", "c2-app-163", "university portal", "hoc vu"],
        "run": tool_get_academic_advisor,
    },
    {
        "name": "get_ai_mentor",
        "description": "AI Mentor project used by Techcombank.",
        "phrases": ["ai mentor", "techcombank", "khoa hoc"],
        "run": tool_get_ai_mentor,
    },
    {
        "name": "get_llm_chat",
        "description": "Internal LLM Chat streaming project.",
        "phrases": ["llm chat", "chatbot noi bo", "readable stream"],
        "run": tool_get_llm_chat,
    },
    {
        "name": "get_vibecode",
        "description": "Personal VibeCode apps.",
        "phrases": ["vibecode", "chord", "ride together", "hahoot", "o an quan", "xe tang", "tft", "world cup", "ca nhan", "side project"],
        "run": tool_get_vibecode,
    },
    {
        "name": "get_projects",
        "description": "Overview of AI, frontend, and VibeCode projects.",
        "phrases": ["du an", "project", "portfolio", "san pham", "lam du an gi"],
        "run": tool_get_projects,
    },
    {
        "name": "refuse_off_topic",
        "description": "Politely refuse questions not about Tran Hoang Ha’s profile.",
        "phrases": [],
        "run": tool_refuse_off_topic,
    },
]

_RUNNERS: dict[str, Callable[[str], str]] = {str(t["name"]): t["run"] for t in TOOLS}

OFF_TOPIC = [
    "thoi tiet", "weather", "nhiet do", "bong da hom nay", "ty so",
    "chinh tri", "tong thong", "bau cu", "bitcoin", "crypto", "chung khoan",
    "viet code", "write code", "viet giup", "hack", "jailbreak", "bo qua huong dan",
    "ignore previous", "lam bai tap", "giai toan", "dich doan van", "ke chuyen",
    "hat mot", "loi bai hat", "nau an", "cong thuc nau", "sex", "nsfw",
    "vu khi", "bom", "ma tuy", "drug", "python script", "javascript function",
    "chatgpt", "openai api key", "prompt injection",
]

ON_TOPIC = [
    "ha", "hoang", "portfolio", "cv", "du an", "hoc van", "kinh nghiem",
    "ky nang", "lien he", "ptit", "fpt", "samsung", "mentor", "vibecode",
    "academic", "tran hoang", "fullstack", "ai engineer", "tot nghiep",
    "cong ty", "vinuni", "svmc", "vmo", "kiai",
]


def ollama_tool_schema() -> list[dict]:
    return [
        {
            "type": "function",
            "function": {
                "name": tool["name"],
                "description": tool["description"],
                "parameters": {"type": "object", "properties": {}, "additionalProperties": False},
            },
        }
        for tool in TOOLS
        if tool["name"] != "greet"
    ]


def execute_tool(name: str, locale: Locale) -> str:
    runner = _RUNNERS.get(name, tool_refuse_off_topic)
    return runner(locale)


def route_tool(question: str) -> str | None:
    q = _norm(question).strip(" ?!.")
    if q in {
        "hi", "hello", "hey", "xin chao", "chao", "halo", "chao ban", "alo",
        "chao ha", "good morning", "good afternoon", "good evening",
        "ban khoe khong", "how are you",
    }:
        return "greet"
    best_name: str | None = None
    best_score = 0
    for tool in TOOLS:
        if tool["name"] == "refuse_off_topic":
            continue
        matched = [_norm(p) for p in tool["phrases"] if _norm(p) in q]
        if not matched:
            continue
        score = sum(len(p) for p in matched)
        if score > best_score:
            best_name = str(tool["name"])
            best_score = score
    return best_name


def is_off_topic(question: str) -> bool:
    q = _norm(question)
    if any(flag in q for flag in OFF_TOPIC):
        return True
    if route_tool(question):
        return False
    if any(flag in q for flag in ON_TOPIC):
        return False
    return True


def parse_tool_call(message: dict) -> str | None:
    calls = message.get("tool_calls") or []
    if calls:
        name = (calls[0].get("function") or {}).get("name")
        if isinstance(name, str) and name in _RUNNERS:
            return name
    content = message.get("content") or ""
    if "<tool_call>" in content and "<name>" in content:
        start = content.find("<name>") + 6
        end = content.find("</name>")
        if end > start:
            name = content[start:end].strip()
            if name in _RUNNERS:
                return name
    try:
        data = json.loads(content)
        name = (data.get("name") or data.get("tool") or "")
        if name in _RUNNERS:
            return name
    except (TypeError, json.JSONDecodeError):
        pass
    return None
