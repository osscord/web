import OsscordIcon from "icons/Osscord";

import styles from "./index.module.scss";

export default function () {
	return (
		<div id={styles.brand}>
			<div id={styles.brandContainer}>
				<OsscordIcon width="40%" />

				<div id={styles.nameContainer}>
					<div id={styles.name}>osscord</div>
					<div id={styles.description}>
						An easy-to-use, feature-rich{" "}
						<a href="https://osu.ppy.sh" target="_blank">
							osu!
						</a>{" "}
						bot for Discord
					</div>
					<a
						className={styles.button}
						href="https://discord.com/oauth2/authorize?client_id=868697725464633414&scope=bot+applications.commands"
						target="_blank"
					>
						Add to server
					</a>
					<a
						className={styles.button}
						id={styles.supportServerButton}
						href="https://discord.gg/6Krt8jfEuX"
						target="_blank"
					>
						Support Server
					</a>
				</div>
			</div>
		</div>
	);
}
