import React from "react";
import Head from "next/head";

const HtmlHead = () => {
  return (
    <>
      <Head>
        <meta
          content="Get ready for the next-generation of collectible portfolio management. Magic: The Gathering Cards, Yu-Gi-Oh! Cards, Pokémon Cards, Dragon Ball Super, Digimon TCG, Flesh and Blood. Booster Boxes, Booster Packs, Graded Cards, And Many More."
          name="description"
        />
        <meta
          content="The Most Advanced Portfolio Tracking App for Collectible Trading Card Games"
          property="og:title"
        />
        <meta
          content="Get ready for the next-generation of collectible portfolio management. Magic: The Gathering Cards, Yu-Gi-Oh! Cards, Pokémon Cards, Dragon Ball Super, Digimon TCG, Flesh and Blood. Booster Boxes, Booster Packs, Graded Cards, And Many More."
          property="og:description"
        />
        <meta
          content="The Most Advanced Portfolio Tracking App for Collectible Trading Card Games"
          property="twitter:title"
        />
        <meta
          content="Get ready for the next-generation of collectible portfolio management. Magic: The Gathering Cards, Yu-Gi-Oh! Cards, Pokémon Cards, Dragon Ball Super, Digimon TCG, Flesh and Blood. Booster Boxes, Booster Packs, Graded Cards, And Many More."
          property="twitter:description"
        />

        <meta
          property="og:image"
          content="https://www.getcollectr.com/marketing-website/images/collectr_logo-removebg---copy-p-500.png"
        />
        {/* <link rel="icon" type="image/pg" href="icons/favicon.png" /> */}

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="collectr" />
        <link rel="apple-touch-icon" href="icons/favicon.png" />
        <meta name="theme-color" content="#f7f7f8" />

        <title>
          The Most Advanced Portfolio Tracking App for Collectible Trading Card
          Games
        </title>
      </Head>
    </>
  );
};

export default HtmlHead;
