import type { ResponsiveValue } from "@chakra-ui/react";

export type AriaData = {
	title: string;
	children: JSX.Element;
	titleSize?: ResponsiveValue<
		"sm" | "md" | "lg" | "xl" | "2xl" | (string & {}) | "xs" | "3xl" | "4xl"
	>;
};
