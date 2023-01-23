import styles from "./index.module.css";

export default function FeaturedProject({
	projectName,
	projectLink,
	projectSummary,
	children,
}) {
	return (
		<div className={`${styles.projectContainer} l-grid`}>
			<h3 className={styles.projectHeading}>
				<a href={projectLink}>{projectName}</a>
			</h3>
			{!!projectSummary ? (
				<p className={styles.projectSummary}>{projectSummary}</p>
			) : null}
			<div className={`${styles.projectImagesContainer} l-grid`}>
				{children}
			</div>
		</div>
	);
}
