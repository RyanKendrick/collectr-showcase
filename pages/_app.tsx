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
import ReactGA from "react-ga";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  ReactGA.initialize(`${"G-TN54HPHYN1"}`);
  useEffect(() => {
    // Client-side-only code
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return <Component {...pageProps} />;
}

export default MyApp;

// https://www.googletagmanager.com/gtag/js?id=G-TN54HPHYN1
