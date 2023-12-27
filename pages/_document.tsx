import {Head, Html, Main, NextScript} from "next/document";

export  default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
                            rel="stylesheet"/>
            </Head>

            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}