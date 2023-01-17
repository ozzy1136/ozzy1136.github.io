import styles from "./index.module.css";

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
					using that skill to create cool and useful things. I started
					my coding journey by tinkering with{" "}
					<a href="https://www.raspberrypi.com">Raspberry Pi</a>, but
					was drawn to the Web's innate openess and the fact that you
					can create websites that are available to anyone in the
					world with an Internet connection. And now, with the web
					more powerful than ever, it takes a bit more effort to
					provide a great user experience for every user; a challenge
					I'm excited to tackle on every project I work on!
				</p>
			</div>
			<ul className={`${styles.servicesList} l-grid list-unmarked`}>
				<li className={`${styles.serviceCategory}`}>
					<div className={`${styles.serviceName}`}>
						Programming languages and tools
					</div>
					<ol className={`${styles.serviceDetailsList}`}>
						<li>HTML, CSS, and JavaScript</li>
						<li>React.JS and Next.JS</li>
						<li>Svelte</li>
						<li>Jest</li>
						<li>PostCSS</li>
					</ol>
				</li>
				<li className={`${styles.serviceCategory}`}>
					<div className={`${styles.serviceName}`}>
						Bespoke Website Development
					</div>
					<ol className={`${styles.serviceDetailsList}`}>
						<li>E-commerce</li>
						<li>Internal tools and dashboards</li>
						<li>Web Applications</li>
					</ol>
				</li>
				<li className={`${styles.serviceCategory}`}>
					<div className={`${styles.serviceName}`}>Consulting</div>
					<ol className={`${styles.serviceDetailsList}`}>
						<li>Accessibility</li>
						<li>
							<abbr title="User Experience">UX</abbr>
						</li>
						<li>Performance</li>
						<li>Technology Strategy Analysis</li>
					</ol>
				</li>
			</ul>
		</section>
	);
}
