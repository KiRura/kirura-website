import Footer from "./footer";
import Header from "./header";
import { Providers } from "./providers";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
	title: "きるら",
	description: "しがない個人サイト",
	authors: {
		name: "KiRura",
		url: "https://twitter.com/7KiRura",
	},
	icons: "https://kirura.vercel.app/kirura_rounded.png",
	twitter: {
		card: "summary",
		images: "https://kirura.vercel.app/kirura.png",
	},
	openGraph: {
		images: "https://kirura.vercel.app/kirura.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="ja">
			<body>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
