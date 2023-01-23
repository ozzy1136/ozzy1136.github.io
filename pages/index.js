import Head from "next/head";

import IntroSection from "@layouts/IntroSection";
import BioSection from "@layouts/BioSection";
import ProjectsSection from "@layouts/ProjectsSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ozmar - Web Developer</title>
			</Head>
			<main>
				<IntroSection />
				<BioSection />
				<ProjectsSection />
			</main>
		</>
	);
}
