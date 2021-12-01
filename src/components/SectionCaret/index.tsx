import styles from "./index.module.scss";

import CaretIcon from "icons/Caret";

export default function ({ sectionName }: { sectionName: string }) {
	return (
		<div
			className={styles.sectionCaret}
			onClick={() => window.scroll({ top: window.scrollY + window.innerHeight })}
		>
			{sectionName}
			<CaretIcon />
		</div>
	);
}
