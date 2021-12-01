import SlashIcon from "icons/Slash";
import ConfigIcon from "icons/Config";
import ScanIcon from "icons/Scan";
import OrdrIcon from "icons/Ordr";

import styles from "./index.module.scss";

export default function () {
	return (
		<div id={styles.features}>
			<div id={styles.featuresContainer}>
				<div className={styles.feature}>
					<SlashIcon />
					<div className={styles.featureName}>Slash Commands</div>
					<div className={styles.featureDescription}>
						Useless slash commands that don't work 90% of the time.
					</div>
				</div>

				<div className={styles.feature}>
					<ConfigIcon />
					<div className={styles.featureName}>Highly Configurable</div>
					<div className={styles.featureDescription}>
						This bot is configurable like any other average bot. Boo-hoo.
					</div>
				</div>

				<div className={styles.feature}>
					<ScanIcon />
					<div className={styles.featureName}>Advanced Scanner</div>
					<div className={styles.featureDescription}>
						It can scan shit. Holy fuck, I'm sold.
					</div>
				</div>

				<div className={styles.feature}>
					<OrdrIcon />
					<div className={styles.featureName}>Replay Renderer</div>
					<div className={styles.featureDescription}>It can render replays... okay?</div>
				</div>
			</div>
		</div>
	);
}
