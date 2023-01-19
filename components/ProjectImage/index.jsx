import Image from "next/image";

export default function ProjectImage({ src, alt = "" }) {
	return <Image src={src} alt={alt} sizes="90vw" quality={1} />;
}
