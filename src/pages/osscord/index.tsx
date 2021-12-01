import Head from "next/head";

import SectionCaret from "components/SectionCaret";
import Brand from "components/Brand";
import Features from "components/Features";
import Statistics from "components/Statistics";
import Footer from "components/Footer";

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
				<meta name="description" content="osscord's website" />
				<meta name="og:image" content="https://osscord.vercel.app/osscord.png" />
				<link rel="icon" type="image/png" href="/osscord.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Brand />
			<SectionCaret sectionName="Features" />
			<Features />
			<SectionCaret sectionName="Statistics" />
			<Statistics />

			<Footer />
		</>
	);
}
