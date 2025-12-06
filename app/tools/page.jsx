"use client";

import { Container, SimpleGrid } from "@chakra-ui/react";
import Aria from "@/components/aria";
import { Tools } from "./tools";

export default function Page() {
	return (
		<Container maxW="8xl" display="flex" flexDirection="column" minH="100vh">
			<Aria title="Tools" mt={{ base: 4, md: 0 }}>
				<SimpleGrid spacing={2} columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
					<Tools />
				</SimpleGrid>
			</Aria>
		</Container>
	);
}
