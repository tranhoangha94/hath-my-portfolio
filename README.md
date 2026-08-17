# TranHoangHa - Portfolio

Portfolio cá nhân của Trần Hoàng Hà (AI Engineer · Fullstack Developer), xây dựng bằng **Next.js 14 (App Router) + TypeScript**.

## Tính năng

- Trang chủ: Hero, Objective/Summary, Skills, Experience timeline, Projects (AI nổi bật, Fullstack/Frontend, VibeCode), Education & Certificates, Contact.
- Mỗi dự án (AI, Fullstack/Frontend, VibeCode) có **trang Detail riêng** tại `/projects/[slug]` — bấm vào card ở trang chủ sẽ điều hướng sang trang chi tiết, gồm mô tả mở rộng, tính năng chính, công nghệ sử dụng, và nút "Xem demo trực tiếp" (với các dự án VibeCode có link live).
- Toàn bộ nội dung được quản lý tập trung trong `data/profile.ts` và `data/projects.ts` — chỉnh sửa nội dung chỉ cần sửa 2 file này, không cần đụng vào UI.
- Dark theme, responsive, hiệu ứng scroll-reveal nhẹ.

## Chạy thử ở local

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Deploy lên Vercel

1. Đẩy source code này lên một repo GitHub (hoặc GitLab/Bitbucket).
2. Vào [vercel.com](https://vercel.com) → **New Project** → import repo vừa tạo.
3. Vercel tự nhận diện đây là dự án Next.js, giữ nguyên cấu hình mặc định (Build Command: `next build`, Output: mặc định) → bấm **Deploy**.
4. Sau khi deploy xong, có thể gắn domain riêng ở tab **Settings → Domains**.

Hoặc dùng Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Cập nhật nội dung

- Thông tin cá nhân, kỹ năng, kinh nghiệm, học vấn: sửa trong `data/profile.ts`.
- Danh sách dự án (thêm/sửa/xoá dự án, đổi mô tả, tech, link demo...): sửa trong `data/projects.ts`. Mỗi object trong mảng `projects` tương ứng với một trang Detail tại `/projects/<slug>`.
- Ảnh đại diện: thay file `public/avatar.png`.
