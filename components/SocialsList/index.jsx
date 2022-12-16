import styles from "./index.module.css";

import TwitterIcon from "./assets/twitterIcon.svg";
import GitHubIcon from "./assets/gitHubIcon.svg";
import FrontendMentorIcon from "./assets/frontendMentorIcon.svg";
import LinkedInIcon from "./assets/linkedinIcon.svg";

export default function SocialsList({ className = "" }) {
	return (
		<ul className={`${className} list-unmarked l-flex`}>
			<li>
				<a
					className={`${styles.socialLink} l-flex`}
					href="https://twitter.com/11_crack"
				>
					<TwitterIcon
						className={`${styles.socialIcon} l-flex-item`}
					/>
					<span>Twitter</span>
				</a>
			</li>
			<li>
				<a
					className={`${styles.socialLink} l-flex`}
					href="https://github.com/ozzy1136"
				>
					<GitHubIcon
						className={`${styles.socialIcon} l-flex-item`}
					/>
					<span>GitHub</span>
				</a>
			</li>
			<li>
				<a
					className={`${styles.socialLink} l-flex`}
					href="https://www.frontendmentor.io/profile/ozzy1136"
				>
					<FrontendMentorIcon
						className={`${styles.socialIcon} l-flex-item`}
					/>
					<span>Frontend Mentor</span>
				</a>
			</li>
			<li>
				<a
					className={`${styles.socialLink} l-flex`}
					href="https://www.linkedin.com/in/ozmar-mendoza/"
				>
					<LinkedInIcon
						className={`${styles.socialIcon} l-flex-item`}
					/>
					<span>LinkedIn</span>
				</a>
			</li>
		</ul>
	);
}
