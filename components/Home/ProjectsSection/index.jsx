import styles from "./index.module.css";

import ProjectImage from "@components/ProjectImage";
import spaceWebsiteHome from "./assets/space-website-home.png";
import spaceWebsiteDestinations from "./assets/space-website-destinations.png";
import spaceWebsiteCrew from "./assets/space-website-crew.png";
import countriesViewerHome from "./assets/countries-viewer-home.png";
import countriesViewerDetails from "./assets/countries-viewer-details.png";
import prsStart from "./assets/prs-game-start.png";
import prsWin from "./assets/prs-game-win.png";
import prsLose from "./assets/prs-game-lose.png";

export default function ProjectsSection() {
	return (
		<div className={`${styles.container} l-grid l-grid-section-container`}>
			<h2 className={styles.sectionHeading}>Featured Projects</h2>
			<div className={`${styles.projectsContainer} l-grid`}>
				<div className={styles.projectContainer}>
					<h3 className={styles.projectHeading}>
						Space Tourist Multipage Website
					</h3>
					<ProjectImage
						src={spaceWebsiteHome}
						alt="Home page of a space tourism website"
					/>
					<ProjectImage src={spaceWebsiteDestinations} />
					<ProjectImage src={spaceWebsiteCrew} />
				</div>
				<div
					className={`${styles.countriesViewerContainer} ${styles.projectContainer}`}
				>
					<h3 className={styles.projectHeading}>Countries Viewer</h3>
					<ProjectImage src={countriesViewerHome} />
					<ProjectImage
						src={countriesViewerDetails}
						alt="Screenshot showing the details page for a country"
					/>
				</div>
				<div className={`${styles.projectContainer}`}>
					<h3 className={styles.projectHeading}>
						Paper, Rock, Scissors Game
					</h3>
					<ProjectImage
						src={prsStart}
						alt="Screenshot of the start page for a paper, rock, scissors game"
					/>
					<ProjectImage src={prsWin} />
					<ProjectImage src={prsLose} />
				</div>
			</div>
		</div>
	);
}
