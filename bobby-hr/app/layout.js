/* eslint-disable @next/next/no-head-element */
import Providers from './providers'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>BobbyHR</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="BobbyHR"/>
      </head>
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}