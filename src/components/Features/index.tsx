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
						Fully utilizes slash commands, so that running commands is easy and fast.
					</div>
				</div>

				<div className={styles.feature}>
					<ConfigIcon />
					<div className={styles.featureName}>Highly Configurable</div>
					<div className={styles.featureDescription}>
						Highly configurable, allowing users to customize each command to their
						liking.
					</div>
				</div>

				<div className={styles.feature}>
					<ScanIcon />
					<div className={styles.featureName}>Advanced Scanner</div>
					<div className={styles.featureDescription}>
						Can scan channels for profile and beatmap links, providing info accordingly.
						It can also scan osu! screenshots, providing information on detected
						beatmaps.
					</div>
				</div>

				<div className={styles.feature}>
					<OrdrIcon />
					<div className={styles.featureName}>Replay Renderer</div>
					<div className={styles.featureDescription}>
						Simply provide a replay file and options, and osscord will render the replay
						utilizing{" "}
						<a href="https://ordr.issou.best" target="_blank">
							o!rdr
						</a>
						.
					</div>
				</div>
			</div>
		</div>
	);
}
