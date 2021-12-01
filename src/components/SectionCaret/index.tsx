import styles from "./index.module.scss";

import CaretIcon from "icons/Caret";

export default function ({ name }: { name: string }) {
	return (
		<div
			className={styles.sectionCaret}
			onClick={() => window.scroll({ top: window.scrollY + window.innerHeight })}
		>
			{name}
			<CaretIcon />
		</div>
	);
}
