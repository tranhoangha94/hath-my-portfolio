from __future__ import annotations

import json
import unicodedata
from collections.abc import Callable
from textwrap import dedent

Locale = str


def _norm(text: str) -> str:
    text = text.replace("đ", "d").replace("Đ", "d").lower()
    stripped = unicodedata.normalize("NFKD", text)
    return "".join(ch for ch in stripped if unicodedata.category(ch) != "Mn")


def _pick(vi: str, en: str, locale: Locale) -> str:
    text = vi if locale.startswith("vi") else en
    return dedent(text).strip()


def tool_get_intro(locale: Locale) -> str:
    return _pick(
        """
        ### Trần Hoàng Hà
        **AI Engineer · Fullstack Developer**

        - Hơn 5 năm làm phần mềm, đang chuyển sâu sang AI (LLM, RAG)
        - Intern Lab Coach tại VinUni (Vingroup Applied AI)
        - AI Engineering Trainee từ 05/2026

        Xem CV tại [/cv](/cv) hoặc email [tranhoangha94@gmail.com](mailto:tranhoangha94@gmail.com).
        """,
        """
        ### Tran Hoang Ha
        **AI Engineer · Fullstack Developer**

        - 5+ years in software, now focusing on applied AI (LLM, RAG)
        - Lab Coach intern at VinUni (Vingroup Applied AI)
        - AI Engineering Trainee since May 2026

        CV: [/cv](/cv) · email [tranhoangha94@gmail.com](mailto:tranhoangha94@gmail.com).
        """,
        locale,
    )


def tool_get_contact(locale: Locale) -> str:
    return _pick(
        """
        ### Liên hệ

        - Email: [tranhoangha94@gmail.com](mailto:tranhoangha94@gmail.com)
        - Điện thoại: [0362 044 038](tel:0362044038)
        - Địa chỉ: CT4A Mễ Trì Thượng, Nam Từ Liêm, Hà Nội
        - CV: [tiếng Việt & English](/cv)
        """,
        """
        ### Contact

        - Email: [tranhoangha94@gmail.com](mailto:tranhoangha94@gmail.com)
        - Phone: [0362 044 038](tel:0362044038)
        - Address: CT4A Me Tri Thuong, Nam Tu Liem, Hanoi
        - CV: [Vietnamese & English](/cv)
        """,
        locale,
    )


def tool_get_education(locale: Locale) -> str:
    return _pick(
        """
        ### Học vấn
        - Tốt nghiệp **PTIT** (2012–2017)
        - Ngành CNTT — Kỹ thuật phần mềm

        ### VinUni AI20K (2026)
        - Vingroup Applied AI Talent · Build Phase · Team 163
        - LLM, RAG, tool-calling, Langfuse, Docker, Vercel, Railway
        - Team 163: V University Portal + AI Academic Advisor

        ### Chứng chỉ (12/2021)
        - freeCodeCamp JS Algorithms
        - Frontend Libraries
        - English Pre-Intermediate
        """,
        """
        ### Education
        - Graduated **PTIT** (2012–2017)
        - Information Technology — Software Engineering

        ### VinUni AI20K (2026)
        - Vingroup Applied AI Talent · Build Phase · Team 163
        - LLM, RAG, tool-calling, Langfuse, Docker, Vercel, Railway
        - Team 163: V University Portal + AI Academic Advisor

        ### Certificates (12/2021)
        - freeCodeCamp JS Algorithms
        - Frontend Libraries
        - English Pre-Intermediate
        """,
        locale,
    )


def tool_get_experience(locale: Locale) -> str:
    return _pick(
        """
        ### Hiện tại
        - Lab Coach intern — VinUni (từ 14/07/2026)
        - AI Engineering Trainee — Vingroup Applied AI (từ 28/05/2026)

        ### Trước đó
        - Frontend — FPT Software (10/2023–01/2026)
        - KIAI Soft (06–09/2023)
        - VMO Holding (05/2021–04/2023)
        - Samsung SVMC — Fresher → Junior (04/2017–08/2020)
        """,
        """
        ### Now
        - Lab Coach intern — VinUni (since 14 Jul 2026)
        - AI Engineering Trainee — Vingroup Applied AI (since 28 May 2026)

        ### Previously
        - Frontend — FPT Software (Oct 2023–Jan 2026)
        - KIAI Soft (Jun–Sep 2023)
        - VMO Holding (May 2021–Apr 2023)
        - Samsung SVMC — Fresher → Junior (Apr 2017–Aug 2020)
        """,
        locale,
    )


