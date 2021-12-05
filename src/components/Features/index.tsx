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
						Fully utilizes slash commands, so that running commands is fast and easy.
					</div>
				</div>

				<div className={styles.feature}>
					<ConfigIcon />
					<div className={styles.featureName}>Highly Configurable</div>
					<div className={styles.featureDescription}>
						Configure each command to your own liking, making it even easier to run
						them.
					</div>
				</div>

				<div className={styles.feature}>
					<ScanIcon />
					<div className={styles.featureName}>Advanced Scanner</div>
					<div className={styles.featureDescription}>
						Scans channels for beatmap & profile links and osu! screenshots, and
						provides information accordingly.
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
