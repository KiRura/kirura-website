import { Avatar, Box, Divider, Heading, Stack } from "@chakra-ui/react";

export default function Aria({
	title,
	titleSize,
	titleAlign,
	titleTextAlign,
	titleMb,
	iconImage,
	children,
	...rest
}) {
	return (
		<Box {...rest}>
			<Stack
				justify={titleAlign}
				align="center"
				mb={titleMb === undefined ? 2 : titleMb}
				direction="row"
				spacing={2}
			>
				{iconImage ? <Avatar src={iconImage} /> : <></>}
				<Heading
					as="h2"
					fontWeight="bold"
					size={titleSize || "xl"}
					textAlign={titleTextAlign}
				>
					{title}
				</Heading>
			</Stack>
			<Divider mb={2} />
			{children}
		</Box>
	);
}
