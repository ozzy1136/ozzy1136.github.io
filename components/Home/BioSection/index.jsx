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
					<span className={`${styles.text_CPU}`}>web</span>, for{" "}
					<span className={`${styles.text_CPU}`}>all</span>
				</h2>
			</div>
			<div className={`${styles.bioWrapper}`}>
				<p>
					Welcome to my nook on the web! Although I am based in
					Houston, TX, I am very much capable and willing to work
					remote.
				</p>
				<br />
				<p>
					My goal is to create spaces and envrironments that anybody
					can use. This can be achieved with quailty accessibility,
					common sense on UX, and a clear message to your visitors.
				</p>
				<br />
				<p>
					<span className={`${styles.text_TLDR}`}>tl;dr:</span> I am a
					partner and collaborator for creatives and companies
					aspiring to create engaging web experiences!
				</p>
			</div>
			<h2 id="servicesHeading" className={`${styles.sectionHeading}`}>
				Services
			</h2>
			<h3 className={`${styles.sectionSubHeading}`}>
				Areas of work that I can help you with
			</h3>
			<p className={`${styles.servicesSummary}`}>
				What are you doing then? We often hear. Do you also do websites?
				Yes, also websites. Videos? Well, the story and concept, for the
				production we hook up a partner. We take a holistic approach, so
				we can mean a lot. Can&apos;t we do it ourselves? Then why
				don&apos;t we ask someone else? We have an eye for it. According
				to our own standard with quality first. We keep control
				ourselves, which is nice.
			</p>
			<ul className={`${styles.servicesList} l-grid list-unmarked`}>
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
					<div className={`${styles.serviceName}`}>
						<abbr title="Content Management Systems">CMS</abbr> and
						Webisite Builders
					</div>
					<ol className={`${styles.serviceDetailsList}`}>
						<li>Wordpress</li>
						<li>Shopify</li>
						<li>Wix</li>
						<li>Squarespace</li>
						<li>Joomla</li>
						<li>Drupal</li>
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
