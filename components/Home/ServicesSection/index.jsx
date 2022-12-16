import styles from "./index.module.css";

export default function ServicesSection() {
	return (
		<section
			id="services-section"
			className={`${styles.wrapper} l-grid l-grid-section-container`}
			aria-labelledby="servicesHeading"
		>
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
