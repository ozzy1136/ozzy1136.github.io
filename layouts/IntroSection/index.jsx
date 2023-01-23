import styles from "./index.module.css";

import Image from "next/image";

import introPhoto from "@assets/images/ozmar-estadio-olimpico-universitario.jpg";
import TextureBackground from "@assets/images/texture.svg";
import SocialsList from "@components/SocialsList";

export default function IntroSection() {
	return (
		<div className={`${styles.wrapper} l-grid l-grid-section-container`}>
			<div className={`${styles.headerWrapper}`}>
				<h1 className={`${styles.headerHeading}`}>Ozmar Mendoza</h1>
				<div className={`${styles.headerBio}`}>
					<p>
						Front-end web developer based in Houston, Texas
						&#128640; &#129304;
					</p>
					<p>Passionate sports fan &#127967; &#9917;</p>
					<p>Currently a free agent and looking for work</p>
				</div>
				<aside className={`${styles.headerSocialsListWrapper}`}>
					<SocialsList className={`${styles.headerSocialsList}`} />
				</aside>
			</div>
			<figure className={`${styles.photoContentWrapper} l-flex`}>
				<div className={`${styles.photoElWrapper}`}>
					<Image
						src={introPhoto}
						sizes="90vw, (min-width: 750px) and (max-width: 1150px) 50vw, (min-width: 1190px) 30vw"
						quality={50}
						priority={true}
						alt=""
					/>
				</div>
				<figcaption className={`${styles.photoCaption}`}>
					Myself standing in front of{" "}
					<a href="https://en.wikipedia.org/wiki/Estadio_Ol%C3%ADmpico_Universitario">
						Estadio Olimpico Universitario
					</a>{" "}
					in Mexico City, home of my favorite mexican soccer team,{" "}
					<a href="https://en.wikipedia.org/wiki/Club_Universidad_Nacional">
						Pumas UNAM
					</a>
					.
				</figcaption>
			</figure>
			<div className={styles.patternWrapper}>
				<TextureBackground className={styles.patternEl} />
			</div>
		</div>
	);
}
