"use client";

import {
	ChakraProvider,
	ColorModeScript,
	defineStyleConfig,
	extendTheme,
} from "@chakra-ui/react";

export const theme = extendTheme({
	config: {
		initialColorMode: "system",
		useSystemColorMode: true,
	},
	fonts: {
		heading: "sans-serif",
		body: "sans-serif",
	},
	components: {
		// Link: defineStyleConfig({
		// 	variants: {
		// 		orange: defineStyle({
		// 			color: "orange.300",
		// 			_dark: {
		// 				color: "orange.500",
		// 			},
		// 		}),
		// 	},
		// 	defaultProps: {
		// 		variant: "orange",
		// 	},
		// }),
		Button: defineStyleConfig({
			defaultProps: {
				colorScheme: "orange",
			},
		}),
		Icon: defineStyleConfig({
			baseStyle: {
				boxSize: 6,
			},
		}),
	},
});

export function Providers({ children }) {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			{children}
		</ChakraProvider>
	);
}
