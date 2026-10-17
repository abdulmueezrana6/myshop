export default function HomePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
      <h1>🚀 Next.js Messenger Preview & Dynamic Redirect</h1>
      <p>Dự án Next.js đã sẵn sàng triển khai lên Vercel!</p>
      
      <h2>📌 Các URL thử nghiệm:</h2>
      <ul>
        <li>
          <strong>Messenger Bot (Preview):</strong>{' '}
          <a href="/picture.png?a=1" target="_blank">/picture.png?a=1</a> (Facebook Crawler sẽ nhận Open Graph meta)
        </li>
        <li>
          <strong>Người dùng click a=1 (Xem ảnh):</strong>{' '}
          <a href="/picture.png?a=1" target="_blank">/picture.png?a=1</a> (Hiển thị file ảnh PNG thật)
        </li>
        <li>
          <strong>Người dùng click a=0 (Chuyển hướng):</strong>{' '}
          <a href="/picture.png?a=0" target="_blank">/picture.png?a=0</a> (Tự động chuyển hướng bằng thẻ meta)
        </li>
      </ul>

      <h2>🛠 Hướng dẫn Deploy lên Vercel:</h2>
      <ol>
        <li>Giải nén file ZIP này.</li>
        <li>Đẩy code lên GitHub repository.</li>
        <li>Import repository vào Vercel (Vercel tự động nhận diện Next.js).</li>
        <li>Cấu hình tên miền thật của bạn vào <code>app/picture.png/route.js</code> tại hằng số <code>DOMAIN</code>.</li>
      </ol>
    </main>
  );
}
