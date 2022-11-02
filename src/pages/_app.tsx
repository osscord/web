import { AppProps } from "next/app";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "../../public/styles.scss";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>osscord</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=yes"
        />
        <meta name="keywords" content="Discord bot, osu!" />
        <meta name="theme-color" content="#ff66ab" />
        <meta
          name="description"
          content="an easy-to-use, feature-rich osu! bot for discord"
        />
        <meta
          name="og:image"
          content="https://osscord.vercel.app/osscord.png"
        />
        <link rel="icon" type="image/png" href="/osscord.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8375211067610855"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </SimpleBar>
    </>
  );
}
