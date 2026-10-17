# Next.js Messenger Preview & Dynamic Redirect

Dự án Next.js App Router hoàn chỉnh dùng để triển khai lên Vercel.

## Cấu trúc dự án:
- `app/picture.png/route.js`: Server Route xử lý URL `/picture.png?a=0` hoặc `/picture.png?a=1`.
  - Phân biệt Facebook Bot (Crawler) để trả về Open Graph Meta Tag cho Messenger hiển thị thumbnail.
  - Khi `a=0`: Trả về HTML chứa thẻ `<meta http-equiv="refresh">` để chuyển hướng người dùng.
  - Khi `a=1`: Trả về dữ liệu nhị phân ảnh PNG thật từ `public/assets/sample.png`.
- `vercel.json`: Cấu hình Rewrite URL trên Vercel.

## Các bước đưa lên Vercel:
1. Giải nén thư mục dự án.
2. Mở terminal tại thư mục dự án và chạy `npm install` để kiểm tra bản local.
3. Đẩy dự án lên GitHub.
4. Truy cập [Vercel Dashboard](https://vercel.com) -> **Add New Project** -> Chọn Repository GitHub của dự án.
5. Tạo biến môi trường `NEXT_PUBLIC_SITE_URL` trên Vercel chỉ định tên miền thực tế của bạn (ví dụ: `https://your-domain.vercel.app`).
6. Nhấn **Deploy**.
