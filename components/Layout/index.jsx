import SiteFooter from "../SiteFooter";

export default function Layout({ children }) {
	return (
		<>
			{children}
			<SiteFooter />
		</>
	);
}
