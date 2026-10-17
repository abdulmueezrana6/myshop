export const metadata = {
  title: 'Next.js Messenger Preview App',
  description: 'Dynamic image preview and meta refresh handler',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
