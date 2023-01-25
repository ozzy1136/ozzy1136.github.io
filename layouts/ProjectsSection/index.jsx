import styles from "./index.module.css";

import FeaturedProject from "@components/FeaturedProject";
import ProjectImage from "@components/ProjectImage";
import spaceWebsiteHome from "@assets/images/space-website-home.png";
import spaceWebsiteDestinations from "@assets/images/space-website-destinations.png";
import countriesListHome from "@assets/images/countries-viewer-home.png";
import countriesListDetails from "@assets/images/countries-viewer-details.png";
import rpsStart from "@assets/images/rps-game-start.png";
import rpsWin from "@assets/images/rps-game-win.png";

export default function ProjectsSection() {
	return (
		<div className={`${styles.container} l-grid l-grid-section-container`}>
			<h2 className={styles.sectionHeading}>Featured Projects</h2>
			<div className={`${styles.projectsContainer} l-grid`}>
				<FeaturedProject
					projectName="Space Tourism Website"
					projectLink="https://ozzy1136.github.io/space-tourism-website"
					ProjectSummary={() => (
						<p className={styles.projectSummary}>
							A multi-page website with a responsive design, some
							neat interactions on hover, and a custom, accessible
							tabs component. This project was built with React
							and the Next framework.
						</p>
					)}
				>
					<ProjectImage
						src={spaceWebsiteHome}
						alt="Home page of a space tourism website"
					/>
					<ProjectImage src={spaceWebsiteDestinations} />
				</FeaturedProject>
				<FeaturedProject
					projectName="Countries List"
					projectLink="https://ozzy1136.github.io/rest-countries-api-with-color-theme-switcher/"
					ProjectSummary={() => (
						<p className={styles.projectSummary}>
							A single page app that fetches data from the{" "}
							<a href="https://restcountries.com/">
								REST Countries API
							</a>{" "}
							to display a list of countries. The app implements
							list virtualization to manage page resources and
							improve performance, as well as search and filtering
							by region.
						</p>
					)}
				>
					<ProjectImage src={countriesListHome} />
					<ProjectImage
						src={countriesListDetails}
						alt="Screenshot showing the details page for a country"
					/>
				</FeaturedProject>
				<FeaturedProject
					projectName="Rock, Paper, Scissors Game"
					projectLink="https://ozzy1136.github.io/rock-paper-scissors/"
					ProjectSummary={() => (
						<p className={styles.projectSummary}>
							The classic tiebreaker game recreated on the web.
							The user is able to choose a token and watch as the
							result is revealed using CSS animations.
						</p>
					)}
				>
					<ProjectImage
						src={rpsStart}
						alt="Screenshot of the start page for a paper, rock, scissors game"
					/>
					<ProjectImage src={rpsWin} />
				</FeaturedProject>
			</div>
		</div>
	);
}
