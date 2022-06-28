import type { AppProps } from "next/app";
import "../styles/Header.scss";
import "../styles/globals.scss";
import "../styles/UserProfile.scss";
import "../styles/Collection.scss";
import "../styles/ProductCard.scss";
import "../styles/CollectionSkeleton.scss";
import "../styles/home/Header.scss";
import "../styles/home/Footer.scss";
import "../styles/home/HeroBanner.scss";
import "../styles/home/Showcases.scss";
import "../styles/home/Categories.scss";
import "../styles/showcases-page/Showcases-Page.scss";
import "../styles/ProfileFooter.scss"
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="gtag-init-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_UA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// https://www.googletagmanager.com/gtag/js?id=G-TN54HPHYN1
