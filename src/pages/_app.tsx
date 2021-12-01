import { AppProps } from "next/app";
import "../../public/styles.scss";

export default function ({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
