import Head from "next/head";

import IntroSection from "@components/Home/IntroSection";
import BioSection from "@components/Home/BioSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ozmar - Web Developer</title>
			</Head>
			<main>
				<IntroSection />
				<BioSection />
			</main>
		</>
	);
}
