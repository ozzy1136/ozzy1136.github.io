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
					projectSummary="A multi-page website with plenty of images and different layouts. This project was built with React and the Next framework."
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
					projectSummary="A single page app that fetches data from the REST Countries API to display a list of countries. The app implements list virtualization to manage page resources and improve performance, as well as search and filtering by region."
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
					projectSummary="The classic tiebreaker game recreated on the web. The user is able to choose a token and watch as the result is revealed using CSS animations."
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
