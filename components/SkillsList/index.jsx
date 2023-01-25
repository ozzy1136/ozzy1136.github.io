import styles from "./index.module.css";

export default function SkillsList() {
	return (
		<ul className={`${styles.servicesList} l-grid list-unmarked`}>
			<li className={`${styles.serviceCategory}`}>
				<div className={`${styles.serviceName}`}>
					Most used programming languages and tools
				</div>
				<ul className={`${styles.serviceDetailsList}`}>
					<li>HTML, CSS, and JavaScript</li>
					<li>React and Next framework</li>
					<li>Svelte</li>
					<li>PostCSS</li>
				</ul>
			</li>
			<li className={`${styles.serviceCategory}`}>
				<div className={`${styles.serviceName}`}>More hard skills</div>
				<ul className={`${styles.serviceDetailsList}`}>
					<li>
						Fluent in English and Spanish; currently learning French
						with Duolingo
					</li>
					<li>Internal tools and dashboards</li>
					<li>Web Applications</li>
				</ul>
			</li>
		</ul>
	);
}
