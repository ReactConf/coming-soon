import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class ReactConf extends Document {

    static async getInitialProps(ctx) {
        return Document.getInitialProps(ctx);
    }

    render() {
        return (
            <html lang="fa">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="همایش بزرگ ReactConf | اولین همایش تخصصی ری اکت در ایران"/>
                <meta name="robots" content="noodp"/>
                <link rel="canonical" href="https://reactconf.ir/" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="همایش بزرگ ReactConf | اولین همایش تخصصی ری اکت در ایران" />
                <meta property="og:description" content="همایش بزرگ ReactConf | اولین همایش تخصصی ری اکت در ایران" />
                <meta property="og:url" content="https://reactconf.ir/" />
                <meta property="og:site_name" content="همایش بزرگ ReactConf" />
                <meta property="og:image" content="https://reactconf.ir/static/apple-icon-57x57.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="همایش بزرگ ReactConf | اولین همایش تخصصی ری اکت در ایران" />
                <meta name="twitter:title" content="همایش ReactJS در تهران" />
                <meta name="twitter:site" content="@reactconf_ir" />
                <meta name="twitter:image" content="https://reactconf.ir/static/apple-icon-57x57.png" />
                <meta name="twitter:creator" content="@reactconf_ir" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
                <link rel="manifest" href="/static/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
                <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','UA-117830788-1');`}} />
            </Head>
            <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-117830788-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }

}
