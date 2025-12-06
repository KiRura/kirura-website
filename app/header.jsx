"use client";

import { Box, Container, Flex, Stack, useColorMode } from "@chakra-ui/react";
import { HFRightButtons, HLeftButtons } from "./HFcomponents";
import HFconfig from "./HFconfig";

export default function Header() {
	const { colorMode } = useColorMode();
	return (
		<Box
			bg={HFconfig.bg.light}
			_dark={{
				bg: HFconfig.bg.dark,
			}}
			backdropFilter={HFconfig.bg.blur}
			borderRadius="0px 0px 8px 8px"
			as="header"
			pos="sticky"
			top={0}
			zIndex="docked"
			hideBelow="md"
		>
			<Container maxW="8xl">
				<Flex w="100%" justify="space-between" align="center" py={2}>
					<Stack direction="row" spacing={2}>
						<HLeftButtons />
					</Stack>
					<Stack direction="row" spacing={2}>
						<HFRightButtons />
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
}
