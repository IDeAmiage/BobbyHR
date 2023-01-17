/* eslint-disable @next/next/no-head-element */

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>BobbyHR</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="BobbyHR"/>
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
