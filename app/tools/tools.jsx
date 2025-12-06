import { Link as NextLink } from "@chakra-ui/next-js";
import {
	Avatar,
	Button,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
} from "@chakra-ui/react";
import { MdSchedule } from "react-icons/md";

/**
 * @type {import("@/types/tools").Tools[]}
 */
const tools = [
	{
		name: "時計",
		description: "時計",
		icon: MdSchedule,
		bg: "cyan.100",
		darkBg: "cyan.900",
		href: "/clock",
	},
];

export function Tools() {
	return (
		<>
			{tools.map((tool) => {
				return (
					<Button
						key={tool.name}
						as={NextLink}
						href={`/tools${tool.href}`}
						h="fit-content"
						py={4}
						justifyContent="start"
						colorScheme="gray"
					>
						<Stack spacing={2}>
							<Flex align="center">
								<Avatar
									icon={
										<Icon
											as={tool.icon}
											boxSize={8}
											color="black"
											_dark={{ color: "white" }}
										/>
									}
									bg={tool.bg}
									mr={2}
									_dark={{
										bg: tool.darkBg,
									}}
								/>
								<Heading>{tool.name}</Heading>
							</Flex>
							<Text>{tool.description}</Text>
						</Stack>
					</Button>
				);
			})}
		</>
	);
}
