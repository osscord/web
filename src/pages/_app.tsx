import { AppProps } from "next/app";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "../../public/styles.scss";

export default function ({ Component, pageProps }: AppProps) {
	return (
		<SimpleBar style={{ maxHeight: "100vh" }}>
			<Component {...pageProps} />;
		</SimpleBar>
	);
}
