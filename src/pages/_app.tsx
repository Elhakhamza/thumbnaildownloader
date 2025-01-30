import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-JPRJB65R1Y"); // Your Google Analytics Measurement ID
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-JPRJB65R1Y`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPRJB65R1Y', { page_path: window.location.pathname });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
