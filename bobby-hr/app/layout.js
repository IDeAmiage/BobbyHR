/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
