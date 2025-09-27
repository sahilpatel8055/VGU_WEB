import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/ico" href="/favicon-vgu.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online VGU – Dynamic Online Degree</title>

        {/* Load CSS files from /public - matching the HTML structure */}
      </head>
      <body>
        <div id="root">
          {children}
        </div>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js"
          async
          strategy="afterInteractive"
        />
        
        {/* Meta Pixel Code */}
        <noscript>
          <img height="1" width="1" style={{display: 'none'}} src="/www.facebook.com/tr" alt="" />
        </noscript>
        <iframe height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        
        <div id="huntr-react-container-2"></div>
      </body>
    </html>
  );
}
