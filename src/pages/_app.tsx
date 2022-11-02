import { AppProps } from "next/app";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "../../public/styles.scss";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </SimpleBar>
  );
}
