import Head from "next/head";
import styles from "./index.module.scss";
import Brand from "components/Brand";
import Features from "components/Features";
import Footer from "components/Footer";
import SectionCaret from "components/SectionCaret";
import Statistics from "components/Statistics";

export default function () {
	return (
		<>
			<Head>
				<title>osscord</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=yes" />
				<meta name="keywords" content="Discord bot, osu!" />
				<meta name="theme-color" content="#ff66ab" />
				<meta name="description" content="an easy-to-use, feature-rich osu! bot for discord" />
				<meta name="og:image" content="https://osscord.vercel.app/osscord.png" />
				<link rel="icon" type="image/png" href="/osscord.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap" rel="stylesheet" />
			</Head>

			<div id={styles.background} />

			<Brand />
			<SectionCaret name="Features" />
			<Features />
			<SectionCaret name="Statistics" />
			<Statistics />

			<Footer />
		</>
	);
}
