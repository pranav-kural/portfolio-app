import "../styles/globals.css";
// import "../public/assets/vendor/uikit/css/uikit.min.css";
// import "../public/assets/vendor/uikit/css/uikit.min.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} suppressHydrationWarning />;
}

export default MyApp;
