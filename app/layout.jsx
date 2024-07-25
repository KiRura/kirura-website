import Header from "@/components/header";
import theme from "@/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

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

export default function RootLayout(props) {
	return (
		<html lang="ja">
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<header>
							<Header />
						</header>
						<main>{props.children}</main>
						<footer>
							<Box sx={{ mb: 4 }} />
						</footer>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