def tool_get_skills(locale: Locale) -> str:
    return _pick(
        """
        ### Technical skills

        **AI / LLM**
        - LLM Streaming (SSE), RAG, prompt/context, pgvector
        - Tool-calling & Guardrails, Langfuse, OR-Tools CP-SAT

        **Frontend**
        - ReactJS, NextJS, VueJS, Angular, TypeScript
        - Redux/Saga, Pinia, Tailwind, Ant Design, MUI

        **Backend**
        - Node.js, Express, NestJS, Prisma, RESTful API

        **Testing & DevOps**
        - Jest, CodeceptJS, Selenium, Docker, GitLab CI/CD

        **Khác**
        - DSA: Array, String, Stack, Queue, Sorting, DFS, BFS
        - Figma, Postman, Jira, Cursor AI, English B1
        """,
        """
        ### Technical skills

        **AI / LLM**
        - LLM Streaming (SSE), RAG, prompt/context, pgvector
        - Tool-calling & Guardrails, Langfuse, OR-Tools CP-SAT

        **Frontend**
        - ReactJS, NextJS, VueJS, Angular, TypeScript
        - Redux/Saga, Pinia, Tailwind, Ant Design, MUI

        **Backend**
        - Node.js, Express, NestJS, Prisma, RESTful API

        **Testing & DevOps**
        - Jest, CodeceptJS, Selenium, Docker, GitLab CI/CD

        **Also**
        - DSA: Array, String, Stack, Queue, Sorting, DFS, BFS
        - Figma, Postman, Jira, Cursor AI, English B1
        """,
        locale,
    )


def tool_get_academic_advisor(locale: Locale) -> str:
    return _pick(
        """
        ### Dự án nổi bật nhất
        **AI Academic Advisor — V University Portal**
        Flagship · Team 163 · VinUni AI20K 2026 · Fullstack

        Cổng thông tin học vụ giúp sinh viên kiểm tra điều kiện tiên quyết, chọn môn và lập kế hoạch học tập hợp lệ. Study Planner dùng OR-Tools CP-SAT; Advisor Chat đọc tài liệu quy chế bằng RAG. Cố vấn duyệt kế hoạch nhanh hơn, admin quản lý môn học, chương trình và người dùng.

        - Portal Next.js 16: 3 vai trò sinh viên / cố vấn / quản trị
        - Backend FastAPI + Supabase pgvector, OpenAI, Langfuse
        - Production: Frontend Vercel, Backend Railway

        Xem chi tiết trên portfolio: [AI Academic Advisor](/projects/ai-academic-advisor)

        Demo: [c2-app-163.vercel.app](https://c2-app-163.vercel.app/)
        """,
        """
        ### Standout project
        **AI Academic Advisor — V University Portal**
        Flagship · Team 163 · VinUni AI20K 2026 · Fullstack

        An academic portal that helps students check prerequisites, pick courses, and build a valid study plan. The Study Planner uses OR-Tools CP-SAT; Advisor Chat answers from regulation docs via RAG. Advisors review plans faster, and admins manage courses, programs, and users.

        - Next.js 16 portal with student / advisor / admin roles
        - FastAPI + Supabase pgvector, OpenAI, Langfuse
        - Production: Frontend on Vercel, backend on Railway

        Project details: [AI Academic Advisor](/projects/ai-academic-advisor)

        Live demo: [c2-app-163.vercel.app](https://c2-app-163.vercel.app/)
        """,
        locale,
    )


def tool_get_ai_mentor(locale: Locale) -> str:
    return _pick(
        """
        ### AI Mentor
        09/2025–11/2025

        - Hệ thống đào tạo AI, sinh khóa học/đề thi từ tài liệu
        - Dự án tại **FPT Smart Cloud**
        - Hà: Frontend Developer (không phải Fullstack), team 14 — trước khi học AI chính thức
        - Tech: Next.js, NestJS, Prisma, Material UI, Lexical
        """,
        """
        ### AI Mentor
        Sep–Nov 2025

        - AI training platform that generates courses/exams from documents
        - Built at **FPT Smart Cloud**
        - Ha: Frontend Developer (not Fullstack) on a team of 14, before formally studying AI
        - Tech: Next.js, NestJS, Prisma, Material UI, Lexical
        """,
        locale,
    )


