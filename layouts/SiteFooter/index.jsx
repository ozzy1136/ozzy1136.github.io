import styles from "./index.module.css";

import SocialsList from "@components/SocialsList";

export default function SiteFooter() {
	return (
		<footer
			className={`${styles.wrapper} l-grid l-grid-section-container`}
			id="contact-section"
			aria-labelledby="contactHeading"
		>
			<div className={`${styles.contactInfoWrapper} l-grid`}>
				<div className={`${styles.contactInfoSocials} l-flex`}>
					<div
						className={`${styles.contactInfoSocialsHeadingWrapper}`}
					>
						<h2
							id="contactHeading"
							className={styles.contactInfoSocialsHeading}
						>
							Sites where you can follow or{" "}
							<abbr title="Direct message">DM</abbr> me &#128071;
						</h2>
					</div>
					<div className={`${styles.contactInfoSocialsListWrapper}`}>
						<SocialsList
							className={`${styles.contactInfoSocialsList}`}
						/>
					</div>
				</div>
			</div>
			<div className={`${styles.authorDetailsWrapper}`}>
				<p>
					<small className={`${styles.authorDetails}`}>
						Made with &#129505; and{" "}
						<a
							className={`${styles.authorDetailsLink}`}
							href="https://nextjs.org/"
						>
							Next.js
						</a>{" "}
						in Houston, TX and deployed with{" "}
						<a
							className={`${styles.authorDetailsLink}`}
							href="https://vercel.com/"
						>
							Vercel
						</a>
					</small>
				</p>
			</div>
		</footer>
	);
}
