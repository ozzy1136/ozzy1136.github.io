import SiteFooter from "@layouts/SiteFooter";

export default function Layout({ children }) {
	return (
		<>
			{children}
			<SiteFooter />
		</>
	);
}
