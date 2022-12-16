import Head from "next/head";

import { BioSection, IntroSection, ServicesSection } from "../components/Home";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ozmar - Web Developer</title>
			</Head>
			<IntroSection />
			<main>
				<BioSection />
				<ServicesSection />
			</main>
		</>
	);
}
