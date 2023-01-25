import styles from "./index.module.css";

import Image from "next/image";

export default function ProjectImage({ src, alt = "" }) {
	return (
		<div className={styles.wrapper}>
			<Image
				src={src}
				alt={alt}
				sizes="95vw, (min-width: 750px) 40vw"
				quality={25}
			/>
		</div>
	);
}
