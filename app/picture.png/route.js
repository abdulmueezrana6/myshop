import { NextResponse } from 'next/server';
import { isBot } from 'isbot';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const a = searchParams.get('a');
  const userAgent = request.headers.get('user-agent') || '';

  const redirectUrl = 'https://google.com';

  // Nhận diện bot bằng thư viện isbot
  const bot = isBot(userAgent);

  // Bot hoặc a=1: trả về ảnh PNG
  if (bot || a === '1') {
    try {
      const filePath = path.join(
        process.cwd(),
        'public',
        'assets',
        'sample2.png'
      );

      const imageBuffer = fs.readFileSync(filePath);

      return new NextResponse(imageBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } catch (error) {
      return new NextResponse('Image not found', {
        status: 404,
      });
    }
  }

  // Người dùng thông thường: chuyển hướng
  return NextResponse.redirect(redirectUrl, 302);
}