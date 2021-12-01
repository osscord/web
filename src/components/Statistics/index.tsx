import styles from "./index.module.scss";

export default function () {
	return (
		<div id={styles.statistics}>
			<div className={styles.statistic}>
				<div className={styles.statisticValue}>727</div>
				<div className={styles.statisticName}>Guilds</div>
			</div>

			<div className={styles.statistic}>
				<div className={styles.statisticValue}>86</div>
				<div className={styles.statisticName}>Users</div>
			</div>

			<div className={styles.statistic}>
				<div className={styles.statisticValue}>420</div>
				<div className={styles.statisticName}>Another Metric</div>
			</div>
		</div>
	);
}