def tool_get_llm_chat(locale: Locale) -> str:
    return _pick(
        """
        ### LLM Chat
        05/2025–08/2025

        - Chatbot LLM nội bộ doanh nghiệp, hỏi đáp tài liệu, streaming realtime
        - Hà: Frontend duy nhất, team 6
        - Tech: React 18, Vite, Antd, Tailwind, ReadableStream, redux-saga, EventChannel, Docker, GitLab CI/CD
        """,
        """
        ### LLM Chat
        May–Aug 2025

        - Internal enterprise LLM chatbot for document Q&A with realtime streaming
        - Ha: sole Frontend on a team of 6
        - Tech: React 18, Vite, Antd, Tailwind, ReadableStream, redux-saga, EventChannel, Docker, GitLab CI/CD
        """,
        locale,
    )


def tool_get_vibecode(locale: Locale) -> str:
    return _pick(
        """
        ### VibeCode
        Làm một mình · các app đều trên Vercel

        - Chord Detection — AI nhận chord guitar (đang phát triển, cũng thuộc nhóm AI Engineer)
        - Ride Together
        - World Cup Live 2026
        - TFT Best Suggestion
        - Ô ăn quan
        - Hahoot (quiz + AI)
        - Xe tăng 390
        """,
        """
        ### VibeCode
        Solo apps, all on Vercel

        - Chord Detection — AI guitar chords (in development; also listed as an AI Engineer project)
        - Ride Together
        - World Cup Live 2026
        - TFT Best Suggestion
        - O an quan
        - Hahoot (quiz + AI)
        - Xe tang 390
        """,
        locale,
    )


def tool_get_projects(locale: Locale) -> str:
    return _pick(
        """
        ### AI
        - [AI Academic Advisor](https://c2-app-163.vercel.app/) (flagship)
        - Chord Detection

        ### Frontend
        - AI Mentor (FPT Smart Cloud)
        - LLM Chat streaming
        - FPT / VMO / SVMC: Map OSS, OSS1, Customer Care, Genius, IGV, Icook, Bixby…

        ### VibeCode
        - Ride Together, Hahoot, Ô ăn quan, Xe tăng 390, TFT, World Cup Live

        Chi tiết từng dự án nằm ở tab **Projects** trên site.
        """,
        """
        ### AI
        - [AI Academic Advisor](https://c2-app-163.vercel.app/) (flagship)
        - Chord Detection

        ### Frontend
        - AI Mentor (FPT Smart Cloud)
        - LLM Chat streaming
        - FPT / VMO / SVMC: Map OSS, OSS1, Customer Care, Genius, IGV, Icook, Bixby…

        ### VibeCode
        - Ride Together, Hahoot, O an quan, Xe tang 390, TFT, World Cup Live

        Each project has its own page under **Projects**.
        """,
        locale,
    )


def tool_refuse_off_topic(locale: Locale) -> str:
    return _pick(
        """
        Tôi chỉ có thể trả lời thông tin nằm trong Portfolio và CV của Hà, vui lòng hỏi câu khác.

        Ví dụ: học vấn, technical skills, kinh nghiệm, dự án, liên hệ.
        """,
        """
        I can only answer information from Ha’s Portfolio and CV. Please ask something else.

        For example: education, technical skills, experience, projects, contact.
        """,
        locale,
    )


def tool_greet(locale: Locale) -> str:
    return _pick(
        """
        Xin chào, tôi là trợ lý của Hà, tôi có thể giúp gì cho bạn ?

        Bạn có thể hỏi:
        - Hà tốt nghiệp trường nào?
        - Technical skills của Hà?
        - Kinh nghiệm làm việc?
        - Các dự án mà Hà đã làm?
        - Dự án nổi bật nhất?
        - Liên hệ Hà như thế nào?
        """,
        """
        Hello, I’m Ha’s assistant. How can I help you?

        You can ask:
        - Where did Ha graduate?
        - What are Ha’s technical skills?
        - Work experience?
        - What projects has Ha worked on?
        - What is the standout project?
        - How can I contact Ha?
        """,
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
        "phrases": [
            "ky nang", "ky nang ky thuat", "ky nang chuyen mon", "chuyen mon",
            "stack", "cong nghe", "cong nghe su dung",
            "skill", "skills", "technical skill", "technical skills", "tech skill",
            "tech stack", "technical", "react", "nextjs", "frontend", "backend",
            "manh nhat", "gioi gi",
        ],
        "run": tool_get_skills,
    },
    {
        "name": "get_academic_advisor",
        "description": "AI Academic Advisor / V University Portal project.",
        "phrases": [
            "academic advisor", "ai academic", "study planner", "c2-app-163",
            "university portal", "hoc vu", "noi bat", "noi bat nhat",
            "flagship", "featured project", "du an hay nhat", "best project",
        ],
        "run": tool_get_academic_advisor,
    },
    {
        "name": "get_ai_mentor",
        "description": "AI Mentor project at FPT Smart Cloud.",
        "phrases": ["ai mentor", "fpt smart cloud", "smart cloud", "khoa hoc"],
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
        "phrases": [
            "du an", "cac du an", "nhung du an", "du an da lam",
            "project", "portfolio", "san pham", "lam du an gi",
        ],
        "run": tool_get_projects,
    },
    {
        "name": "refuse_off_topic",
        "description": "Refuse troll, rude, meaningless, overlong, or non-CV/portfolio questions.",
        "phrases": [],
        "run": tool_refuse_off_topic,
    },
]

