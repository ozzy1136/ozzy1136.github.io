import styles from "./index.module.css";

export default function FeaturedProject({
	projectName,
	projectLink,
	ProjectSummary,
	children,
}) {
	return (
		<div className={`${styles.projectContainer} l-grid`}>
			<h3 className={styles.projectHeading}>
				<a href={projectLink}>{projectName}</a>
			</h3>
			{!!ProjectSummary ? <ProjectSummary /> : null}
			<div className={`${styles.projectImagesContainer} l-grid`}>
				{children}
			</div>
		</div>
	);
}
