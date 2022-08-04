import Brand from "components/Brand";
import Footer from "components/Footer";
import SectionCaret from "components/SectionCaret";
import Head from "next/head";
import Another from "components/InviteSection";
import * as Features from "../components/Features";
import styles from "./index.module.scss";
import MoreFeatures from "components/MoreFeatures";

export default function () {
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

      <div id={styles.background} />

      <Brand />
      <SectionCaret name="Features" />
      <Features.Embeds />
      <Features.SlashCommands />
      <Features.Replays />
      <MoreFeatures />
      <SectionCaret name="invite" />
      <Another />

      <Footer />
    </>
  );
}
