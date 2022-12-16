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
					Build&shy;ing for the{" "}
					<span className={`${styles.text_CPU}`}>
						aver&shy;age CPU
					</span>{" "}
				</h2>
				<span className={`${styles.sectionHeadingAddendum}`}>
					(<abbr title="For Example">e.g.</abbr> No para&shy;llax
					effect or full page hero videos &#129335;)
				</span>
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
		</section>
	);
}
