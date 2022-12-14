import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="/assets/vendor/uikit/js/uikit.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/vendor/uikit/js/uikit-icons.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
