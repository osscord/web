import Brand from "components/Brand";
import Footer from "components/Footer";
import SectionCaret from "components/SectionCaret";
import Head from "next/head";
import Another from "components/InviteSection";
import * as Features from "../components/Features";
import styles from "./index.module.scss";
import MoreFeatures from "components/MoreFeatures";

export default function Index() {
  return (
    <>
      <div className="h-screen" id={styles.background} />

      <Brand />
      <SectionCaret name="Features" />
      <Features.Embeds />
      <Features.SlashCommands />
      <Features.Replays />
      <MoreFeatures />
      <SectionCaret name="invite" />
      <Another />
    </>
  );
}
