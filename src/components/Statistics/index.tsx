import { useEffect, useState } from "react";
import Statistics from "types/Statistics";
import styles from "./index.module.scss";

export default function () {
	const [{ servers, users, commands }, setStatistics] = useState({
		servers: 0,
		users: 0,
		commands: 0
	} as Statistics);

	useEffect(
		() =>
			void fetch("https://metrics.osscord.xyz")
				.then(_res => _res.json())
				.then(setStatistics)
				.catch(() => null),
		[]
	);

	return (
		<div id={styles.statistics}>
			<div className={styles.statistic}>
				<div className={styles.statisticValue}>{servers}</div>
				<div className={styles.statisticName}>Servers</div>
			</div>

			<div className={styles.statistic}>
				<div className={styles.statisticValue}>{users}</div>
				<div className={styles.statisticName}>Users</div>
			</div>

			<div className={styles.statistic}>
				<div className={styles.statisticValue}>{commands}</div>
				<div className={styles.statisticName}>Commands</div>
			</div>
		</div>
	);
}
