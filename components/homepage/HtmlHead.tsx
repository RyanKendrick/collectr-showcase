import React from 'react'
import Head from 'next/head'

const HtmlHead = () => {
  return (
    <>
        <Head>
            <meta
                name="description"
                content="Collectr - #1 App for tracking the value of your collection! (over 25+ TCGs). Download today for FREE from the iOS or Android App Store. Search for 'Collectr - TCG Collector App'."
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

            <title>Collectr Showcase - #1 App for tracking the value of your collection!</title>
        </Head>
    </>
  )
}

export default HtmlHead