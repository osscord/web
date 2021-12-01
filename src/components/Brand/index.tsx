import OsscordIcon from "icons/Osscord";

import styles from "./index.module.scss";

export default function () {
	return (
		<div id={styles.brand}>
			<div id={styles.brandContainer}>
				<OsscordIcon id={styles.logo} />

				<div id={styles.nameContainer}>
					<div id={styles.name}>osscord</div>
					<div id={styles.description}>
						This is probably the only osu! bot that supports slash commands (not).
					</div>
					<a
						id={styles.inviteButton}
						href="https://discord.com/oauth2/authorize?client_id=868697725464633414&scope=bot+applications.commands"
						target="_blank"
					>
						Add to server
					</a>
				</div>
			</div>
		</div>
	);
}
