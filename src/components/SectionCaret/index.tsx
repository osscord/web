import styles from "./index.module.scss";

import CaretIcon from "icons/Caret";

export default function ({ name }: { name: string }) {
	return (
		<div
			className={styles.sectionCaret}
			onClick={() => {
				document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
				window.scroll({ top: window.scrollY + window.innerHeight });
				document.getElementsByTagName("html")[0].style.scrollBehavior = "";
			}}
		>
			{name}
			<CaretIcon />
		</div>
	);
}
