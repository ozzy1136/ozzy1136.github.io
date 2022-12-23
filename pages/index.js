import Head from "next/head";

import { BioSection, IntroSection } from "../components/Home";

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