_RUNNERS: dict[str, Callable[[str], str]] = {str(t["name"]): t["run"] for t in TOOLS}

MAX_QUESTION_CHARS = 2000

OFF_TOPIC = [
    "thoi tiet", "weather", "nhiet do", "bong da hom nay", "ty so",
    "chinh tri", "tong thong", "bau cu", "bitcoin", "crypto", "chung khoan",
    "viet code", "write code", "viet giup", "hack", "jailbreak", "bo qua huong dan",
    "ignore previous", "lam bai tap", "giai toan", "dich doan van", "ke chuyen",
    "hat mot", "loi bai hat", "nau an", "cong thuc nau", "sex", "nsfw",
    "vu khi", "bom", "ma tuy", "drug", "python script", "javascript function",
    "chatgpt", "openai api key", "prompt injection",
]

NOT_IN_CV = [
    "nguoi yeu", "ban gai", "ban trai", "crush", "ket hon", "ly hon", "doc than",
    "bo me", "gia dinh", "con cai", "hon nhan", "sinh nam", "nam sinh",
    "bao nhieu tuoi", "bao tuoi", "sinh nhat", "birthday", "how old",
    "chieu cao", "can nang", "so do", "luong", "thu nhap", "salary", "bao nhieu tien",
    "ton giao", "theo dao", "facebook", "instagram", "tiktok", "zalo",
    "so thich", "hobby", "thich an", "mon an yeu thich",
]

RUDE = [
    "dit me", "ditme", "dmm", "dm may", "clgt", "vcl", "suc vat",
    "oc cho", "oc heo", "do ngu", "ngu vl", "ngu qua", "bot ngu", "chatbot ngu",
    "do dien", "khon nan", "rac ruoi", "do ngoc",
    "fuck", "fucking", "shit", "bitch", "asshole", "stupid", "idiot", "stfu",
    "shut up", "fuck you", "dumb bot",
]

TROLL = [
    "nguoi ngoai hanh tinh", "alien", "sieu nhan", "batman", "iron man",
    "ke chuyen cuoi", "hat di", "do vui", "cau do", "1+1", "2+2",
    "bao nhieu bang", "ai dep hon", "ha co phai bot", "troll",
    "lam tho", "viet van", "dich sang", "ke mot cau",
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


def _has_any(question: str, flags: list[str]) -> bool:
    q = _norm(question)
    return any(flag in q for flag in flags)


def is_rude(question: str) -> bool:
    return _has_any(question, RUDE)


def is_troll(question: str) -> bool:
    q = _norm(question)
    if any(flag in q for flag in TROLL):
        return True
    letters = "".join(ch for ch in q if ch.isalpha())
    return letters in {"haha", "hahaha", "hahahaha", "lol", "lmao", "wkwk", "kkkk", "kkkkk"}


def is_nonsense(question: str) -> bool:
    raw = question.strip()
    if not raw:
        return True
    q = _norm(raw)
    compact = "".join(ch for ch in q if ch.isalnum())
    if len(compact) < 2:
        return True
    if compact.isdigit():
        return True
    letters = "".join(ch for ch in q if ch.isalpha())
    if len(letters) >= 6:
        if any(ch * 6 in letters for ch in set(letters)):
            return True
        if len(set(letters)) <= 2:
            return True
        vowels = sum(letters.count(v) for v in "aeiou")
        if vowels == 0 and len(letters) >= 8:
            return True
    tokens = [tok for tok in q.split() if tok]
    if len(tokens) >= 4 and len(set(tokens)) == 1:
        return True
    return False


def is_off_topic(question: str) -> bool:
    if _has_any(question, OFF_TOPIC) or _has_any(question, NOT_IN_CV):
        return True
    if route_tool(question):
        return False
    return True


def should_refuse(question: str) -> bool:
    if len(question) > MAX_QUESTION_CHARS:
        return True
    if is_rude(question) or is_troll(question) or is_nonsense(question):
        return True
    return is_off_topic(question)


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
