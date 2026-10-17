import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const a = searchParams.get('a');
  const userAgent = request.headers.get('user-agent') || '';

  const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app';
  const imageUrl = `${DOMAIN}/assets/sample.png`;
  const imageUrl2 = `${DOMAIN}/assets/sample2.png`;

  // Link trang đích bạn muốn người dùng chuyển hướng tới khi click vào
  const redirectUrl = 'https://google.com'; 

  // Kiểm tra xem có phải Bot của Facebook / mạng xã hội đang quét link không
  const isSocialCrawler = /facebookexternalhit|Facebot|Twitterbot|TelegramBot|WhatsApp/i.test(userAgent);

if (isSocialCrawler) {
    // Trả về HTML chứa thẻ Open Graph để Bot / Messenger hiển thị khung preview ảnh
    const htmlWithMeta = `<!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Img share</title>
    <meta property="og:title" content="Click here to share" />
    <meta property="og:description" content="Click here for more details" />
      <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:type" content="website" />
  </head>
  <body>
    <p>Loading preview...</p>
  </body>
  </html>`;
      return new NextResponse(htmlWithMeta, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

  // 2. KHI NGƯỜI TRUY CẬP (USER) CLICK VÀO LINK:
  // Nếu a = 0 hoặc bạn muốn mặc định người dùng bấm vào là chuyển hướng:
  if (a === '0' || a !== '1') {
    const metaRedirectHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Xem hình ảnh</title>
  <meta property="og:title" content="Hình ảnh chia sẻ" />
  <meta property="og:description" content="Bấm để xem chi tiết" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta http-equiv="refresh" content="3; url=${redirectUrl}">
</head>
<body>
  <p>Đang chuyển hướng, vui lòng đợi trong giây lát...</p>
  <script>window.location.href = "${redirectUrl}";</script>
</body>
</html>`;

    return new NextResponse(metaRedirectHtml, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  // 3. Nếu người dùng truy cập với a = 1: Trả về file ảnh thật để xem
  try {
    const filePath = path.join(process.cwd(), 'public', 'assets', 'sample.png');
    const imageBuffer = fs.readFileSync(filePath);

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('Image not found', { status: 404 });
  }
}