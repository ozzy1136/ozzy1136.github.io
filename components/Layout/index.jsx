import SiteFooter from "@components/SiteFooter";

export default function Layout({ children }) {
	return (
		<>
			{children}
			<SiteFooter />
		</>
	);
}
