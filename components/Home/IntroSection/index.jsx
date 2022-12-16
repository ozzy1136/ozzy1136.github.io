import styles from "./index.module.css";

import Image from "next/image";
import TextureBackground from "./assets/texture.svg";
import IntroPhoto from "./assets/ozmar-estadio-olimpico-universitario.jpg";
import SocialsList from "../../SocialsList";

export default function IntroSection() {
	return (
		<div className={`${styles.wrapper} l-grid l-grid-section-container`}>
			<div className={styles.patternWrapper}>
				<TextureBackground className={styles.patternEl} />
			</div>
			<div className={`${styles.headerWrapper}`}>
				<h1 className={`${styles.headerHeading}`}>Ozmar Mendoza</h1>
				<div className={`${styles.headerBio}`}>
					<p>
						Front-end web developer based in Houston, Texas
						&#128640; &#129304;
					</p>
					<p>Curr&shy;ently a free agent</p>
				</div>
				<aside className={`${styles.headerSocialsListWrapper}`}>
					<SocialsList className={`${styles.headerSocialsList}`} />
				</aside>
			</div>
			<figure className={`${styles.photoContentWrapper} l-flex`}>
				<div className={`${styles.photoElWrapper}`}>
					{/* TODO fix <Image/> sizes property to serve correct image size at specific viewport sizes */}
					<Image
						src={IntroPhoto}
						layout="responsive"
						height={3024}
						width={4032}
						sizes="85vw, (min-width: 520px) and (max-width: 749px) 450px, (min-width: 750px) and (max-width: 1189px) 35vw, and (min-width: 1190px) 450px"
						quality={50}
						priority={true}
						alt=""
					/>
				</div>
				<figcaption className={`${styles.photoCaption}`}>
					Myself standing in front of Estadio Olimpico Universitario
					in Mexico City, home of my favorite mexican-based soccer
					team, Pumas UNAM.
				</figcaption>
			</figure>
		</div>
	);
}
