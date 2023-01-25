import styles from "./index.module.css";

import SkillsList from "@components/SkillsList";

export default function HomeBioSection() {
	return (
		<section
			id="bio-section"
			className={`${styles.wrapper} l-grid l-grid-section-container`}
			aria-labelledby="bioHeading"
		>
			<div id="bioHeading" className={`${styles.sectionHeadingWrapper}`}>
				<h2 className={`${styles.sectionHeading}`}>
					Build&shy;ing on the{" "}
					<span className={`${styles.textEmphasized}`}>web</span>, for{" "}
					<span className={`${styles.textEmphasized}`}>all</span>
				</h2>
			</div>
			<div className={`${styles.bioWrapper}`}>
				<p>
					Hi there &#128075;, and welcome to my nook on the web! I am
					a front-end web developer with a passion for coding and
					using that skill to create cool and useful things.
				</p>
				<br />
				<p>
					I started my coding journey by tinkering with{" "}
					<a href="https://www.raspberrypi.com">Raspberry Pi</a>, but
					was drawn to the Web&apos;s innate openess and the fact that
					you can create websites that are available to anyone in the
					world with an Internet connection. And now, with the web
					more powerful and capable than ever, it takes a bit more
					effort to provide a great user experience for every user; a
					challenge I&apos;m excited to tackle on every project I work
					on!
				</p>
			</div>
			<SkillsList />
		</section>
	);
}
